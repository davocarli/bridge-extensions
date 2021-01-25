module.exports = {
  Message: require('../ChannelMessage'),
  UserInfo: require('../UserInfo'),
  ConverseInput: require('./AsyncConverseInput'),
  InboundResponse: require('./AsyncInboundPayload'),
  OutboundResponse: require('./AsyncOutboundPayload'),
  /** @deprecated */
  InboundOutput: require('./AsyncConverseInput')
}
