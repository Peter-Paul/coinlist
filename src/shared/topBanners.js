import { useSelector } from "react-redux";

function TopBanner() {
    const {bannerMap} = useSelector((state) => state.app)
    const styles = {
        card:{
            width:"140px"
        },
        priceDisplay:{
            fontSize:"12px"
        },
        wideBannerImage:{
            height: "115px",
            width: "1022px",
        },
        wideBannerImageMobile:{
            height: "60px",
            width: "370px",
        },
        gifBanner:{
            width:"500px",
            height:"200px", 
            borderRadius:"15px"
        },
        tweetCard:{
            backgroundColor:"#003153",
            borderColor:"#0076CE"
        },
        tweetCardUser:{
            color:"#0076CE"
        }
    }
    return ( 
        <>
            <div className="d-flex justify-content-evenly my-3">
                        <img
                            alt="not found"
                            style={styles.wideBannerImage}
                            src={bannerMap['banner1'].url}
                            className="rounded d-none d-md-block"
                            onClick={() => { window.open(bannerMap['banner1'].link,"_blank") }}
                        />
                        <img
                            alt="not found"
                            style={styles.wideBannerImageMobile}
                            src={bannerMap['banner1'].url}
                            className="rounded responsive d-block d-md-none"
                            onClick={() => { window.open(bannerMap['banner1'].link,"_blank") }}
                        />
                    </div>

                    <div className="d-none d-md-block">
                        <div className="d-flex justify-content-center mt-2 row ">
                            <img
                                alt="not found"
                                style={styles.gifBanner}
                                src={bannerMap['banner4'].url}
                                onClick={() => { window.open(bannerMap['banner4'].link,"_blank") }}
                            />
                            <img
                                alt="not found"
                                style={styles.gifBanner}
                                src={bannerMap['banner4'].url}
                                onClick={() => { window.open(bannerMap['banner4'].link,"_blank") }}
                            />
                        </div>
                    </div>


                    <div className="d-flex justify-content-evenly mt-3 mb-4">
                        <img
                            alt="not found"
                            style={styles.wideBannerImage}
                            src={bannerMap['banner2'].url}
                            className="rounded responsive d-none d-md-block"
                            onClick={() => { window.open(bannerMap['banner2'].link,"_blank") }}
                        />
                        <img
                            alt="not found"
                            style={styles.wideBannerImageMobile}
                            src={bannerMap['banner2'].url}
                            className="rounded responsive d-block d-md-none"
                            onClick={() => { window.open(bannerMap['banner2'].link,"_blank") }}
                        />
                    </div>
        </>
     );
}

export default TopBanner;