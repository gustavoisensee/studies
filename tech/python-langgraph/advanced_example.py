import os
from typing import List, Dict, Any, Optional
from dotenv import load_dotenv
from langchain_core.messages import HumanMessage, AIMessage, SystemMessage
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, END
from langgraph.checkpoint.memory import MemorySaver

# Load environment variables
load_dotenv()

class AdvancedConversationState:
    """Enhanced conversation state with additional metadata."""
    def __init__(self, messages: List = None, metadata: Dict = None):
        self.messages = messages or []
        self.metadata = metadata or {}
    
    def add_message(self, message):
        """Add a message to the conversation."""
        self.messages.append(message)
        return self
    
    def update_metadata(self, key: str, value: Any):
        """Update metadata."""
        self.metadata[key] = value
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

def should_continue_conversation(state: AdvancedConversationState) -> str:
    """Determine if the conversation should continue or end."""
    last_message = state.get_last_message()
    if not last_message:
        return "end"
    
    # Check for conversation ending keywords
    ending_keywords = ["goodbye", "bye", "end", "stop", "quit", "exit"]
    if any(keyword in last_message.content.lower() for keyword in ending_keywords):
        return "end"
    
    return "continue"

def process_user_input(state: AdvancedConversationState) -> AdvancedConversationState:
    """Process user input and prepare for AI response."""
    try:
        validate_environment()
        
        last_message = state.get_last_message()
        if not last_message:
            raise ValueError("No message found in state")
        
        # Update metadata with conversation length
        state.update_metadata("message_count", len(state.messages))
        
        return state
        
    except Exception as e:
        error_message = f"Error processing input: {str(e)}"
        print(f"Error: {error_message}")
        error_response = AIMessage(content=f"I encountered an error: {error_message}")
        return AdvancedConversationState(messages=state.messages + [error_response])

def generate_ai_response(state: AdvancedConversationState) -> AdvancedConversationState:
    """Generate AI response using GPT-5 mini."""
    try:
        validate_environment()
        
        # Create proper message list for the LLM
        messages = []
        
        # Add system message for context
        system_message = SystemMessage(content="""You are a helpful AI assistant powered by GPT-5 mini. 
        You should be conversational, informative, and engaging. 
        Keep responses concise but helpful.""")
        messages.append(system_message)
        
        # Add conversation history
        for msg in state.messages:
            if isinstance(msg, HumanMessage):
                messages.append(msg)
            elif isinstance(msg, AIMessage):
                messages.append(msg)
            elif isinstance(msg, str):
                if msg.startswith("AI: "):
                    messages.append(AIMessage(content=msg[4:]))
                else:
                    messages.append(HumanMessage(content=msg))
        
        # Generate response
        response = llm.invoke(messages)
        
        # Update metadata
        state.update_metadata("ai_response_count", state.metadata.get("ai_response_count", 0) + 1)
        
        return AdvancedConversationState(messages=state.messages + [response], metadata=state.metadata)
        
    except Exception as e:
        error_message = f"Error generating response: {str(e)}"
        print(f"Error: {error_message}")
        error_response = AIMessage(content=f"I encountered an error: {error_message}")
        return AdvancedConversationState(messages=state.messages + [error_response], metadata=state.metadata)

def finalize_conversation(state: AdvancedConversationState) -> AdvancedConversationState:
    """Add a final message to wrap up the conversation."""
    final_message = AIMessage(content="Thank you for the conversation! I'm powered by GPT-5 mini and I'm here to help whenever you need assistance.")
    return AdvancedConversationState(messages=state.messages + [final_message], metadata=state.metadata)

def build_advanced_conversation_graph():
    """Build an advanced conversation graph with conditional routing."""
    workflow = StateGraph(AdvancedConversationState)
    
    # Add nodes
    workflow.add_node("process_input", process_user_input)
    workflow.add_node("generate_response", generate_ai_response)
    workflow.add_node("finalize", finalize_conversation)
    
    # Add edges
    workflow.add_edge("process_input", "generate_response")
    workflow.add_edge("generate_response", END)
    workflow.add_conditional_edges(
        "generate_response",
        should_continue_conversation,
        {
            "continue": "process_input",
            "end": "finalize"
        }
    )
    workflow.add_edge("finalize", END)
    
    # Set entry point
    workflow.set_entry_point("process_input")
    
    return workflow.compile(checkpointer=MemorySaver())

def run_interactive_conversation():
    """Run an interactive conversation with the agent."""
    try:
        app = build_advanced_conversation_graph()
        
        print("🤖 Welcome! I'm an AI assistant powered by GPT-5 mini.")
        print("Type 'quit', 'bye', or 'exit' to end the conversation.\n")
        
        # Start with initial message
        state = AdvancedConversationState(messages=[
            HumanMessage(content="Hello! I'd like to start a conversation.")
        ])
        
        while True:
            # Run the graph
            result = app.invoke(state)
            
            # Print the AI response
            last_message = result.get_last_message()
            if last_message and isinstance(last_message, AIMessage):
                print(f"🤖 AI: {last_message.content}\n")
            
            # Check if conversation should end
            if any(keyword in last_message.content.lower() for keyword in ["goodbye", "bye", "thank you"]):
                print("👋 Goodbye! Have a great day!")
                break
            
            # Get user input
            user_input = input("👤 You: ")
            if user_input.lower() in ["quit", "bye", "exit", "stop"]:
                print("👋 Goodbye! Have a great day!")
                break
            
            # Update state with new user message
            state = AdvancedConversationState(
                messages=result.messages + [HumanMessage(content=user_input)],
                metadata=result.metadata
            )
        
        # Print conversation summary
        print(f"\n📊 Conversation Summary:")
        print(f"Total messages: {len(result.messages)}")
        print(f"AI responses: {result.metadata.get('ai_response_count', 0)}")
        
    except Exception as e:
        print(f"Error running conversation: {str(e)}")

if __name__ == "__main__":
    run_interactive_conversation()
