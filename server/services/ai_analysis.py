from .gemma_service import gemma_service

def analyze_startup_stats(data):
    prompt = f"""
    Analyze the following startup stats and provide insights:
    {data}
    
    Please provide:
    1. A success ratio (0.0 to 1.0)
    2. Three key strengths
    3. Three key weaknesses
    4. Three recommendations for improvement
    
    Format the response as a JSON object.
    """
    
    response = gemma_service.generate_response(prompt)
    
    # Note: In a production environment, you'd want to add error handling and
    # parsing of the JSON response. For simplicity, we're assuming the model
    # returns perfectly formatted JSON.
    
    return eval(response)
