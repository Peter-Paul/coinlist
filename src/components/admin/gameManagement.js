import { useDispatch, useSelector } from "react-redux"
import GameService from "../../services/games"
import { deleteGame, updateGame } from "../../state/app.reducers"
import Table from "../ranks/table"

function GameManagement() {
    const {games,gameMap,userAddress,connected,baseUrl} = useSelector((state) => state.app)
    const dispatch = useDispatch()

    const patchGame = async coin => {
        if(baseUrl){
            const gameService = new GameService(baseUrl)
            const response =  await gameService.updateGame(coin)
            console.log(response)
        }
        dispatch( updateGame(coin) )

    }

    const removeGame = async address => {
        if(baseUrl){
            const gameService = new GameService(baseUrl)
            const response =  await gameService.deleteGame(address)
            console.log(response)
        }

        dispatch( deleteGame(address) )
        
    }
    return ( 
        <>
            <div className="mt-4">
                <Table data={games} allowRoute={false} admin={true}
                userAddress={userAddress} gameMap={gameMap} connected={connected} games={true} 
                removeGame={removeGame} patchGame={patchGame}/>
            </div>
        </>
     );
}

export default GameManagement;