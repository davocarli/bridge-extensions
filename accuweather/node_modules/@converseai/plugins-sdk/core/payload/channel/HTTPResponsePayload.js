/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const HTTPResponse = require('../shared/HTTPResponse');

module.exports = (superclass) => class HTTPResponsePayload extends superclass {
  constructor(httpResponse) {
    super();
    this.setHTTPResponse(new HTTPResponse(httpResponse));
  }

  /**
  * Sets the httpResponse for the payload.
  * @param {HTTPResponse} httpResponse The HTTPResponse object to be set on the payload.
  * @public
  */
  setHTTPResponse(httpResponse) {
    this.httpResponse = httpResponse;
  }
}
