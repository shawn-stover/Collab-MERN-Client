import { Link } from 'react-router-dom'
import styled from "styled-components";

export default function Navbar(props) {
    // console.log(`props of navbar:`, props)

    //if the user is logged in
    const loggedIn = (
        <>
            <Link to="/profile">
                Profile
            </Link>
            <Link to="/" >
                <span onClick={props.handleLogout}>Logout!</span>
            </Link>
        </>
    )

    const loggedOut = (
        <>
             <Link to="/login">
                Login!
            </Link>
            <Link to="/register">
                New Account
            </Link>

        </>
    )

    return(
        <nav>
            <Link to="/">
                Home
            </Link>
            
           
            {props.currentUser ? loggedIn : loggedOut}
           
           <Search>
               <input type="text" id="search" value="search"></input><input type="button" value="🔎"></input>
           </Search>
        </nav>
    )
}
const Search = styled.form`
    dplay: inline;
`