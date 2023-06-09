import { useState } from "react";
import CoinManagement from "../components/admin/coinManagement";
import Banner from "../components/admin/banners";
import GameManagement from "../components/admin/gameManagement";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Admin({voteCoin,uploadBanner}) {
    const [ activeState, setActive ] = useState("coins")
    const {userAddress,connected,admin} = useSelector((state) => state.app)

    const styles = {
        promotion:{
            borderRadius:"50px",
        },
        promotionInfo:{
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            textAlign: "center",
            minHeight:"50vh"
        },
        discount10:{
            backgroundColor: "white",
            color: "black",
            borderRadius:"50px",
        },
        discount25:{
            borderLeftColor:"white",
            borderLeftWidth:"1px",
            borderLeftStyle:"solid",
        },
        activePage:{
            color: "white",
            backgroundColor: "#2a52be"
        },
        inactivePage:{
            color: "white",
            borderColor:"#2a52be",
            borderWidth:"1px",
            borderStyle:"solid",
        }
    }

    if( !userAddress || !connected || (userAddress!==admin) ){
        return <Navigate to="/" />
    }

    return ( 
        <>
            <div>
                <nav className="nav nav-pills nav-justified mb-4">
                    <button className="nav-link mx-2" 
                        style={ ( activeState==="coins"  ) ? styles.activePage : styles.inactivePage } 
                        onClick={ () => setActive("coins") }>
                        Edit Coins
                    </button>
                    <button className="nav-link mx-2" 
                        style={ ( activeState==="games"  ) ? styles.activePage : styles.inactivePage } 
                        onClick={ () => setActive("games") }>
                        Edit Games
                    </button>
                    <button className="nav-link mx-2" 
                        style={ ( activeState==="banners" ) ? styles.activePage : styles.inactivePage }  
                        onClick={ () => setActive("banners") }>
                        Edit Banners
                    </button>
                </nav>
            </div>

            { activeState==="coins" &&
                <CoinManagement voteCoin={voteCoin} />
            }

            { activeState==="banners" &&
                <Banner uploadBanner={uploadBanner} />
            }

            { activeState==="games" &&
                <GameManagement />
            }

            
        </>
     );
}

export default Admin;