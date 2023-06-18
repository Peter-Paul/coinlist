function Media({twitter,telegram,facebook,github,linkedin}) {
    return (  
        <>
            <div className="d-flex justify-content-evenly">
                <button className="btn btn-sm btn-light mx-1" type="button" onClick={() => { twitter && twitter !== "" && window.open(twitter,"_blank") }}>
                    <i className="fa fa-twitter"></i>
                </button>
                <button className="btn btn-sm btn-light mx-1" type="button" onClick={() => { telegram && telegram !== "" && window.open(telegram,"_blank") }}>
                    <i className="fa fa-telegram"></i>
                </button>
                <button className="btn btn-sm btn-light mx-1" type="button" onClick={() => { facebook && facebook !== "" && window.open(facebook,"_blank") }}>
                    <i className="fa fa-facebook"></i>
                </button>
                <button className="btn btn-sm btn-light mx-1" type="button" onClick={() => { github && github !== "" && window.open(github,"_blank") }}>
                    <i className="fa fa-github"></i>
                </button>
                <button className="btn btn-sm btn-light mx-1" type="button" onClick={() => { linkedin && linkedin !== "" && window.open(linkedin,"_blank") }}>
                    <i className="fa fa-linkedin"></i>
                </button>
            </div>
        </>
    );
}

export default Media;