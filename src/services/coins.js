import axios from "axios"

export default class CoinService{

    default = [
            {
                address:"0xf68df6df642e8387afc9d03214b78f3087ef8a99",
                icon:"",
                name: "Doge Reloaded",
                symbol: "RELOADED",
                chain: "ethereum",
                votes: "100000",
                tags:["new","audited","kyc","pinksale"],
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Nec feugiat nisl pretium fusce id. Convallis posuere morbi leo urna. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sit amet nisl purus in. Morbi quis commodo odio aenean sed adipiscing diam. Amet volutpat consequat mauris nunc. Tellus rutrum tellus pellentesque eu tincidunt tortor. Purus non enim praesent elementum. Sit amet justo donec enim diam vulputate. Sit amet risus nullam eget felis eget. Etiam erat velit scelerisque in dictum non consectetur a. Convallis a cras semper auctor neque vitae. Congue nisi vitae suscipit tellus mauris a diam. Viverra orci sagittis eu volutpat.",
                contact:"ppmunga@gmail.com",
                launch:"1685164374",
                website:"https://github.com",
                github:"https://github.com",
                telegram:"https://github.com",
                twitter:"https://twitter.com",
                facebook:"https://facebook.com",
                linkedin:"https://linkedin.com",
                promote: false,
                show:true,
                created:"1685164374"
            },
            {
                name: "QUAI",
                address: "0x40821cd074dfecb1524286923bc69315075b5c89",
                icon:"",
                symbol: "QUAI",
                chain: "ethereum",
                votes: "10000",
                tags:["trending","audited","kyc","pinksale"],
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Nec feugiat nisl pretium fusce id. Convallis posuere morbi leo urna. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sit amet nisl purus in. Morbi quis commodo odio aenean sed adipiscing diam. Amet volutpat consequat mauris nunc. Tellus rutrum tellus pellentesque eu tincidunt tortor. Purus non enim praesent elementum. Sit amet justo donec enim diam vulputate. Sit amet risus nullam eget felis eget. Etiam erat velit scelerisque in dictum non consectetur a. Convallis a cras semper auctor neque vitae. Congue nisi vitae suscipit tellus mauris a diam. Viverra orci sagittis eu volutpat.",
                contact:"ppmunga@gmail.com",
                launch:"1685164374",
                website:"https://github.com",
                github:"https://github.com",
                telegram:"https://github.com",
                twitter:"https://twitter.com",
                facebook:"https://facebook.com",
                linkedin:"https://linkedin.com",
                promote: false,
                show:true,
                created:"1685164374"
            },
            {
                name: "Inverted Pepe",
                address:"0xFE60FbA03048EfFB4aCf3f0088Ec2f53d779D3BB",
                icon:"",
                symbol: "$3D3D",
                chain: "ethereum",
                votes: "10000",
                tags:["trending","audited","kyc","pinksale"],
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Nec feugiat nisl pretium fusce id. Convallis posuere morbi leo urna. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sit amet nisl purus in. Morbi quis commodo odio aenean sed adipiscing diam. Amet volutpat consequat mauris nunc. Tellus rutrum tellus pellentesque eu tincidunt tortor. Purus non enim praesent elementum. Sit amet justo donec enim diam vulputate. Sit amet risus nullam eget felis eget. Etiam erat velit scelerisque in dictum non consectetur a. Convallis a cras semper auctor neque vitae. Congue nisi vitae suscipit tellus mauris a diam. Viverra orci sagittis eu volutpat.",
                contact:"ppmunga@gmail.com",
                launch:"1684571988",
                website:"https://github.com",
                github:"https://github.com",
                telegram:"https://github.com",
                twitter:"https://twitter.com",
                facebook:"https://facebook.com",
                linkedin:"https://linkedin.com",
                promote: true,
                show:true,
                created:"1685164374"
            },
            {
                name: "EthShares",
                address: "0x5f12D4012185e044B5FEd1B3dBD9B8B1e7Ffb27f",
                icon:"",
                symbol: "ETS",
                chain: "binance-smart-chain",
                votes: "86000",
                tags:["trending","audited","kyc","pinksale"],
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Nec feugiat nisl pretium fusce id. Convallis posuere morbi leo urna. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sit amet nisl purus in. Morbi quis commodo odio aenean sed adipiscing diam. Amet volutpat consequat mauris nunc. Tellus rutrum tellus pellentesque eu tincidunt tortor. Purus non enim praesent elementum. Sit amet justo donec enim diam vulputate. Sit amet risus nullam eget felis eget. Etiam erat velit scelerisque in dictum non consectetur a. Convallis a cras semper auctor neque vitae. Congue nisi vitae suscipit tellus mauris a diam. Viverra orci sagittis eu volutpat.",
                contact:"ppmunga@gmail.com",
                launch:"1685164374",
                website:"https://github.com",
                github:"https://github.com",
                telegram:"https://github.com",
                twitter:"https://twitter.com",
                facebook:"https://facebook.com",
                linkedin:"https://linkedin.com",
                promote: false,
                show:true,
                created:"1685164374"
            },
            {
                name: "PepeCola",
                address: "0x55fB228730ED971269EBF284C7500d5fF572A141",
                icon:"",
                symbol: "PEPECOLA",
                chain: "ethereum",
                votes: "20000",
                tags:["trending","new","kyc","pinksale"],
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Nec feugiat nisl pretium fusce id. Convallis posuere morbi leo urna. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sit amet nisl purus in. Morbi quis commodo odio aenean sed adipiscing diam. Amet volutpat consequat mauris nunc. Tellus rutrum tellus pellentesque eu tincidunt tortor. Purus non enim praesent elementum. Sit amet justo donec enim diam vulputate. Sit amet risus nullam eget felis eget. Etiam erat velit scelerisque in dictum non consectetur a. Convallis a cras semper auctor neque vitae. Congue nisi vitae suscipit tellus mauris a diam. Viverra orci sagittis eu volutpat.",
                contact:"ppmunga@gmail.com",
                launch:"1685262458",
                website:"https://github.com",
                github:"https://github.com",
                telegram:"https://github.com",
                twitter:"https://twitter.com",
                facebook:"https://facebook.com",
                linkedin:"https://linkedin.com",
                promote: true,
                show:true,
                created:"1685164374"
            },
            {
            name: "Royall Coin",
            address: "0xa175299524F372f9Bd4eE50F8FADc12b4f871492",
            icon:"",
            symbol: "$RC",
            chain: "arbitrum-one",
            votes: "100",
            tags:["trending","new"],
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Nec feugiat nisl pretium fusce id. Convallis posuere morbi leo urna. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sit amet nisl purus in. Morbi quis commodo odio aenean sed adipiscing diam. Amet volutpat consequat mauris nunc. Tellus rutrum tellus pellentesque eu tincidunt tortor. Purus non enim praesent elementum. Sit amet justo donec enim diam vulputate. Sit amet risus nullam eget felis eget. Etiam erat velit scelerisque in dictum non consectetur a. Convallis a cras semper auctor neque vitae. Congue nisi vitae suscipit tellus mauris a diam. Viverra orci sagittis eu volutpat.",
            contact:"ppmunga@gmail.com",
            launch:"1693515600",
            website:"https://github.com",
            github:"https://github.com",
            telegram:"https://github.com",
            twitter:"https://twitter.com",
            facebook:"https://facebook.com",
            linkedin:"https://linkedin.com",
            promote: false,
            show:true,
            created:"1685164374"
        },
        {
            name: "yPredict",
            address: "0xdFaF2680239d678d9551669727b93b62Ad0D18Cc",
            icon:"",
            symbol: "YPRED",
            chain: "polygon-pos",
            votes: "10",
            tags:["trending","new"],
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Nec feugiat nisl pretium fusce id. Convallis posuere morbi leo urna. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sit amet nisl purus in. Morbi quis commodo odio aenean sed adipiscing diam. Amet volutpat consequat mauris nunc. Tellus rutrum tellus pellentesque eu tincidunt tortor. Purus non enim praesent elementum. Sit amet justo donec enim diam vulputate. Sit amet risus nullam eget felis eget. Etiam erat velit scelerisque in dictum non consectetur a. Convallis a cras semper auctor neque vitae. Congue nisi vitae suscipit tellus mauris a diam. Viverra orci sagittis eu volutpat.",
            contact:"ppmunga@gmail.com",
            launch:"1693515600",
            website:"https://github.com",
            github:"https://github.com",
            telegram:"https://github.com",
            twitter:"https://twitter.com",
            facebook:"https://facebook.com",
            linkedin:"https://linkedin.com",
            promote: true,
            show:true,
            created:"1685164374"
        }
      ]

