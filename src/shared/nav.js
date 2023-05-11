import { Link } from "react-router-dom";
import Media from "./media";
import Subscribe from "./subscribe";

function Nav() {
    const styles = {
        logo:{
            fontFamily:"Righteous"
        },
        nav:{
            listStyleType:"none",
            minHeight:"82vh"
        },
        link:{
            textDecoration:"none",
            fontSize:"20px",
            color:'white'
        }
    }
    return ( 
        <>
            <div className="d-flex justify-content-between">
                <div>
                    <button className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
                <h1 className="shadow" style={styles.logo}>CoinList</h1>
            </div>

            <div className="offcanvas offcanvas-start bg-dark" style={{width:"350px"}} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 style={styles.logo} className="offcanvas-title" id="offcanvasWithBothOptionsLabel">CoinList</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body" >
                    <ul className="d-flex flex-column" style={styles.nav} >
                        <li data-bs-dismiss="offcanvas">
                            <Link style={styles.link} to="/">Rankings</Link>
                        </li>
                        <hr className="mb-4" />
                        <li data-bs-dismiss="offcanvas">
                            <Link style={styles.link} to="/token">Token</Link>
                        </li>      
                        <hr className="mb-4" />
                        <li data-bs-dismiss="offcanvas">
                            <Link style={styles.link} to="/promote">Promotions</Link>
                        </li>
                        <hr className="mb-4" />
                        <li data-bs-dismiss="offcanvas">
                            <Link style={styles.link} to="/">Partners</Link>
                        </li>
                        <hr className="mb-4" />
                        <li data-bs-dismiss="offcanvas">
                            <Link style={styles.link} to="/">Games</Link>
                        </li>
                        <hr />
                
                        <li className="mt-auto" data-bs-dismiss="offcanvas">
                            <Subscribe/>
                        </li>
                        <hr />
                        <li className="mt-auto" data-bs-dismiss="offcanvas">
                            <Media />
                           {/* <span> <i className="fa fa-user"></i> </span> <Link style={styles.link} to="/">Profile</Link> */}
                        </li>
                    </ul>
                    {/* <Link style={styles.link} to="/home/wallet">Profile</Link> */}
                </div>
            </div>
        </>
     );
}

export default Nav;