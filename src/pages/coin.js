import { Link, useParams } from "react-router-dom";
import "./coin.css"
import Media from "../shared/media";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "../components/ranks/table";
function Coin({voteCoin}) {
    const {address} = useParams()
    const {coins,coinMap,connected,voteMap,userAddress} = useSelector((state) => state.app)
    const [coin, setCoin] = useState(undefined)
    const floozBaseUrl = "https://flooz.trade/trade/"
    const mobulaBaseUrl = "http://mobula.fi/dex?outputCurrency="
    
    // const {name,symbol} = coin
    useEffect( ()=> { setCoin(coinMap[address]) }, 
        [address,coinMap,userAddress,voteMap] )


    const addCoinToWallet = async () => {
        const provider = window.ethereum
        if(!provider) {
            alert("Please install web3 wallet like metamask")
        }else{
            await provider.request({
                method: "eth_requestAccounts",
            });
            await provider.request({
                method: "wallet_watchAsset",
                params: {
                  type: "ERC20",
                  options: {
                    address,
                    symbol: coin.symbol,
                    decimals: 18,
                  },
                },
              });
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

    const customFigure = (figure,places) => {
        const [zero, minimum, thousand,million,billion, trillion] = [ 0, 0.0001, 10**3, 10**6, 10**9, 10**12 ]
        if(figure<=zero){
            return "-"
        }else if(figure>zero && figure<minimum){
            return `>${minimum}`
        }else if(figure>=minimum && figure<thousand){
            return `${(figure).toFixed(places)}`
        }else if(figure>=thousand && figure<million){
            return `${(figure/thousand).toFixed(places)}K`
        }else if(figure>=million && figure<billion){
            return `${(figure/million).toFixed(places)}M`
        }else if(figure>=billion && figure<trillion){
            return `${(figure/billion).toFixed(places)}B`
        }else{
            return `${(figure/billion).toFixed(places)}T`
        }
    }

    const styles = {
        info:{
            borderLeftColor:"white",
            borderLeftWidth:"1px",
            borderLeftStyle:"solid",
        },
        address:{
            fontSize: "14px",
        }
    }

    return (  
        <>
            <div className="mb-4">
                <Link className="btn btn-outline-light ms-3" to="/"> 
                    <i className="me-2 fa fa-angle-left"></i>
                        Rankings 
                </Link>
            </div>
            { coin &&

                <div className="row">
                    <div className="col-12 col-md-8" >
                        <div className="d-flex flex-column">
                            <div className="mb-4 d-flex justify-content-between">
                                <h1 > <strong> {coin.name}<span className="badge text-bg-light ms-5">{coin.symbol}</span></strong></h1>
                                <button className='btn btn-lg btn-outline-light d-none d-md-block' onClick={addCoinToWallet}>
                                    {/* <div className="col-4">
                                        <img className="img-fluid me-2" src={process.env.PUBLIC_URL + '/metamask.9eeb7e72.svg'} alt="test" />
                                    </div> */}
                                    Add to Wallet
                                </button>
                            </div>
                            {/* <p className="col-md-6 col-12 p-3 rounded bg-dark" style={styles.address}>
                                {coin.address} <mark className="ms-2">{coin.chain}</mark>
                            </p> */}
                            
                            <div className="d-flex justify-content-start mb-4">
                                <div className="d-flex flex-column me-2">
                                    { connected && 
                                        <>
                                            {

                                            userAddress===undefined || !voteMap[address] ?  
                                            <button className='btn btn-lg btn-outline-light' onClick={() => voteCoin(address)}>VOTE</button>
                                            :  
                                            <button className='btn btn-lg btn-outline-success'> 
                                                <i className="fa fa-check me-2"></i>
                                                VOTED</button>
                                            }
                                        </>
                                    }
                                    { !connected &&
                                        <button className='btn btn-lg btn-outline-light' disabled>Connect wallet to VOTE</button>
                                    }
                                    <small>You can vote once every 24 hours</small>
                                </div>
                                <div>

                                    <h2 className="mb-4"><span className="badge text-bg-warning">{customFigure(parseFloat(coin.votes),0)}</span></h2>
                                </div>
                            </div>

                            <div className="col-3 mb-3">
                                <Media 
                                    facebook={coin.facebook} 
                                    telegram={coin.telegram} 
                                    twitter={coin.twitter} 
                                    github={coin.github} 
                                    linkedin={coin.linkedin}/>
                            </div>

                            <div>
                                <h3>Description</h3>
                                <p>{coin.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card shadow-lg bg-dark bg-body-tertiary rounded">
                            <div className="card-body">
                                
                                <h3 className="card-title">
                                    Token Info
                                </h3>
                                <div className="my-2">
                              
                                    <mark > {customSymbol(coin.chain).name} =  {coin.chain}</mark>
                                    <p className="mt-2" style={styles.address}> <strong>{coin.address}</strong> </p>

                                    { coin.tags.filter( t => t==="kyc" || t ==="audited" ).length > 0 && 
                                        <div className="my-1 d-flex justify-content-between">
                                            <div>
                                                <p><strong>Safety :</strong></p>
                                            </div>
                                            <div className="d-flex flex-column">
                                                {coin.tags.includes("kyc") && 
                                                    <p><i className="fa fa-check me-1 text-success"></i> KYC</p>
                                                }
                                                {coin.tags.includes("audited") && 
                                                    <button className="btn btn-sm btn-warning " onClick={ () => window.open(coin.audit,"_blank")}> <strong><i className="fa fa-shield me-1 text-success"></i> AUDITED</strong></button>
                                                }
                                                {coin.tags.includes("pinksale") && 
                                                    <button className="btn btn-sm btn-warning mt-1" onClick={ () => window.open(coin.pinksale,"_blank")}> <strong><i className="fa fa-rocket me-1 text-success"></i> PINKSALE</strong> </button>
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                                <hr />
                                
                                <h3 className="card-title">
                                    Charts
                                </h3>

                                <div className="my-1 d-flex justify-content-between">
                                    <p><strong>Buy on:</strong></p>
                                    <button className="btn btn-sm btn-warning" onClick={ () => window.open(`${mobulaBaseUrl}${coin.address}`,"_blank")}> <strong>Mobula</strong></button>
                                </div>

                                <div className="my-1 d-flex justify-content-between">
                                    <p><strong>Buy on:</strong></p>
                                    <button className="btn btn-sm btn-warning" onClick={ () => window.open(`${floozBaseUrl}${coin.address}`,"_blank")}> <strong>Flooz</strong></button>
                                </div>
                                
                                <hr />
                                <h3 className="card-title">
                                    Tags
                                </h3>
                                <small>{coin.tags.map( t => <span key={t} className="badge text-bg-light me-1">{t}</span> )}</small>
                            </div>
                        </div>
                    </div>

                
                </div>
            }
            <div className="mt-4">
                <Table data={coins.filter( d => d.promote )} title={"PROMOTED"} 
                    allowRoute={false} userAddress={userAddress} 
                    voteMap={voteMap} connected={connected} voteCoin={voteCoin} />
            </div>
            
      
        </>
    );
}

export default Coin;