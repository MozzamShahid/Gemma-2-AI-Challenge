from .gemma_service import gemma_service
import json

def analyze_startup_stats(data):
    prompt = f"""
    Analyze the following startup stats and provide insights:
    {json.dumps(data)}
    
    Please provide:
    1. A success ratio (0.0 to 1.0)
    2. Three key strengths
    3. Three key weaknesses
    4. Three recommendations for improvement
    
    Format the response as a JSON object.
    """
    
    response = gemma_service.generate_response(prompt)
    
    try:
        analysis = json.loads(response)
        return analysis
    except json.JSONDecodeError:
        # If the response is not valid JSON, return a default structure
        return {
            "success_ratio": 0.5,
            "strengths": ["Unable to determine strengths"],
            "weaknesses": ["Unable to determine weaknesses"],
            "recommendations": ["Unable to provide recommendations"]
        }


