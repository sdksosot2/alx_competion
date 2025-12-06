# AccessEase — improved Django scaffold

This is an improved, opinionated starter for your Django accessibility project.

## Features

- Structured project (settings, app, templates, static)
- Demo Text→Speech page using browser Web Speech API
- UsageLog model and admin registration
- Bootstrap-based responsive UI

## Quick start

```bash
python -m venv .venv
source .venv/bin/activate  # or .venv\\Scripts\\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

## Notes

Replace SECRET_KEY in production and configure Postgres for production use.
