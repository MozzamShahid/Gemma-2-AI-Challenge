import os
import sys
from pathlib import Path
import torch
import kagglehub
import contextlib

# Add Gemma PyTorch to the system path
gemma_path = Path("/path/to/gemma_pytorch")
sys.path.append(str(gemma_path))

from gemma.config import get_config_for_2b
from gemma.model import GemmaForCausalLM
from gemma.tokenizer import Tokenizer

class GemmaService:
    def __init__(self):
        self.VARIANT = "2b-it"
        self.MACHINE_TYPE = "cpu"  # Change to "cuda" if using GPU
        self.weights_dir = kagglehub.model_download('gemma/pytorch/1.1-2b-it/1/')

        self.model_config = get_config_for_2b()
        self.model_config.tokenizer = os.path.join(self.weights_dir, "tokenizer.model")

        self.device = torch.device(self.MACHINE_TYPE)
        with self._set_default_tensor_type(self.model_config.get_dtype()):
            self.model = GemmaForCausalLM(self.model_config)
            ckpt_path = os.path.join(self.weights_dir, f'gemma-{self.VARIANT}.ckpt')
            self.model.load_weights(ckpt_path)
            self.model = self.model.to(self.device).eval()

        self.tokenizer = Tokenizer(os.path.join(self.weights_dir, "tokenizer.model"))

    @contextlib.contextmanager
    def _set_default_tensor_type(self, dtype: torch.dtype):
        torch.set_default_dtype(dtype)
        yield
        torch.set_default_dtype(torch.float)

    def generate_response(self, prompt):
        USER_CHAT_TEMPLATE = "<start_of_turn>user\n{prompt}<end_of_turn>\n"
        MODEL_CHAT_TEMPLATE = "<start_of_turn>model\n{prompt}<end_of_turn>\n"

        full_prompt = USER_CHAT_TEMPLATE.format(prompt=prompt) + "<start_of_turn>model\n"

        input_ids = self.tokenizer.encode(full_prompt)
        input_ids = torch.tensor(input_ids).unsqueeze(0).to(self.device)

        with torch.no_grad():
            output_ids = self.model.generate(
                input_ids,
                max_length=100,
                num_return_sequences=1,
                pad_token_id=self.tokenizer.pad_id,
            )

        response = self.tokenizer.decode(output_ids[0].tolist())
        return response.split("<start_of_turn>model\n")[-1].strip()

gemma_service = GemmaService()

def init_gemma_service():
    global gemma_service
    gemma_service = GemmaService()
