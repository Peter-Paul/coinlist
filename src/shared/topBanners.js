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
            height:"200px", 
            width:"500px",
            borderRadius:"15px"
        },
        gifBannerMobile:{
            height:"100px", 
            width:"250px",
            borderRadius:"15px"
        }
        ,
        tweetCard:{
            backgroundColor:"#003153",
            borderColor:"#0076CE"
        },
        tweetCardUser:{
            color:"#0076CE"
        },
        rotateBannerImage:{
            height: "260px",
            width: "700px",
        },
        rotateBannerImageMobile:{
            height: "140px",
            width: "350px",
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

                    <div className="d-flex justify-content-center mt-2 row ">
                        <img
                            alt="not found"
                            style={styles.gifBanner}
                            src={bannerMap['banner4'].url}
                            className="rounded d-none d-md-block"
                            onClick={() => { window.open(bannerMap['banner4'].link,"_blank") }}
                        />
                        <img
                            alt="not found"
                            style={styles.gifBanner}
                            src={bannerMap['banner4'].url}
                            className="rounded d-none d-md-block"
                            onClick={() => { window.open(bannerMap['banner4'].link,"_blank") }}
                        />

                        <img
                            alt="not found"
                            style={styles.gifBannerMobile}
                            src={bannerMap['banner4'].url}
                            className="rounded d-block d-md-none"
                            onClick={() => { window.open(bannerMap['banner4'].link,"_blank") }}
                        />
                        <img
                            alt="not found"
                            style={styles.gifBannerMobile}
                            src={bannerMap['banner4'].url}
                            className="rounded d-block d-md-none mt-2"
                            onClick={() => { window.open(bannerMap['banner4'].link,"_blank") }}
                        />
                    </div>

                    <div className="d-flex justify-content-center mt-2 mb-4">
                        <iframe title="largeAd" data-aa='2238676' src='//ad.a-ads.com/2238676?size=970x90' style={{width:'970px', height:'90px', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe>
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