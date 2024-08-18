export const oktaConfig = {
    clientId: '0oag7wzeijZrqeYZL5d7',
    issuer: 'https://dev-39225728.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}