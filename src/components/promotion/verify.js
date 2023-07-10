import { useSelector } from "react-redux";
import Table from "../ranks/table";
import Apply from "./apply";
import { useTranslation } from "react-i18next";

function Verify({voteCoin}) {
    const {coins:data,voteMap,userAddress,connected} = useSelector((state) => state.app)
    const {t:content} = useTranslation()

    return (  
        <>
            <h3>{content("kyc.h1")}</h3>
            <h4>{content("kyc.h2")}</h4>
            <p className="mt-3">{content("kyc.p1")}</p>
            <div className="col-md-6 col-12">
                <h4 className="my-3">{content("kyc.h3")}</h4>
                <p className="mt-4">{content("kyc.p2")}</p>
                
                <Apply price={1000} />

            </div>

            <div className="mt-4">
              <Table data={data && data.filter( d => d.show && d.tags.includes("kyc") )} title={"KYC COINS"} allowRoute={false}
              userAddress={userAddress} 
              voteMap={voteMap} connected={connected} voteCoin={voteCoin}/>
            </div>
        </>
    );
}

export default Verify;