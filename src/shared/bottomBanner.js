function BottomBanners({bannerUrl}) {
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
                src={bannerUrl}
                className="d-none d-md-block"
            />  
        </>
    );
}

export default BottomBanners;