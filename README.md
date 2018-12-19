### vdbx
> Light weight re-write of some tools , like streams and lens

### Lens
```js
var obj = {
  a : 'string1' ,
  b : {
    c : 'string2' ,
    d : 'string3' ,
    e : ['arrayString']
  }
}

var lense = l`${obj}\b\`

console.log(lense)
// this will out put a object with the value of
b : {
  c : 'string2' ,
  d : 'string3' 
}

// with the refence on original object thru
lense._$rdx 

// this lense has some ulitity like map and can overlook the next set of value
// by the given key and iterate over it
lense._$map((value) => { return value } , 'e')
```

### Streams

```js 

var stream = s()
stream('name')
stream() // -> name

// utilities map and scan
// unlike other stream implementation , this take itself as origin in invoking scan operations
var newStream = stream.scan((cur,next) => {
  return next
} , acc)

```