import { useSelector } from "react-redux";
import Table from "../ranks/table";
import Apply from "./apply";
import { useTranslation } from "react-i18next";

function Audit({voteCoin}) {

    const {coins:data,voteMap,userAddress,connected} = useSelector((state) => state.app)
    const {t:content} = useTranslation()

    return ( 
        <>
            <h3>{content("audit.h1")}</h3>
            <h4>{content("audit.h2")}</h4>
            <div className="col-md-5 col-12">
                <p className="mt-4">{content("audit.p1")}</p>
                <p>{content("audit.p2")}</p>

                <Apply price={250}/>

            </div>

            <div className="mt-4">
              <Table data={data.filter( d => d.show && d.tags.includes("audited") )} title={"AUDITED COINS"} allowRoute={false}
              userAddress={userAddress} 
              voteMap={voteMap} connected={connected} voteCoin={voteCoin}/>
            </div>
        </>
     );
}

export default Audit;