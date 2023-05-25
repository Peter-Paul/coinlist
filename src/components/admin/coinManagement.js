import { useDispatch, useSelector } from "react-redux";
import Table from "../ranks/table";
// import CoinService from "../../services/coins";
import { deleteCoin, updateCoin } from "../../state/app.reducers";

function CoinManagement({validTimestamp,voteCoin}) {
    const {coins:data,voteMap,userAddress,connected} = useSelector((state) => state.app)
    const dispatch = useDispatch()

    const patchCoin = async coin => {
        // const coinService = new CoinService(baseUrl)
        // const response =  await coinService.updateCoin(coin)

        dispatch( updateCoin(coin) )

    }

    const removeCoin = async address => {
        // const coinService = new CoinService(baseUrl)
        // const response =  await coinService.updateCoin(address)

        dispatch( deleteCoin(address) )
        
    }

    return ( 
        <>
            <div className="mt-4">
              <Table data={data} title={"COINS"} allowRoute={false}
              validTimestamp={validTimestamp} userAddress={userAddress} 
              voteMap={voteMap} connected={connected} voteCoin={voteCoin} 
              admin={true} updateCoin={updateCoin} removeCoin={removeCoin}
              patchCoin={patchCoin} />
            </div>
        </>
     );
}

export default CoinManagement;