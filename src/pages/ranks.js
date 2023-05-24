import { useState } from "react";
import Search from "../components/ranks/search";
import Table from "../components/ranks/table";
import AddCoin from "../components/ranks/addCoin";
import { useSelector } from "react-redux";

function Ranks({priceDisplay,validTimestamp,voteCoin}) {
    const [tag, setTag] = useState("trending")
    const [tableView, showTables] = useState(true)
    const {coins:data,voteMap,userAddress,connected,bannerMap} = useSelector((state) => state.app)
    const styles = {
        card:{
            width:"140px"
        },
        priceDisplay:{
            fontSize:"12px"
        },
        wideBannerImage:{
            height: "115px",
            width: "1022px",
        },
    }
    
    return (
       <>
        { tableView &&
                <>
                    { priceDisplay &&

                        <div className="d-flex justify-content-center mb-3">
                            { priceDisplay.map( ({symbol,percentageChange,price}) => {
                                return (

                                    <div key={symbol} className="p-2 mx-1 bg-dark my-1 rounded d-none d-md-block" style={styles.card}>
                                        <div className="d-flex flex-column text-center">
                                            <small>
                                                <strong className="me-1">{symbol.toUpperCase()}</strong>
                                                <span 
                                                    style={{...styles.priceDisplay, color:`${percentageChange>0?"green":"red"}`}}>{percentageChange}%</span> 
                                            </small>
                                            <small>${price.toFixed(3)}</small>
                                        </div>
                                    </div>
                                )
                            } ) }
                
                        </div>
                    }
                    
                    <div className="d-flex justify-content-evenly">
                        <img
                            alt="not found"
                            style={styles.wideBanner}
                            src={bannerMap['banner1']}
                            className="rounded mt-2"
                        />
                    </div>


                    <div className="d-flex justify-content-evenly">
                        <img
                            alt="not found"
                            style={styles.wideBanner}
                            src={bannerMap['banner2']}
                            className="rounded my-3"
                        />
                    </div>


                    <Search changeView={ () => { showTables(false) } } />

                    <Table data={data.filter( d => d.promoted )} title={"PROMOTED"} 
                       validTimestamp={validTimestamp} allowRoute={true} userAddress={userAddress} 
                       voteMap={voteMap} connected={connected} voteCoin={voteCoin} />

                    <div className="mt-5 mb-3">
                        <button className="btn btn-light me-3 mb-2" onClick={ () => setTag('trending') }>Trending</button>
                        <button className="btn btn-outline-secondary me-3 mb-2" onClick={ () => setTag('new') }>New</button>
                        <button className="btn btn-outline-secondary me-3 mb-2" onClick={ () => setTag('audited') }>Audited</button>
                        <button className="btn btn-outline-secondary me-3 mb-2" onClick={ () => setTag('doxxed') }>Doxxed</button>
                    </div>

                    <Table data={data.filter( d => d.tags.includes(tag) )} title={"ASSET"}
                        validTimestamp={validTimestamp} allowRoute={true} userAddress={userAddress} 
                        voteMap={voteMap} connected={connected} voteCoin={voteCoin} />
                </>
        }

        {   !tableView &&
            <AddCoin changeView={ () => { showTables(true) } } />
        }
       </>
    )
}


export default Ranks;