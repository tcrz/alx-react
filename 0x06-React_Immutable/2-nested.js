/* function should return the value of the object at the defined path */

const { Map } = require("immutable")
export default function accessImmutableObject(object, array) {
  // make the object immutable
  ImmutableObject = Map(object)
  // checks and returns any keys in the list can be found in ImmutableOject
  return ImmutableObject.getIn(array)
}
