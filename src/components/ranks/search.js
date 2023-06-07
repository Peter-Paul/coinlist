import { Link } from "react-router-dom";

function Search({changeView}) {

    const styles = {
        input:{
            color:"white",
            width:"390px"
        }
    }

    return (
        <>
            <div className="d-flex justify-content-between mb-3 row">
                <div className="col-12 col-md-6 mb-2">
                    <button className="btn btn-outline-dell-blue" onClick={changeView}> <i className="fa fa-plus me-1"></i> Add Coin </button>
                    <Link className="btn btn-outline-dell-blue ms-3" to={"/promote"}> <i className="fa fa-bolt me-1"></i> Promotion</Link>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-end mb-2">
                    <input style={styles.input} className="form-control form-control-md bg-light shadow" placeholder="Try CoinList or address (0x...)" />
                </div>
            </div>
    
        </>
    )
}

export default Search;