import * as notifications from '../../notifications.json';


export const getAllNotificationsByUser = (userId) =>{
  let userNotifs = []
  notifications.default.map((item)=>{
    if (item.author.id == userId) {
      userNotifs.push(item.context)
    }
  })
  return userNotifs
}
