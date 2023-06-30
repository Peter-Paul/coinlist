import axios from "axios"

export default class GameService{

    default = [
            {
                icon:"https://res.cloudinary.com/dwf6iuvbh/image/upload/v1686828800/photo_2023-06-15_14-13-47_mlqd76.jpg",
                address:"0xf68df6df642e8387afc9d03214b78f3087ef8a99",
                name: "Doge Reloaded",
                chain: "ethereum",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Nec feugiat nisl pretium fusce id. Convallis posuere morbi leo urna. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sit amet nisl purus in. Morbi quis commodo odio aenean sed adipiscing diam. Amet volutpat consequat mauris nunc. Tellus rutrum tellus pellentesque eu tincidunt tortor. Purus non enim praesent elementum. Sit amet justo donec enim diam vulputate. Sit amet risus nullam eget felis eget. Etiam erat velit scelerisque in dictum non consectetur a. Convallis a cras semper auctor neque vitae. Congue nisi vitae suscipit tellus mauris a diam. Viverra orci sagittis eu volutpat.",
                contact:"ppmunga@gmail.com",
                youtube:"https://youtube.com",
                website:"https://github.com",
                github:"https://github.com",
                telegram:"https://github.com",
                twitter:"https://twitter.com",
                facebook:"https://facebook.com",
                linkedin:"https://linkedin.com",
                show:true,
                created:"1685164374"
            }
      ]

    route = "games"

    constructor(baseUrl){
        this.url = baseUrl ? `${baseUrl}${this.route}` : undefined
        // this.url = baseUrl ? undefined : undefined
    }

    async getGames(){
        try{
            if(this.url){
                const games = await axios.get(this.url)
                if (games.status === 200) return games.data.map( (g) =>{ return {...g,votes:!g.votes ?"0":g.votes, created:!g.created?1688105293:g.created} } )
                                                            .sort((a,b) => b.created-a.created)
                else return undefined
            }else{
                return this.default
            }

        }catch(err){
            console.log(`Error getting games: ${err}`)
            return undefined
        }
    }

    async postGame(game){
        try{
            const response = await axios.post(this.url, {...game,created:Math.floor( new Date().getTime() / 1000  )})
    
            if (response.status === 200) return true
            else return undefined

        }catch(err){
            console.log(`Error posting games: ${err}`)
            return undefined
        }

       
    }

    async updateGame(game){
        try{
            const response = await axios.patch(`${this.url}/${game.address}`, game)
            if (response.status === 200) return true
            else return undefined

        }catch(err){
            console.log(`Error patching games: ${err}`)
            return undefined
        }

       
    }


    async deleteGame(address){
        try{

            const response = await axios.delete(`${this.url}/${address}`)
    
            if (response.status === 200) return true
            else return undefined

        }catch(err){
            console.log(`Error deleting game: ${err}`)
            return undefined
        }

       
    }
}