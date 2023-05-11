import { useSelector } from "react-redux";
import Table from "../ranks/table";

function Promote() {
    const {coins:data} = useSelector((state) => state.app)
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
            <Table data={data.filter( d => d.promoted )} title={"PROMOTED"} allowRoute={false}/>


            <div className="row mt-4">
                <h1>Coin Promotion</h1>
                <div className="col-12 col-md-8">
                    <p>We've partnered with the biggest Telegram influencers who can help you boost your marketing and fill presale in seconds! These are influencers in big communities who have lots of followers worldwide and some of them are leaders in Turkey and France. We've worked with all of them and thus they helped our presale to end within 15 seconds. Please contact @CoinListPromo for more information</p>
                    
                    <h4 className="mt-5">Get 25% discount on any ads!</h4>
                    <div className="d-flex flex-column p-2" style={styles.discount25}>
                        <h5>Get 25% off instantly by paying partly in <span className="badge text-bg-light ms-1">$COINLIST</span></h5>
                        <p>Pay 40% of total price in BNB, and 35% in $COINLIST equivalent, and get 25% discount</p>
                    </div>

                    <div className="p-3 my-5 text-center shadow-lg" style={styles.discount10}>
                        <h4>Get 10% discount on any ads!</h4>
                        <p>Put a backlink to CoinLink on your project website and receive a 10% discount for any ad package!</p>
                        <p>Holders of 100,000+ $COINLIST get 10% discount on all ads!</p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card text-center bg-dark mb-2">
                        <div className="card-body">
                            <h5 className="card-title">Wide Banner (1022x115px)</h5>
                            <p className="card-text">1 Day Promotion - 0.35 BNB</p>
                        </div>
                    </div>

                    <div className="card text-center bg-dark mb-2">
                        <div className="card-body">
                            <h5 className="card-title">Telegram Promotion</h5>
                            <ul className="list-group bg-dark list-group-flush">
                                    <li className="list-group-item bg-dark text-light">Promote Your Project in Our Fast-Growing</li>
                                    <li className="list-group-item bg-dark text-light">Telegram Channel - 0.65 BNB</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card text-center bg-dark mb-2">
                        <div className="card-body">
                            <h5 className="card-title">Email-Based Promotion</h5>
                            <p className="card-text">More than 20k Real Potential Investors - 4.5 BNB</p>
                        </div>
                    </div>

                    <div className="card text-center bg-dark mb-2">
                        <div className="card-body">
                            <h5 className="card-title">KYC For Projects | Doxxing</h5>
                            <ul className="list-group bg-dark list-group-flush">
                                    <li className="list-group-item bg-dark text-light">Project Owners - 1 BNB</li>
                                    <li className="list-group-item bg-dark text-light">Entire Team - 1.5 BNB</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="d-flex justify-content-evenly row">
                    <div className="col-md-3 mb-3 col-12 bg-dark shadow" style={styles.promotion}>
                        <div style={styles.promotionInfo}>
                            <div className="d-flex flex-column">
                                <h5>Promoted Coins Section</h5>
                                <ul className="list-group bg-dark list-group-flush">
                                    <li className="list-group-item bg-dark text-light">1 Day Promotion - 0.5 BNB</li>
                                    <li className="list-group-item bg-dark text-light">3 Days Promotion - 1.00 BNB</li>
                                    <li className="list-group-item bg-dark text-light">5 Days Promotion - 1.5 BNB</li>
                                    <li className="list-group-item bg-dark text-light">7 Days Promotion - 2.00 BNB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 col-12 bg-dark shadow" style={styles.promotion}>
                        <div style={styles.promotionInfo}>
                            <div className="d-flex flex-column">
                                <h5>Rotating Banner (600x240px)</h5>
                                <ul className="list-group bg-dark list-group-flush">
                                    <li className="list-group-item bg-dark text-light">1 Day Promotion - 0.30 BNB</li>
                                    <li className="list-group-item bg-dark text-light">3 Days Promotion - 0.55 BNB</li>
                                    <li className="list-group-item bg-dark text-light">5 Days Promotion - 0.85 BNB</li>
                                    <li className="list-group-item bg-dark text-light">7 Days Promotion - 1.20 BNB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 col-12 bg-dark shadow" style={styles.promotion}>
                        <div style={styles.promotionInfo}>
                            <div className="d-flex flex-column">
                                <h5>Pop-Up (350x350px)</h5>
                                <ul className="list-group bg-dark list-group-flush">
                                    <li className="list-group-item bg-dark text-light">1 Day Promotion (Central) - 2.00 BNB</li>
                                    <li className="list-group-item bg-dark text-light">1 Day Promotion (Left) - 0.65 BNB</li>
                                    <li className="list-group-item bg-dark text-light">1 Day Promotion (Right) - 0.55 BNB</li>
                                    <li className="list-group-item bg-dark text-light">1 Day Promotion (Dual) - 1.00 BNB</li>
                                    <li className="list-group-item bg-dark text-light">1 Day Promotion (Triad) - 2.85 BNB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        
        </>
     );
}

export default Promote;