import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

"""
To create the initial database, just import the db object from an interactive Python shell and run the 
SQLAlchemy.create_all() method to create the tables and database:
"""
db = SQLAlchemy()

flask_bcrypt = Bcrypt()


def create_app():
    app = Flask(
        import_name='__main__',
        static_folder='app/build/static',
        template_folder='app/build'
    )

    config_file = os.path.join(os.path.abspath(os.path.dirname(__file__)), '../config.py')
    app.config.from_pyfile(config_file)
    db.init_app(app)

    flask_bcrypt.init_app(app)

    return app
