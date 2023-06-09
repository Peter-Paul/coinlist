function BottomBanners({banner}) {
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
                src={banner.url}
                className="d-none d-md-block"
                onClick={() => { window.open(banner.link,"_blank") }}
            />  
        </>
    );
}

export default BottomBanners;