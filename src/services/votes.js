import axios from "axios"

export default class VoteService{
    route = "votes"
    gameRoute = "gameVotes"

    constructor(baseUrl){
        this.url = baseUrl ? `${baseUrl}${this.route}` : undefined
        this.gameUrl = baseUrl ? `${baseUrl}${this.gameRoute}` : undefined
    }

    async getVotes(address){
        try{

            if(this.url){

                const votes = await axios.get(`${this.url}/${address}`)
        
                if (votes.status === 200) return votes.data
                else return undefined
            }else{
                return {}
            }

        }catch(err){
            console.log(`Error getting votes: ${err}`)
            return undefined
        }
    }

    async postVote(vote){
        try{

            const response = await axios.post(this.url, vote)
    
            if (response.status === 200) return true
            else return undefined

        }catch(err){
            console.log(`Error posting votes: ${err}`)
            return undefined
        }
       
    }

    async getGameVotes(address){
        try{

            if(this.url){

                const votes = await axios.get(`${this.gameUrl}/${address}`)
        
                if (votes.status === 200) return votes.data
                else return undefined
            }else{
                return {}
            }

        }catch(err){
            console.log(`Error getting votes: ${err}`)
            return undefined
        }
    }

    async postGameVote(vote){
        try{

            const response = await axios.post(this.gameUrl, vote)
    
            if (response.status === 200) return true
            else return undefined

        }catch(err){
            console.log(`Error posting votes: ${err}`)
            return undefined
        }
       
    }

}