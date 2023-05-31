import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadCoin } from "../../state/app.reducers";
// import CoinService from "../../services/coins";

function AddCoin({changeView,baseUrl}) {

    const requiredKeys = ["address","name","symbol","description","launch","contact"]

    const dispatch = useDispatch()

    const [coin, addCoin] = useState(
        {
            address:"",
            name:"",
            symbol:"",
            description:"",
            launch:"",
            chain:"ethereum",
            tags:[],
            contact:"",
            website:"",
            github:"",
            telegram:"",
            twitter:"",
            facebook:"",
            linkedin:"",
            promoted:false,
            show:false,
            votes:"0",
            price:"0",
        }
    )
    
    const styles = {
        input:{
            color:"white"
        }
    }

    const handleCoinChange = (e) => addCoin( { ...coin, [e.target.name] : e.target.value } )

    const addToken = async evt => {
        evt.preventDefault();
        for (let r of requiredKeys){
            if(!coin[r]) {
                console.log("Missing required information")
                return
            }
        }
        
        const launchInfo = coin.launch.split("-")
        if ( launchInfo.length < 3 ) { console.log("Invalid date syntax"); return}

        try{

            let [ year, month, day ] = launchInfo.map( x => parseInt(x) )
            console.log(launchInfo.map( x => parseInt(x) ))
            month = month--
            const data = {...coin,
                    launch: Math.floor(new Date(year,month,day).getTime() / 1000).toString()
                }
            // const coinService = new CoinService(baseUrl)
            // const response =  await coinService.postCoin(data)
                console.log(data)
            dispatch( uploadCoin(data) )
        }catch(error){
            console.log(`Error creating coin: ${error}`); return
        }

    }

    return ( 
        <>
            <div className="mb-5">
                <button className="btn btn-outline-dell-blue ms-3" onClick={changeView}><i className="me-2 fa fa-angle-left"></i> Rankings </button>
            </div>
            <form onSubmit={addToken}>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h4>Coin Info</h4>
                        <label className="form-label">Name <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                        <input name="name" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="e.g Bitcoin" value={coin.name} onChange={ e => handleCoinChange(e) }/>
                        
                        <label className="form-label">Symbol <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                        <input name="symbol" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="e.g BTC" value={coin.symbol} onChange={ e => handleCoinChange(e) }/> 

                        <label className="form-label">Description <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                        <textarea name="description" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="e.g Bitcoin is decentralized digital currency" value={coin.description} onChange={ e => handleCoinChange(e) }></textarea>         

                        <label className="form-label">Launch date (YYYY-MM-DD) <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                        <input name="launch" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="e.g 2023-05-05" value={coin.launch} onChange={ e => handleCoinChange(e) }/> 

                        <label className="form-label">Contract Address <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                        <input name="address" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="e.g 0x...." value={coin.address} onChange={ e => handleCoinChange(e) }/> 
                        
                        <label className="form-label">Chain <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                        <select name="chain" className="form-select bg-dark shadow" aria-label="Default select example" style={styles.input}
                        onChange={ handleCoinChange } value={coin.chain}>
                            <option value="ethereum">Ethereum</option>
                            <option value="binance-smart-chain">Binance Smart Chain</option>
                            <option value="polygon-pos">Polygon</option>
                            <option value="arbitrum-one">Arbitrum</option>
                        </select>

                        <h4 className="mt-3">Contact</h4>
                        <label className="form-label">Contact Email <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                        <input type="email" name="contact" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="Enter email" value={coin.contact} onChange={ e => handleCoinChange(e) }/> 
                    </div>
                    <div className="col-md-6 col-12">
                        <h4>Links</h4>
                        <label className="form-label">Website</label>
                        <input name="website" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="e.g www.example.com" value={coin.website} onChange={ e => handleCoinChange(e) }/>

                        <label className="form-label">Github</label>
                        <input name="github" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="e.g https://github.com/bitcoin" value={coin.github} onChange={ e => handleCoinChange(e) }/>

                        <label className="form-label">Telegram</label>
                        <input name="telegram" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="e.g https://t.me/bitcoin" value={coin.telegram} onChange={ e => handleCoinChange(e) }/>

                        <label className="form-label">Twitter</label>
                        <input name="twitter" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="e.g https://twitter.com/bitcoin" value={coin.twitter} onChange={ e => handleCoinChange(e) }/>

                        <label className="form-label">Facebook</label>
                        <input name="facebook" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="e.g https://facebook.com/bitcoin" value={coin.facebook} onChange={ e => handleCoinChange(e) }/>

                        <label className="form-label">LinkedIn</label>
                        <input name="linkedin" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        value={coin.linkedin} onChange={ e => handleCoinChange(e) }/>
                    </div>
                </div>
                <div className="d-grid gap-2 mt-2">
                    <button type="submit" value="Submit" className="btn btn-dell-blue">Add Coin</button>
                </div>
            </form>
        </>
     );
}

export default AddCoin;