import { useSelector } from "react-redux";

function Banner({uploadBanner}) {
    const {bannerMap} = useSelector((state) => state.app)
    

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
            { bannerMap && bannerMap['banner1'] &&
                <div>
                    <div className="d-flex justify-content-center">
                        <img
                            alt="not found"
                            style={styles.wideBanner}
                            src={bannerMap['banner1']}
                        />
                    </div>
                    <div className="d-flex justify-content-center my-3">

                        <label htmlFor="banner1" className="ms-1 p-3" style={styles.label}>
                            Upload Wide Banner 1
                        </label>
                        <input
                            type="file"
                            id="banner1"
                            name="myImage"
                            onChange={(event) => {
                                console.log(event.target.files[0]);
                                uploadBanner(event.target.files[0],"banner1");
                            }}
                            hidden
                        />
                    </div>

                </div>
            }


            { bannerMap && bannerMap['banner2'] &&
                <div>
                    <div className="d-flex justify-content-center">
                        <img
                            alt="not found"
                            style={styles.wideBanner}
                            src={bannerMap['banner2']}
                        />
                    </div>
                    <div className="d-flex justify-content-center my-3">

                        <label htmlFor="banner2" className="ms-1 p-3" style={styles.label}>
                            Upload Wide Banner 2
                        </label>
                        <input
                            type="file"
                            id="banner2"
                            name="myImage"
                            onChange={(event) => {
                                console.log(event.target.files[0]);
                                uploadBanner(event.target.files[0],"banner2");
                            }}
                            hidden
                        />
                    </div>

                </div>
            }

           

            { bannerMap && bannerMap['banner3'] &&
                <div>
                    <div className="d-flex justify-content-evenly">
                        <img
                            alt="not found"
                            style={styles.rotatingBanner}
                            src={bannerMap['banner3']}
                        />
                    </div>
                    <div className="d-flex justify-content-center my-3">

                        <label htmlFor="banner3" className="ms-1 p-3" style={styles.label}>
                            Upload Footer Banner
                        </label>
                        <input
                            type="file"
                            id="banner3"
                            name="myImage"
                            onChange={(event) => {
                                console.log(event.target.files[0]);
                                uploadBanner(event.target.files[0],"banner3");
                            }}
                            hidden
                        />
                    </div>

                </div>
            }
        </>
     );
}

export default Banner;