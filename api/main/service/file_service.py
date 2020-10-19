from io import BytesIO

from flask import send_file

from . import user_service
from ..model import File
from ..util.db import save_db_object
from ..util.exception import *


def get_user_files(user_public_id):
    user = user_service.get_a_user(user_public_id)
    files = File.query.filter_by(user_id=user.id).all()
    return files


def save_file(user_public_id: str, file_name: str, file_binary: bytes):
    user = user_service.get_a_user(user_public_id)

    file = File(user_id=user.id, file_name=file_name, file_binary=file_binary)
    save_db_object(file)
    return 'created'


def get_file(public_id: str, file_name: str):
    user = user_service.get_a_user(public_id)

    file = File.query.filter_by(user_id=user.id, file_name=file_name).first()
    if not file:
        raise FileNotFound(file_name)

    return send_file(BytesIO(file.file_binary), as_attachment=True, attachment_filename=file.file_name)
