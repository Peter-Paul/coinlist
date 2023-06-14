import { useSelector } from "react-redux";
import Table from "../ranks/table";
import Apply from "./apply";

function Audit({voteCoin}) {

    const {coins:data,voteMap,userAddress,connected} = useSelector((state) => state.app)
    
    return ( 
        <>
            <h1>Coin Audit</h1>
            <h3>Get your smart contracts verified by our trusted partner - a team of analysts specialized in blockchain technology</h3>
            <div className="col-md-5 col-12">
                <p className="mt-4">Prove the reliability and correctness of your smart contract to your community by complete of the smart contract codebase and architecture.</p>
                <p>Rigorous testing of the project, code design pattern analytics to ensure it is well-structured and third-party contracts and libraries are used in a safe way.</p>

                <Apply price={250}/>

            </div>

            <div className="mt-4">
              <Table data={data.filter( d => d.tags.includes("audited") )} title={"AUDITED COINS"} allowRoute={false}
              userAddress={userAddress} 
              voteMap={voteMap} connected={connected} voteCoin={voteCoin}/>
            </div>
        </>
     );
}

export default Audit;