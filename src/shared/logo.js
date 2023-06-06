function Logo({name}) {
    const  styles = {
        logo:{
            fontFamily:"Righteous"
        },
    }
    
    return ( 
        <>
            <h2 className="" style={styles.logo}>{name}</h2>
        </>
     );
}

export default Logo;