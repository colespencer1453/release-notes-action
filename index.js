'use strict';
const axios = require('axios'); // axios must be installed via npm i axios
const webhookURL = "https://appriver3651001066.webhook.office.com/webhookb2/59c2a62d-30d9-498b-b5c9-add98d4bbb07@52934c9b-912c-4480-b2bc-72fee70477bb/IncomingWebhook/1bafa1bd08fa4298ad8d07f5ebe3af51/a07dc6c5-7106-49f1-88ea-3bfd14382686"; // Replace with a valid webhool URL obtained by adding an "Incomming Webhook" connector to your teams channel

if (process.argv.length === 4) {
  const title = process.argv[2];
  const message = process.argv[3];
  console.log(`${title}, ${message}`);
  postMessageToTeams(title, message);
} else {
  console.log('Usage: node post-message-to-teams.js title messageBody');
}

async function postMessageToTeams(title, message) {
    const card = {
      '@type': 'MessageCard',
      '@context': 'http://schema.org/extensions',
      'themeColor': "0072C6", // light blue
      summary: 'Summary description',
      sections: [
        {
          activityTitle: title,
          text: message,
        },
      ],
    };

    try {
      const response = await axios.post(webhookURL, card, {
        headers: {
          'content-type': 'application/vnd.microsoft.teams.card.o365connector',
          'content-length': `${card.toString().length}`,
        },
      });
      return `${response.status} - ${response.statusText}`;
    } catch (err) {
      return err;
    }
  }
