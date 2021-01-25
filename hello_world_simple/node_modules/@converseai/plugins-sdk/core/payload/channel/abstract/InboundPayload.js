/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = class InboundPayload extends require('../../Payload') {

  /**
  * Adds a channelOutput for the payload.
  * @param {ConverseInput} channelOutput The ConverseInput object to be added on the payload.
  * @deprecated
  * @public
  */
  addOutput(channelOutput) {
    this.addConverseInput(channelOutput);
  }

  /**
  * Adds a converseInput for the payload.
  * @param {ConverseInput} channelInput The ConverseInput object to be added on the payload.
  * @public
  */
  addConverseInput(converseInput) {
    this.channelOutput = this.channelOutput || [];
    this.channelOutput.push(converseInput);
  }
}
