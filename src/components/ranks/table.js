import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';


function Table({data,title,allowRoute,connected,userAddress,validTimestamp,voteCoin,voteMap,admin=false,removeCoin,patchCoin}) {
    
    const styles = {
        coinName:{
            color:"white",
            textDecoration: "none"
        }
    }

    const tags2show = ["audited"]

    const customFigure = figure => {
        const [zero, minimum, thousand,million,billion, trillion] = [ 0, 0.0001, 10**3, 10**6, 10**9, 10**12 ]
        if(figure<=zero){
            return "-"
        }else if(figure>zero && figure<minimum){
            return `>${minimum}`
        }else if(figure>=minimum && figure<thousand){
            return `${(figure).toFixed(4)}`
        }else if(figure>=thousand && figure<million){
            return `${(figure/thousand).toFixed(4)}K`
        }else if(figure>=million && figure<billion){
            return `${(figure/million).toFixed(4)}M`
        }else if(figure>=billion && figure<trillion){
            return `${(figure/billion).toFixed(4)}B`
        }else{
            return `${(figure/billion).toFixed(4)}T`
        }
    }

    const customLaunch = launch => {
        const daySecs = 86400
        const now = Math.floor( new Date().getTime() / 1000 )
        const days = ((launch - now) / daySecs ).toFixed(1)
        if(days < 0 ){
            return `${Math.abs(days)} days ago`
        }else{
            return `${Math.abs(days)} days to go`
        }
    }

    const customSymbol = symbol => {
        switch (symbol) {
            case "ethereum":
                return "ETH"
            case "binance-smart-chain":
                return "BSC"
            case "arbitrum-one":
                return "ARBITRUM"
            case "polygon-pos":
                return "MATIC"
            default:
                return "CUSTOM";
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
                                <h6>{row.tags.map( t => (tags2show.includes(t)) && <span key={t} className="badge text-bg-success me-1 mb-1">{t}</span> )}</h6>
                            </div>
                        }
                        {
                            allowRoute &&
                            <Link style={styles.coinName} to={`/${row.address}`}>
                                <div className="d-flex flex-column my-3">
                                    <strong className='mb-1' style={{fontSize:"15px"}}>{row.name}</strong>
                                    <h6>{row.tags.map( t => (tags2show.includes(t)) && <span key={t} className="badge text-bg-success me-1 mb-1">{t}</span> )}</h6>
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
        },
        {
            name: 'CHAIN',
            selector: row => row.chain,
            cell: row => {
                return (
                    <>
                        <div className="p-2 bg-warning text-dark">
                            <strong>
                                {customSymbol(row.chain)}
                            </strong>
                        </div>
                    </>
                )
            }
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true,
            cell: row => {
                return (
                    <>
                        {customFigure(row.price)}
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
                        { customLaunch(parseInt(launch)) }
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
                                        <button className='btn btn-sm btn-outline-light' onClick={()=>voteCoin(row.address)}>{customFigure(parseFloat(row.votes))}</button>
                                        :
                                        <button className='btn btn-sm btn-outline-success'>{customFigure(parseFloat(row.votes))}</button>
                                    }
                                </>
                            
                                
                            }

                            { !connected &&
                                <button className='btn btn-sm btn-outline-light' disabled>{customFigure(parseFloat(row.votes))}</button> 
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
        headCells: {
            style: {
                backgroundColor :"#212529"
            },
        },
        
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