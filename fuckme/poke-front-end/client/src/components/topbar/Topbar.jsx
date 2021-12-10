import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function Topbar({user, setUser}){
    
    
    
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" })
        .then(console.log("should log out"))
        .then((r) => {
          
            setUser(null);
    
        });
      }
    
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Pokebook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for anything" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink"><Link to="/">Homepage</Link></span>
                    {/* <span className="topbarLink"><Link to="/me">Profile</Link></span> */}
                    <span className="topbarLink"><Link to="/logout" handleLogoutClick={handleLogoutClick}>Sign Out  </Link></span>
                </div>
                <div className="topbarIcons">
                    {/* <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">53</span>
                    </div> */}
                </div>
                {/* <img src="/assets/person/pic1.jpg" className="topbarImage" /> */}
            </div>
        </div>
    )
}