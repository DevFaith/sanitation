// ussd.js

const africastalking = require('africastalking')({
    apiKey: 'atsk_a0f4cb9c4dd198d95dc0c9f92d879aa6c64ef66e2e0e127560c396e62e1058711264b59b',
    username: 'faithwaithera'
});

const ussd = africastalking.USSD;

const handleUSSD = async ({ sessionId, serviceCode, phoneNumber, text }) => {

    let response = '';

    switch (text) {
        case '':
            response = `CON Welcome to Water Conservation Learning
1. Learn about Water Conservation
2. Learn about Sewage Management
3. Join WhatsApp Group`;
            break;
        case '1':
            response = `CON Water Conservation Materials:
1. Importance of Water Conservation
2. Methods of Saving Water`;
            break;
        case '2':
            response = `CON Sewage Management Materials:
1. Importance of Sewage Management
2. Proper Sewage Disposal Methods`;
            break;
        case '1*1':
            response = `END Importance of Water Conservation:
- Saves money
- Reduces water pollution
- Ensures sustainable water supply`;
            break;
        case '1*2':
            response = `END Methods of Saving Water:
- Fixing leaks
- Using water-saving appliances
- Collecting rainwater`;
            break;
        case '2*1':
            response = `END Importance of Sewage Management:
- Prevents diseases
- Protects the environment
- Improves sanitation`;
            break;
        case '2*2':
            response = `END Proper Sewage Disposal Methods:
- Using septic tanks
- Avoiding flushing harmful materials`;
            break;
        case '3':
            response = `END Join our WhatsApp Group:
https://chat.whatsapp.com/YOUR_INVITE_LINK`;
            break;
        default:
            response = `END Invalid option. Please try again.`
    }

    return response;
};

module.exports = handleUSSD;
