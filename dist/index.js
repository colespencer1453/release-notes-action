module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 238:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const axios = __nccwpck_require__(645); // axios must be installed via npm i axios
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


/***/ }),

/***/ 645:
/***/ ((module) => {

module.exports = eval("require")("axios");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(238);
/******/ })()
;