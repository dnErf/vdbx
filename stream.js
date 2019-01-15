;(function() {

  function Stream(value) {

    var
      dStreams = []
      , dFns = []

    function stream(val) {
      if (val !== undefined) {
        value = val
        dFns.forEach((fn, i) => {
          dStreams.length > 0 ? dStreams[i](fn(val)) : fn(val)
        })
      }
      return value
    }

    stream.constructor = Stream

    stream.map = function(fn) {
      let
        newStream = value === undefined ? Stream() : Stream(fn(value))
      dStreams.push(newStream)
      dFns.push(fn)
      return newStream
    }

    stream.scan = function(fn, acc) {
      let newStream = Stream(acc)
      stream.map((v) => {
        acc = fn(acc, v)
        newStream(acc)
      })
      return newStream
    }

    return stream

  }

  function merge(arrStream) {
    let
      newStream = Stream()
      , newArrStream = []
    arrStream.forEach((v, i) => {
      v.map(function(value) {
        newArrStream[i] = value
        newStream(newArrStream)
        return value
      })
    })
    return newStream
  }

  Stream.merge = merge

  typeof module === 'undefined' ? window.stream = Stream : module.exports = Stream

}())
