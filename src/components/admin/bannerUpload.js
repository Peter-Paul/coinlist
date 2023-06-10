import { useState } from "react";

function BannerUpload({position,uploadBanner,banner}) {
    const [link,setLink] = useState("")
    const styles = {
        input:{
            color:"white",
            width:"250px"
        }
    }
    return ( 
        <>
            <div className="d-flex flex-column">
                    <input name="link" style={styles.input} className="text-center form-control mb-3 form-control-md bg-dark shadow" 
                        value={link} onChange={ e => setLink( e.target.value ) } placeholder="Enter banner link"/>
                    <label htmlFor={banner} className={`btn btn-light  ${ link === "" && "disabled"}`} style={styles.label}>
                        {position}
                    </label>
                    <input
                        type="file"
                        id={banner}
                        name="myImage"
                        onChange={(event) => {
                            console.log(event.target.files[0]);
                            uploadBanner(event.target.files[0],banner,link);
                            setLink("")
                        }}
                        hidden
                    />
            </div>
        
        </>
     );
}

export default BannerUpload;