import { useSelector } from "react-redux";
import Media from "./media";
import Subscribe from "./subscribe";

function Footer({partners,name}) {
    const {bannerMap} = useSelector((state) => state.app)

    const styles = {
        links:{
            listStyleType:"none"
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
                    <div className="d-flex justify-content-center row">
                            <>
                            {    partners.map( p => {
                                    return (
                                        <img
                                            key={p}
                                            alt="not found"
                                            // style={{width:"150px",height:"80px"}}
                                            src={p}
                                            className="rounded mt-2 col-2"
                                        />
                                    )
                                } )}
                            </>
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
                <div className="col-md-3 col-12">
                    <h4>Coin rankings</h4>
                    <ul style={styles.links}>
                        <li style={styles.link}>List of Coins</li>
                        <li style={styles.link}>Add Your Coin</li>
                        <li style={styles.link}>Promote Your Project</li>
                    </ul>

                    <h4>Games</h4>
                    <ul style={styles.links}>
                        <li style={styles.link}>Trending Games</li>
                        <li style={styles.link}>Add Your Game</li>
                    </ul>
                </div>
                <div className="col-md-3 col-12">
                    <h4>CoinList Token</h4>
                    <ul style={styles.links}>
                        <li style={styles.link}>About</li>
                        <li style={styles.link}>Staking</li>
                    </ul>
                </div>
                <div className="col-md-3 col-12">
                    <h4>Company</h4>
                    <ul style={styles.links}>
                        <li style={styles.link}>Partners</li>
                        <li style={styles.link}>Disclaimer</li>
                        <li style={styles.link}>Privacy Policy</li>
                        <li style={styles.link}>Terms and Conditions</li>
                    </ul>
                </div>
                <div className="col-md-3 col-12">
                    <Subscribe/>
                </div>
            </div>
        </>
    );
}

export default Footer;