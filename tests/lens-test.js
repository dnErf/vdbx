var o = require('ospec')
var l = require('../index').lens

o.spec('ospec and lens', function() {
  o('defined' , function() {
    o(1+2).equals(3)
  })
  o('specified path only' , function() {
    let testObj = {
      a : 'one' ,
      b : {
        z : 1
      }
    }
    let lensObj = l`${testObj}/b/`
    o(lensObj.a).equals(undefined)
    o(lensObj.z).equals(1)
  })
})