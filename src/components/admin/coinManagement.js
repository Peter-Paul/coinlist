import { useSelector } from "react-redux";
import Table from "../ranks/table";

function CoinManagement({validTimestamp,voteCoin}) {
    const {coins:data,voteMap,userAddress,connected} = useSelector((state) => state.app)
    return ( 
        <>
            <div className="mt-4">
              <Table data={data} title={"COINS"} allowRoute={false}
              validTimestamp={validTimestamp} userAddress={userAddress} 
              voteMap={voteMap} connected={connected} voteCoin={voteCoin} admin={true} />
            </div>
        </>
     );
}

export default CoinManagement;