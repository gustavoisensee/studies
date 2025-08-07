import os
from typing import List, Dict, Any
from dotenv import load_dotenv
from langchain_core.messages import HumanMessage, AIMessage
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, END

# Load environment variables
load_dotenv()

# Define a simple state class with better structure
class ConversationState:
    def __init__(self, messages: List = None):
        self.messages = messages or []
    
    def add_message(self, message):
        """Add a message to the conversation."""
        self.messages.append(message)
        return self
    
    def get_last_message(self):
        """Get the last message in the conversation."""
        return self.messages[-1] if self.messages else None

# Initialize the LLM with GPT-5 mini
llm = ChatOpenAI(
    model=os.getenv("OPENAI_MODEL", "gpt-5-mini"),
    openai_api_key=os.getenv("OPENAI_API_KEY"),
    temperature=float(os.getenv("OPENAI_TEMPERATURE", "0.7")),
    max_tokens=int(os.getenv("OPENAI_MAX_TOKENS", "1000"))
)

def validate_environment():
    """Validate that required environment variables are set."""
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("OPENAI_API_KEY environment variable is required")
    return True

# Define a node function that uses OpenAI's chat model with improved error handling
def openai_chat_node(state: ConversationState) -> ConversationState:
    """Process the conversation and generate a response."""
    try:
        # Validate environment
        validate_environment()
        
        # Get the last human message
        last_message = state.get_last_message()
        if not last_message:
            raise ValueError("No message found in state")
        
        # Create a proper message list for the LLM
        messages = []
        for msg in state.messages:
            if isinstance(msg, HumanMessage):
                messages.append(msg)
            elif isinstance(msg, AIMessage):
                messages.append(msg)
            elif isinstance(msg, str):
                # Handle string messages by converting to appropriate type
                if msg.startswith("AI: "):
                    messages.append(AIMessage(content=msg[4:]))
                else:
                    messages.append(HumanMessage(content=msg))
        
        # Generate response using the LLM
        response = llm.invoke(messages)
        
        # Create new state with the response
        new_state = ConversationState(messages=state.messages + [response])
        return new_state
        
    except Exception as e:
        # Handle errors gracefully
        error_message = f"Error processing conversation: {str(e)}"
        print(f"Error: {error_message}")
        # Return state with error message
        error_response = AIMessage(content=f"I encountered an error: {error_message}")
        return ConversationState(messages=state.messages + [error_response])

# Build the graph with improved structure
def build_conversation_graph():
    """Build and return the conversation graph."""
    graph = StateGraph(ConversationState)
    graph.add_node("chat", openai_chat_node)
    graph.add_edge("chat", END)
    graph.set_entry_point("chat")
    return graph.compile()

def run_conversation(initial_message: str = "Hello, which model are you using?"):
    """Run a conversation with the agent."""
    try:
        # Build the graph
        app = build_conversation_graph()
        
        # Create initial state
        initial_state = ConversationState(messages=[
            HumanMessage(content=initial_message)
        ])
        
        # Run the graph
        result = app.invoke(initial_state)
        
        # Print the conversation
        print("\n=== Conversation ===")
        for i, message in enumerate(result.messages, 1):
            if isinstance(message, HumanMessage):
                print(f"{i}. Human: {message.content}")
            elif isinstance(message, AIMessage):
                print(f"{i}. AI: {message.content}")
            else:
                print(f"{i}. {message}")
        print("==================\n")
        
        return result
        
    except Exception as e:
        print(f"Error running conversation: {str(e)}")
        return None

if __name__ == "__main__":
    # Example conversation
    run_conversation("Hello, which model are you using?")
    
    # You can also run multiple conversations
    # run_conversation("What can you help me with?")
    # run_conversation("Tell me a joke")