    route = "coins"

    constructor(baseUrl){
        this.url = baseUrl ? `${baseUrl}${this.route}` : undefined
    }

    async getCoins(){
        try{
            if(this.url){
                const coins = await axios.get(this.url)
                if (coins.status === 200) return coins.data.map( c => { return {...c, tags:c.tags.split(","),created:!c.created?1688105293:c.created} })
                                                            .sort((a,b) => b.created-a.created)
                else return undefined
            }else{
                return this.default
            }

        }catch(err){
            console.log(`Error getting coins: ${err}`)
            return undefined
        }
    }

    async getCoin(address){
        try{
            if(this.url){
                const response = await axios.get(`${this.url}/${address}`)
                const coin = response.data
                if (response.status === 200) return {...coin, tags:coin.tags.split(","),created:!coin.created?1688105293:coin.created}
                else return undefined
            }else{
                return this.default
            }

        }catch(err){
            console.log(`Error getting coins: ${err}`)
            return undefined
        }
    }

    async postCoin(coin){
        try{
            const {price, ...payload} = coin
            console.log(payload)
            const response = await axios.post(this.url, {...payload,tags:payload.tags.join(","),created:Math.floor( new Date().getTime() / 1000  )})
    
            if (response.status === 200) return true
            else return undefined

        }catch(err){
            console.log(`Error posting coins: ${err}`)
            return undefined
        }

       
    }

    async updateCoin(coin){
        try{
            const {price, ...data} = coin
            const response = await axios.patch(`${this.url}/${data.address}`, {...data,tags:data.tags.join(",")})
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