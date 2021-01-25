# Converse Plugins SDK

This library makes it easy to create your own plugins and modules for the Converse AI platform

## Setup Instructions

### Converse Plugins SDK
 1. Import the appropriate class(es):

```javascript
let ConversePluginsSDK    = require('@converseai/plugins-sdk');
```

 2. Create an http instance:

```javascript
const app = new ConversePluginsSDK.http({request: request, response: response});
```

## Example Using [Express](https://expressjs.com/)

### Javascript
Below is a simple delay module that will delay the conversation.

`delayTime` is created via the module definition on the ConverseAI platform. If it's undefined then it will delay for 1 second.

```javascript
const express = require('express')();
const Status  = require('@converseai/plugins-sdk').Status;

express.use(bodyParser.json());

var delayModule = function(app, body) {
  setTimeout(function() {
    app.send(Status.SUCCESS);
  }, body.payload.moduleParam.delayTime || 1000);
}

express.post('/', function (request, response) {
  var app = new ConversePluginsSDK.http({ request, response });

  app.setModules({
    delayModule: delayModule
  });

  app.handleRequest();
});
```

## License
See LICENSE
