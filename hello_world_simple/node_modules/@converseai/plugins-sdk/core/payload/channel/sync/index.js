module.exports = {
  Message: require('../ChannelMessage'),
  UserInfo: require('../UserInfo'),
  ConverseInput: require('./SyncConverseInput'),
  InboundOutput: require('./SyncConverseInput'),
  InboundResponse: require('./SyncInboundPayload'),
  OutboundResponse: require('./SyncOutboundPayload'),
  /** @deprecated */
  InboundOutput: require('./SyncConverseInput')
}
