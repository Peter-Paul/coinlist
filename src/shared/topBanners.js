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
                        {
                            bannerMap['banner1'].url !== "" ?
                            <div>
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
                            </div>:
                            <iframe title="largeAd1" data-aa='2238710' src='//ad.a-ads.com/2238710?size=970x90' style={{width:'970px', height:'90px', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe>
                        }
                    </div>
                    
                  
                    <div className="mt-2">
                        {
                            bannerMap['banner4'].url !== "" ?
                            <div className="d-flex justify-content-center row ">
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
                            </div>:

                            <div className="d-flex justify-content-evenly">
                                <div>
                                    <iframe title="rot1" data-aa='2238758' src='//ad.a-ads.com/2238758?size=336x280' style={{width:'336px', height:'280px', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe>
                                </div>
                                <div>
                                    <iframe title="rot2" data-aa='2238758' src='//ad.a-ads.com/2238758?size=336x280' style={{width:'336px', height:'280px', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe>
                                </div>
                            </div>

                        }
                    </div>


                    <div className="d-flex justify-content-evenly mt-3 mb-4">
                        {
                            bannerMap['banner2'].url!=="" ?
                            <>
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
                            </>:
                            <iframe title="largeAd2" data-aa='2238706' src='//ad.a-ads.com/2238706?size=970x90' style={{width:'970px', height:'90px', border:'0px', padding:'0', overflow:'hidden', backgroundColor: 'transparent'}}></iframe>
                        }

                        
                    
                    </div>

                    
        </>
     );
}

export default TopBanner;