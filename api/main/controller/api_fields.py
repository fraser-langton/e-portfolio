from flask_restplus import fields

# RESPONSE
response_status = 'status', fields.String(description='status of the request')
response_message = 'message', fields.String(description='message from the request')

# USER
user_public_id = 'public_id', fields.String(description='user identifier')
email = 'email', fields.String(description='email address')
name_first = 'name_first', fields.String(description='first name')
name_last = 'name_last', fields.String(description='last name')
password = 'password', fields.String(description='password')

# AUTH
bearer_auth_token = 'bearer_auth_token', fields.String(description='JSON Web Token', example='Bearer <auth_token>')
auth_token = 'Authorization', fields.String(description='JSON Web Token')

# WIDGET
widget_type = 'type', fields.String(description='type of widget', example='about')
widget_data = 'data', fields.Raw(description='data specific to widget type', example={'p1': 'hello', 'p2': '/file/user/asset.png'})