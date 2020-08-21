from flask import make_response, request
from flask_restplus import Resource, Namespace

from ..service import file_service

api = Namespace(
    name='file',
    path='/user',
    description='file related operations'
)


@api.route('/<public_id>/<file_name>')
@api.param('public_id', 'The User identifier')
@api.param('file_name', 'The File identifier')
class File(Resource):
    """
    Resource for fetching and uploading asset files
    """

    def get(self, public_id, file_name):
        """
        This is technically not restful - DOWNLOAD IN SWAGGER WON'T WORK
        """
        response = make_response(file_service.get_file(public_id, file_name))
        response.headers.set('Content-Type', 'image/jpeg')
        response.headers.set('Content-Disposition', 'attachment', filename='%s.jpg' % file_name)

        return response

    def put(self, public_id, file_name):
        """
        This is technically not restful - UPLOAD IN SWAGGER WON'T WORK
        """
        image_binary = request.get_data()
        return file_service.save_file(public_id, file_name, image_binary)
