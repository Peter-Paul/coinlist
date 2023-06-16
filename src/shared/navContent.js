import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Subscribe from "./subscribe";
import Media from "./media";

function NavContent({smallView=false}) {
    const {bannerMap,doctoreTwitter,doctoreTelegram,admin,userAddress} = useSelector((state) => state.app)

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
        <ul className="d-flex flex-column me-2" style={styles.nav} >
                  
                        <li data-bs-dismiss={smallView?"offcanvas":""}>
                            <Link style={styles.link} to="/" onClick={ () => window.scrollTo({top: 0})}><i className="fa fa-table me-2"></i>Rankings</Link>
                        </li>
                        <hr className="mb-4" />
                        <li data-bs-dismiss={smallView?"offcanvas":""}>
                            <Link style={styles.link} to="/services/promote" onClick={ () => window.scrollTo({top: 0})}> <i className="fa fa-bolt me-2"></i>Promotions</Link>
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