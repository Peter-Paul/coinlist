import { useSelector } from "react-redux";

function BottomBanners() {
    const {bannerMap} = useSelector((state) => state.app)
    const styles = {
        banner:{
            height: "250px",
            width: "250px",
        },
    }
    return (  
        <>
            <img
                alt="not found"
                style={styles.banner}
                src={bannerMap['banner4']}
                className="d-none d-md-block"
            />  
        </>
    );
}

export default BottomBanners;