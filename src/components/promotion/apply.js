function Apply({price=undefined}) {
    const link = "http://T.me/eduardotradinglist"
    const styles = {
        apply:{
            borderLeftColor:"white",
            borderLeftWidth:"1px",
            borderLeftStyle:"solid",
        }
    }
    return ( 
        <>
            <div  style={styles.apply}>
                    <div className="ms-3">
                        <h3>How to apply:</h3>
                        {
                            price &&
                            <h5 className="text-light">Price - ${price}</h5>
                        }
                        <p>Send us direct message on Telegram: <span className="text-warning" style={{cursor:"pointer"}} onClick={() => { window.open(link,"_blank") }}>@doctoreclub</span></p>
                        <p>Or e-mail us at: <span className="text-warning">DoctoreClub@gmail.com</span></p>
                    </div>
                </div>
        </>
     );
}

export default Apply;