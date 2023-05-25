function Stake() {
    return ( 
        <>
            <div className="d-flex justify-content-evenly row">
                <div className="col-3">
                    <div className="card text-dark bg-light">
                        <div className="card-header text-center">
                            <strong>Pool #1</strong>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <strong>Stake amount:</strong>
                                <strong>50 000 $COINLIST</strong>
                            </div>
                            <div className="d-flex justify-content-between">
                                <strong>Reward:</strong>
                                <strong>102 %</strong>
                            </div>
                            <div className="d-flex justify-content-between">
                                <strong>Period:</strong>
                                <strong>30 days</strong>
                            </div>
                            <hr/>
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <button href="#" className="btn btn-primary">Stake</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Stake;