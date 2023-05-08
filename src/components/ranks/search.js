function Search({changeView}) {

    const styles = {
        input:{
            color:"white"
        }
    }

    return (
        <>
            <div className="d-flex justify-content-evenly mb-5 row">
                <div className="col-md-3 col-12 mb-3">
                    <button className="btn btn-outline-light ms-3" onClick={changeView}> Add Your Coin </button>
                </div>
                <div className="col-md-4 col-8 mb-3">
                    <input style={styles.input} className="form-control form-control-md bg-dark shadow" placeholder="Try CoinList or address (0x...)" />
                </div>
                <div className="col-md-4 col-4 mb-3">
                    <button className="btn btn-outline-light ms-3" > Search </button>
                </div>
            </div>
    
        </>
    )
}

export default Search;