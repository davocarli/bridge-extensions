/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = class Payload {

  /**
  * Sets the error for the payload.
  * @param {Object} Error object for the response.
  * @param {Number} Error.httpStatus The HTTP status code for the response.
  * @param {String} Error.code The programmable error code for the response.
  * @param {String} Error.description The human readable error code for the response.
  * @public
  */
  setError({httpStatus, code, description}) {
    this.error = {
      httpStatus: httpStatus,
      code: code,
      description: description
    };
  }
}
