function Logo({name}) {
    const logo = "https://res.cloudinary.com/dwf6iuvbh/image/upload/v1686828800/photo_2023-06-15_14-13-47_mlqd76.jpg"
    const  styles = {
        logo:{
            fontFamily:"Righteous"
        },
    }
    
    return ( 
        <>  
            <div className="d-flex justify-content-evenly">
                <div  className="logo-holder">
                    <div style={{backgroundImage:`url(${logo})`}} className="logo-img" alt=""></div>
                </div>
                <h2 className=" ms-1" style={styles.logo}>{name}</h2>
            </div>
        </>
     );
}

export default Logo;