import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import GameService from "../../services/games";
import { uploadGame } from "../../state/app.reducers";
import { Link } from "react-router-dom";

function AddGame({baseUrl}) {
    const defaultGame = {
        icon:"",
        address:"",
        name:"",
        description:"",
        chain:"ethereum",
        contact:"",
        youtube:"",
        website:"",
        github:"",
        telegram:"",
        twitter:"",
        facebook:"",
        linkedin:"",
        show:false,
    }

    const [noError,setNoError] = useState({msg:"",state:true})
    const [noSuccess,setNoSuccess] = useState(true)

    const dispatch = useDispatch()
    const [game, addGame] = useState({...defaultGame})

    const uploadIcon = async (image) => {
        const formData = new FormData()
        formData.append("file",image, "icon")
        formData.append("upload_preset",`ml_default`)
        const api = `https://api.cloudinary.com/v1_1/dwf6iuvbh/image/upload`
        const res = await axios.post(api, formData)
        addGame({...game, icon:res.data.secure_url}) 
    }

    const styles = {
        input:{
            color:"white"
        },
        cardBlue:{
            backgroundColor:"#003153",
            borderColor:"#0076CE"
        },
    }

    const handleGameChange = (e) => addGame( { ...game, [e.target.name] : e.target.value } )

    const addYourGame = async evt => {
        evt.preventDefault();

        const required = Object.values(game).slice(0,5)

        if(required.includes("")){
            setNoError({msg:"Kindly check that all required information is provided",state:false})
            return
        }        

        try{
            const gameService = new GameService(baseUrl)
            await gameService.postGame(game)
            
            addGame({...defaultGame})
            setNoSuccess(false)
            dispatch( uploadGame(game) )
        }catch(error){
            setNoError({msg:"Failed to add game. Kindly check with DoctoreClub regarding this issue.",state:false});
            setNoError(false)
            console.log(`Error creating game: ${error}`); return
        }

    }

    return ( 
        <>
            <div className="card shadow" style={styles.cardBlue}>
                <div className="card-body">
                    <div className="mb-5">
                        <Link className="btn btn-outline-dell-blue" to={"/games"}> <i className="me-2 fa fa-angle-left"></i>Game List</Link>
                    </div>
                    <form onSubmit={(e) => addYourGame(e) }>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <h4>Game Logo</h4>
                                <div className="d-flex justify-content-center">
                                    <div className="d-flex flex-column col-7 col-md-4">
                                        <div>
                                            <div  className="icon-holder">
                                                <div style={{backgroundImage:`url(${game.icon === "" ?
                                                "https://res.cloudinary.com/dwf6iuvbh/image/upload/v1686828800/photo_2023-06-15_14-13-47_mlqd76.jpg":
                                                game.icon})`}} 
                                                className="icon-img" alt=""></div>
                                            </div>
                                        </div>
                                        <label htmlFor="icon" className="btn btn-light my-2">
                                            Upload Game Icon
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

                                <h4>Game Info</h4>
                                <label className="form-label">Name <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                                <input name="name" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                                placeholder="e.g GAME" value={game.name} onChange={ e => handleGameChange(e) }/>
                                
                                <label className="form-label">Description <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                                <textarea name="description" style={{...styles.input,height:"150px"}} className="form-control mb-3 form-control-md bg-dark shadow" 
                                placeholder="e.g GAME is a NFT+DEFI mining game. Players can play while earning money" value={game.description} onChange={ e => handleGameChange(e) }></textarea>         

                                <label className="form-label">Contract Address <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                                <input name="address" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                                placeholder="e.g 0x...." value={game.address} onChange={ e => handleGameChange(e) }/> 
                                
                                <label className="form-label">Chain <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                                <select name="chain" className="form-select bg-dark shadow" aria-label="Default select example" style={styles.input}
                                onChange={ handleGameChange } value={game.chain}>
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
                                placeholder="Enter email" value={game.contact} onChange={ e => handleGameChange(e) }/> 
                                <h4>Links</h4>
                                <label className="form-label">Youtube Video</label>
                                <input name="website" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                                placeholder="e.g www.example.com" value={game.youtube} onChange={ e => handleGameChange(e) }/>
                                
                                <label className="form-label">Website</label>
                                <input name="website" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                                placeholder="e.g www.example.com" value={game.website} onChange={ e => handleGameChange(e) }/>

                                <label className="form-label">Github</label>
                                <input name="github" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                                placeholder="e.g https://github.com/game" value={game.github} onChange={ e => handleGameChange(e) }/>

                                <label className="form-label">Telegram</label>
                                <input name="telegram" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                                placeholder="e.g https://t.me/game" value={game.telegram} onChange={ e => handleGameChange(e) }/>

                                <label className="form-label">Twitter</label>
                                <input name="twitter" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                                placeholder="e.g https://twitter.com/game" value={game.twitter} onChange={ e => handleGameChange(e) }/>

                                <label className="form-label">Facebook</label>
                                <input name="facebook" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                                placeholder="e.g https://facebook.com/game" value={game.facebook} onChange={ e => handleGameChange(e) }/>

                                <label className="form-label">LinkedIn</label>
                                <input name="linkedin" style={styles.input} className="form-control mb-3 form-control-md bg-dark shadow" 
                                value={game.linkedin} onChange={ e => handleGameChange(e) }/>


                            </div>
                        </div>

                        {
                                (noError.state && noSuccess) &&
                                <div className="d-grid gap-2 mt-2">
                                    <button type="submit" value="Submit" className={`btn btn-dell-blue 
                                    `}>Add Game</button>
                                </div>
                            }

                            {
                                !noSuccess &&
                                <div className={`alert alert-success alert-dismissible fade show 
                                    `} role="alert">
                                    <p><strong>Congratulations on adding your game!</strong> We will now review and  get back to you :)</p>
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
                </div>
            </div>
        </>
     );
}

export default AddGame;