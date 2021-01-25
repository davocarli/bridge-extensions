/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = class OAuth2SetupDataPayload extends require('../Payload') {
  constructor(oauth2Setup) {
    super();
    this.oauth2Setup = oauth2Setup || {};
  }

  /**
  * Sets the URI for the OAuth2 payload. Get parameters will be
  * discarded from this string, use setExtraParams to pass parameters.
  * @param {String} oauth2URI The OAuth2 URI for the response.
  * @public
  */
  setOAuth2URI(oauth2URI) {
    this.oauth2Setup.oauth2URI = oauth2URI;
  }

  /**
  * Sets the Client ID for the OAuth2 payload.
  * @param {String} clientId The OAuth2 Client ID for the response.
  * @public
  */
  setClientID(clientId) {
    this.oauth2Setup.clientId = clientId;
  }

  /**
  * Sets the scope for the OAuth2 payload.
  * @param {String} scope The OAuth2 scope for the response.
  * @public
  */
  setScope(scope) {
    this.oauth2Setup.scope = scope;
  }

  /**
  * Sets the state for the OAuth2 payload.
  * @param {String} [state] The OAuth2 state for the response.
  * @public
  */
  setState(state) {
    this.oauth2Setup.state = state;
  }

  /**
  * Sets the user comment for the OAuth2 payload.
  * @param {String} [comment] The OAuth2 user comment for the response.
  * @public
  */
  setComment(comment) {
    this.oauth2Setup.comment = comment;
  }

  /**
  * Sets the parameters to be attached to URL for the OAuth2 payload.
  * @param {Object} [extraParams] The OAuth2 URL parameters for the response.
  * @public
  */
  setExtraParams(extraParams) {
    this.oauth2Setup.extraParams = extraParams;
  }
}
