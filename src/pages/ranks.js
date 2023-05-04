import { useState } from "react";
import Search from "../components/ranks/search";
import Table from "../components/ranks/table";

const data = [
    {
        id:1,
        name: "WEFI",
        symbol: "WEFI",
        chain: "BSC",
        price: "+1.2",
        mrkCap: "1200000",
        votes: "100000",
        promoted: false,
        tag:["new","promoted"]
    },
    {
        id:2,
        name: "Mind Music",
        symbol: "MND",
        chain: "BSC",
        price: "+1.2",
        mrkCap: "10000",
        votes: "10000",
        promoted: false,
        tag:["trending","promoted"]
    },
    {
        id:3,
        name: "Inverted Pepe",
        symbol: "$3D3D",
        chain: "ETH",
        price: "+1.2",
        mrkCap: "45000",
        votes: "10000",
        promoted: true,
        tag:["trending","promoted"]
    },
    {
        id:4,
        name: "EthShares",
        symbol: "ETS",
        chain: "BSC",
        price: "+1.2",
        mrkCap: "500000",
        votes: "86000",
        promoted: false,
        tag:["trending","promoted"]
    },
    {
        id:5,
        name: "PepeCola",
        symbol: "PEPECOLA",
        chain: "ETH",
        price: "+1.2",
        mrkCap: "750000",
        votes: "20000",
        promoted: true,
        tag:["trending","promoted"]
    }
]

function Ranks() {
    const [tag, setTag] = useState("trending")
    
    return (
       <>
        <Search/>

        <Table data={data.filter( d => d.tag.includes("promoted") )} title={"PROMOTED"}/>

        <div className="mt-5 mb-3">
            <button className="btn btn-light me-3" onClick={ () => setTag('trending') }>Trending</button>
            <button className="btn btn-outline-secondary me-3" onClick={ () => setTag('new') }>New</button>
            <button className="btn btn-outline-secondary me-3" onClick={ () => setTag('audited') }>Audited</button>
        </div>

        <Table data={data.filter( d => d.tag.includes(tag) )} title={"ASSET"}/>
       </>
    )
}


export default Ranks;