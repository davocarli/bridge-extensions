/**
 * @file plugins.js
 * @name davocarli_accuweather
 * @description AccuWeather Plugin for Getting Forecast Data 
 *
 * Generated by the converse-cli tool for use with the Converse AI
 * Plugins SDK. https://developers.converse.ai/
 *
 * IMPORTANT: THIS FILE IS AUTO GENERATED, CHANGES MAY BE OVERRIDDEN!
 */

'use strict';
const ConversePluginsSDK = require('@converseai/plugins-sdk');

/**
 * davocarli_accuweather plugin. To be used with
 * Converse AI Plugins SDK.
 *
 * @example
 * const converseai  = require('plugins.js');
 * const express     = require('express');
 * const bodyParser  = require('body-parser');
 *
 * var server = express();
 *
 * server.use(bodyParser.json());
 * server.post('/', function (req, res) {
 *    converseai.davocarli_accuweather(req, res);
 * });
 *
 * @param {Object} request Express HTTP request object.
 * @param {Object} response Express HTTP response object.
 */
exports.davocarli_accuweather = function (request, response) {
  var app = new ConversePluginsSDK.http({ request, response });

  if (request && request.headers && request.headers['x_converse_app_token'] && request.headers['x_converse_app_token'] === require('./app-token')) {

    app.setModules({
      city_search: require('./converseai_modules/city_search')
    });



    app.handleRequest();
  } else {
    app._handleError(403, 'FORBIDDEN_APP_TOKEN', 'Forbidden app token set.');
  }
};
