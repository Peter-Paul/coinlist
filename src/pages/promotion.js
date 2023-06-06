import { useState } from "react";
import Promote from "../components/promotion/promote";
import Verify from "../components/promotion/verify";
import Audit from "../components/promotion/audit";

function Promotion({validTimestamp,voteCoin}) {
    
    const [ activeState, setActive ] = useState("promote")
 
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

 

    return ( 
        <>
            <div>
                <nav className="nav nav-pills nav-justified mb-4">
                    <button className="nav-link mx-2" 
                        style={ ( activeState==="promote"  ) ? styles.activePage : styles.inactivePage } 
                        onClick={ () => setActive("promote") }>
                            <strong>
                                Promote Coin
                            </strong>
                    </button>
                    <button className="nav-link mx-2" 
                        style={ ( activeState==="audit" ) ? styles.activePage : styles.inactivePage }  
                        onClick={ () => setActive("audit") }>
                            <strong>
                                Audit Coin
                            </strong>
                    </button>
                    <button className="nav-link mx-2" style={ ( activeState==="dox" ) ? styles.activePage : styles.inactivePage }  
                    onClick={ () => setActive("dox") }>
                        <strong>
                                KYC
                        </strong>
                    </button>
                </nav>
            </div>

            { activeState==="promote" &&
                <Promote validTimestamp={validTimestamp} voteCoin={voteCoin} />
            }
            

            { activeState==="audit" &&
                <Audit styles={styles} validTimestamp={validTimestamp} voteCoin={voteCoin}/>
            }
            
            { activeState==="dox" &&
                <Verify styles={styles} validTimestamp={validTimestamp} voteCoin={voteCoin}/>
            }
         
        </>
     );
}

export default Promotion;