require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { aServiceEndpoints } = require('../apiEndpoints');

// Using static URL directly as no aServiceEndpoints mapping is defined



test.describe('ReqRes API Tests', () => {

  test('should create user via ReqRes API', { tag: '@apiTesting' }, async ({ request }) => {
    console.log("🚀 ReqRes Create User API Test Started");
   const url = aServiceEndpoints.api1.url;
   console.log(url)
    const payload = {
      name: "John",
      job: "Tester"
    };

    const response = await request.post(url, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
        'username': 'testuser',
        'password': 'testpass',
        'Cookie': 'session_id=xyz789' // cookies passed as header string
      },
      data: payload
    });

    expect(response.status()).toBe(201); // 201 Created
    const data = await response.json();

    expect(data).toBeDefined();
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('createdAt');
    console.log("✅ User creation successful with ID:", data.id);
  });

});
