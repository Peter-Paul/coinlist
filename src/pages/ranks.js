import { useState } from "react";
import Search from "../components/ranks/search";
import Table from "../components/ranks/table";
import AddCoin from "../components/ranks/addCoin";
import { useSelector } from "react-redux";

function Ranks({priceDisplay,validTimestamp,voteCoin}) {
    const [tag, setTag] = useState("trending")
    const [tableView, showTables] = useState(true)
    const {coins:data,voteMap,userAddress,connected} = useSelector((state) => state.app)
    const styles = {
        card:{
            width:"140px"
        },
        priceDisplay:{
            fontSize:"12px"
        }
    }
    
    return (
       <>
        { tableView &&
                <>

                    <div className="d-flex justify-content-center mb-3">
                        { priceDisplay.map( ({symbol,percentageChange,price}) => {
                            return (

                                <div key={symbol} className="p-2 mx-1 bg-dark my-1 rounded d-none d-md-block" style={styles.card}>
                                    <div className="d-flex flex-column text-center">
                                        <small>
                                            <strong className="me-1">{symbol}</strong>
                                            <span 
                                                style={{...styles.priceDisplay, color:`${percentageChange<0?"green":"red"}`}}>{percentageChange}%</span> 
                                        </small>
                                        <small>${price}</small>
                                    </div>
                                </div>
                            )
                        } ) }
               
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

                    <Table data={data.filter( d => d.tag.includes(tag) )} title={"ASSET"}
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