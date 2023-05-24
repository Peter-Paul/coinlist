import axios from "axios"

export default class BannerService{
    route = "banners"

    constructor(baseUrl){
        this.url = `${baseUrl}${this.route}`
    }

    async getBanners(){
        try{

            const banners = await axios.get(this.url)
    
            if (banners.status === 200) return banners.data.map( b => { return {name:b.Name, url:b.Url} })
            else return undefined

        }catch(err){
            console.log(`Error getting banners: ${err}`)
            return undefined
        }
    }

    async updateBanner(name,url){
        try{

            const response = await axios.patch(this.url, {name,url})
    
            if (response.status === 200) return true
            else return undefined

        }catch(err){
            console.log(`Error patching banners: ${err}`)
            return undefined
        }

       
    }
}