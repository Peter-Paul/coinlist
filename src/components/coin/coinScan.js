import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function CoinScan({address,chain,scanUrl}) {
    const [scanInfo,setScanInfo] = useState(undefined)

    const scanCoin = useCallback(async () => {
        const url = "https://www.coinscope.co/api/search/contract"
        const payload = {
            type: "address",
            address,
            network: chain
        }
        const response = await axios.post( url, payload )
        if (response.status === 200) { 
            console.log(response.data)
            const {contract,score,smartAudit,rank,pools} = response.data

            const {contractOwner,proxy,renounced,unverified} = contract
            const {dexes} = pools
            const {buyTax,sellTax,pinksaleAntiBot} = smartAudit

            setScanInfo({
                score,rank,contractOwner,proxy,renounced,unverified,dexes,buyTax,sellTax,pinksaleAntiBot
            }) 
        }
    },[address,chain])

    useEffect( () => {
        scanCoin()
    }, [scanCoin] )

    const scoreColor = score => {
            if (score<50) return "danger"
            if (score>=50 && score<80) return "warning"
            if (score>=80) return "success"
            return "secondary"
    }

    const styles = {
        cardBlue:{
            backgroundColor:"#003153",
            borderColor:"#0076CE"
        }
    }

    return ( 
        <>        

            { scanInfo &&
                    <div className="d-flex justify-content-between row">
                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-between">
                            <p>Score:</p>
                            <p className={`text-${scoreColor(parseInt(scanInfo.score))}`}>
                                <strong>{scanInfo.score}%</strong>
                            </p>
                        </div>
                        {
                            scanInfo.rank &&
                            <div className="d-flex justify-content-between">
                                <p>Critical:</p>
                                <p className={`text-${scoreColor(parseInt(scanInfo.score))}`}>
                                    <strong>{scanInfo.rank}</strong>
                                </p>
                            </div>
                        }

                        {
                            scanInfo.unverified!==undefined &&
                            <div className="d-flex justify-content-between">
                                <p>Verified:</p>
                                <p className={`text-${scanInfo.unverified?"danger":"success"}`}>
                                    <strong>{scanInfo.unverified?"False":"True"}</strong>
                                </p>
                            </div>
                        }

                        {
                            scanInfo.contractOwner &&
                            <div className="d-flex justify-content-between">
                                <p>Owner:</p>
                                <p>
                                    {`${scanInfo.contractOwner.slice(0,6)}...`}
                                    <span class="badge ms-1 shadow" 
                                    onClick={ () => window.open(`${scanUrl}${scanInfo.owner}`,"_blank") }
                                    style={{...styles.cardBlue,borderWidth:"1px",borderStyle:"solid"}}><i className="fa fa-link"></i></span>
                                </p>
                            </div>
                        }
                        
                    </div>
                    <div className="col-12 col-md-6">
                        {
                            scanInfo.proxy !== undefined &&
                            <div className="d-flex justify-content-between">
                                <p>Proxy:</p>
                                <p>
                                    <strong>{scanInfo.proxy?"True":"False"}</strong>
                                </p>
                            </div>
                        }

                        {
                            scanInfo.renounced !== undefined &&
                            <div className="d-flex justify-content-between">
                                <p>Renounced:</p>
                                <p>
                                    <strong>{scanInfo.renounced?"True":"False"}</strong>
                                </p>
                            </div>
                        }

                        {
                            scanInfo.buyTax !== undefined &&
                            <div className="d-flex justify-content-between">
                                <p>BuyTax:</p>
                                <p>
                                    <strong>{scanInfo.buyTax}%</strong>
                                </p>
                            </div>
                        }

{
                            scanInfo.sellTax !== undefined &&
                            <div className="d-flex justify-content-between">
                                <p>SellTax:</p>
                                <p>
                                    <strong>{scanInfo.sellTax}%</strong>
                                </p>
                            </div>
                        }

                    </div>
                    
                </div>
            }
        </>
     );
}

export default CoinScan;