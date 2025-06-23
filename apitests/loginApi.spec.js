require('dotenv').config();
const { expect, test } = require('@playwright/test');
const { aServiceEndpoints } = require('../apiEndpoints');
const generateRandomPhoneNumber = () =>
`6${Math.floor(Math.random() * 1000000000)}`;
const randomMobileNumber = "+91" + generateRandomPhoneNumber() + "";

const session = process.env.session === 'dev' ? process.env.devSessionId : process.env.prodSessionId;

test.describe('login API tests', () => {
  
    test('should fetch OTP from generateOtpApi', { tag: '@apiTesting',}, async ({ request }) => {
        console.log("Login API Flow Started");
        const url = aServiceEndpoints.api1.url;
        const payload = {
            phone:randomMobileNumber,
            sessionId:session
        };

        const response = await request.post(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            data: payload
        });

        expect(response.status()).toBe(200);
        const data = await response.json();
        expect(data).toBeDefined();
    });

    test('should check user existence with a valid phone number', { tag: '@apiTesting',}, async ({ request }) => {
     
        const url = `${aServiceEndpoints.api2.url}${randomMobileNumber}`;

        const response = await request.get(url);

        expect(response.status()).toBe(200);
        const data = await response.json();
        expect(data).toBeDefined();
        expect(data).toHaveProperty('message.exists',false);
        // Add more assertions as needed
    });

    test('should handle error response from invalid endpoint', { tag: '@apiTesting',}, async ({ request }) => {
        const url = aServiceEndpoints.ap13.url;
        const response = await request.get(url,{
            headers: {
            'Content-Type': 'application/json'
        }
     });

        expect(response.status()).toBe(404);
        
    });

    test('should resend OTP through WhatsApp', { tag: '@apiTesting',}, async ({ request }) => {
        const url = aServiceEndpoints.ap13.url;

        const payload = {
            phone: randomMobileNumber,
            sessionId:session
        };

        const response = await request.post(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            data: payload
        });

        expect(response.status()).toBe(200);
        const data = await response.json();
        expect(data).toBeDefined();
        expect(['Otp sent successfully.', 'Too many attempts. Please try later.']).toContain(data.message);
        console.log("Login API Flow Completed");
    });

});
