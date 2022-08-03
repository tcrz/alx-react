/* modify the function getImmutableObject using Map from Immutable.js */

const Immutable = require('immutable');
export default function getImmutableObject (object) {
  return Immutable.Map(object);
}
