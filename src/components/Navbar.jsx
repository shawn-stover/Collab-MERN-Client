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
               <input type="text" className="search"></input><input type="button" className="button" value="🔎"></input>
           </Search>
        </nav>
    )
}
const Search = styled.form`
    display: flex;
    justify-content: center;
    padding-right: 50px;
    .search {
        color: white;
        width: 400px;
        height: 30px;
        border: none;
        background: rgba(145, 145, 145, 0.555);
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }
    .button {
        color: white;
        background: rgba(145, 145, 145, 0.555);
        border: none;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
`