/*
 * Copyright 2017-present, Converse.AI
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const Payloads    = require('../').Payloads;
const Module      = Payloads.Module;
const expect      = require('chai').expect;


describe('Modules', function () {

  it('Module setMessage string', function() {

    var payload = new Module.ModuleResponse();
    payload.setMessage("Hello, World!");

    expect(payload).has.property('moduleMessage');
    expect(payload.moduleMessage).has.property('text').to.equal('Hello, World!');
    expect(payload.moduleMessage).has.property('type').to.equal(0);
  })

  it('Module setMessage object', function() {

    var payload = new Module.ModuleResponse();
    var message = new Module.MessageText("Goodbye, Moon!", Module.MessageText.TYPE_QUESTION);
    payload.setMessage(message);

    expect(payload).has.property('moduleMessage');
    expect(payload.moduleMessage).has.property('text').to.equal('Goodbye, Moon!');
    expect(payload.moduleMessage).has.property('type').to.equal(1);
  })

});
