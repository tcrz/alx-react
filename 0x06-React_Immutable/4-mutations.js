/*
Create an Immutable Map with given object and modify values:
Modify the value for the index 2, to Benjamin
Modify the value for the index 4, to Oliver
*/

const { Map } = require("immutable")

const object =  {
     1: 'Liam',
     2: 'Noah',
     3: 'Elijah',
     4: 'Oliver',
     5: 'Jacob',
     6: 'Lucas',
}

export const map = Map(object)
export const map2 = map.set(2, 'Benjamin').set(4, 'Olivera')
//console.log(map2.toJS())

