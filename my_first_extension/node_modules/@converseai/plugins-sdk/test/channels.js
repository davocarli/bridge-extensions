/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const Payloads    = require('../').Payloads;
const Channel     = Payloads.Channel;
const expect      = require('chai').expect;


describe('Channels – Sync', function () {

  it('Inbound Response – FULL', function() {
    const Sync = Channel.Sync;
    var payload = new Sync.InboundResponse();
    var output = new Sync.InboundOutput();
    var message = new Sync.Message.Text('ABC');

    expect(message).has.property('text').to.equal('ABC');

    output.setMessage(message);
    output.setData({a: 'b', c: 'd'});

    expect(output).has.property('channelMessage').to.equal(message);
    expect(output).has.property('channelSetting');
    expect(output.channelSetting).has.property('data').has.property('a').to.equal('b');
    expect(output.channelSetting).has.property('sync').to.equal(true);

    payload.addOutput(output);

    expect(payload).has.property('channelOutput').to.be.an('array').that.does.include(output);
  })

  it('Outbound Response – FULL', function() {
    const Sync = Channel.Sync;
    var payload = new Sync.OutboundResponse();
    var httpResponse = new Payloads.HTTPResponse();

    httpResponse.setHTTPStatus(200);
    httpResponse.setBody('ABC');
    httpResponse.setHeaders({a: 'b'});

    expect(httpResponse).has.property('httpStatus').to.equal(200);
    expect(httpResponse).has.property('body').to.equal('ABC');
    expect(httpResponse).has.property('headers').has.property('a').to.equal('b');

    payload.setHTTPResponse(httpResponse);

    expect(payload).has.property('httpResponse').to.equal(httpResponse);
  })

  it('Inbound Response – FAST', function() {
    const Sync = Channel.Sync;
    var payload = new Sync.InboundResponse();
    var output = new Sync.InboundOutput(new Sync.Message.Text('ABC'), {
      data: {a: 'b', c: 'd'}
    });

    expect(output).has.property('channelMessage').has.property('text').to.equal('ABC');
    expect(output).has.property('channelSetting').has.property('data').has.property('a').to.equal('b');
    expect(output.channelSetting).has.property('sync').to.equal(true);

    payload.addOutput(output);

    expect(payload).has.property('channelOutput').to.be.an('array').that.does.include(output);
  })

  it('Outbound Response – FAST', function() {
    const Sync = Channel.Sync;
    var payload = new Sync.OutboundResponse({httpStatus: 200, body: 'ABC', 'headers': {a: 'b'}});

    payload.setChannelSetting({});

    expect(payload).has.property('channelSetting');
    expect(payload).has.property('httpResponse');
    expect(payload.httpResponse).has.property('httpStatus').to.equal(200);
    expect(payload.httpResponse).has.property('body').to.equal('ABC');
    expect(payload.httpResponse).has.property('headers').has.property('a').to.equal('b');

  })

});

describe('Channels – Async', function () {

  it('Inbound Response – FULL', function() {
    const Async = Channel.Async;
    var payload = new Async.InboundResponse();
    var httpResponse = new Payloads.HTTPResponse();

    httpResponse.setHTTPStatus(200);
    httpResponse.setBody('ABC');
    httpResponse.setHeaders({a: 'b'});

    expect(httpResponse).has.property('httpStatus').to.equal(200);
    expect(httpResponse).has.property('body').to.equal('ABC');
    expect(httpResponse).has.property('headers').has.property('a').to.equal('b');

    var output = new Async.InboundOutput();
    var message = new Async.Message.Text('ABC');

    expect(message).has.property('text').to.equal('ABC');

    output.setMessage(message);
    output.setData({a: 'b', c: 'd'});

    expect(output).has.property('channelMessage').to.equal(message);
    expect(output).has.property('channelSetting');
    expect(output.channelSetting).has.property('data').has.property('a').to.equal('b');
    expect(output.channelSetting).has.property('sync').to.equal(false);

    payload.addOutput(output);

    expect(payload).has.property('channelOutput').to.be.an('array').that.does.include(output);
  })

  it('Outbound Response – FULL', function() {
    const Async = Channel.Async;
    var payload = new Async.OutboundResponse();
  })

  it('Inbound Response – FAST', function() {
    const Async = Channel.Async;
    var payload = new Async.InboundResponse({httpStatus: 200, body: 'ABC', headers: {a: 'b'}});

    expect(payload).has.property('httpResponse');
    expect(payload.httpResponse).has.property('httpStatus').to.equal(200);
    expect(payload.httpResponse).has.property('body').to.equal('ABC');
    expect(payload.httpResponse).has.property('headers').has.property('a').to.equal('b');

    var output = new Async.InboundOutput(new Async.Message.Text('ABC'), {
      data: {a: 'b', b: 'c'}
    });

    expect(output).has.property('channelMessage').has.property('text').to.equal('ABC');
    expect(output).has.property('channelSetting');
    expect(output.channelSetting).has.property('data').has.property('a').to.equal('b');
    expect(output.channelSetting).has.property('sync').to.equal(false);


    payload.addOutput(output);

    expect(payload).has.property('channelOutput').to.be.an('array').that.does.include(output);
  })

  it('Outbound Response – FAST', function() {
    const Async = Channel.Async;
    var payload = new Async.OutboundResponse();
  })

});
