import { CognitoUserPool, ICognitoUserPoolData } from 'amazon-cognito-identity-js';
import config from '../config/awsConfig';

const userPoolData: ICognitoUserPoolData = {
  UserPoolId: config.userPool.UserPoolId || '',
  ClientId: config.userPool.ClientId || ''
};

const getUserPool = () => new CognitoUserPool(userPoolData);

export default getUserPool;