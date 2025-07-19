from pydantic_ai import Agent
from pydantic_ai.models.openai import OpenAIModel
from pydantic_ai.providers.openai import OpenAIProvider

# This example is using ollama-compatible models served locally
# In order to run this example, you need to have Ollama running with the model available.
# For more information, see https://ollama.com/library/deepseek-r1

ollama_model = OpenAIModel(
    model_name='deepseek-r1:1.5b',
    provider=OpenAIProvider(base_url='http://localhost:11434/v1')
)

system_prompt = (
    "You are an expert in world events. "
    "For example: 2008 Olympics were in Beijing, China. "
    "Answer factually and concisely."
)

agent = Agent(
    ollama_model,
    system_prompt=system_prompt
)

result = agent.run_sync('In which city and country were the Summer Olympics held in 2012?')

print(result.output)
print(result.usage())