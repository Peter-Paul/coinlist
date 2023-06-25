import { useSelector } from "react-redux";

function PartnerList({page=false}) {
    const {partners} = useSelector((state) => state.app)
    
    return ( 
        <>
            <div className="d-flex justify-content-center row rounded" >
                {    partners.map( ({id,url,name,link,description}) => {
                        return (
                            <div className={`${page?"col-10 col-md-3":"col-6 col-md-2"}`} key={id}>    
                                <div className="card shadow mb-3" style={{backgroundColor:"#003153",borderColor:"#0076CE"}}>
                                    <div  className="partner-holder ">
                                        <div style={{backgroundImage:`url(${url})`}} className="partner-img" alt=""></div>
                                    </div>
                                    <div className="card-body" >
                                        {page?
                                            <>
                                                <div className="d-flex flex-column" style={{height:"220px"}}>

                                                    <h4 className="text-warning">
                                                        {name}
                                                    </h4>
                                                    <p style={{fontSize:"16px"}}>{description}</p>

                                                    <button className="btn btn-warning mt-auto" onClick={() => { window.open(link,"_blank") }}>Checkout</button>
                                                </div>
                                            </>
                                            :
                                            <p className="text-center text-warning">
                                                <strong style={{cursor:"pointer",fontSize:"15px"}} onClick={() => { window.open(link,"_blank") }}>{name}</strong>
                                            </p>
                                        }
                                    </div>
                                </div>
                            </div>
        
                        )
                } )}
            </div>

        </>
     );
}

export default PartnerList;