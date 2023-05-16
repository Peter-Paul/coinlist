import { Route, Routes } from "react-router-dom";
import AboutMyToken from "../components/myToken/aboutToken";
import Stake from "../components/myToken/stake";

function Token() {
    return (
        <>
            <Routes>
                <Route  exact path="/" 
                    element={ <AboutMyToken/> }
                />
                <Route  exact path="/stake" 
                    element={ <Stake/> }
                />
            </Routes>
            
        </>
    )
}


export default Token;