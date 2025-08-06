# Python LangGraph Project

A simple LangGraph project that demonstrates conversation flow using OpenAI's API.

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
```bash
uv run python main.py
```

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key (required)
- `OPENAI_MODEL`: The model to use (default: gpt-3.5-turbo)
- `OPENAI_TEMPERATURE`: Temperature for response creativity (default: 0.7)
- `OPENAI_MAX_TOKENS`: Maximum tokens for responses (default: 1000)

## Project Structure

- `main.py`: Main application with LangGraph conversation flow
- `pyproject.toml`: Project configuration and dependencies
- `env.example`: Environment variables template
- `.env`: Your local environment variables (not committed to git)

## Dependencies

- `langchain-openai`: OpenAI integration for LangChain
- `langgraph`: LangGraph for conversation flow
- `python-dotenv`: Environment variable management 