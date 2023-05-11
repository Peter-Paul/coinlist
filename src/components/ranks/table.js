import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';


function Table({data,title,allowRoute}) {

    const styles = {
        coinName:{
            color:"white",
            textDecoration: "none"
        }
    }

    const customFigure = figure => {
        const [thousand,million,billion, trillion] = [ 10**3, 10**6, 10**9, 10**12 ]
        if(figure<thousand){
            return `${(figure).toFixed(2)}`
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
    const columns = [
        {
            name: title,
            selector: row => row.name,
            cell: row => {
                return (
                    <>
                        { !allowRoute &&
                            <div className='d-flex flex-column'>
                                <strong>{row.name}</strong>
                                <small>{row.tag.map( t => <span key={t} className="badge text-bg-dark me-1">{t}</span> )}</small>
                            </div>
                        }
                        {
                            allowRoute &&
                            <Link style={styles.coinName} to={`/${row.address}`}>
                                <div className="d-flex flex-column">
                                    <strong>{row.name}</strong>
                                    <small>{row.tag.map( t => <span key={t} className="badge text-bg-dark me-1">{t}</span> )}</small>
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
        },
        {
            name: '24H',
            selector: row => row.price,
            sortable: true,
        },
        {
            name: 'MARKET CAP',
            selector: row => row.mrkCap,
            cell: row => {
                const {mrkCap} = row
                return(
                    <>
                        { customFigure(parseFloat(mrkCap)) }
                    </>
                )
            },
            sortable: true,
        },
        {
            name: 'VOTES',
            selector: row => row.votes,
            cell: row => { return ( <button className='btn btn-sm btn-outline-light'>{customFigure(parseFloat(row.votes))}</button> ) },
            sortable: true,
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
        <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            theme="dark"
            pagination
        />
    );
};

export default Table;