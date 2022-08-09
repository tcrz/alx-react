import * as data from '../../notifications.json';
import { normalize, schema } from "normalizr";


export const getAllNotificationsByUser = (userId) =>{
  let userNotifs = []
  data.default.map((item)=>{
    if (item.author.id == userId) {
      userNotifs.push(item.context)
    }
  })
  return userNotifs
}

const user = new schema.Entity("users")
const message = new schema.Entity("messages", {}, {
  idAttribute: "guid"
})
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
})

export const normalizedData = normalize(data.default, [notification])
const id = "5debd764a7c57c7839d722e9"
const users = normalizedData.entities.users
// console.log(normalizedData.entities.users[id])