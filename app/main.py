from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import json
from pathlib import Path

app = FastAPI()

# Serve static files
app.mount("/", StaticFiles(directory="static", html=True), name="static")

DATA_FILE = Path(__file__).resolve().parent.parent / "data.json"

@app.get("/api/data")
def get_data():
    if DATA_FILE.exists():
        with open(DATA_FILE) as f:
            return json.load(f)
    return {}
