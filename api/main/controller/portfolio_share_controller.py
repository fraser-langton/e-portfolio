from flask import request
from flask_restplus import Resource, Namespace

from ..service import portfolio_share_service

from . import api_model
from ..util.decorator import token_required

namespace = Namespace(
    name='portfolio_share',
    path='/',
    description='Portfolio sharing related operations'
)


@namespace.route('/portfolio_share/<portfolio_public_id>')
class Portfolio(Resource):

    @namespace.expect(api_model.auth_token_header)
    @namespace.marshal_with(api_model.portfolio, envelope='portfolio')
    @token_required('portfolio', 'share')
    def get(self, portfolio_public_id):
        """Get a shared portfolio"""
        return portfolio_share_service.get_a_portfolio(portfolio_public_id), 200


@namespace.route('/user/<user_public_id>/portfolio/<portfolio_public_id>/share')
@namespace.param('user_public_id', 'The User identifier')
@namespace.param('portfolio_public_id', 'The Portfolio identifier')
class PortfolioShare(Resource):

    @namespace.expect(api_model.share, api_model.auth_token_header)
    @namespace.marshal_with(api_model.link_response)
    @token_required('user', 'login')
    def post(self, user_public_id, portfolio_public_id):
        """Get a share link"""
        data = request.json
        return portfolio_share_service.share_a_portfolio(user_public_id, portfolio_public_id, data), 201
