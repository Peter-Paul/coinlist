
export default class Utils{


    getConfig(){
        return {
            name:process.env.REACT_APP_TOKEN_NAME,
            symbol:process.env.REACT_APP_TOKEN_SYMBOL,
            description:process.env.REACT_APP_TOKEN_DESCRIPTION,
        }
    }


}