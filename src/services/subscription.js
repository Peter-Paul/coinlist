import axios from "axios"

export default class subscriptionService{
    route = "subscribe"

    constructor(baseUrl){
        this.url = `${baseUrl}${this.route}`
    }

    async postSubscription(subscription){
        try{
            const response = await axios.post(this.url, subscription)
    
            if (response.status === 200) return true
            else return undefined
        }catch(err){
            console.log(`Error posting subscription: ${err}`)
            return undefined
        }
    }
}