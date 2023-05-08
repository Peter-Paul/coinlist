import { useState } from "react";

function AddCoin({changeView}) {
    const [coin, addCoin] = useState(
        {
            name:"",
            symbol:"",
            description:"",
            launchDate:"",
            contractAddress:"",
            chain:"eth",
            website:"",
            audit:"",
            telegram:"",
            twitter:"",
            facebook:"",
            linkedin:"",
            contact:""
        }
    )
    
    const styles = {
        input:{
            color:"white"
        }
    }

    const handleCoinChange = (e) => addCoin( { ...coin, [e.target.name] : e.target.value } )

    return ( 
        <>
            <div className="mb-5">
                <button className="btn btn-outline-light ms-3" onClick={changeView}><i className="me-2 fa fa-angle-left"></i> Rankings </button>
            </div>
            <form>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h4>Coin Info</h4>
                        <label className="form-label">Name</label>
                        <input name="name" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="e.g Bitcoin" value={coin.name} onChange={ e => handleCoinChange(e) }/>
                        
                        <label className="form-label">Symbol</label>
                        <input name="symbol" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="e.g BTC" value={coin.symbol} onChange={ e => handleCoinChange(e) }/> 

                        <label className="form-label">Description</label>
                        <textarea name="description" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="e.g Bitcoin is decentralized digital currency" value={coin.description} onChange={ e => handleCoinChange(e) }></textarea>         

                        <label className="form-label">Launch date (YYYY-MM-DD)</label>
                        <input name="launchDate" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="e.g 2023-05-05" value={coin.launchDate} onChange={ e => handleCoinChange(e) }/> 

                        <label className="form-label">Contract Address</label>
                        <input name="contractAddress" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="e.g 0x...." value={coin.contractAddress} onChange={ e => handleCoinChange(e) }/> 
                        
                        <label className="form-label">Chain</label>
                        <select name="chain" className="form-select bg-dark shadow" aria-label="Default select example" style={styles.input}
                        onChange={ handleCoinChange } value={coin.chain}>
                            <option value="eth">Ethereum</option>
                            <option value="bsc">Binance Smart Chain</option>
                            <option value="polygon">Polygon</option>
                        </select>

                        <h4 className="mt-3">Contact</h4>
                        <label className="form-label">Contact Email</label>
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
                    <button type="submit" value="Submit" className="btn btn-light">Add Coin</button>
                </div>
            </form>
        </>
     );
}

export default AddCoin;