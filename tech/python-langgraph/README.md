# Python LangGraph Project

A LangGraph project that demonstrates conversation flow using OpenAI's GPT-5 mini API.

## Features

- 🤖 **GPT-5 mini Integration**: Updated to use OpenAI's latest GPT-5 mini model
- 🔄 **Improved Conversation Flow**: Better message handling and state management
- 🛡️ **Error Handling**: Robust error handling and validation
- 📊 **Metadata Tracking**: Conversation analytics and metadata
- 🎯 **Interactive Mode**: Advanced example with interactive conversation
- 🔧 **Modular Design**: Clean, maintainable code structure

## Setup with UV

### 1. Install UV (if not already installed)
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### 2. Initialize the project
```bash
cd tech/python-langgraph
uv init
```

### 3. Install dependencies
```bash
uv sync
```

### 4. Set up environment variables
Copy the example environment file and add your OpenAI API key:
```bash
cp env.example .env
```

Then edit the `.env` file and replace `your_openai_api_key_here` with your actual OpenAI API key:
```
OPENAI_API_KEY=sk-your-actual-api-key-here
```

### 5. Run the application

**Basic Example:**
```bash
uv run python main.py
```

**Advanced Interactive Example:**
```bash
uv run python advanced_example.py
```

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key (required)
- `OPENAI_MODEL`: The model to use (default: gpt-5-mini)
- `OPENAI_TEMPERATURE`: Temperature for response creativity (0.0 to 2.0, default: 0.7)
- `OPENAI_MAX_TOKENS`: Maximum tokens for responses (default: 1000)

## Project Structure

- `main.py`: Basic LangGraph conversation flow with GPT-5 mini
- `advanced_example.py`: Advanced interactive conversation with conditional routing
- `pyproject.toml`: Project configuration and dependencies
- `env.example`: Environment variables template
- `.env`: Your local environment variables (not committed to git)

## Key Improvements

### 1. Model Upgrade
- Updated from `gpt-4.1-mini` to `gpt-5-mini`
- Better performance and capabilities

### 2. Enhanced State Management
- Improved `ConversationState` class with helper methods
- Better message handling with proper type checking
- Metadata tracking for conversation analytics

### 3. Error Handling
- Comprehensive error validation
- Graceful error recovery
- Environment variable validation

### 4. Advanced Features (in `advanced_example.py`)
- Interactive conversation mode
- Conditional routing based on conversation state
- System message integration
- Conversation summary and analytics
- Memory checkpointing for state persistence

## Dependencies

- `langchain-openai`: OpenAI integration for LangChain
- `langgraph`: LangGraph for conversation flow
- `python-dotenv`: Environment variable management

## Usage Examples

### Basic Usage
```python
from main import run_conversation

# Run a simple conversation
result = run_conversation("Hello, which model are you using?")
```

### Advanced Usage
```python
from advanced_example import run_interactive_conversation

# Start an interactive conversation
run_interactive_conversation()
```

## Model Comparison

| Feature | GPT-4.1-mini | GPT-5-mini |
|---------|---------------|-------------|
| Model Size | Smaller | Larger |
| Performance | Good | Better |
| Cost | Lower | Higher |
| Capabilities | Standard | Enhanced |

## Contributing

Feel free to submit issues and enhancement requests! 