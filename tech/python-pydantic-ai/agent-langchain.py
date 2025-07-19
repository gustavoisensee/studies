from langchain_openai import ChatOpenAI
from langchain.schema import SystemMessage, HumanMessage

# Set up the Ollama-compatible model via LangChain
llm = ChatOpenAI(
    openai_api_base="http://localhost:11434/v1",
    openai_api_key="sk-ollama",  # Ollama ignores the key, but LangChain requires a value
    model="deepseek-r1:1.5b"
)

system_prompt = (
    "You are an expert in world events. "
    "For example: 2008 Olympics were in Beijing, China. "
    "Answer factually and concisely."
)

# Compose the conversation
messages = [
    SystemMessage(content=system_prompt),
    HumanMessage(content="In which city and country were the Summer Olympics held in 2012?")
]

# Run the agent
response = llm.invoke(messages)
print(response.content)