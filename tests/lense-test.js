var o = require('ospec')
var l = require('../index').lense

o.spec('ospec and lense', function() {
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
    let lenseObj = l`${testObj}/b/`
    o(lenseObj.a).equals(undefined)
    o(lenseObj.z).equals(1)
  })
})