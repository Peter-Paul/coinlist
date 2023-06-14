import { useSelector } from "react-redux";
import Table from "../ranks/table";
import Apply from "./apply";

function Verify({voteCoin}) {
    const {coins:data,voteMap,userAddress,connected} = useSelector((state) => state.app)
    return (  
        <>
            <h1>Coin Verification</h1>
            <h3> Get your team verified to show your community your transparency. </h3>
            <p className="mt-3">Know Your Customer (KYC) – is the essential method of verification the identity of the project teams. Doctoreclub employs this procedure to verify the identity of the project team members. Let's make crypto space safer!</p>
            <div className="col-md-6 col-12">
                <h3 className="my-3"> How is verification processed? </h3>
                <p className="mt-4">You must participate in a video call that will be recorded. In the event of a rug or honeypot plan, the recording will be posted to your social media groups for the benefit of the scam victims. Your project will be marked as having been validated by the Doctoreclub team, enhancing your credibility with investors and the whole crypto community.</p>
                
                <Apply price={1000} />

            </div>

            <div className="mt-4">
              <Table data={data.filter( d => d.tags.includes("kyc") )} title={"KYC COINS"} allowRoute={false}
              userAddress={userAddress} 
              voteMap={voteMap} connected={connected} voteCoin={voteCoin}/>
            </div>
        </>
    );
}

export default Verify;