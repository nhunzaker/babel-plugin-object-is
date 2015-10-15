var babel  = require("babel")
var plugin = require("../lib/index")
var assert = require("assert")

describe('babel-plugin-object-is', function() {

  it ('replaces object-is with an npm package', function() {
    var answer = babel.transform("Object.is(NaN, NaN)", { plugins: [ plugin ] });

    assert(answer.code.indexOf("require('object-is')(NaN, NaN)") >= 0)
  })

})
