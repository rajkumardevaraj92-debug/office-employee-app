pipeline {
 agent any

 stages {

  stage('Clone Code') {
   steps {
    git 'https://github.com/rajkumardevaraj92-debug/office-employee-app.git'
   }
  }

  stage('Build Frontend') {
   steps {
    echo "Frontend Build Completed"
   }
  }

  stage('Deploy Frontend to S3') {
   steps {
    sh 'aws s3 sync frontend/ s3://office-frontend-bucket'
   }
  }

  stage('Deploy Lambda') {
   steps {
    sh '''
    zip backend.zip backend/lambda_function.py
    aws lambda update-function-code \
    --function-name office-backend \
    --zip-file fileb://backend.zip
    '''
   }
  }

 }

}