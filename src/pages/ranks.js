import { useState } from "react";
import Search from "../components/ranks/search";
import Table from "../components/ranks/table";
import AddCoin from "../components/ranks/addCoin";
import { useSelector } from "react-redux";

function Ranks() {
    const [tag, setTag] = useState("trending")
    const [tableView, showTables] = useState(true)
    const {coins:data} = useSelector((state) => state.app)
    
    return (
       <>
        { tableView &&
                <>
                    <Search changeView={ () => { showTables(false) } } />

                    <Table data={data.filter( d => d.promoted )} title={"PROMOTED"} allowRoute={true}/>

                    <div className="mt-5 mb-3">
                        <button className="btn btn-light me-3" onClick={ () => setTag('trending') }>Trending</button>
                        <button className="btn btn-outline-secondary me-3" onClick={ () => setTag('new') }>New</button>
                        <button className="btn btn-outline-secondary me-3" onClick={ () => setTag('audited') }>Audited</button>
                        <button className="btn btn-outline-secondary me-3" onClick={ () => setTag('doxxed') }>Doxxed</button>
                    </div>

                    <Table data={data.filter( d => d.tag.includes(tag) )} title={"ASSET"} allowRoute={true}/>
                </>
        }

        {   !tableView &&
            <AddCoin changeView={ () => { showTables(true) } } />
        }
       </>
    )
}


export default Ranks;