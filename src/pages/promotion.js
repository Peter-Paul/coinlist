// import { useState } from "react";
import Promote from "../components/promotion/promote";
import Verify from "../components/promotion/verify";
import Audit from "../components/promotion/audit";
import { Link, useParams } from "react-router-dom";

function Promotion({voteCoin}) {
    const {service:activeState} = useParams()
    // const [ activeState, setActive ] = useState("promote")
 
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
            {console.log(activeState)}
            <div>
                <nav className="nav nav-pills nav-justified mb-4">
                    <Link className="nav-link mx-2" 
                        style={ ( activeState==="promote"  ) ? styles.activePage : styles.inactivePage } 
                        to={"/services/promote"}>
                            <strong>
                                Promote Coin
                            </strong>
                    </Link>
                    <Link className="nav-link mx-2" 
                        style={ ( activeState==="audit" ) ? styles.activePage : styles.inactivePage }  
                        to={"/services/audit"}>
                            <strong>
                                Audit Coin
                            </strong>
                    </Link>
                    <Link className="nav-link mx-2" style={ ( activeState==="kyc" ) ? styles.activePage : styles.inactivePage }  
                    to={"/services/kyc"}>
                        <strong>
                                KYC
                        </strong>
                    </Link>
                </nav>
            </div>

            { activeState==="promote" &&
                <Promote voteCoin={voteCoin} />
            }
            

            { activeState==="audit" &&
                <Audit styles={styles} voteCoin={voteCoin}/>
            }
            
            { activeState==="kyc" &&
                <Verify styles={styles} voteCoin={voteCoin}/>
            }
         
        </>
     );
}

export default Promotion;