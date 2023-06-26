import { Link } from "react-router-dom";
import Table from "../components/ranks/table";
import { useSelector } from "react-redux";
import TopBanner from "../shared/topBanners";

function Games({voteCoin}) {
    const {coins,voteMap,games,gameMap,userAddress,connected,} = useSelector((state) => state.app)
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
                    <div className="d-flex justify-content-between mb-3">
                        <h2><strong>GameFi</strong></h2>
                        <Link className="btn btn-outline-dell-blue" to={"/addGame"}> <i className="fa fa-plus me-1"></i> Add Game</Link>
                    </div>

                    <Table data={games.filter( g => g.show)} allowRoute={false} userAddress={userAddress} gameMap={gameMap} connected={connected} games={true} />
                </div>
            </div>

            <div className="mt-4">
                <Table data={coins.filter( d => d.show && d.promote )} title={"PROMOTED"} 
                    allowRoute={false} userAddress={userAddress} 
                    voteMap={voteMap} connected={connected} voteCoin={voteCoin} />
            </div>
        </>
     );
}

export default Games;