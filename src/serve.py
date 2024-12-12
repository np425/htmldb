import argparse
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
import uvicorn

def serve(html_file):
    app = FastAPI()
    
    @app.get('/', response_class=HTMLResponse)
    async def index():
        with open(html_file, 'r') as f:
            return f.read()

    return app
    

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('html_file', type=str, help='HTML file to serve with db support')
    
    args = parser.parse_args()
    app = serve(args.html_file)
    uvicorn.run(app, host='127.0.0.1')
    
