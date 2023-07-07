function Loading() {
    const styles = {
        loading:{
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            textAlign: "center",
            minHeight:"100vh"
        }
    }
    return ( 
        <div style={styles.loading}>
            <div>
              <div className="loadingio-spinner-gear-kf6jkp8svg"><div className="ldio-lw2jfx443j">
              <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              </div></div>

            </div>
        </div>
     );
}

export default Loading;