;(function(){

  // var l;
  
  function Lob (lthru,obj) {
    
    const { prototype } = Lob

    lthru = lthru.toString().split('/').slice(1).slice(0, -1)

    var 
      mkeys = []
      , rdx = obj

    function see(get,subj) { return get(subj) }

    function nGet(lenspath) {
      return (subj) => {
        lenspath.forEach((_,index) => {
          subj = subj[lenspath[index]]
        })
        mkeys = Object.keys(subj)
        return subj
      }
    }

    prototype._$map = function(fn,overlook) {
      
      let 
        lookover = overlook === undefined 
          ? mkeys : lob.hasOwnProperty(overlook) 
          ? Object.keys(lob[overlook]) : []
              
      lookover.forEach((value,index) => {
        if (overlook !== undefined) {
          lob[overlook][value] = fn(lob[overlook][value],value,index)
        }
        if (overlook === undefined) {
          if (typeof lob[value] !== 'object') {
            lob[value] = fn(lob[value],value,index)
          }
        }
      })

    }

    prototype._$scan = function(fn,overlook,acc) {
      
      let 
        init = arguments.length === 2
          , lookover = overlook === '' 
          ? mkeys : lob.hasOwnProperty(overlook) 
          ? Object.keys(lob[overlook]) : []
          
        lookover.forEach((value) => {
          if (overlook !== '') {
            if (!init) {
              acc = fn(acc,lob[overlook][value],value)
              lob[overlook][value] = acc
            }
            else {
              init = false
              acc = lob[overlook][value]
              lob[overlook][value] = acc
            }
          }
          if (overlook === '') {
            if (typeof lob[value] !== 'object') {
              if (!init) {
                acc = fn(acc,lob[value],value)
                lob[value] = acc
              }
              else {
                init = false
                acc = lob[value]
                lob[value] = acc
              }
            }
          }
        })

        return lob

      }

      prototype._$commit = function() {
        mkeys.forEach((value) => {
          rdx[value] = lob[value]
        })
      }

      prototype._$rdx = rdx
     
      this.lob = Object.create(prototype)
      this.lob = Object.assign(this.lob,see(nGet(lthru),obj))
      
      return this.lob
  
  }

  // window.l = Lob
  // return l

  typeof module !== 'undefined' 
  ? module.exports = Lob 
  : window.lens = Lob

}())