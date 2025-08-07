#!/usr/bin/env python3
"""
Test script to verify the improvements made to the LangGraph project.
"""

import os
from dotenv import load_dotenv

def test_environment_setup():
    """Test that environment variables are properly configured."""
    load_dotenv()
    
    print("🔧 Testing Environment Setup...")
    
    # Check if API key is set
    api_key = os.getenv("OPENAI_API_KEY")
    if api_key and api_key != "your_openai_api_key_here":
        print("✅ OPENAI_API_KEY is configured")
    else:
        print("❌ OPENAI_API_KEY not configured - please set it in .env file")
        return False
    
    # Check model configuration
    model = os.getenv("OPENAI_MODEL", "gpt-5-mini")
    print(f"✅ Model configured: {model}")
    
    # Check other settings
    temperature = os.getenv("OPENAI_TEMPERATURE", "0.7")
    max_tokens = os.getenv("OPENAI_MAX_TOKENS", "1000")
    print(f"✅ Temperature: {temperature}")
    print(f"✅ Max tokens: {max_tokens}")
    
    return True

def test_imports():
    """Test that all required modules can be imported."""
    print("\n📦 Testing Imports...")
    
    try:
        from langchain_core.messages import HumanMessage, AIMessage, SystemMessage
        print("✅ LangChain core messages imported")
    except ImportError as e:
        print(f"❌ Failed to import LangChain core messages: {e}")
        return False
    
    try:
        from langchain_openai import ChatOpenAI
        print("✅ LangChain OpenAI imported")
    except ImportError as e:
        print(f"❌ Failed to import LangChain OpenAI: {e}")
        return False
    
    try:
        from langgraph.graph import StateGraph, END
        print("✅ LangGraph imported")
    except ImportError as e:
        print(f"❌ Failed to import LangGraph: {e}")
        return False
    
    try:
        from langgraph.checkpoint.memory import MemorySaver
        print("✅ LangGraph checkpoint imported")
    except ImportError as e:
        print(f"❌ Failed to import LangGraph checkpoint: {e}")
        return False
    
    return True

def test_basic_functionality():
    """Test the basic conversation functionality."""
    print("\n🧪 Testing Basic Functionality...")
    
    try:
        from main import ConversationState, run_conversation
        
        # Test ConversationState
        state = ConversationState()
        state.add_message("Test message")
        print("✅ ConversationState works")
        
        # Test that we can create a conversation (without actually running it)
        print("✅ Basic conversation functions imported")
        
    except Exception as e:
        print(f"❌ Basic functionality test failed: {e}")
        return False
    
    return True

def test_advanced_functionality():
    """Test the advanced conversation functionality."""
    print("\n🚀 Testing Advanced Functionality...")
    
    try:
        from advanced_example import AdvancedConversationState
        
        # Test AdvancedConversationState
        state = AdvancedConversationState()
        state.add_message("Test message")
        state.update_metadata("test_key", "test_value")
        print("✅ AdvancedConversationState works")
        
        # Test metadata functionality
        assert state.metadata["test_key"] == "test_value"
        print("✅ Metadata functionality works")
        
    except Exception as e:
        print(f"❌ Advanced functionality test failed: {e}")
        return False
    
    return True

def main():
    """Run all tests."""
    print("🧪 Running LangGraph Project Tests\n")
    
    tests = [
        ("Environment Setup", test_environment_setup),
        ("Imports", test_imports),
        ("Basic Functionality", test_basic_functionality),
        ("Advanced Functionality", test_advanced_functionality),
    ]
    
    passed = 0
    total = len(tests)
    
    for test_name, test_func in tests:
        try:
            if test_func():
                passed += 1
            else:
                print(f"❌ {test_name} failed")
        except Exception as e:
            print(f"❌ {test_name} failed with exception: {e}")
    
    print(f"\n📊 Test Results: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! The improvements are working correctly.")
        print("\n📝 Next steps:")
        print("1. Set your OPENAI_API_KEY in the .env file")
        print("2. Run: python main.py (for basic example)")
        print("3. Run: python advanced_example.py (for interactive mode)")
    else:
        print("⚠️  Some tests failed. Please check the errors above.")
    
    return passed == total

if __name__ == "__main__":
    main()
