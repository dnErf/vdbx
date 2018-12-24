var o = require('ospec')
var s = require('../index').stream

o.spec('ospec and stream', function() {
  o('defined' , function() {
    o(1+2).equals(3)
  })
  o('as setter/getter' , function() {
    let 
      myStream = s(1)
      streamFirstValue = myStream()
      streamSecondValue = myStream(2)
    o(streamFirstValue).equals(1)
    o(streamSecondValue).equals(2)
  })
})