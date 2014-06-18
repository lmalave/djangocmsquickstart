export PYTHONPATH="$PYTHONPATH:/usr/local/google_appengine:/usr/local/google_appengine/lib/django-1.5"
export SETTINGS_MODE="prod"
python manage.py syncdb --migrate


