### vdbx
> Light weight re-write of some tools , like streams and lens
```sh
npm install vdbx --save
```

```javascript
import {lens,stream} from 'vdbx'
```

### Lens
> a function that's used to help focus on a specific thing

```js
var obj = {
  a : 'string1' ,
  b : {
    c : 'string2' ,
    d : 'string3' ,
    e : ['array','String']
  }
}

var lens = l`${obj}/b/`

console.log(lense)
// this will out put a object with the value of
b : {
  c : 'string2' ,
  d : 'string3' 
}

// with the refence on original object thru
lens._$rdx 

// this lens has some ulitity like map and can overlook the next set of value
// by the given key and iterate over it

lens._$map((value) => {
  console.log(value) // -> array - String
  return value 
  } , 'e') // it overlook and see the value on e

// scan takes a (fn , overlook , value)
lens._$scan((acc,cur) => {
  console.log(acc,cur) // accumulator string2 string3 , this will not read the value of e unless you overlook it
  return cur
},'','accumulator')

// i use _$ to call the utilities so that it will not override the value
// because it is still object

lens.a // -> string1
lens.a = 'STRING1' // this will overwrite the value of a

lens._$commit() // -> this will merge the accumulated changes value on the lens to the origin (radix/rdx)

console.log(obj.a) // STRING1


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