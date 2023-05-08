function Subscribe() {
    const styles = {
        input:{
            color:"white"
        }
    }
    return (  
        <>
            <h4>Subscribe to our newsletter</h4>
            <p>Get the best high potential coins right into your inbox</p>

            <input style={styles.input} className="form-control form-control-md bg-dark shadow text-center" placeholder="Enter your email" />
            <div className="d-grid gap-2 mt-2">
                <button className="btn btn-light" type="button">Subscribe</button>
            </div>

        </>
    );
}

export default Subscribe;