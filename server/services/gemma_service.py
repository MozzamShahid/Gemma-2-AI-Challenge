from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

class GemmaService:
    def __init__(self):
        self.model_name = "google/gemma-2b"
        self.tokenizer = AutoTokenizer.from_pretrained(self.model_name)
        self.model = AutoModelForCausalLM.from_pretrained(self.model_name, device_map="auto", torch_dtype=torch.float16)

    def generate_response(self, prompt):
        inputs = self.tokenizer(prompt, return_tensors="pt").to(self.model.device)
        outputs = self.model.generate(**inputs, max_length=1000, temperature=0.7)
        response = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
        return response

gemma_service = GemmaService()
