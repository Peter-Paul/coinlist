function TelegramPosts({telegramPosts,styles}) {

    const timePosted = time => {
        
        const now = Math.floor( new Date().getTime() / 1000 )
        const diff = now - time

        const minutes = 60
        const hour = minutes* 60
        const day = hour * 24
        const month = day * 30
        const year = month * 12

        if( diff < minutes ){
            return `Posted ${diff} seconds ago`
        }else if (diff > minutes && diff < hour){
            return `Posted ${Math.floor(diff/minutes)} minute(s) ago`
        }else if (diff > hour && diff < day){
            return `Posted ${Math.floor(diff/hour)} hour(s) ago`
        }else if (diff > day && diff < month){
            return `Posted ${Math.floor(diff/day)} day(s) ago`
        }else if (diff > month && diff < year){
            return `Posted ${Math.floor(diff/month)} month(s) ago`
        }else{
            return `Posted ${Math.floor(diff/year)} year(s) ago`
        }
    }


    return ( 
        <>
            {
                telegramPosts && telegramPosts.length>0 &&
                <>
                    <div className="d-flex justify-content-evenly mt-4 row">
                        {
                            telegramPosts.map( ({caption,date,imageUrl,link}) => {
                                return (                                                   
                                    <div className="col-10 col-md-3 my-3" key={caption}>
                                        <div className="card shadow " style={styles.tweetCard}>
                                            <div  className="photo-holder">
                                                <div style={{backgroundImage:`url(${imageUrl})`}} className="photo-img" alt=""></div>
                                            </div>
                                            <div className="card-body">
                                                {/* <h5 className="card-title text-dell-blue"> <strong>@{user}</strong></h5> */}
                                                <p className="card-text text-light">
                                                    {`${caption.slice(0,120)}`}
                                                    <button type="button" className="btn btn-link" onClick={() => { window.open(link,"_blank") }}>continue...</button>
                                                </p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-body-secondary">{timePosted(date)}</small>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } )
                        }
                    </div>
                
                </>
            }
        </>
     );
}

export default TelegramPosts;