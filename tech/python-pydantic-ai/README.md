# Python Pydantic AI Example

This project demonstrates how to use the `pydantic-ai` library with Ollama-compatible models served locally.

## Prerequisites
- Python 3.8+
- [Ollama](https://ollama.com/) running locally with the `deepseek-r1:1.5b` model available

## Setup Instructions

### 1. Clone the repository
```
git clone https://github.com/gustavoisensee/studies.git
cd tech/python-pydantic-ai
```

### 2. Initialize Python environment
```
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies
```
pip install -r requirements.txt
```

### 4. Run Ollama (if not already running)
[Ollama documentation](https://ollama.com/library/deepseek-r1) to start the model locally.

Make sure you have ollama installed and running.
Then run the command:

```
ollama run deepseek-r1:1.5b
```

### 5. Run the agent
```
python agent-pydantic-ai.py
python agent-langchain.py
```

## agent.py
This script creates an agent using the `deepseek-r1:1.5b` model and answers a sample question about the 2012 Summer Olympics.

## Output
The result will be printed to the console, along with usage statistics.

---
For more details on `pydantic-ai`, see the [official documentation](https://github.com/pydantic/pydantic-ai).
