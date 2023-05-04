function Search() {

    const styles = {
        input:{
            color:"white"
        }
    }

    return (
        <div className="d-flex justify-content-center mb-5">
            <div className="col-md-4 col-8">
                {/* <label className="form-label">DAK Points Available: <strong>0</strong></label> */}
                <input style={styles.input} className="form-control form-control-md bg-dark shadow" placeholder="Try CoinList or address (0x...)" />
            </div>
            <div>
                <button className="btn btn-dark ms-3" > Search </button>
            </div>
        </div>
    )
}

export default Search;