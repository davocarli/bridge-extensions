/**
 * @file converseai_providers.js
 *
 * Generated by the converse-cli tool for use with the Converse AI
 * Plugins SDK. https://developers.converse.ai/
 */

'use strict';

const Status                    = require('@converseai/plugins-sdk').Status;
const OAuth2SetupDataResponse   = require('@converseai/plugins-sdk').Payloads.OAuth2SetupDataResponse;
const OAuth2HandleCodeResponse  = require('@converseai/plugins-sdk').Payloads.OAuth2HandleCodeResponse;

/**
* Triggers the OAuth2 process.
*/
var onOAuthStart = function(app, body) {
 /**
  * Registration parameters assigned to body.payload.registrationData.
  * @example
  * var regOne = body.payload.registrationData.regOne;
  */

  /** @type {OAuth2SetupDataResponse} response The Converse AI response to respond with. */
  var response = new OAuth2SetupDataResponse();

  /*
  * This will return a success status and response to the registration function.
  * It is important to always call `app.send` with a status and a response when
  * the method has finished computing and must always return the data to be
  * stored on the provider.
  */
  app.send(Status.SUCCESS, response);
}

/**
* Handle the OAuth code.
*/
var onOAuthHandleCode = function(app, body) {
 /**
  * Registration parameters assigned to body.payload.registrationData.
  * @example
  * var regOne = body.payload.registrationData.regOne;
  */

  /** @type {OAuth2HandleCodeResponse} response The Converse AI response to respond with. */
  var response = new OAuth2HandleCodeResponse();


  /*
  * This will return a success status and response to the registration function.
  * It is important to always call `app.send` with a status and a response when
  * the method has finished computing and must always return the data to be
  * stored on the provider.
  */
  app.send(Status.SUCCESS, response);
}

/**
* Renew the oauth token.
*/
var onOAuthRenewToken = function(app, body) {
 /**
  * Registration parameters assigned to body.payload.registrationData.
  * @example
  * var regOne = body.payload.registrationData.regOne;
  */

  /** @type {OAuth2HandleCodeResponse} response The Converse AI response to respond with. */
  var response = new OAuth2HandleCodeResponse();


  /*
  * This will return a success status and response to the registration function.
  * It is important to always call `app.send` with a status and a response when
  * the method has finished computing and must always return the data to be
  * stored on the provider.
  */
  app.send(Status.SUCCESS, response);
}

module.exports = {
  onOAuthStart: onOAuthStart,
  onOAuthHandleCode: onOAuthHandleCode,
  onOAuthRenewToken: onOAuthRenewToken
}