import axios from "axios"

export default class CoinService{
    route = "coins"

    constructor(baseUrl){
        this.url = `${baseUrl}${this.route}`
    }

    async getCoins(){
        try{

            const coins = await axios.get(this.url)
    
            if (coins.status === 200) return coins.data.map( c => { return {...c, tags:c.tags.split(",")} })
            else return undefined

        }catch(err){
            console.log(`Error getting coins: ${err}`)
            return undefined
        }
    }

    async postCoin(coin){
        try{

            const response = await axios.post(this.url, {...coin,tags:coin.tags.join(",")})
    
            if (response.status === 200) return true
            else return undefined

        }catch(err){
            console.log(`Error posting coins: ${err}`)
            return undefined
        }

       
    }

    async updateCoin(coin){
        try{

            const response = await axios.patch(`${this.url}/${coin.address}`, {...coin,tags:coin.tags.join(",")})
    
            if (response.status === 200) return true
            else return undefined

        }catch(err){
            console.log(`Error patching coins: ${err}`)
            return undefined
        }

       
    }


    async deleteCoin(address){
        try{

            const response = await axios.delete(`${this.url}/${address}`)
    
            if (response.status === 200) return true
            else return undefined

        }catch(err){
            console.log(`Error deleting coins: ${err}`)
            return undefined
        }

       
    }
}