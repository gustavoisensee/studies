import os
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage

# Load environment variables
load_dotenv()

def create_chat_model():
    """Create and configure the OpenAI chat model"""
    return ChatOpenAI(
        model=os.getenv("OPENAI_MODEL", "gpt-4.1-mini"),
        temperature=float(os.getenv("OPENAI_TEMPERATURE", "0.7")),
        max_tokens=int(os.getenv("OPENAI_MAX_TOKENS", "1000")),
        api_key=os.getenv("OPENAI_API_KEY")
    )

def chat_with_ai():
    user_message = "Which AI model are you using?"
    
    try:
        # Initialize the chat model
        chat_model = create_chat_model()

        # Create the message
        messages = [HumanMessage(content=user_message)]
        
        # Get AI response
        response = chat_model.invoke(messages)
        
        # Display the conversation
        print(f"👤 You: {user_message}")
        print(f"🤖 AI: {response.content}\n")
        
    except Exception as e:
        print(f"❌ Error: {e}")
        print("Please check your OpenAI API key and try again.\n")

if __name__ == "__main__":
    chat_with_ai()
