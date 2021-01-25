/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = class ChannelOutput {
  constructor(message, settings) {
    this.setMessage(message);
    this.channelSetting = Object.assign({}, settings);
  }

  /**
   * Sets the message for the output.
   * @param {ChannelMessage} channelMessage The ChannelMessage object to be set on the output.
   * @public
   */
  setMessage(channelMessage) {
    this.channelMessage = channelMessage;
  }

  setUserId(userId) {
    this.channelSetting.userId = userId;
  }
  setThreadId(threadId) {
    this.channelSetting.threadId = threadId;
  }
  setData(data) {
    this.channelSetting.data = data;
  }
  setRuntimeCTX(runtimeCTX) {
    this.channelSetting.runtimeCTX = runtimeCTX;
  }
  setChannelName(channelName) {
    this.channelSetting.channelName = channelName;
  }
  setUserInfo(userInfo) {
    this.channelSetting.userInfo = userInfo;
  }
  setSync(sync) {
    this.channelSetting.sync = sync;
  }
  /**
   * Sets if the channel settings belong to a group chat with multiple users
   * 
   * In a group chat any user can contribute to the same conversation as if they
   * are a single user but can be indentified separately 
   * @param {boolean} isGroup Should be `true` if part of a group chat; otherwise `false`.
   * @public
   */
  setIsGroup(isGroup) {
    this.channelSetting.isGroup = isGroup;
  }

}