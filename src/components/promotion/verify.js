import { useSelector } from "react-redux";
import Table from "../ranks/table";

function Verify({styles}) {
    const {coins:data} = useSelector((state) => state.app)
    const {discount25:apply} = styles
    return (  
        <>
            <h1>Coin Doxxing</h1>
            <h3>Doxxing - Get your team verified to show your community your transparency.</h3>
            <p className="mt-3">Know Your Customer (KYC) – is the essential method of verification the identity of the project teams. CoinMooner employs this procedure to verify the identity of the project team members. Let's make crypto space safer!</p>
            <div className="col-md-6 col-12">
                <h3 className="my-3">How is verification processed?</h3>
                <p className="mt-4">You are required to join a video call which will be recorded, and in case of rug/honeypot schemes the recording would be uploaded to your social groups for the victims of scam. We will mark your project as verified by CoinMooner team, which will improve your trustworthiness for investors and entire crypto community.</p>
                <div  style={apply}>
                    <div className="ms-3">
                        <h4 className="mb-2">Price:</h4>
                        <h4>For owners: 1 BNB</h4>
                        <h4 className="mb-2">For entire project team: 1.5 BNB</h4>
                        <h3>How to apply:</h3>
                        <p>Send us direct message on Telegram: @CoinList Promotions</p>
                        <p>Or e-mail us at: contact@coinlist.com</p>
                    </div>
                </div>

            </div>

            <div className="mt-4">
              <Table data={data.filter( d => d.tag.includes("doxxed") )} title={"DOXXED COINS"} allowRoute={false}/>
            </div>
        </>
    );
}

export default Verify;