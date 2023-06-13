import axios from "axios"

export default class VoteService{
    route = "votes"

    constructor(baseUrl){
        this.url = `${baseUrl}${this.route}`
    }

    async getVotes(){
        try{

            const votes = await axios.get(this.url)
    
            if (votes.status === 200) return votes.data.map( c => { return {...c, tags:c.tags.split(",")} })
            else return undefined

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

}