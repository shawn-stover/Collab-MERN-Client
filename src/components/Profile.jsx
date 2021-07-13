import { useState, useEffect } from "react"
import { Redirect, Link } from "react-router-dom"
import axios from 'axios'
import Login from './Login'
import CalendarView from './calendar/CalendarView'
import Weather from './Weather'
import styled from "styled-components";



export default function Profile(props) {
    //state is information from the server
    const [message, setMessage] = useState('')
  
    const Events = styled.div`
    width: 190px;
    margin: 10px 0px;
    .h2 {
      margin: 5px 0px;
      padding: 10px 0px;
    }
    .h5 {
      padding: 5px 0px;
    }
    &:hover {
        text-decoration: underline;
      }
`

    //hit the auth locked route on the backend
    useEffect(() => {
        const getPrivateMessage = async () => {
            try{
                //get the jwt from local storage 
                const token = localStorage.getItem('jwtToken')
                //make up the auth headers
                const authHeaders = {
                    Authorization: token
                }
                //hit the auth locked endpoint
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`, {headers: authHeaders})
                console.log(response.data)

                //set state wwith data from the server
                setMessage(response.data.msg)
            }catch(error) {
                console.log(error)
                //log the user out if an error occurs
                props.handleLogout()
                
            }
        }
        getPrivateMessage()
    },[props])

    //redirect if there is no user in state
    if(!props.currentUser) return <Redirect to='/login' component={Login} currentUser= {props.currentUser}/>
    return(
        <div>
            <Weather />
            <h4>Greetings! {props.currentUser.name}👋</h4>
            <Link to="/calendar">Calendar</Link>
            <h5>your email is {props.currentUser.email}</h5>

            <div>
            <p>You have a secret message from the authorized user area!</p>

            <p>{message}</p> 
            </div>

                
            <Events>
                <Link to="/calendar">Calendar</Link>
              <h2>Today's Schedule:</h2>
              <h5><span>10:00am </span>- Brunch with Bill</h5>
              <h5><span>12:00pm</span> - Lunch with Jill</h5>
              <h5><span>2:00pm</span> - Meeting with Brian</h5>
              <h5><span>5:00pm</span> - Pickup Jenny</h5>
            </Events>
                
                
        </div>     
    )
}
