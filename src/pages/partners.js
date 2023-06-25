import { useSelector } from "react-redux";
import PartnerList from "../components/partners/partnerList";
import Table from "../components/ranks/table";
import TopBanner from "../shared/topBanners";

function Partners({voteCoin}) {
    const {coins,connected,voteMap,userAddress} = useSelector((state) => state.app)
    const styles = {
        cardBlue:{
            backgroundColor:"#003153",
            borderColor:"#0076CE"
        },
    }
    return ( 
        <>  
            <TopBanner />

            <div className="card shadow" style={styles.cardBlue}>
                <div className="card-body">
                    <h2 className="mb-2"><strong>Our Partners</strong></h2>
                    <PartnerList page={true}/>

                </div>
            </div>
            <div className="mt-4">
                <Table data={coins.filter( d => d.promote )} title={"PROMOTED"} 
                    allowRoute={false} userAddress={userAddress} 
                    voteMap={voteMap} connected={connected} voteCoin={voteCoin} />
            </div>
        </>
     );
}

export default Partners;