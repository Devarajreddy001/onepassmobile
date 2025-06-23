require('dotenv').config();

// Determine base URLs based on the environment
const aServiceBaseUrl = process.env.NODE_ENV === 'production' ? process.env.LIVE_A_SERVICE_BASE_URL : process.env.DEV_A_SERVICE_BASE_URL;
const bServiceBaseUrl = process.env.NODE_ENV === 'production' ? process.env.LIVE_B_SERVICE_BASE_URL : process.env.DEV_B_SERVICE_BASE_URL;
const cserviceBaseUrl = process.env.NODE_ENV === 'production' ? process.env.LIVE_C_SERVICE_BASE_URL : process.env.DEV_C_SERVICE_BASE_URL;
const userId = process.env.user === 'dev' ? process.env.devUserId : process.env.prodUserId;

// const phoneNumber = "+918297908182";
// const pincode = "500090";
// const newPhoneNumber = "6736377378";
// const newEmail = "testing13555@yopmail.com";
const aServiceEndpoints = {
    api1: { method: 'POST', url: `${aServiceBaseUrl}/test/test` },
    api2: { method: 'GET', url: `${aServiceBaseUrl}/test` },
    api3: { method: 'POST', url: `${aServiceBaseUrl}/test` },
    api4: { method: 'GET', url: `${aServiceBaseUrl}/test` },
    api5: { method: 'GET', url: `${aServiceBaseUrl}/test` },
    api6: { method: 'POST', url: `${authServiceBaseUrl}/test` },
    api7: { method: 'GET', url: `${aServiceBaseUrl}/test` },
    api8: {method:'DELETE',url:`${aServiceBaseUrl}/test`}
};





module.exports = { authServiceEndpoints };
