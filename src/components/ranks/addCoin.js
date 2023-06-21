import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadCoin } from "../../state/app.reducers";
import CoinService from "../../services/coins";
import axios from "axios";

function AddCoin({changeView,baseUrl}) {
    const defaultCoin = {
        icon:"",
        address:"",
        name:"",
        symbol:"",
        description:"",
        launch:"",
        chain:"ethereum",
        contact:"",
        tags:["new"],
        website:"",
        github:"",
        telegram:"",
        twitter:"",
        facebook:"",
        linkedin:"",
        audit:"",
        pinksale:"",
        promote:false,
        show:false,
        votes:"0",
        price:"0",
    }
    // const requiredKeys = ["address","name","symbol","description","launch","contact"]

    const [noError,setNoError] = useState({msg:"",state:true})
    const [noSuccess,setNoSuccess] = useState(true)

    const dispatch = useDispatch()

    const [coin, addCoin] = useState({...defaultCoin})
    
    const styles = {
        input:{
            color:"white"
        }
    }

    const uploadIcon = async (image) => {
        const formData = new FormData()
        formData.append("file",image, "icon")
        formData.append("upload_preset",`ml_default`)
        // const api = `https://api.cloudinary.com/v1_1/${cloudinaryKey}/image/upload`
        const api = `https://api.cloudinary.com/v1_1/dwf6iuvbh/image/upload`
        const res = await axios.post(api, formData)
        addCoin({...coin, icon:res.data.secure_url}) 
    }

    const handleCoinChange = (e) => addCoin( { ...coin, [e.target.name] : e.target.value } )

    const addToken = async evt => {
        evt.preventDefault();

        const required = Object.values(coin).slice(0,7)

        if(required.includes("")){
            setNoError({msg:"Kindly check that all required information is provided",state:false})
            return
        }

        
        const launchInfo = coin.launch.split("-")
        if ( launchInfo.length < 3 ) { 
            setNoError({msg:"Kindly check that date format is correct",state:false}) 
            return
        }

        try{

            let [ year, month, day ] = launchInfo.map( x => parseInt(x) )
            console.log(launchInfo.map( x => parseInt(x) ))
            month = month--
            const data = {...coin,
                    launch: Math.floor(new Date(year,month,day).getTime() / 1000).toString()
            }

            const coinService = new CoinService(baseUrl)
            await coinService.postCoin(data)
            
            addCoin({...defaultCoin})
            setNoSuccess(false)
            dispatch( uploadCoin(data) )
        }catch(error){
            setNoError({msg:"Failed to add coin. Kindly check with DoctoreClub regarding this issue.",state:false});
            setNoError(false)
            console.log(`Error creating coin: ${error}`); return
        }

    }

    return ( 
        <>
            <div className="mb-5">
                <button className="btn btn-outline-dell-blue ms-3" onClick={changeView}><i className="me-2 fa fa-angle-left"></i> Rankings </button>
            </div>
            <form onSubmit={(e) => addToken(e) }>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h4>Coin Logo</h4>
                        <div className="d-flex justify-content-center">
                            <div className="d-flex flex-column col-7 col-md-4">
                                <div>
                                    <div  className="icon-holder">
                                        <div style={{backgroundImage:`url(${coin.icon === "" ?
                                        "https://res.cloudinary.com/dwf6iuvbh/image/upload/v1686828800/photo_2023-06-15_14-13-47_mlqd76.jpg":
                                        coin.icon})`}} 
                                        className="icon-img" alt=""></div>
                                    </div>
                                </div>
                                <label htmlFor="icon" className="btn btn-light my-2" style={styles.label}>
                                    Upload Coin Icon
                                    {/* {position} */}
                                </label>
                                <input
                                    type="file"
                                    id="icon"
                                    name="myImage"
                                    onChange={(event) => {
                                        console.log(event.target.files[0]);
                                        uploadIcon(event.target.files[0]);
                                    }}
                                    hidden
                                />
                            </div>
                        </div>

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

                        
                    </div>
                    <div className="col-md-6 col-12">
                        <h4 className="mt-4">Contact</h4>
                        <label className="form-label">Contact Email <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                        <input type="email" name="contact" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        placeholder="Enter email" value={coin.contact} onChange={ e => handleCoinChange(e) }/> 
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

                        <label className="form-label">Audit</label>
                        <input name="audit" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        value={coin.audit} onChange={ e => handleCoinChange(e) }/>

                        <label className="form-label">Pinksale</label>
                        <input name="pinksale" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                        value={coin.pinksale} onChange={ e => handleCoinChange(e) }/>

                    </div>
                </div>

                    {
                        (noError.state && noSuccess) &&
                        <div className="d-grid gap-2 mt-2">
                            <button type="submit" value="Submit" className={`btn btn-dell-blue 
                             `}>Add Coin</button>
                        </div>
                    }

                    {
                        !noSuccess &&
                        <div className={`alert alert-success alert-dismissible fade show 
                            `} role="alert">
                            <p><strong>Congratulations on adding your coin!</strong> We will now review and  get back to you :)</p>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setNoSuccess(true)}></button>
                        </div>
                    }

                    {
                        !noError.state &&
                        <div className={`alert alert-danger alert-dismissible fade show 
                            `} role="alert">
                            <p>Opps! <strong>{noError.msg}.</strong>  Close this alert and try again!</p>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setNoError({msg:"",state:true})}></button>
                        </div> 
                    }

            </form>
        </>
     );
}

export default AddCoin;