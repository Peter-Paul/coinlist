import { useSelector } from "react-redux";
import BannerUpload from "./bannerUpload";

function Banner({uploadBanner}) {
    const {bannerMap} = useSelector((state) => state.app)
    const defaultUrl = "https://res.cloudinary.com/dwf6iuvbh/image/upload/v1686828800/photo_2023-06-15_14-13-47_mlqd76.jpg"
    const styles = {
        wideBanner: {
            height: "115px",
            width: "1022px",
            borderColor: "white",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
        },
        wideBannerImage:{
            height: "115px",
            width: "1022px",
        },
        rotatingBanner:{
            height: "240px",
            width: "600px",
            borderColor: "white",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
        },
        smallBanner:{
            height: "250px",
            width: "250px",
            borderColor: "white",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
        },
        label: {
            fontFamily: "sans-serif",
            cursor: "pointer",
            borderColor: "white",
            borderWidth: "2px",
            borderRadius: "10px",
            borderStyle: "solid",
          }
    }

    

    


    return ( 
        <>

            {
                bannerMap && bannerMap['banner5'] &&

                <div className="d-flex justify-content-evenly">
                    <div>
                        <div className="d-flex justify-content-evenly">
                            <img
                                alt="not found"
                                style={styles.smallBanner}
                                src={bannerMap['banner5'].url!==""?bannerMap['banner5'].url:defaultUrl}
                            />
                        </div>
                        <div className="d-flex justify-content-center my-3">
                            <BannerUpload position={"Upload Right Banner"} 
                               bannerInfo={bannerMap['banner5']} uploadBanner={uploadBanner} banner={"banner5"} />
                        </div>
                    </div>

                    <div>
                        <div className="d-flex justify-content-evenly">
                            <img
                                alt="not found"
                                style={styles.smallBanner}
                                src={bannerMap['banner6'].url!==""?bannerMap['banner6'].url:defaultUrl}
                            />
                        </div>
                        <div className="d-flex justify-content-center my-3">
                            <BannerUpload position={"Upload Left Banner"} 
                               bannerInfo={bannerMap['banner6']} uploadBanner={uploadBanner} banner={"banner6"} />
                        </div>
                    </div>

                    <div>
                        <div className="d-flex justify-content-evenly">
                            <img
                                alt="not found"
                                style={styles.smallBanner}
                                src={bannerMap['banner7'].url!==""?bannerMap['banner7'].url:defaultUrl}
                            />
                        </div>
                        <div className="d-flex justify-content-center my-3">
                            <BannerUpload position={"Upload Sidebar Banner"} 
                                bannerInfo={bannerMap['banner7']} uploadBanner={uploadBanner} banner={"banner7"} />
                        </div>
                    </div>

                </div>
            }


            { bannerMap && bannerMap['banner3'] &&

                <div className="d-flex justify-content-evenly">
                    <div>
                        <div className="d-flex justify-content-evenly">
                            <img
                                alt="not found"
                                style={styles.rotatingBanner}
                                src={bannerMap['banner3'].url!==""?bannerMap['banner3'].url:defaultUrl}
                            />
                        </div>
                        <div className="d-flex justify-content-center my-3">
                            <BannerUpload position={"Upload Footer Banner"} 
                                bannerInfo={bannerMap['banner3']} uploadBanner={uploadBanner} banner={"banner3"} />
                        </div>

                    </div>

                    <div>
                        <div className="d-flex justify-content-evenly">
                            <img
                                alt="not found"
                                style={styles.rotatingBanner}
                                src={bannerMap['banner4'].url!==""?bannerMap['banner4'].url:defaultUrl}
                            />
                        </div>
                        <div className="d-flex justify-content-center my-3">
                            <BannerUpload position={"Upload Double Banner"} 
                               bannerInfo={bannerMap['banner4']} uploadBanner={uploadBanner} banner={"banner4"} />
                        </div>

                    </div>


                </div>
            }

            
            { bannerMap && bannerMap['banner1'] &&
                <div>
                    <div className="d-flex justify-content-center">
                        <img
                            alt="not found"
                            style={styles.wideBanner}
                            src={bannerMap['banner1'].url!==""?bannerMap['banner1'].url:defaultUrl}
                        />
                    </div>
                    <div className="d-flex justify-content-center my-3">
                        <BannerUpload position={"Upload Wide Banner 1"} 
                          bannerInfo={bannerMap['banner1']}  uploadBanner={uploadBanner} banner={"banner1"} />
                    </div>
                </div>
            }


            { bannerMap && bannerMap['banner2'] &&
                <div>
                    <div className="d-flex justify-content-center">
                        <img
                            alt="not found"
                            style={styles.wideBanner}
                            src={bannerMap['banner2'].url!==""?bannerMap['banner2'].url:defaultUrl}
                        />
                    </div>
                    <div className="d-flex justify-content-center my-3">
                        <BannerUpload position={"Upload Wide Banner 2"} 
                          bannerInfo={bannerMap['banner2']}  uploadBanner={uploadBanner} banner={"banner2"} />
                    </div>

                </div>
            }

           




            
        </>
     );
}

export default Banner;