import { useSelector } from "react-redux";
import Media from "./media";
import Subscribe from "./subscribe";
import { Link } from "react-router-dom";

function Footer({partners,name}) {
    const {bannerMap} = useSelector((state) => state.app)

    const styles = {
        links:{
            listStyleType:"none",
            textColor:"white"
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
            // fontSize:"15px",
            // color:'white'
        },
        wideBannerImage:{
            height: "260px",
            width: "800px",
        },
        wideBannerImageMobile:{
            height: "140px",
            width: "350px",
        }
    }


    return (  
        <>
            <div className="d-flex mt-5 justify-content-center">
                <img
                    alt="not found"
                    style={styles.wideBannerImage}
                    src={bannerMap['banner3']}
                    className="rounded mt-2 d-none d-md-block"
                />
                <img
                    alt="not found"
                    style={styles.wideBannerImageMobile}
                    src={bannerMap['banner3']}
                    className="rounded mt-2 d-block d-md-none"
                />
            </div>
            <hr className="mt-5 mb-3" />
            
            {
                partners && 
                <>
                    <h2 className="text-center mb-3"> <i className="fa fa-users"></i> Partners</h2>
                    <div className="d-flex justify-content-evenly row rounded" >
                            {    partners.map( ({id,url,name,link}) => {
                                    return (
                                        <div className="col-12 col-md-2" key={id}>    
                                            <div className="card shadow mb-3" style={{backgroundColor:"#003153",borderColor:"#0076CE"}}>
                                                <div  className="partner-holder ">
                                                    <div style={{backgroundImage:`url(${url})`}} className="partner-img" alt=""></div>
                                                </div>
                                                <div className="card-body">
                                                    <p className="text-center text-warning">
                                                        <strong style={{cursor:"pointer"}} onClick={() => { window.open(link,"_blank") }}>{name}</strong>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                  
                                    )
                            } )}
                    </div>
                </>
            }
            
            <hr className="mt-5 mb-3" />

            <div className="d-flex justify-content-between mt-2 mb-3">
                <h1 style={styles.logo}>{name}</h1>
                <div>
                    <Media />
                </div>
            </div>

            <div className="d-flex justify-content-evenly mb-5 row">
                <div className="col-md-4 col-12">
                    <h4>Coin rankings</h4>
                    <ul style={styles.links}>
                        <li>
                            <Link style={styles.link} to="/"><span className="text-light">List of Coins</span></Link>
                        </li>
                        <li style={styles.link}>
                            <Link style={styles.link} to="/promote"><span className="text-light">Promote Coins</span></Link>
                        </li>
                    </ul>
                </div>
  
                <div className="col-md-4 col-12">
                    <Subscribe/>
                </div>
            </div>
        </>
    );
}

export default Footer;