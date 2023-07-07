// import { useState } from "react";
import Promote from "../components/promotion/promote";
import Verify from "../components/promotion/verify";
import Audit from "../components/promotion/audit";
import { Link, useParams } from "react-router-dom";
import TopBanner from "../shared/topBanners";
import { useTranslation } from "react-i18next";

function Promotion({voteCoin}) {
    const {service:activeState} = useParams()
    const {t:content} = useTranslation()
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
        },
        cardBlue:{
            backgroundColor:"#003153",
            borderColor:"#0076CE"
        },
    }

 

    return ( 
        <>
            <TopBanner />
            <div className="card shadow" style={styles.cardBlue}>
                <div className="card-body">

                    <div className="row">
                        <div className="col-3">
                            <h2><strong>{content("Services")}</strong></h2>
                        </div>
                        <div className="col-9">
                            <nav className="nav nav-pills nav-justified mb-4">
                                <Link className="nav-link mx-2" 
                                    style={ ( activeState==="promote"  ) ? styles.activePage : styles.inactivePage } 
                                    to={"/services/promote"}>
                                        <strong>
                                            {content("PromoteCoin")}
                                        </strong>
                                </Link>
                                <Link className="nav-link mx-2" 
                                    style={ ( activeState==="audit" ) ? styles.activePage : styles.inactivePage }  
                                    to={"/services/audit"}>
                                        <strong>
                                            {content("AuditCoin")}
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
                
                </div>
            </div>
        </>
     );
}

export default Promotion;