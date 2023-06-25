import { useSelector } from "react-redux";
import Media from "./media";
import Subscribe from "./subscribe";
import { Link } from "react-router-dom";
import Logo from "./logo";
import PartnerList from "../components/partners/partnerList";

function Footer({partners,name}) {
    const {bannerMap,doctoreTwitter,doctoreTelegram} = useSelector((state) => state.app)

    const styles = {
        links:{
            listStyleType:"none",
            textColor:"white"
        },
        logo:{
            fontFamily:"Koulen"
        },
        nav:{
            listStyleType:"none",
            minHeight:"82vh"
        },
        link:{
            textDecoration:"none",
            // fontSize:"15px",
            // color:'white'
        },
        wideBannerImage:{
            height: "260px",
            width: "700px",
        },
        wideBannerImageMobile:{
            height: "140px",
            width: "350px",
        },
        cardBlue:{
            backgroundColor:"#003153",
            borderColor:"#0076CE"
        },
    }


    return (  
        <>
            <div className="d-flex mt-5 justify-content-center">
                <img
                    alt="not found"
                    style={styles.wideBannerImage}
                    src={bannerMap['banner3'].url}
                    className="rounded mt-2 d-none d-md-block"
                    onClick={() => { window.open(bannerMap['banner3'].link,"_blank") }}
                />
                <img
                    alt="not found"
                    style={styles.wideBannerImageMobile}
                    src={bannerMap['banner3'].url}
                    className="rounded mt-2 d-block d-md-none"
                    onClick={() => { window.open(bannerMap['banner3'].link,"_blank") }}
                />
            </div>
            <hr className="mt-5 mb-3" />
            
            {
                partners && 
                <>
                    <h2 className="text-center mb-3"> <i className="fa fa-users"></i> Partners</h2>
                    <PartnerList />
                </>
            }
            
            <hr className="mt-5 mb-3" />

            <div className="d-flex justify-content-between mt-2 mb-3">
                <div className="d-flex flex-column">
                    <Logo name={name} />
                    <div className="mt-2 d-block d-md-none">
                        <Media twitter={doctoreTwitter} telegram={doctoreTelegram} />
                    </div>    
                </div>
                <div className="col-1 d-none d-md-block">
                    <Media twitter={doctoreTwitter} telegram={doctoreTelegram} />
                </div>
            </div>

            <div className="d-flex justify-content-evenly mb-5 row">
                <div className="col-md-3 col-10">
                    <h4>Coin Rankings</h4>
                    <ul style={styles.links}>
                        <li className="mb-1">
                            <Link style={styles.link} to="/"  onClick={ () => window.scrollTo({top: 0})}><span className="text-light">List of Coins</span></Link>
                        </li>
                        <li className="mb-1">
                            <Link style={styles.link} to="/addCoin"  onClick={ () => window.scrollTo({top: 0})}><span className="text-light">Add Coins</span></Link>
                        </li>
                        
                    </ul>
                </div>
                <div className="col-md-3 col-10">
                    <h4>Services</h4>
                    <ul style={styles.links}>
                        <li className="mb-1">
                            <Link style={styles.link} to="/services/promote" onClick={ () => window.scrollTo({top: 0})}><span className="text-light">Promote Coins</span></Link>
                        </li>
                        <li className="mb-1">
                            <Link style={styles.link} to="/services/audit" onClick={ () => window.scrollTo({top: 0})}><span className="text-light">Audit Coins</span></Link>
                        </li>
                        <li className="mb-1">
                            <Link style={styles.link} to="/services/kyc" onClick={ () => window.scrollTo({top: 0})}><span className="text-light">Verify Coins</span></Link>
                        </li>
                    </ul>
                </div>

                <div className="col-md-3 col-10">
                    <h4>About Us</h4>
                    <ul style={styles.links}>
                        <li className="mb-1">
                            <Link style={styles.link} to="/partners"  onClick={ () => window.scrollTo({top: 0})}><span className="text-light">Our Partners</span></Link>
                        </li>
                    </ul>
                </div>
  
                <div className="col-md-3 col-10">
                    <div className="card" style={styles.cardBlue}>
                        <div className="card-body">
                            <Subscribe />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;