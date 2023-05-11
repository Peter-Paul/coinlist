function AboutMyToken() {

    const tokeInfo = {
        address:"0x34E942859469c9dB9C22F4eAF866E2c2401BB795",
        chain:"BSC",
        tokenonmics:[
            {name:"Burned", value:1},
            {name:"Development & Marketing", value:0},
            {name:"Distributed to COINLIST holders", value:2},
            {name:"Added to liquidity", value:1},
        ],
        roadMap:[
            {id:1,year:2023,quarter:"Q1",goals:["Marketing Campaign","Presale","Contract Deployment and Technical Audit","Listing on Pancakeswap","Promotion discounts for COINLIST holders","Listing on CoinMarketCap and CoinGecko"]},
            {id:2,year:2023,quarter:"Q2",goals:["5000+ holders","10 000+ coins listed","New exchange listings","GameFi listing","Scam alerts"]},
            {id:3,year:2023,quarter:"Q3",goals:["Further expansion of Coinlist platform","Development of games for COINLIST token","New exchange listings","Gambling","NFT Platform "]},
            {id:4,year:2023,quarter:"Q4",goals:["5000+ holders","10 000+ coins listed","New exchange listings","GameFi listing","Scam alerts"]},
        ]
        
    }

    const styles = {
        percent:{
            fontSize: "25px",
        },
        card:{
            width:"300px"
        },
        percentValue:{
            fontSize: "80px"
        },
        contact:{
            borderLeftColor:"white",
            borderLeftWidth:"1px",
            borderLeftStyle:"solid",
        },
        roadMap:{
            borderRadius:"50px",
        },
        roadMapInfo:{
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            textAlign: "center",
            minHeight:"40vh"
        },
        address:{
            fontSize: "14px"
        },
        year:{
            fontSize: "20px"
        }
    }
    return (
        <>
            <div className="d-flex justify-content-between mb-3">
                <h1>Hey!  Great news! </h1>
                <button className="btn btn-lg btn-outline-light">Stake</button>
            </div>
            <h2>We are proud to announce $COINLIST </h2>
            <h2>BSC token & it's just amazing!</h2>
            <p>Warmly welcome onboard and fasten your seatbelts!</p>
            <p>CoinMooner aims to be a crypto community platform to make cryptocurrency more accessible to the public, provide entertaining features, developments and news. We want to stay relevant and keep up with rapid crypto growth. Our ambitious but realistic roadmap ensures a safe journey over the Moon!</p>

            <p>We are expanding! Be a part of success and let's Moon together!</p>

            <div style={styles.contact}>
                <div className="ms-2">
                    <p className="col-md-6 col-12 p-3 rounded bg-dark" style={styles.address}>
                                {tokeInfo.address} <mark className="ms-2">{tokeInfo.chain}</mark>
                    </p>
            
                    <p>
                        Binance Smart Chain (BSC)
                    </p>
                    <p>
                        Decimals: 18
                    </p>

                    <p>
                        Slippage: 5%
                    </p>

                    
                    <button className="btn btn-outline-light"> <i className="fa fa-telegram me-2"></i>Join Telegram</button>
                </div>
            </div>

            <div className="mt-5">
                <h2>Coinlist Roadmap</h2>
                <h5>Be a part of great journey!</h5>
                <div className="d-flex justify-content-evenly row mt-3">
                    {
                        tokeInfo.roadMap.map( ({id,year,quarter,goals}) => {
                            return (
                                <div key={id} className="col-md-5 mb-3 me-1 col-12 bg-dark text-light shadow" style={styles.roadMap}>
                                    <div style={styles.roadMapInfo}>
                                        <div className="d-flex flex-column">
                                        
                                            <h1>{quarter} <span className="badge bg-light text-dark" style={styles.year} >{year}</span></h1>
                                            
                                            <ul className="list-group bg-light list-group-flush text-start">
                                                {
                                                    goals.map( g => <li key={g} className="list-group-item bg-dark text-light">{g}</li> )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        } )
                    }
                </div>
            </div>

            <div className="bg-dark shadow p-4 rounded mt-5">
                <h2>Tokenomics</h2>
                <p>10% Development & Marketing Vault - Locked for 18 months, monthly unlock</p>
                <p>90% Presale and Liquidity</p>
                <div className="d-flex flex-justify-content-evenly row">
                    { tokeInfo.tokenonmics.map( ({name,value}) => { return (

                        <div key={name} className="card mx-2 mb-3 bg-secondary text-light text-center shadow" style={styles.card}>
                            <div className="card-header">
                                <h6 className="card-title">
                                    {name}
                                </h6>
                            </div>
                            <div className="card-body" >
                                <h1  style={styles.percentValue}>{value}<span style={styles.percent}>%</span></h1>
                            </div>
                        </div>

                    ) } ) }
                </div>
            </div>

            
        </> 
    );
}

export default AboutMyToken;