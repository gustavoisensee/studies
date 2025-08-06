import os
from dotenv import load_dotenv
from langchain_core.messages import HumanMessage
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, END

# Load environment variables
load_dotenv()

# Define a simple state class
class ConversationState:
    def __init__(self, messages=None):
        self.messages = messages or []

llm = ChatOpenAI(
    model=os.getenv("OPENAI_MODEL", "gpt-4.1-mini"),
    openai_api_key=os.getenv("OPENAI_API_KEY"),
    temperature=float(os.getenv("OPENAI_TEMPERATURE", "0.7")),
    max_tokens=int(os.getenv("OPENAI_MAX_TOKENS", "1000"))
)

# Helper function to extract content from messages
def extract_message_content(messages):
    """Extract content from messages, handling both HumanMessage objects and strings."""
    message_contents = []
    for message in messages:
        if hasattr(message, 'content'):
            message_contents.append(message.content)
        else:
            message_contents.append(str(message))
    return message_contents

# Define a node function that uses OpenAI's chat model
def openai_chat_node(state: ConversationState) -> ConversationState:
    # Compose the prompt from the conversation history
    message_contents = extract_message_content(state.messages)
    prompt = "\n".join(message_contents)
    response = llm.invoke(prompt)
    # Append the response to the conversation
    new_messages = state.messages + [f"AI: {response.content}"]
    return ConversationState(messages=new_messages)

# Build a simple graph with one node and an end
graph = StateGraph(ConversationState)
graph.add_node("chat", openai_chat_node)
graph.add_edge("chat", END)
graph.set_entry_point("chat")
app = graph.compile()

if __name__ == "__main__":
    # Start a conversation
    initial_state = ConversationState(messages=[
        HumanMessage(content="Hello, which model are you using?"),
    ])
    
    # Run the graph and get the final result
    result = app.invoke(initial_state)
    # Extract and print the conversation
    conversation_content = extract_message_content(result.messages)
    print("\n".join(conversation_content))
