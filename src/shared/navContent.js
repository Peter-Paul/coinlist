import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Subscribe from "./subscribe";
import Media from "./media";
import { useState } from "react";

function NavContent({handleLanguageChange,content,smallView=false}) {
    const {bannerMap,doctoreTwitter,doctoreTelegram,admin,userAddress} = useSelector((state) => state.app)
    const [promoteOption,changePromoteOptionView] = useState(false)
    const [rankOption,changeRankOptionView] = useState(false)
    const [gameOption,changeGameOptionView] = useState(false)
    const [currentLang,setLang] = useState("en")

    const styles = {
        input:{
            color:"white",
            width:"120px"
        },
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
                        <li className="mb-3">
                            <div className="d-flex justify-content-between">
                                <span style={{fontSize:"20px"}}><i className="fa fa-language"></i></span>
                                <select name={currentLang} className="form-select bg-dark shadow" aria-label="Default select example" style={styles.input}
                                onChange={ (e) => {handleLanguageChange(e); setLang(e.target.value) } } value={currentLang}>
                                    <option value="en">English</option>
                                    <option value="sp">Español</option>
                                    <option value="bz">Brasileiro</option>
                                </select>
                            </div>
                        </li>
                        <li >
                            <div className="d-flex justify-content-between">
                                <Link data-bs-dismiss={smallView?"offcanvas":""} style={styles.link} to="/" onClick={ () => window.scrollTo({top: 0})}><i className="fa fa-table me-2"></i>{content("Rankings")}</Link>
                                <span onClick={ () => changeRankOptionView(!rankOption)} className="mt-2 me-5" style={{fontSize:"15px"}}>
                                    <i className={`fa fa-chevron-${rankOption?"down":"right"}`}></i>
                                </span>
                            </div>

                            <div className={`d-flex ${rankOption?"":"d-none"}`}>
                                <div className="d-flex flex-column ms-2">
                                    <Link data-bs-dismiss={smallView?"offcanvas":""} className="mt-2"  style={styles.subLink} to="/" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-circle me-2" style={{fontSize:"5px"}}></i>{content("CoinList")}</Link>
                                    <Link data-bs-dismiss={smallView?"offcanvas":""} className="mt-2"  style={styles.subLink} to="/addCoin" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-circle me-2" style={{fontSize:"5px"}}></i>{content("AddCoin")}</Link>
                                </div>
                            </div>
                        </li>
                        <hr className="mb-4" />
                        <li >
                            <div className="d-flex justify-content-between">
                                <Link data-bs-dismiss={smallView?"offcanvas":""} style={styles.link} to="/services/promote" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-bolt me-2"></i>{content("Promotions")}</Link>
                                <span onClick={ () => changePromoteOptionView(!promoteOption)} className="mt-2 me-5" style={{fontSize:"15px"}}>
                                    <i className={`fa fa-chevron-${promoteOption?"down":"right"}`}></i>
                                </span>
                            </div> 

                            <div className={`d-flex ${promoteOption?"":"d-none"}`}>
                                <div className="d-flex flex-column ms-2">
                                    <Link data-bs-dismiss={smallView?"offcanvas":""} className="mt-2"  style={styles.subLink} to="/services/promote" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-circle me-2" style={{fontSize:"5px"}}></i>{content("PromoteCoin")}</Link>
                                    <Link data-bs-dismiss={smallView?"offcanvas":""} className="mt-2"  style={styles.subLink} to="/services/audit" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-circle me-2" style={{fontSize:"5px"}}></i>{content("AuditCoin")}</Link>
                                    <Link data-bs-dismiss={smallView?"offcanvas":""} className="mt-2"  style={styles.subLink} to="/services/kyc" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-circle me-2" style={{fontSize:"5px"}}></i>KYC</Link>
                                </div>
                            </div>
                        </li>

                        <hr className="mb-4" />
                        <li >
                            <div className="d-flex justify-content-between">
                                <Link  style={styles.link} to="/games" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-gamepad me-2"></i>{content("Games")}</Link>
                                <span onClick={ () => changeGameOptionView(!gameOption)} className="mt-2 me-5" style={{fontSize:"15px"}}>
                                    <i className={`fa fa-chevron-${gameOption?"down":"right"}`}></i>
                                </span>
                            </div> 

                            <div className={`d-flex ${gameOption?"":"d-none"}`}>
                                <div className="d-flex flex-column ms-2">
                                    <Link data-bs-dismiss={smallView?"offcanvas":""} className="mt-2"  style={styles.subLink} to="/games" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-circle me-2" style={{fontSize:"5px"}}></i>{content("GamesList")}</Link>
                                    <Link data-bs-dismiss={smallView?"offcanvas":""} className="mt-2"  style={styles.subLink} to="/addGame" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-circle me-2" style={{fontSize:"5px"}}></i>{content("AddGame")}</Link>
                                </div>
                            </div>
                        </li>


                        <hr className="mb-4" />
                        <li data-bs-dismiss={smallView?"offcanvas":""}>
                            <Link style={styles.link} to="/partners" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-users me-2"></i>{content("Partners")}</Link>
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

                        {
                            bannerMap['banner7'].url!==""?
                            <img
                                alt="not found"
                                style={styles.banner}
                                src={bannerMap['banner7'].url}
                                className="my-5"
                                onClick={() => { window.open(bannerMap['banner7'].link,"_blank") }}
                            />  :
                            <div className="my-5">
                                <iframe title="navB" data-aa='2238709' src='//ad.a-ads.com/2238709?size=250x250' style={{width:'250px', height:'250px', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe>
                            </div>

                        }
                        
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