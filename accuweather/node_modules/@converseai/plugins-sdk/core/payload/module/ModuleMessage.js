/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = class ModuleMessage {
  constructor(type) {
    this.type = type;
  }

  setMessageType(type) {
    this.type = type;
  }

  static get TYPE_COMMENT () {
    return 0;
  }

  static get TYPE_QUESTION () {
    return 1;
  }
}
