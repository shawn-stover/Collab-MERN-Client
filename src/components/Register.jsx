import { useState } from "react"
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { Redirect } from "react-router-dom"
import Profile from './Profile'

export default function Register(props) {
    //state for the controlled form
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //state for the flash message from the server
    const [message, setMessage] = useState('')

    //function to handle form submission
    const handleSubmit = async e => {
        try{
            e.preventDefault()
            //make a request body
            const requestBody = {
                name: name,
                email: email,
                password: password
            }
            //post registration data to the server
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/register`, requestBody)
            //take the token out of the response
            const { token } = response.data

            //set token in local storage
            localStorage.setItem('jwtToken', token)

            //decode the token
            const decoded = jwt.decode(token)

            //set the user in the app.js state
            props.setCurrentUser(decoded)

        }catch(error) {
            //set message if the error is a 400
            if(error.response.status === 400){
                setMessage(error.response.data.msg)
            } else {
                console.log(error)
            }
        }
        console.log('submit the form! 🌽')
    }

    //redirect if the user is logged in
    if(props.currentUser) return <Redirect to="/profile" componenet= {Profile} currentUser={props.currentUser}/>
    return(
        <div>
           <h3>Registration Form</h3>

            <p>{message}</p>

           <form onSubmit= {handleSubmit}>

               <label htmlFor='name-input'>Name:</label>
               <input
                    id='name-input'
                    type='text'
                    placeholder="enter your name user ..."
                    onChange={e => setName(e.target.value)}
                    value= {name}
               />

               <label htmlFor='email-input'>Name:</label>
               <input
                    id='email-input'
                    type='email'
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                    value= {email}
               />

               <label htmlFor='password-input'>Name:</label>
               <input
                    id='password-input'
                    type='password'
                    placeholder="desired password"
                    onChange={e => setPassword(e.target.value)}
                    value= {password}
               />

                <input 
                    type='submit'
                    value='make new account'

                />
           </form>
        </div>
    )
}