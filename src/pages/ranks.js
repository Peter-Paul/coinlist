import { useState } from "react";
import Search from "../components/ranks/search";
import Table from "../components/ranks/table";
import AddCoin from "../components/ranks/addCoin";
import { useSelector } from "react-redux";

function Ranks({priceDisplay,validTimestamp,voteCoin,tweets,telegramPosts}) {
    const [tag, setTag] = useState("trending")
    const [tableView, showTables] = useState(true)
    const {coins:data,voteMap,userAddress,connected,bannerMap,baseUrl} = useSelector((state) => state.app)
    const styles = {
        card:{
            width:"140px"
        },
        priceDisplay:{
            fontSize:"12px"
        },
        wideBannerImage:{
            height: "115px",
            width: "1022px",
        },
        wideBannerImageMobile:{
            height: "60px",
            width: "370px",
        },
        gifBanner:{
            width:"500px",
            height:"200px", 
            borderRadius:"15px"
        },
        tweetCard:{
            backgroundColor:"#003153",
            borderColor:"#0076CE"
        },
        tweetCardUser:{
            color:"#0076CE"
        }
    }

    const timePosted = time => {
        
        const now = Math.floor( new Date().getTime() / 1000 )
        const diff = now - time

        const minutes = 60
        const hour = minutes* 60
        const day = hour * 24
        const month = day * 30
        const year = month * 12

        if( diff < minutes ){
            return `Posted ${diff} seconds ago`
        }else if (diff > minutes && diff < hour){
            return `Posted ${Math.floor(diff/minutes)} minute(s) ago`
        }else if (diff > hour && diff < day){
            return `Posted ${Math.floor(diff/hour)} hour(s) ago`
        }else if (diff > day && diff < month){
            return `Posted ${Math.floor(diff/day)} day(s) ago`
        }else if (diff > month && diff < year){
            return `Posted ${Math.floor(diff/month)} month(s) ago`
        }else{
            return `Posted ${Math.floor(diff/year)} year(s) ago`
        }
    }
    
    return (
       <>
        { tableView &&
                <>
                    { priceDisplay &&

                        <div className="d-flex justify-content-center mb-3">
                            { priceDisplay.map( ({symbol,percentageChange,price}) => {
                                return (

                                    <div key={symbol} className="p-2 mx-1 bg-dark my-1 rounded d-none d-md-block" style={styles.card}>
                                        <div className="d-flex flex-column text-center">
                                            <small>
                                                <strong className="me-1">{symbol.toUpperCase()}</strong>
                                                <span 
                                                    style={{...styles.priceDisplay, color:`${percentageChange>0?"green":"red"}`}}>{percentageChange}%</span> 
                                            </small>
                                            <small>${price.toFixed(3)}</small>
                                        </div>
                                    </div>
                                )
                            } ) }
                
                        </div>
                    }
                    
                    <div className="d-flex justify-content-evenly my-3">
                        <img
                            alt="not found"
                            style={styles.wideBannerImage}
                            src={bannerMap['banner1']}
                            className="rounded d-none d-md-block"
                        />
                        <img
                            alt="not found"
                            style={styles.wideBannerImageMobile}
                            src={bannerMap['banner1']}
                            className="rounded responsive d-block d-md-none"
                        />
                    </div>

                    <div className="d-none d-md-block">
                        <div className="d-flex justify-content-center mt-4 row ">
                            <img
                                alt="not found"
                                style={styles.gifBanner}
                                src={bannerMap['banner5']}
                            />
                            <img
                                alt="not found"
                                style={styles.gifBanner}
                                src={bannerMap['banner5']}
                            />
                        </div>
                    </div>


                    <div className="d-flex justify-content-evenly my-3">
                        <img
                            alt="not found"
                            style={styles.wideBannerImage}
                            src={bannerMap['banner2']}
                            className="rounded my-3 responsive d-none d-md-block"
                        />
                        <img
                            alt="not found"
                            style={styles.wideBannerImageMobile}
                            src={bannerMap['banner2']}
                            className="rounded my-3 responsive d-block d-md-none"
                        />
                    </div>


                    <Search changeView={ () => { showTables(false) } } />

                    <Table data={data.filter( d => d.promoted )} title={"PROMOTED"} 
                       validTimestamp={validTimestamp} allowRoute={true} userAddress={userAddress} 
                       voteMap={voteMap} connected={connected} voteCoin={voteCoin} />



                    {
                        tweets && 
                        <>
                            <div className="d-flex justify-content-evenly mt-4 row">
                                {
                                    telegramPosts.map( ({user,caption,date,imageUrl}) => {
                                        return (
                                            <>          
                                                <div className="col-12 col-md-3 my-3" key={date}>
                                                    <div className="card shadow " style={styles.tweetCard}>
                                                        <div  className="photo-holder">
                                                            <div style={{backgroundImage:`url(${imageUrl})`}} className="photo-img" alt=""></div>
                                                        </div>
                                                        <div className="card-body">
                                                            {/* <h5 className="card-title text-dell-blue"> <strong>@{user}</strong></h5> */}
                                                            <p className="card-text text-light">{`${caption.slice(0,160)}...`}</p>
                                                        </div>
                                                        <div className="card-footer">
                                                            <small className="text-body-secondary">{timePosted(date)}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    } )
                                }
                            </div>
                        
                        </>
                    }

                    <div className="mt-5 mb-3">
                        <button className="btn btn-dell-blue me-3 mb-2" onClick={ () => setTag('trending') }> <i className="fa fa-fire me-1"></i> Trending</button>
                        <button className="btn btn-outline-light me-3 mb-2" onClick={ () => setTag('new') }> <i className="fa fa-bell me-1"></i> New</button>
                        <button className="btn btn-outline-light me-3 mb-2" onClick={ () => setTag('audited') }> <i className="fa fa-shield me-1"></i> Audit</button>
                        <button className="btn btn-outline-light me-3 mb-2" onClick={ () => setTag('kyc') }> <i className="fa fa-key me-1"></i> KYC</button>
                        <button className="btn btn-outline-light me-3 mb-2" onClick={ () => setTag('pinksale') }> <i className="fa fa-rocket me-1"></i> Pinksale</button>
                    </div>

                    <Table data={data.filter( d => d.tags.includes(tag) )} title={"ASSET"}
                        validTimestamp={validTimestamp} allowRoute={true} userAddress={userAddress} 
                        voteMap={voteMap} connected={connected} voteCoin={voteCoin} />
                </>
        }

        {   !tableView &&
            <AddCoin changeView={ () => { showTables(true) } } baseUrl={baseUrl} />
        }
        
       </>
    )
}


export default Ranks;