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
> reactive data structure like cells in spreadsheet

```js 

var name = Stream()

name('Ter')
name() // -> Ter

// utilities map and scan
var greet = stream_Name.map(function(value) {
  return value.toLowerCase()
})

greet() // -> ter

// unlike other stream implementation , this take itself as origin in invoking scan operations
var greetings = greet.scan((accumulator,value) => {
  return accumulator + ' ' + value
} , 'Hi! ')

greetings() // -> Hi! ter

// you can merge stream and returns the value in array
var name_greetings = Stream.merge([name,greetings]) 

name_greetings() // -> ['ter','Hi! ter']

// stream function will react and change its output when the value change


```