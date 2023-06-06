import { useSelector } from "react-redux";
import Table from "../ranks/table";
import Apply from "./apply";

function Promote({validTimestamp,voteCoin}) {
    const {coins:data,voteMap,userAddress,connected} = useSelector((state) => state.app)
    const styles = {
        promotion:{
            borderRadius:"50px",
        },
        promotionInfo:{
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            textAlign: "center",
            minHeight:"50vh",
            margin:"20px 0px 20px"
        },
        promoItem:{
            fontSize:"16px"
        },
        discount10:{
            backgroundColor: "#ffc107",
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
        },
        promoBlue:{
            backgroundColor:"#003153",
            borderColor:"#0076CE"
        },
        promoBlueList:{
            backgroundColor:"#003153",
        },
    }

    return ( 
        <>
            <Table data={data.filter( d => d.promoted )} title={"PROMOTED"} allowRoute={false}
            validTimestamp={validTimestamp} userAddress={userAddress} 
            voteMap={voteMap} connected={connected} voteCoin={voteCoin}/>


            <div className="row mt-4">
                <h1>Coin Promotion</h1>
                <div className="col-12 col-md-8 mt-3">
                    <p> In the past, project rankings were based on votes, but we found that some projects were able to obtain massive amounts of votes to secure a higher ranking, resulting in an unfair advantage. With our new Boost system, we've created a more transparent and fair method for all our community members and project owners.</p>
                    <p>We've partnered with the biggest Telegram influencers who can help you boost your marketing and fill presale in seconds! These are influencers in big communities who have lots of followers worldwide. We've worked with all of them and thus they helped our presale to end within 15 seconds</p>
                    
                    <Apply/>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card text-center mb-2" style={styles.promoBlue}>
                        <div className="card-body">
                            <h5 className="card-title">Wide Banner (1022x115px)</h5>
                            <p className="card-text">1 Day Promotion - 0.35 BNB</p>
                        </div>
                    </div>

                    <div className="card text-center mb-2" style={styles.promoBlue}> 
                        <div className="card-body">
                            <h5 className="card-title">Telegram Promotion</h5>
                            <ul className="list-group list-group-flush">
                                    <li className="list-group-item text-light" style={styles.promoBlueList}>Promote Your Project in Our Fast-Growing</li>
                                    <li className="list-group-item text-light" style={styles.promoBlueList}>Telegram Channel - 1.5 BNB</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card text-center mb-2" style={styles.promoBlue}>
                        <div className="card-body">
                            <h5 className="card-title">Email-Based Promotion</h5>
                            <p className="card-text">More than 50k Real Potential Investors - 10 BNB</p>
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
                                    <li className="list-group-item bg-dark text-light" style={styles.promoItem}>1 Day Promotion - 1 BNB</li>
                                    <li className="list-group-item bg-dark text-light" style={styles.promoItem}>3 Days Promotion - 2 BNB</li>
                                    <li className="list-group-item bg-dark text-light" style={styles.promoItem}>5 Days Promotion - 3 BNB</li>
                                    <li className="list-group-item bg-dark text-light" style={styles.promoItem}>7 Days Promotion - 4 BNB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 col-12 bg-dark shadow" style={styles.promotion}>
                        <div style={styles.promotionInfo}>
                            <div className="d-flex flex-column">
                                <h5>Rotating Banner (600x240px)</h5>
                                <ul className="list-group bg-dark list-group-flush">
                                    <li className="list-group-item bg-dark text-light" style={styles.promoItem}>1 Day Promotion - 0.50 BNB</li>
                                    <li className="list-group-item bg-dark text-light" style={styles.promoItem}>3 Days Promotion - 1.25 BNB</li>
                                    <li className="list-group-item bg-dark text-light" style={styles.promoItem}>5 Days Promotion - 2.00 BNB</li>
                                    <li className="list-group-item bg-dark text-light" style={styles.promoItem}>7 Days Promotion - 2.75 BNB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 col-12 bg-dark shadow" style={styles.promotion}>
                        <div style={styles.promotionInfo}>
                            <div className="d-flex flex-column">
                                <h5>Pop-Up (250x250px)</h5>
                                <ul className="list-group bg-dark list-group-flush">
                                    <li className="list-group-item bg-dark text-light" style={styles.promoItem}>1 Day (Sidebar) - 1.0 BNB</li>
                                    <li className="list-group-item bg-dark text-light" style={styles.promoItem}>1 Day (Right Up) - 0.5 BNB</li>
                                    <li className="list-group-item bg-dark text-light" style={styles.promoItem}>1 Day (Right Down) - 0.5 BNB</li>
                                    <li className="list-group-item bg-dark text-light" style={styles.promoItem}>1 Day (Dual) - 0.9 BNB</li>
                                    <li className="list-group-item bg-dark text-light" style={styles.promoItem}>1 Day (Triad) - 1.5 BNB</li>
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