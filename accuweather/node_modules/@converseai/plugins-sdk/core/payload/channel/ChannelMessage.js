/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

class ChannelMessage {
  constructor() { }

  setUID(uid) {
    this.uid = uid;
  }
}

class ChannelMessageText extends ChannelMessage {
  constructor(text) {
    super();
    this.text = text;
  }

  setText(text) {
    this.text = text;
  }
}

class ChannelMessageMedia extends ChannelMessage {
  constructor(media) {
    super();
    this.media = media || {};
  }

  setType(type) {
    this.media.type = type;
  }

  setEntity(entity) {
    this.media.entity = entity;
  }
}

class ChannelMessageConversation extends ChannelMessage {
  constructor(conversation) {
    super();
    this.conversation = conversation || {};
  }

  setIntent(intent, isNew = false) {
    if (isNew) {
      this.conversation.new = intent;
    } else {
      this.conversation.existing = intent;
    }
  }

  setEntityData(data) {
    this.conversation.entityData = data;
  }

  setRuntimeCTX(runtimeCTX) {
    this.conversation.runtimeCTX = runtimeCTX;
  }
}

module.exports = {
  Text: ChannelMessageText,
  Media: ChannelMessageMedia,
  Conversation: ChannelMessageConversation,
}
