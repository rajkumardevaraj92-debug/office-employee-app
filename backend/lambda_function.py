import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('employee-record')

def lambda_handler(event, context):

    method = event['httpMethod']

    if method == 'POST':

        body = json.loads(event['body'])

        table.put_item(
            Item={
                'id': body['id'],
                'name': body['name'],
                'department': body['department']
            }
        )

        return {
            'statusCode':200,
            'headers':{'Content-Type':'application/json'},
            'body':json.dumps({'message':'Employee added successfully'})
        }

    elif method == 'GET':

        response = table.scan()

        return {
            'statusCode':200,
            'headers':{'Content-Type':'application/json'},
            'body':json.dumps(response['Items'])
        }