import { useState } from "react"
import Media from "../../shared/media"
import { Modal } from "react-bootstrap"


function GameDetails({game}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const styles = {
        cardBlue:{
            backgroundColor:"#003153",
            borderColor:"#0076CE"
        },
        infoBadge:{
            fontSize:"13px"
        }
    }

    const customSymbol = symbol => {
        switch (symbol) {
            case "ethereum":
                return {name:"ETH",color:"black",text:"white"}
            case "binance-smart-chain":
                return {name:"BSC",color:"#ffc107",text:"white"}
            case "arbitrum-one":
                return {name:"ARBITRUM",color:"#0076CE",text:"white"}
            case "polygon-pos":
                return {name:"MATIC",color:"purple",text:"white"}
            default:
                return {name:"CUSTOM",color:"grey",text:"white"}
        }
    }
    return ( 
        <>
            <button type="button" className="btn btn-sm btn-outline-warning py-1"
            onClick={() => handleShow()}>
            Read More
            </button>

            <Modal backdrop="static" keyboard={false} show={show} >
                <div className="modal-content" style={styles.cardBlue}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel"><strong>{game.name}</strong></h1>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="card" style={styles.cardBlue}>
                            <div className="card-body">
                                <div className="mb-4 d-flex justify-content-between">
                                    <div className="d-flex justify-content-start">
                                        <div  className={`icon-display-holder me-2 ${ (!game.icon || game.icon === "") && "d-none" }`}>
                                            <div style={{backgroundImage:`url(${game.icon})`}} 
                                            className="icon-display-img" alt=""></div>
                                        </div>
                                        <h4> <strong> {game.name}
                                            <span className="badge text-bg-light ms-1" style={styles.infoBadge}>{customSymbol(game.chain).name}</span>
                                        </strong></h4>
                                    </div>
                                    
                                </div>
                                <p>
                                    <span className="text-warning">Contract address:</span> {game.address}
                                </p>
                                    
                                
                                <div className="d-flex justify-content-start">
                                    <button className='btn btn-outline-dell-blue' 
                                        onClick={() => { game.website && game.website !== "" && window.open(game.website,"_blank") }}>
                                            <i className="fa fa-globe me-1"></i>
                                        Visit Website
                                    </button>

                                    <button className='btn btn-outline-dell-blue ms-2' 
                                        onClick={() => { game.youtube && game.youtube !== "" && window.open(game.youtube,"_blank") }}>
                                            <i className="fa fa-youtube me-1"></i>
                                        Youtube Video
                                    </button>
                                </div>
                                <div className="col-7 col-md-6 mt-3">
                                    <Media 
                                        facebook={game.facebook} 
                                        telegram={game.telegram} 
                                        twitter={game.twitter} 
                                        github={game.github} 
                                        linkedin={game.linkedin}/>
                                </div>
                            </div>
                        </div>
                                    

                        <div className="card mt-2" style={styles.cardBlue}>
                            <div className="card-body">
                                <h4>Description</h4>
                                {game.description}
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </Modal>
        </>
     );
}

export default GameDetails;