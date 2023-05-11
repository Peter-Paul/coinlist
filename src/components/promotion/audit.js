import { useSelector } from "react-redux";
import Table from "../ranks/table";

function Audit({styles}) {

    const {coins:data} = useSelector((state) => state.app)
    const {discount25:apply} = styles
    
    return ( 
        <>
            <h1>Coin Verification</h1>
            <h3>Get your smart contracts verified by our trusted partner - a team of analysts specialized in blockchain technology</h3>
            <div className="col-md-5 col-12">
                <p className="mt-4">Prove the reliability and correctness of your smart contract to your community by complete of the smart contract codebase and architecture.</p>
                <p>Rigorous testing of the project, code design pattern analytics to ensure it is well-structured and third-party contracts and libraries are used in a safe way.</p>

                <div  style={apply}>
                    <div className="ms-3">
                        <h3>How to apply:</h3>
                        <p>Send us direct message on Telegram: @CoinList Promotions</p>
                        <p>Or e-mail us at: contact@coinlist.com</p>
                    </div>
                </div>

            </div>

            <div className="mt-4">
              <Table data={data.filter( d => d.tag.includes("audited") )} title={"AUDITED COINS"} allowRoute={false}/>
            </div>
        </>
     );
}

export default Audit;