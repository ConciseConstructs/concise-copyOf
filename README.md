# concise-copyOf
Returns a unique copy of a reference type variable such as an Array or Object.

## Summary
  Creates a brand new reference variable (new memory location) so a truly unique copy can be made and manipulated without interfering with the original Array / Object.

  #### Reference type (Array / Object) behavior:
```
    let objOne = { id: 1, type: 'customer' }
    let objTwo = objOne
    objTwo.id = 2
    console.log(objOne.id) // Outputs 2
```

  #### copyOf returns a brand new reference type distinct from original
```
    const copyOf = require('concise-copyof')

    let objOne = { id: 1, type: 'customer' }
    let objTwo = copyOf(objOne)
    objTwo.id = 2
    console.log(objOne.id) // Outputs 1
```

### Background
  While reference type variables come in handy on many occasions, there are times when you need to make a copy and not have the original manipulated since both variables will point to the same memory location.  This is a simple and small footprint function which will return an exact copy but with a new memory location.  Thereby isolating it from the original data.