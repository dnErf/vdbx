;(function(){

  var s;

  function Stream(value) {

    var dStreams = []
    var dFns = []

    function stream(val) {
      if (val !== undefined) value = val
        dFns.forEach((fn,i) => {
          dStreams.length > 0 ? dStreams[i](fn(val)) : fn(val)
        })
      return value
    }

    stream.constructor = Stream

    stream.map = function(fn) {
      let newStream = value ? Stream(fn(value)) : Stream()
        dStreams.push(newStream)
        dFns.push(fn)
      return newStream
    }

    stream.scan = function(fn, acc) {
      let newStream = Stream(acc)
        stream.map((v) => {
          acc = fn(acc,v)
          newStream(acc)
        })
      return newStream
    }

    return stream

  }

  window.s = Stream
  return s

}())