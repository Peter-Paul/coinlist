import DataTable, { createTheme  } from 'react-data-table-component';


function Table({data,title}) {
    const columns = [
        {
            name: title,
            selector: row => row.name,
        },
        {
            name: 'SYMBOL',
            selector: row => row.symbol,
            sortable: true,
        },
        {
            name: '24H',
            selector: row => row.price,
            sortable: true,
        },
        {
            name: 'MARKET CAP',
            selector: row => row.mrkCap,
            sortable: true,
        },
        {
            name: 'VOTES',
            selector: row => row.votes,
            cell: row => { return ( <button className='btn btn-outline-success'>{row.votes}</button> ) },
            sortable: true,
        },
    ];
    
    const customStyles = {
        // rows: {
        //     style: {
        //         backgroundColor: '#2c3034', 
        //         color: 'white',
        //     },
        // },
        headCells: {
            style: {
                // borderRadius: "5px 5px 0px 0px",
                backgroundColor :"#212529"
            },
        },
        
    }
    createTheme('solarized', {
        text: {
          primary: '#268bd2',
          secondary: '#2aa198',
        },
        background: {
          default: '#002b36',
        },
        context: {
          background: '#2c3034',
          text: '#FFFFFF',
        },
        divider: {
          default: '#073642',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');
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