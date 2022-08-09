import { login, logout, displayNotificationDrawer, hideNotificationDrawer} from './uiActionCreators'

test("login() returns correct action object", ()=>{
  const action = login('geremi@gmail.com', "sleeper343")
  expect(action).toEqual({ type: "LOGIN", user: { email: 'geremi@gmail.com', password:"sleeper343"}})
})

test("logout() returns correct action object", ()=>{
  const action = logout()
  expect(action).toEqual({ type: "LOGOUT"})
})

test("displayNotificationDrawer() returns correct action object", ()=>{
  const action = displayNotificationDrawer()
  expect(action).toEqual({ type: "DISPLAY_NOTIFICATION_DRAWER"})
})

test("hideNotificationDrawer returns correct action object", ()=>{
  const action = hideNotificationDrawer()
  expect(action).toEqual({ type: "HIDE_NOTIFICATION_DRAWER"})
})