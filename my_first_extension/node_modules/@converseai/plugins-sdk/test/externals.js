/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const Payloads            = require('../').Payloads;
const ExternalResponse    = Payloads.ExternalFunctionResponse;
const HTTPResponse        = Payloads.HTTPResponse;
const expect              = require('chai').expect;


describe('Externals', function () {

  it('External empty constructor ', function() {

    var payload = new ExternalResponse();
    payload.setHTTPStatus(200);
    payload.setBody('Hello, World!');
    payload.setHeaders({a: 'b'});

    expect(payload).has.property('externalCallReturn');
    expect(payload.externalCallReturn).has.property('httpStatus').to.equal(200);
    expect(payload.externalCallReturn).has.property('body').to.equal('Hello, World!');
    expect(payload.externalCallReturn).has.property('headers').has.property('a').to.equal('b');
  })

  it('External constructor', function() {

    var http = new HTTPResponse();
    http.setHTTPStatus(200);
    http.setBody('Hello, World!');
    http.setHeaders({a: 'b'});
    var payload = new ExternalResponse(http);

    expect(payload).has.property('externalCallReturn');
    expect(payload.externalCallReturn).has.property('httpStatus').to.equal(200);
    expect(payload.externalCallReturn).has.property('body').to.equal('Hello, World!');
    expect(payload.externalCallReturn).has.property('headers').has.property('a').to.equal('b');
  })

});
