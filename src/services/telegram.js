import axios from "axios"

export default class Telegram {
    // constructor(token) {
    //     this.token = token
    // }

    linkCheck(caption){
        const captionSplit = caption.split("coin-link:")
        if(captionSplit.length===2){
            return captionSplit[1]
        }else{
            return undefined
        }
    }

    async getPosts(){
        const url = "https://api.telegram.org/bot6039555480:AAGJeR3xcnkv3LE6ZavRo9QxCsN_54KVxVw/getUpdates"
        const filePathUrl = "https://api.telegram.org/bot6039555480:AAGJeR3xcnkv3LE6ZavRo9QxCsN_54KVxVw/getFile?file_id="
        const fileUrl = "https://api.telegram.org/file/bot6039555480:AAGJeR3xcnkv3LE6ZavRo9QxCsN_54KVxVw/"
        let data
        const res = await axios.get(url)
        if(res.data.ok) data = res.data.result
        console.log(res.data.result)
        data = data.filter( ({message}) => message && message.date && message.caption && message.photo && this.linkCheck(message.caption) )
        .map( ({message}) => {
            const {date,caption,photo} = message
            const fileID = photo[2].file_id
            const imageUrl = `${filePathUrl}${fileID}`
            const link = this.linkCheck(caption)
            return {date,caption,imageUrl,link}
            // if( photoFile.data.ok ) image = `${fileUrl}${photoFile.data.result.file_path}`
            // console.log(image)
        })
        .reverse()
        .slice(0,4)
        console.log(data)

        for (let d of data){
            let image
            const photoFile = await axios.get(d.imageUrl)
            if( photoFile.data.ok ) image = `${fileUrl}${photoFile.data.result.file_path}`
            data[data.indexOf(d)].imageUrl = image 
        }
        console.log(data)
        return data
    }
}
