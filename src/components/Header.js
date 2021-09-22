import { UserContext } from "../UserContext";
import { useContext } from 'react';
import { FaTree, FaSave,FaUserTie } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import '../static/header.css'
const Header = () => {
    // Header Component that is visable on all pages


    const User = useContext(UserContext);  // calls user from token-generated context

    const logOut = (e) => {
        // log out function clears our token from local storage and sends us back to the top of the site, which without a token routes us to the landing
        localStorage.removeItem('authToken');
        window.location.href='/'
    }

    const userProfileClick = (e) => {
        // link to our personal profile on header click
        e.preventDefault();
        let hrefString ='/user/'+User.username;
        window.location.href=hrefString;
    }
    const homePageClick = (e) => {
        // link to our homepage when clicking on the logo
        e.preventDefault();
        window.location.href="/";
    }
    return (
        <header>
          <div className="holder titleHolder" onClick={homePageClick}>
              <div id="logoText"><p id="h1LogoText">SaveTree</p></div>
              <div className="Icon"><FaSave/></div>
              <div className="Icon Tree"><FaTree/></div>
          </div>
          {(User !==null) && <div className="holder userHolder">
              <div className="userProfileLink" onClick={userProfileClick}>
                <h2><FaUserTie/></h2>
                <h3>{User.username}</h3>  
              </div>
              <h1 className="logOut" onClick={logOut}><IoLogOut /></h1>
            </div>}
        </header>
    )
}

export default Header
