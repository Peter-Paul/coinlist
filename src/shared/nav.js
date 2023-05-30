import { Link } from "react-router-dom";
import Media from "./media";
import Subscribe from "./subscribe";
import { useSelector } from "react-redux";
import "./nav.css"

function Nav({connectWallet,disconnectWallet,name}) {
    const {userAddress,connected,bannerMap} = useSelector((state) => state.app)
    const styles = {
        navBar:{
            backgroundColor: "#003153"
        },
        logo:{
            fontFamily:"Righteous"
        },
        nav:{
            listStyleType:"none",
            minHeight:"82vh"
        },
        link:{
            textDecoration:"none",
            fontSize:"20px",
            color:'white'
        },
        card:{
            width:"140px"
        },
        priceDisplay:{
            fontSize:"12px"
        }
    }
    return ( 
        <>
      
            <div className="d-flex justify-content-between" style={styles.navBar}>
                <div>
                    <button className="btn btn-lg btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <i className="fa fa-bars"></i>
                    </button>
                </div>

                <div></div>

                <div className="d-none d-md-block">

                    {
                        connected ?
                            <div>
                                <button className="btn btn-lg btn-outline-light" onClick={()=>disconnectWallet()}>
                                    <span className="me-1">
                                        {`${userAddress.substr(0,10)}...`}
                                    </span>
                                    Disconnect
                                </button>
                            </div>
                        :
                            <div>
                                <button className="btn btn-lg btn-outline-light" onClick={()=>connectWallet()}> <i className="fa fa-plug me-1"></i> Connect Wallet</button>
                            </div>
                    }
                </div>

                
                <h1 className="" style={styles.logo}>{name}</h1>
            </div>

            <div className="offcanvas offcanvas-start bg-dark" style={{width:"350px"}} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 style={styles.logo} className="offcanvas-title" id="offcanvasWithBothOptionsLabel">{name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body" >
                    <ul className="d-flex flex-column" style={styles.nav} >
                  
                        <li data-bs-dismiss="offcanvas">
                            <Link style={styles.link} to="/">Rankings</Link>
                        </li>
                        {/* <hr className="mb-4" />
                        <li data-bs-dismiss="offcanvas">
                            <Link style={styles.link} to="/token">Token</Link>
                        </li>       */}
                        <hr className="mb-4" />
                        <li data-bs-dismiss="offcanvas">
                            <Link style={styles.link} to="/promote">Promotions</Link>
                        </li>
                        {/* <hr className="mb-4" /> */}
                        {/* <li data-bs-dismiss="offcanvas">
                            <Link style={styles.link} to="/partners">Partners</Link>
                        </li> */}
                        <hr />
                        <li data-bs-dismiss="offcanvas">
                            <Link style={styles.link} to="/admin">Admin</Link>
                        </li>
                        <hr />
                        <img
                            alt="not found"
                            style={styles.banner}
                            src={bannerMap['banner4']}
                            className="my-5"
                        />  
                        <li className="mt-auto" data-bs-dismiss="offcanvas">
                            <Subscribe/>
                        </li>
                        <hr />
                        <li className="mt-auto" data-bs-dismiss="offcanvas">
                            <Media />
                           {/* <span> <i className="fa fa-user"></i> </span> <Link style={styles.link} to="/">Profile</Link> */}
                        </li>
                    </ul>
                    {/* <Link style={styles.link} to="/home/wallet">Profile</Link> */}
                </div>
            </div>
        </>
     );
}

export default Nav;