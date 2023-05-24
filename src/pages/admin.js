import { useState } from "react";
import CoinManagement from "../components/admin/coinManagement";
import Banner from "../components/admin/banners";

function Admin({validTimestamp,voteCoin,uploadBanner}) {
    const [ activeState, setActive ] = useState("coins")

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
            color: "black",
            backgroundColor: "white"
        },
        inactivePage:{
            color: "white",
            borderColor:"white",
            borderWidth:"1px",
            borderStyle:"solid",
        }
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
                        style={ ( activeState==="banners" ) ? styles.activePage : styles.inactivePage }  
                        onClick={ () => setActive("banners") }>
                        Edit Banners
                    </button>
                </nav>
            </div>

            { activeState==="coins" &&
                <CoinManagement validTimestamp={validTimestamp} voteCoin={voteCoin} />
            }

            { activeState==="banners" &&
                <Banner uploadBanner={uploadBanner} />
            }
        </>
     );
}

export default Admin;