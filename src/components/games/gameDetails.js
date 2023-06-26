import Media from "../../shared/media"

function GameDetails({game}) {
    const {icon,name,description,chain,website} = game
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
            <button type="button" className="btn btn-sm btn-outline-warning py-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Read More
            </button>

            <div className="modal fade"  id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={styles.cardBlue}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel"><strong>{name}</strong></h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="card" style={styles.cardBlue}>
                            <div className="card-body">
                                <div className="mb-4 d-flex justify-content-between">
                                    <div className="d-flex justify-content-start">
                                        <div  className={`icon-display-holder me-2 ${ (!icon || icon === "") && "d-none" }`}>
                                            <div style={{backgroundImage:`url(${icon})`}} 
                                            className="icon-display-img" alt=""></div>
                                        </div>
                                        <h4> <strong> {name}
                                            <span className="badge text-bg-light ms-1" style={styles.infoBadge}>{customSymbol(chain).name}</span>
                                        </strong></h4>
                                    </div>
                                    
                                </div>
                                <p>
                                    <span className="text-warning">Contract address:</span> {game.address}
                                </p>
                                    
                                <div className="col-7 col-md-6 mb-3">
                                    <Media 
                                        facebook={game.facebook} 
                                        telegram={game.telegram} 
                                        twitter={game.twitter} 
                                        github={game.github} 
                                        linkedin={game.linkedin}/>
                                </div>
                                <div>
                                        <button className='btn btn-outline-light d-none d-md-block' 
                                            onClick={() => { website && website !== "" && window.open(website,"_blank") }}>
                                            {/* <i className="fa fa-star me-2"></i> */}
                                            Visit Website
                                        </button>
                                    </div>
                            </div>
                        </div>
                                    

                        <div className="card mt-2" style={styles.cardBlue}>
                            <div className="card-body">
                                <h4>Description</h4>
                                {description}
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default GameDetails;