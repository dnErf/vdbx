;(function() {

  var lob

  function Lob(lthru, obj) {

    lthru = lthru.toString().split('/').slice(1).slice(0, -1)

    var
      mkeys = []
      , rdx = obj

    function see(get, subj) {
      return get(subj)
    }

    function nGet(lenspath) {
      return (subj) => {
        lenspath.forEach((_, index) => {
          subj = subj[lenspath[index]]
        })
        mkeys = Object.keys(subj)
        return subj
      }
    }

    lob = see(nGet(lthru), obj)

    Lob.prototype = {

      _$map(fn, overlook) {

        let
          lookover = overlook === undefined
            ? mkeys : lob.hasOwnProperty(overlook)
              ? Object.keys(lob[overlook]) : []

        lookover.forEach((value, index) => {
          if (overlook !== undefined) {
            lob[overlook][value] = fn(lob[overlook][value], value, index)
          }
          if (overlook === undefined) {
            if (typeof lob[value] !== 'object') {
              lob[value] = fn(lob[value], value, index)
            }
          }
        })

        return lob

      },

      _$scan(fn, overlook, acc) {

        let
          init = arguments.length === 2
          , lookover = overlook === ''
            ? mkeys : lob.hasOwnProperty(overlook)
              ? Object.keys(lob[overlook]) : []

        lookover.forEach((value) => {
          if (overlook === '') {
            if (typeof lob[value] !== 'object') {
              if (init) {
                init = false
                acc = lob[value]
                lob[value] = acc
              }
              else {
                acc = fn(acc, lob[value], value)
                lob[value] = acc
              }
            }
          }
          else {
            if (init) {
              init = false
              acc = lob[overlook][value]
              lob[overlook][value] = acc
            }
            else {
              acc = fn(acc, lob[overlook][value], value)
              lob[overlook][value] = acc
            }
          }
        })

        return lob

      },

      _$commit() {

        mkeys.forEach((value) => {
          rdx[value] = lob[value]
        })

      },

      _$rdx : rdx

    }

    this.lob = Object.create(Lob.prototype)
    this.lob = Object.assign(this.lob, lob)

    return this.lob

  }

  typeof module === 'undefined' ? window.lens = Lob : module.exports = Lob

}())
