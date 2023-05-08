import { Link, useParams } from "react-router-dom";
import "./coin.css"
import Media from "../shared/media";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Coin() {
    const {address} = useParams()
    const {coinMap} = useSelector((state) => state.app)
    const [coin, setCoin] = useState(undefined)
    // const {name,symbol} = coin
    useEffect( ()=> { setCoin(coinMap[address]); console.log(coinMap) }, [address,coinMap] )


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

    const styles = {
        info:{
            borderLeftColor:"white",
            borderLeftWidth:"1px",
            borderLeftStyle:"solid",
        },
        address:{
            fontSize: "14px"
        }
    }

    return (  
        <>
            <div className="mb-4">
                <button className="btn btn-outline-light ms-3 rank-link"> 
                    <i className="me-2 fa fa-angle-left"></i>
                    <Link className="rank-link" to="/">
                        Rankings 
                    </Link>
                </button>
            </div>
            { coin &&

                <div className="row">
                    <div className="col-12 col-md-8" >
                        <div className="d-flex flex-column">
                            <div className="mb-4 d-flex justify-content-between">
                                <h1 >{coin.name}<span className="badge text-bg-light ms-4">{coin.symbol}</span></h1>
                                <button className='btn btn-lg btn-outline-light' onClick={addCoinToWallet}>
                                    {/* <div className="col-4">
                                        <img className="img-fluid me-2" src={process.env.PUBLIC_URL + '/metamask.9eeb7e72.svg'} alt="test" />
                                    </div> */}
                                    Add to Wallet
                                </button>
                            </div>
                            <p className="col-md-6 col-12 p-3 rounded bg-dark" style={styles.address}>
                                {coin.address} <mark className="ms-2">{coin.chain}</mark>
                            </p>
                            
                            <div className="d-flex justify-content-start mb-4">
                                <div className="d-flex flex-column me-2">
                                    <button className='btn btn-lg btn-outline-light'>VOTE</button>
                                    <small>You can vote once every 24 hours</small>
                                </div>
                                <div>
                                    <h2 className="mb-4"><span className="badge text-bg-light ms-2">{coin.votes}</span></h2>
                                </div>
                            </div>

                            <div className="col-3 mb-3">
                                <Media/>
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
                                    Charts
                                </h3>
                                
                                <div className="my-2 p-2 d-flex justify-content-between">
                                    <div>Buy on</div>
                                    <button className="btn btn-light">Uniswap</button>
                                </div>

                                <div className="my-2 p-2 d-flex justify-content-between">
                                    <div>Buy on</div>
                                    <button className="btn btn-light">Mobula</button>
                                </div>

                                <div className="my-2 p-2 d-flex justify-content-between">
                                    <div>Buy on</div>
                                    <button className="btn btn-light">Flooz</button>
                                </div>
                                
                                <hr />
                                <h3 className="card-title">
                                    Tags
                                </h3>
                                <small>{coin.tag.map( t => <span key={t} className="badge text-bg-light me-1">{t}</span> )}</small>
                            </div>
                        </div>
                    </div>

                
                </div>
            }
            
      
        </>
    );
}

export default Coin;