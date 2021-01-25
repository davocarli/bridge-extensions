/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const Debug = require('debug');
const debug = Debug('converseai-plugins-sdk:http:debug');
const error = Debug('converseai-plugins-sdk:http:error');

// Constants
const RESPONSE_CODE_OK          = 200;
const HTTP_CONTENT_TYPE_HEADER  = 'Content-Type';
const HTTP_CONTENT_TYPE_JSON    = 'application/json';

const Plugins       = require('../core/plugins');
const Response      = require('../core/response').Response;
const Status        = require('../core/response').Status;
const ErrorResponse = require('../core/payload').ErrorResponse;

/**
* @param {Object} options JSON configuration.
* @param {Object} options.request Express HTTP request object.
* @param {Object} options.response Express HTTP response object.
* @protected
*/
module.exports = class extends Plugins {

  constructor (options) {
    debug('HTTP Constructor');
    super(options);

    if (!options.request) {
      this._handleError(404, 'REQUEST_CAN_NOT_BE_EMPTY', 'Request can NOT be empty.');
      return;
    }
    if (!options.response) {
      this._handleError(404, 'RESPONSE_CAN_NOT_BE_EMPTY', 'Response can NOT be empty.');
      return;
    }

    this._request = options.request;
    this._response = options.response;

    this._body = this._request.body;
  }

  /**
  * @param {Number} httpStatus The HTTP status code for the response.
  * @param {String} code The programmable error code for the response.
  * @param {String} description The human readable error code for the response.
  * @protected
  */
  _handleError(httpStatus, code, description) {
    var response = new Response(Status.FAIL, new ErrorResponse(httpStatus, code, description));
    error(response);
    this._handleResponse(response);
  }

  /**
  * @param {Response} response The Response object.
  * @protected
  */
  _handleResponse(response) {
    this._response.append(HTTP_CONTENT_TYPE_HEADER, HTTP_CONTENT_TYPE_JSON);
    debug('Response %s', JSON.stringify(response));
    this._response.status(RESPONSE_CODE_OK).send(response);
    this._responded = true;
  }

}
