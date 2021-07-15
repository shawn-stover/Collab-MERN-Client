import { Link } from "react-router-dom"
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { UserCircle } from "@styled-icons/boxicons-regular/UserCircle"
import { LogoutCircle } from "@styled-icons/remix-line/LogoutCircle"
import { LoginCircle } from "@styled-icons/remix-line/LoginCircle"

export default function Navbar(props) {
    // console.log(`props of navbar:`, props)

    //if the user is logged in
    const loggedIn = (
        <>
            <Link to="/profile">
                <User>
                <UserCircle />
                </User>
            </Link>

            <Link to="/" >
                <SignOut>
                <span onClick={props.handleLogout}><LogoutCircle /></span>
                </SignOut>
            </Link>
        </>
    )

    const loggedOut = (
        <>
             <Link to="/login">
                 <SignIn>
                    <LoginCircle />
                </SignIn>
            </Link>
            
            {/* <Link to="/register">
                New Account
            </Link> */}

        </>
    )

    return(
        <div className="navContainer">
            <Nav> 
                <Link to="/Profile">
                <AiOutlineHome className="home" fontSize="large"/>
                </Link>
            
                {props.currentUser ? loggedIn : loggedOut}
            
            {/* <Search>
                <input type="text" className="search"></input><input type="button" className="button" value="🔎"></input>
            </Search> */}
            </Nav>
        </div>
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
const Nav = styled.nav`
    .home {
        width: 50px;
        height: 30px;
        color: ceruleanblue;
    }
`
const User = styled.nav`
    font-size: 10px;
    width: 30px;
    height: 30px;
    color: ceruleanblue;
    `
const SignOut = styled.nav`
    font-size: 10px;
    width: 30px;
    height: 30px;
    color: ceruleanblue;
    `

const SignIn = styled.nav`
    font-size: 10px;
    width: 30px;
    height: 30px;
    color: ceruleanblue;
    `