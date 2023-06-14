import axios from "axios"

export default class VoteService{
    route = "votes"

    constructor(baseUrl){
        this.url = `${baseUrl}${this.route}`
    }

    async getVotes(address){
        try{

            const votes = await axios.get(`${this.url}/${address}`)
    
            if (votes.status === 200) return votes
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