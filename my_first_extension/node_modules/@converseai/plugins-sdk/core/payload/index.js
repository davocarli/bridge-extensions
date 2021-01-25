module.exports = {
  Module: require('./module'),
  Channel: require('./channel'),
  RichMedia: require('./shared/RichMedia.js'),
  HTTPResponse: require('./shared/HTTPResponse.js'),
  ErrorResponse: require('./ErrorPayload'),
  RegistrationDataResponse: require('./RegistrationDataPayload'),
  ExternalFunctionResponse: require('./ExternalFunctionPayload'),
  OAuth2SetupDataResponse: require('./oauth/OAuth2SetupDataPayload'),
  OAuth2HandleCodeResponse: require('./oauth/OAuth2HandleCodePayload'),

  /** @deprecated use Module.ModuleResponse **/
  ModuleResponse: require('./module/ModulePayload')
}
