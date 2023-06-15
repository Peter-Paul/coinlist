import { useSelector } from "react-redux";
import "./nav.css"
import NavContent from "./navContent";
import PriceDisplay from "./priceDisplay";
import Logo from "./logo";

function Nav({connectWallet,disconnectWallet,name,priceDisplay}) {
    const {userAddress,connected} = useSelector((state) => state.app)
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
      
            <div className="d-flex justify-content-evenly" style={styles.navBar}>
                <div className="d-block d-custom-none">
                    <button className="btn btn-lg btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <i className="fa fa-bars"></i>
                    </button>
                </div>

                <div></div>

                <div className="d-none d-custom-block">
                    <PriceDisplay priceDisplay={priceDisplay} />
                </div>
                
                <div className="d-none d-md-block">
                    {
                        connected ?
                            <div>
                                <button className="btn btn-lg btn-outline-dell-blue" onClick={()=>disconnectWallet()}>
                                    <span className="me-1">
                                        {`${userAddress.substr(0,10)}...`}
                                    </span>
                                    Disconnect
                                </button>
                            </div>
                        :
                            <div>
                                <button className="btn btn-lg btn-outline-dell-blue" onClick={()=>connectWallet()}> <i className="fa fa-plug me-1"></i> Connect Wallet</button>
                            </div>
                    }
                </div>
                <div className="d-block d-custom-none">
                    <Logo name={name} />
                </div>
                {/* <h1  style={styles.logo}>{name}</h1> */}
            </div>

            <div className="offcanvas offcanvas-start bg-dark" style={{width:"350px"}} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <Logo name={name} />
                    {/* <h5 style={styles.logo} className="offcanvas-title" id="offcanvasWithBothOptionsLabel">{name}</h5> */}
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body" >
                        <NavContent smallView={true} />
                </div>
            </div>
        </>
     );
}

export default Nav;