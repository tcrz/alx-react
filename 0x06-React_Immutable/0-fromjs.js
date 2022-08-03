/*
function getImmutableObject that accepts object as a parameter and
converts it into an immutable Map using fromJS of the Immutable.js library
*/

const Immutable = require('immutable');
export default function getImmutableObject (object) {
  return Immutable.fromJS(object);
}
