import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css} from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';


const styles = StyleSheet.create({
  AppBody: {
    fontSize: '1.1rem',
    paddingLeft: 10,
    margin: 0
  }
})

export const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]

export const listNotifications = [
  {id: 1, type:"default", value: "New course available", html:{__html:null}},
  {id: 2, type:"urgent", html:{__html:"Object Oriented Programming intro"}},
  {id: 3, type:"default", value: "Present Javascript project requirements test on Friday"}
]

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {displayDrawer: false}
  }

  static propTypes = {
    logOut: PropTypes.func
  }

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => console.log('loggedout')
  }

  handleDisplayDrawer = () => {
    this.setState({displayDrawer: true})
  }

  handleHideDrawer = () => {
    this.setState({displayDrawer: false})
  }

  componentDidMount() {
    this.alert()
  }

  alert() {
    document.addEventListener('keydown', (e) => {
      e.preventDefault()
      if (e.ctrlKey && e.code =='KeyH'){
        this.props.logOut()
        alert('Logging you out')
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', alert)
  }

  render () {
    const displayDrawerState = this.state.displayDrawer;
    const showDrawer = this.handleDisplayDrawer;
    const hideDrawer = this.handleHideDrawer;
    const LoginStatus = () => {
      if (this.props.isLoggedIn) {
        return (
          <BodySectionWithMarginBottom title="Course List">
            <CourseList listCourses={listCourses}/>
          </BodySectionWithMarginBottom>
        )
      } else {
        return (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login/>
          </BodySectionWithMarginBottom>
        )
    }
  }
  return (
    <>
      <Notifications displayDrawer={displayDrawerState} showDrawer={showDrawer} hideDrawer={hideDrawer}
      listNotifications={listNotifications}/>
      <Header/>
      <div className={css(styles.AppBody)}>
        {LoginStatus()}
        <BodySection title="News from the School">
          <p>
            News around the school!
            News around the school!
            News around the school!
            News around the school!
            News around the school!
            News around the school!
            News around the school!
            News around the school!
          </p>
        </BodySection>
      </div>
      <Footer />
    </>

  );
  }
}
