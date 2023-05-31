import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';


function Table({data,title,allowRoute,connected,userAddress,validTimestamp,voteCoin,voteMap,admin=false,removeCoin,patchCoin}) {
    
    const styles = {
        coinName:{
            color:"white",
            textDecoration: "none"
        }
    }

    const tags2show = ["audited","kyc"]

    const customFigure = figure => {
        const [zero, minimum, thousand,million,billion, trillion] = [ 0, 0.0001, 10**3, 10**6, 10**9, 10**12 ]
        if(figure<=zero){
            return "-"
        }else if(figure>zero && figure<minimum){
            return `>${minimum}`
        }else if(figure>=minimum && figure<thousand){
            return `${(figure).toFixed(3)}`
        }else if(figure>=thousand && figure<million){
            return `${(figure/thousand).toFixed(2)}K`
        }else if(figure>=million && figure<billion){
            return `${(figure/million).toFixed(2)}M`
        }else if(figure>=billion && figure<trillion){
            return `${(figure/billion).toFixed(2)}B`
        }else{
            return `${(figure/billion).toFixed(2)}T`
        }
    }

    const customLaunch = launch => {
        const daySecs = 86400
        const month =  30
        const year =  365
        const now = Math.floor( new Date().getTime() / 1000 )
        let days = Math.floor((launch - now) / daySecs )
        if(days < 0 ){
            days = Math.abs(days)
            if( days < month){
                return `${days} days ago`
            }else if (days < year && days > month){
                return `${Math.floor(days/month)} month(s) ago`
            }else{
                return `${Math.floor(days/year)} year(s) ago`
            }
        }else{
            days = Math.abs(days)
            if( days < month){
                return `${days} days to go`
            }else if (days < year && days > month){
                return `${Math.floor(days/month)} month(s) to go`
            }else{
                return `${Math.floor(days/year)} year(s) to go`
            }
        }
    }

    const customSymbol = symbol => {
        switch (symbol) {
            case "ethereum":
                return {name:"ETH",color:"#EFBBCC",text:"black"}
            case "binance-smart-chain":
                return {name:"BSC",color:"#ffc107",text:"black"}
            case "arbitrum-one":
                return {name:"ARBITRUM",color:"blue",text:"white"}
            case "polygon-pos":
                return {name:"MATIC",color:"purple",text:"black"}
            default:
                return {name:"CUSTOM",color:"grey",text:"black"}
        }
    }

    const columns = [
        {
            name: title,
            selector: row => row.name,
            cell: row => {
                return (
                    <>
                        { !allowRoute &&
                            <div className='d-flex flex-column my-3'>
                                <strong className='mb-1' style={{fontSize:"15px"}}>{row.name}</strong>
                                <h6>{row.tags.map( t => (tags2show.includes(t)) && <span key={t} className="badge text-bg-success me-1 mb-1">
                                <i className='fa fa-shield me-1'></i>{t}</span> 
                                    )}
                                </h6>
                            </div>
                        }
                        {
                            allowRoute &&
                            <Link style={styles.coinName} to={`/${row.address}`}>
                                <div className="d-flex flex-column my-3">
                                    <strong className='mb-1' style={{fontSize:"15px"}}>{row.name}</strong>
                                    <h6>{row.tags.map( t => (tags2show.includes(t)) && <span key={t} className="badge text-bg-success me-1 mb-1">
                                        <i className='fa fa-shield me-1'></i>{t}</span> 
                                        )}
                                    </h6>
                                </div>
                            </Link>
                        }
                    </>
                )
            }
        },
        {
            name: 'SYMBOL',
            selector: row => row.symbol,
            sortable: true,
            cell: row => {
                return (
                    <>
                        <strong>
                            {row.symbol}
                        </strong>
                    </>
                )
            }
        },
        {
            name: 'CHAIN',
            selector: row => row.chain,
            cell: row => {
                const {name,color,text} = customSymbol(row.chain)
                return (
                    <>
                        <div className="p-2" style={{backgroundColor:color,color:text}}>
                            <strong>
                                {name}
                            </strong>
                        </div>
                    </>
                )
            }
        },
        {
            name: 'PRICE',
            selector: row => row.price,
            sortable: true,
            cell: row => {
                return (
                    <>
                        <strong>
                            {customFigure(row.price)}
                        </strong>
                    </>
                )
            }
        },
        {
            name: 'LAUNCH',
            selector: row => row.launch,
            cell: row => {
                const {launch} = row
                return(
                    <>
                        <strong>
                            { customLaunch(parseInt(launch)) }
                        </strong>
                    </>
                )
            },
            sortable: true,
        },
        {
            name: 'VOTES',
            selector: row => row.votes,
            cell: row => { 
                const voter = voteMap[`${userAddress}/${row.address}`]
                return ( 
                        <>
                            { connected &&
                                <>
                                    {
                                        voter===undefined || validTimestamp(voter) ? 
                                        <button className='btn btn-light' onClick={()=>voteCoin(row.address)}>
                                            <i className='fa fa-check me-1'></i>
                                            <strong>
                                                {customFigure(parseFloat(row.votes))}
                                            </strong>
                                        </button>
                                        :
                                        <button className='btn btn-success'>
                                            <i className='fa fa-check me-1'></i>
                                            <strong>
                                                {customFigure(parseFloat(row.votes))}
                                            </strong>
                                        </button>
                                    }
                                </>
                            
                                
                            }

                            { !connected &&
                                <button className='btn btn-sm btn-outline-light' disabled>
                                    <i className='fa fa-check me-1'></i>
                                    <strong>
                                        {customFigure(parseFloat(row.votes))}
                                    </strong>
                                </button>
                            }
                        </>
                        ) 
            },
            sortable: true,
        },
        {
            name: 'PROMOTE',
            selector: row => row.promoted,
            sortable: true,
            omit: !admin,
            cell: row => { 
                const {address,promoted} = row
                return (
                    <>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id={address} checked={promoted} 
                                onChange={ () => patchCoin( {...row, 
                                    promoted: promoted ?  false : true
                                } ) }
                            />
                            <label className="form-check-label" htmlFor={address}>
                                {/* Checked switch checkbox input */}
                            </label>
                        </div>
                    
                    </>
                )
            }
        },
        {
            name: 'DISPLAY',
            selector: row => row.show,
            sortable: true,
            omit: !admin,
            cell: row => { 
                const {address,show} = row
                return (
                    <>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id={address} checked={show} 
                                onChange={ () => patchCoin( {...row, 
                                    show: show ?  false : true
                                } ) }
                            />
                            <label className="form-check-label" htmlFor={address}>
                                {/* Checked switch checkbox input */}
                            </label>
                        </div>
                    
                    </>
                )
            }
        },
        {
            name: 'KYC',
            selector: row => row.show,
            sortable: true,
            omit: !admin,
            cell: row => { 
                const {address,tags} = row
                const tag = "kyc"
                return (
                    <>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id={address} checked={tags.includes(tag)} 
                                onChange={ () => patchCoin( {...row, 
                                    tags: tags.includes(tag) ?  
                                    tags.filter( t => t !== tag)
                                    : 
                                    [...tags,tag]
                                } ) }
                            />
                            <label className="form-check-label" htmlFor={address}>
                                {/* Checked switch checkbox input */}
                            </label>
                        </div>
                    
                    </>
                )
            }
        },
        {
            name: 'AUDITED',
            selector: row => row.show,
            sortable: true,
            omit: !admin,
            cell: row => { 
                const {address,tags} = row
                const tag = "audited"
                return (
                    <>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id={address} checked={tags.includes(tag)} 
                                onChange={ () => patchCoin( {...row, 
                                    tags: tags.includes(tag) ?  
                                    tags.filter( t => t !== tag)
                                    : 
                                    [...tags,tag]
                                } ) }
                            />
                            <label className="form-check-label" htmlFor={address}>
                                {/* Checked switch checkbox input */}
                            </label>
                        </div>
                    
                    </>
                )
            }
        },
        {
            name: 'NEW',
            selector: row => row.show,
            sortable: true,
            omit: !admin,
            cell: row => { 
                const {address,tags} = row
                const tag = "new"
                return (
                    <>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id={address} checked={tags.includes(tag)}
                                onChange={ () => patchCoin( {...row, 
                                    tags: tags.includes(tag) ?  
                                    tags.filter( t => t !== tag)
                                    : 
                                    [...tags,tag]
                                } ) }
                            />
                            <label className="form-check-label" htmlFor={address}>
                                {/* Checked switch checkbox input */}
                            </label>
                        </div>
                    
                    </>
                )
            }
        },
        {
            name: 'PINKSALE',
            selector: row => row.show,
            sortable: true,
            omit: !admin,
            cell: row => { 
                const {address,tags} = row
                const tag = "pinksale"
                return (
                    <>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id={address} checked={tags.includes(tag)}
                                onChange={ () => patchCoin( {...row, 
                                    tags: tags.includes(tag) ?  
                                    tags.filter( t => t !== tag)
                                    : 
                                    [...tags,tag]
                                } ) }
                            />
                            <label className="form-check-label" htmlFor={address}>
                                {/* Checked switch checkbox input */}
                            </label>
                        </div>
                    
                    </>
                )
            }
        },
        {
            name: 'REMOVE',
            selector: row => row.show,
            sortable: true,
            omit: !admin,
            cell: row => { 
                const {address} = row
                return (
                    <>
                        <button className='btn btn-sm btn-danger' onClick={() => removeCoin(address) }>
                            <i className='fa fa-trash'></i>
                        </button>
                    
                    </>
                )
            }
        },
    ];
    
    const customStyles = {
        table:{
            style:{
                backgroundColor: "#212529",
                borderRadius:"6px 6px 0px 0px"
            }
        },
        pagination:{
            style:{
                backgroundColor: "#0076CE",
                borderRadius:"0px 0px 6px 6px"
            }
        },
        headRow: {
            style: {
                backgroundColor :"#212529",
                borderRadius:"6px 6px 0px 0px"

            },
        },
        headCells: {
            style: {
                backgroundColor :"#212529",
                borderRadius:"6px 6px 0px 0px",
                fontFamily: "Questrial",
                fontSize: "16px"
            },
        },
        subHeader: {
            style: {
                backgroundColor :"#212529",
                borderRadius:"6px 6px 0px 0px"

            },
        },
        head: {
            style: {
                backgroundColor :"#212529",
                borderRadius:"6px 6px 0px 0px"

            },
        },
        rows:{
            style:{
                backgroundColor: "#0076CE",
            }
        }
        
    }
 
    return (
        <>
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                    theme="dark"
                    pagination
                />
        </>
    );
};

export default Table;