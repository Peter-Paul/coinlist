import axios from "axios"

export default class BannerService{
    route = "banners"
    default = [
          {
            "name": "banner7",
            "url": "https://res.cloudinary.com/dwf6iuvbh/image/upload/v1685381621/download_t0nblf.png",
            "link":"https://www.aidoge.com/en?clickId=fx_b27164_d2c81d290eb954455adb89bb2f9416e5_1"
          },
          {
            "name": "banner6",
            "url": "https://res.cloudinary.com/dwf6iuvbh/image/upload/v1686144626/250x250_tiv0ll.png",
            "link":"https://www.aidoge.com/en?clickId=fx_b27164_d2c81d290eb954455adb89bb2f9416e5_1"
          },
          {
            "name": "banner5",
            "url": "https://res.cloudinary.com/dwf6iuvbh/image/upload/v1685379668/250x250_k4rysx.gif",
            "link":"https://www.aidoge.com/en?clickId=fx_b27164_d2c81d290eb954455adb89bb2f9416e5_1"
          },
          {
            "name": "banner4",
            "url": "https://res.cloudinary.com/dwf6iuvbh/image/upload/v1685380240/trade_s36d1o.gif",
            "link":"https://www.aidoge.com/en?clickId=fx_b27164_d2c81d290eb954455adb89bb2f9416e5_1"
          },
          {
              "name": "banner3",
              "url": "https://res.cloudinary.com/dwf6iuvbh/image/upload/v1684860902/banner1_nw8ltb.gif",
              "link":"https://www.aidoge.com/en?clickId=fx_b27164_d2c81d290eb954455adb89bb2f9416e5_1"
          },
          {
              "name": "banner2",
              "url": "https://res.cloudinary.com/dwf6iuvbh/image/upload/v1684923456/banner1_ybu95g.png",
              "link":"https://www.aidoge.com/en?clickId=fx_b27164_d2c81d290eb954455adb89bb2f9416e5_1"
          },
          {
              "name": "banner1",
              "url": "https://res.cloudinary.com/dwf6iuvbh/image/upload/v1684921197/banner1_m5me1i.png",
              "link":"https://www.aidoge.com/en?clickId=fx_b27164_d2c81d290eb954455adb89bb2f9416e5_1"
          }
        ]

    constructor(baseUrl){
        this.url = baseUrl ? `${baseUrl}${this.route}` : undefined
    }

    async getBanners(){
        try{
            if(this.url){

                const banners = await axios.get(this.url)
        
                if (banners.status === 200) return banners.data.map( b => { return {name:b.Name, url:b.Url} })
                else return undefined
            }else{
                return this.default
            }

        }catch(err){
            console.log(`Error getting banners: ${err}`)
            return undefined
        }
    }

    async updateBanner(name,url,link){
        try{

            const response = await axios.patch(this.url, {name,url,link})
    
            if (response.status === 200) return true
            else return undefined

        }catch(err){
            console.log(`Error patching banners: ${err}`)
            return undefined
        }

       
    }
}