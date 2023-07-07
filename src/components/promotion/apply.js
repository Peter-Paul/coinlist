import { useTranslation } from "react-i18next";

function Apply({price=undefined}) {
    const link = "http://T.me/eduardotradinglist"
    const {t:content} = useTranslation()
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
                        <h3>{content("apply.h1")}:</h3>
                        {
                            price &&
                            <h5 className="text-light">{content("apply.price")} - ${price}</h5>
                        }
                        <p>{content("apply.telegram")}: <span className="text-warning" style={{cursor:"pointer"}} onClick={() => { window.open(link,"_blank") }}>@doctoreclub</span></p>
                        <p>{content("apply.email")}: <span className="text-warning">DoctoreClub@gmail.com</span></p>
                    </div>
                </div>
        </>
     );
}

export default Apply;