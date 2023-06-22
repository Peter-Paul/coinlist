import { useState } from "react";
import Search from "../components/ranks/search";
import Table from "../components/ranks/table";
import AddCoin from "../components/ranks/addCoin";
import { useSelector } from "react-redux";
import TelegramPosts from "../components/ranks/telegramPosts";
import PriceDisplay from "../shared/priceDisplay";
import TopBanner from "../shared/topBanners";

function Ranks({priceDisplay,validTimestamp,voteCoin,telegramPosts}) {
    const [tag, setTag] = useState("trending")
    const [tableView, showTables] = useState(true)
    const {coins:data,voteMap,userAddress,connected,baseUrl} = useSelector((state) => state.app)
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


    
    return (
       <>
        { tableView &&
                <>
                    <div className="d-block d-md-block d-custom-none">
                        <PriceDisplay priceDisplay={priceDisplay} />
                    </div>


                    <TopBanner/>


                    <Search changeView={ () => { showTables(false) } } />

                    <Table data={data.filter( d => d.promote )} title={"PROMOTED"} 
                       allowRoute={true} userAddress={userAddress} 
                       voteMap={voteMap} connected={connected} voteCoin={voteCoin} />


                    <TelegramPosts telegramPosts={telegramPosts} styles={styles} />

               
                    <div className="mt-5 mb-3">
                        <button className="btn btn-dell-blue me-3 mb-2" onClick={ () => setTag('trending') }> <i className="fa fa-fire me-1"></i> Trending</button>
                        <button className="btn btn-outline-light me-3 mb-2" onClick={ () => setTag('new') }> <i className="fa fa-bell me-1"></i> New</button>
                        <button className="btn btn-outline-light me-3 mb-2" onClick={ () => setTag('audited') }> <i className="fa fa-shield me-1"></i> Audit</button>
                        <button className="btn btn-outline-light me-3 mb-2" onClick={ () => setTag('kyc') }> <i className="fa fa-key me-1"></i> KYC</button>
                        <button className="btn btn-outline-light me-3 mb-2" onClick={ () => setTag('pinksale') }> <i className="fa fa-rocket me-1"></i> Pinksale</button>
                    </div>

                    <Table data={data.filter( d => d.tags.includes(tag) )} title={"ASSET"}
                        allowRoute={true} userAddress={userAddress} 
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