import { Link } from "react-router-dom";

function Search({handleChangeSearch,content}) {

    const styles = {
        input:{
            // color:"white",
            width:"390px"
        }
    }


    return (
        <>
            <div className="d-flex justify-content-between mb-3 row">
                <div className="col-12 col-md-6 mb-2">
                    <Link className="btn btn-outline-dell-blue" to={"/addCoin"}> <i className="fa fa-plus me-1"></i> {content("AddCoin")}</Link>
                    <Link className="btn btn-outline-dell-blue ms-3" to={"/services/promote"}> <i className="fa fa-bolt me-1"></i> {content("Promotions")}</Link>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-end mb-2">
                    <input style={styles.input} className="form-control form-control-md bg-light shadow" type="search"
                    onChange = {handleChangeSearch} placeholder="Try Shiba or Address (0x…)" />
                </div>
            </div>
    
        </>
    )
}

export default Search;