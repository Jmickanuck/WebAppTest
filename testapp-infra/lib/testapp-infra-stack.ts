import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dotenv from 'dotenv';
import * as apiGateway from 'aws-cdk-lib/aws-apigateway';
import { ApiGateway } from 'aws-cdk-lib/aws-events-targets';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

// cd /c/Users/Justin/Desktop/Python/SaaS/Tut/testapp-infra
// export OPENAI_API_KEY=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

dotenv.config()

export class TestappInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const layer = new lambda.LayerVersion(this, 'BaseLayer', {
      code: lambda.Code.fromAsset('lambda_base_layer/layer.zip'),
      compatibleRuntimes: [lambda.Runtime.PYTHON_3_12],
    });



    const apiLambda = new lambda.Function(this, 'ApiFunction', {
      runtime: lambda.Runtime.PYTHON_3_12,
      code: lambda.Code.fromAsset('../app', {
        exclude: ['node_modules/**'],
      }), 
      handler: 'testapp_api.handler',
      layers: [layer],
      environment: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY ?? '', // Fallback to an empty string if not defined
      }
    });

    const App_Api = new apiGateway.RestApi(this, "AppApi", {
      restApiName: "TestAppApi",
    });

      App_Api.root.addProxy({
        defaultIntegration: new apiGateway.LambdaIntegration(apiLambda),
        });
    

  }
}