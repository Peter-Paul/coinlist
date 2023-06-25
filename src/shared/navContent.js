import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Subscribe from "./subscribe";
import Media from "./media";
import { useState } from "react";

function NavContent({smallView=false}) {
    const {bannerMap,doctoreTwitter,doctoreTelegram,admin,userAddress} = useSelector((state) => state.app)
    const [promoteOption,changePromoteOptionView] = useState(false)
    const [rankOption,changeRankOptionView] = useState(false)

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
        subLink:{
            textDecoration:"none",
            fontSize:"17px",
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
        <ul className="d-flex flex-column me-2" style={styles.nav} >
                  
                        <li data-bs-dismiss={smallView?"offcanvas":""}>
                            <div className="d-flex justify-content-between">
                                <Link style={styles.link} to="/" onClick={ () => window.scrollTo({top: 0})}><i className="fa fa-table me-2"></i>Rankings</Link>
                                <span onClick={ () => changeRankOptionView(!rankOption)} className="mt-2 me-5" style={{fontSize:"15px"}}>
                                    <i className={`fa fa-chevron-${rankOption?"down":"right"}`}></i>
                                </span>
                            </div>

                            <div className={`d-flex ${rankOption?"":"d-none"}`}>
                                <div className="d-flex flex-column ms-2">
                                    <Link className="mt-2"  style={styles.subLink} to="/" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-circle me-2" style={{fontSize:"5px"}}></i>Coin List</Link>
                                    <Link className="mt-2"  style={styles.subLink} to="/addCoin" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-circle me-2" style={{fontSize:"5px"}}></i>Add Coin</Link>
                                </div>
                            </div>
                        </li>
                        <hr className="mb-4" />
                        <li data-bs-dismiss={smallView?"offcanvas":""} >
                            <div className="d-flex justify-content-between">
                                <Link  style={styles.link} to="/services/promote" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-bolt me-2"></i>Promotions</Link>
                                <span onClick={ () => changePromoteOptionView(!promoteOption)} className="mt-2 me-5" style={{fontSize:"15px"}}>
                                    <i className={`fa fa-chevron-${promoteOption?"down":"right"}`}></i>
                                </span>
                            </div> 

                            <div className={`d-flex ${promoteOption?"":"d-none"}`}>
                                <div className="d-flex flex-column ms-2">
                                    <Link className="mt-2"  style={styles.subLink} to="/services/promote" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-circle me-2" style={{fontSize:"5px"}}></i>Promote Coin</Link>
                                    <Link className="mt-2"  style={styles.subLink} to="/services/audit" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-circle me-2" style={{fontSize:"5px"}}></i>Audit Coin</Link>
                                    <Link className="mt-2"  style={styles.subLink} to="/services/kyc" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-circle me-2" style={{fontSize:"5px"}}></i>KYC</Link>
                                </div>
                            </div>
                        </li>

                        <hr className="mb-4" />
                        <li data-bs-dismiss={smallView?"offcanvas":""}>
                            <Link style={styles.link} to="/partners" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-users me-2"></i>Partners</Link>
                        </li>

                        <hr />
                        {
                            admin && userAddress && (admin === userAddress) &&
                            <>
                                <li data-bs-dismiss={smallView?"offcanvas":""}>
                                    <Link style={styles.link} to="/admin" onClick={ () => window.scrollTo({top: 0})}><i className="fa fa-lock me-2"></i>Admin</Link>
                                </li>
                                <hr />
                            </>
                        }
                        <img
                            alt="not found"
                            style={styles.banner}
                            src={bannerMap['banner7'].url}
                            className="my-5"
                            onClick={() => { window.open(bannerMap['banner7'].link,"_blank") }}
                        />  
                        <li className="mt-auto" data-bs-dismiss={smallView?"offcanvas":""}>
                            <Subscribe/>
                        </li>
                        <hr />
                        <li className="mt-auto" data-bs-dismiss={smallView?"offcanvas":""}>
                            <Media twitter={doctoreTwitter} telegram={doctoreTelegram}/>
                        </li>
                    </ul>
    );
}

export default NavContent;