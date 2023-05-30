function Search({changeView}) {

    const styles = {
        input:{
            color:"white",
            width:"250px"
        }
    }

    return (
        <>
            <div className="d-flex justify-content-between mb-5">
                <div >
                    <button className="btn btn-outline-light" onClick={changeView}> <i className="fa fa-plus me-1"></i> Add Coin </button>
                    <button className="btn btn-outline-light ms-3" onClick={changeView}> <i className="fa fa-bolt me-1"></i> Promotion </button>
                </div>
                <div >
                    <input style={styles.input} className="form-control form-control-md bg-dark shadow" placeholder="Try CoinList or address (0x...)" />
                </div>
                {/* <div className="col-md-4 col-4 mb-3">
                    <button className="btn btn-outline-light ms-3" > Search </button>
                </div> */}
            </div>
    
        </>
    )
}

export default Search;