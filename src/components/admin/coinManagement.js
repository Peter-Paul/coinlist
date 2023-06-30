import { useDispatch, useSelector } from "react-redux";
import Table from "../ranks/table";
import CoinService from "../../services/coins";
import { deleteCoin, updateCoin } from "../../state/app.reducers";

function CoinManagement({voteCoin}) {
    const {coins:data,voteMap,userAddress,connected,baseUrl} = useSelector((state) => state.app)
    const dispatch = useDispatch()

    const patchCoin = async coin => {
        if(baseUrl){
            const coinService = new CoinService(baseUrl)
            const response =  await coinService.updateCoin(coin)
            console.log(response)
        }
        dispatch( updateCoin(coin) )

    }

    const removeCoin = async address => {
        if(baseUrl){
            const coinService = new CoinService(baseUrl)
            const response =  await coinService.deleteCoin(address)
            console.log(response)
        }

        dispatch( deleteCoin(address) )
        
    }

    return ( 
        <>
            <div className="mt-4">
              <Table data={data} title={"COINS"} allowRoute={true}
              userAddress={userAddress} 
              voteMap={voteMap} connected={connected} voteCoin={voteCoin} 
              admin={true} updateCoin={updateCoin} removeCoin={removeCoin}
              patchCoin={patchCoin} />
            </div>
        </>
     );
}

export default CoinManagement;