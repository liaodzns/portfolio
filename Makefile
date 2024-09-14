setup: env
	pip install -r requirements.txt

env:
	python3 -m venv env

run_test: 
	npm start
