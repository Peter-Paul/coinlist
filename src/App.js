import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './shared/nav';
import Ranks from './pages/ranks';
import Footer from './shared/footer';
import { useDispatch, useSelector } from 'react-redux';
import { connectUser, loadState, updateVotes, updateBanner, updateGameVotes } from './state/app.reducers';
import { Suspense, useCallback, useEffect, useState } from 'react';
import Coin from './pages/coin';
import Promotion from './pages/promotion';
import { BrowserProvider } from 'ethers';
import Admin from './pages/admin';
import BannerService from './services/banners';
import axios from 'axios';
import CoinService from './services/coins';
import BottomBanners from './shared/bottomBanner';
import Telegram from './services/telegram';
import Sidebar from './shared/sidebar';
import VoteService from './services/votes';
import Partners from './pages/partners';
import AddCoin from './components/ranks/addCoin';
import Games from './pages/games';
import AddGame from './components/games/addGame';
import GameService from './services/games';
import { useTranslation } from 'react-i18next';
import Loading from './shared/loading';


const partners = [
  {id:1,url:"https://res.cloudinary.com/dwf6iuvbh/image/upload/v1687767227/dc_g8skza.jpg", description:"The crypto community in Spanish that you have always wanted. Calls channel where you can anticipate the best opportunities.", name:"DOCTORECLUB",link:"http://T.me/DoctoreClub"},
  {id:3,url:"https://res.cloudinary.com/dwf6iuvbh/image/upload/v1687767227/ps_za42f2.jpg", description:"PinkSale offers a suite of tools to help create your own tokens and pitch decks in a 100% decentralized manner", name:"PINKSALE",link:"http://www.pinksale.finance"},
  {id:2,url:"https://res.cloudinary.com/dwf6iuvbh/image/upload/v1687767227/cg_v9qum0.jpg", description:"Offers fundamental analysis of the cryptocurrency market. In addition to tracking price, volume, and market capitalization, it monitors community growth.", name:"COINGECKO",link:"https://www.coingecko.com/"},
  {id:4,url:"https://res.cloudinary.com/dwf6iuvbh/image/upload/v1687767227/dv_smuthu.jpg", description:"Dexview allows you to track your favorite cryptocurrencies in real time, from established market currencies like BNB, to new tokens being released every day.", name:"DEXVIEW",link:"https://www.dexview.com/"},
  {id:5,url:"https://res.cloudinary.com/dwf6iuvbh/image/upload/v1687767227/bn_cahvc7.jpg", description:"The main blockchain ecosystem in the world that has a wide range of products, including the largest exchange of digital assets.", name:"BINANCE",link:"https://www.binance.com"},
  {id:6,url:"https://res.cloudinary.com/dwf6iuvbh/image/upload/v1687767227/cm_zxoyv5.jpg", description:"Updated information on the cryptocurrency market and very useful tools for users who want to know more details about the crypto world", name:"COINMARKETCAP",link:"https://coinmarketcap.com/"},
]


function App() {
  // console.log(process.env.REACT_APP_ENV)
  const {coinMap,gameMap,userAddress,connected,bannerMap,baseUrl} = useSelector((state) => state.app)
  const {t, i18n} = useTranslation()
  const dispatch = useDispatch()
  const [showLowerLeft,setshowLowerLeft] = useState(true)
  const [showLowerRight,setshowLowerRight] = useState(true)
  // const [cloudinaryKey,setCloudinaryKey] = useState(undefined)
  const [priceDisplay,setpriceDisplay] = useState(undefined)
  const [telegramPosts,setTelegramPosts] = useState(undefined)
  const name = "DoctoreCoins"
 
  
  const onInit = useCallback( async () => {
    const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
    const admin = process.env.REACT_APP_ADMIN
    const coinMap = {}
    const gameMap = {}
    const bannerMap = {}
    const voteMap = {}
    const gameVoteMap = {}

    // setCloudinaryKey( key )
    const bannerService = new BannerService(baseUrl)
    const bannersList = await bannerService.getBanners()

    for (let {name,url,link} of bannersList){
      bannerMap[name] = {url,link}
    }
    dispatch( loadState({coins:undefined,games:undefined,gameMap:undefined,coinMap:undefined,
                        voteMap:undefined,gameVoteMap:undefined,baseUrl,bannerMap,admin,partners}) )


    const telegram = new Telegram()
    setTelegramPosts(await telegram.getPosts())

    const coinService = new CoinService(baseUrl)
    const coinList = await coinService.getCoins()

    const gameService = new GameService(baseUrl)
    const gameList = await gameService.getGames()

    console.log(coinList)
    dispatch( loadState({coins:coinList,games:gameList,gameMap:undefined,coinMap:undefined,
      voteMap:undefined,gameVoteMap:undefined,baseUrl,bannerMap,admin,partners}) )

    try{
      const displayPrices = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1")
      setpriceDisplay(displayPrices.data.map( ({symbol,current_price:price,price_change_24h}) => {return {symbol,price,percentageChange:price_change_24h.toFixed(4)}} ))
    }catch(err){
      console.log(err)
    }

    if(gameList){
      for(let g of gameList){
        gameMap[g.address] = g
      }
    }else{console.log("Error getting games")}
    
    const coinCopy = [...coinList]
    if(coinCopy){
      for(let c of coinCopy){
        let price
        try{
          const res = await axios.get(`https://api.coingecko.com/api/v3/simple/token_price/${c.chain}?contract_addresses=${c.address}&vs_currencies=usd`)
          price = Object.keys(res.data).length > 0 ? res.data[(c.address).toLowerCase()]["usd"] : 0
  
        }catch(err){
          price = 0
        }
        coinMap[c.address] = {...c,price}
        coinCopy[ coinCopy.indexOf(c) ] = {...c,price}
      }
    }else{console.log("Error getting coins")}
    console.log(coinCopy)
    
    dispatch( loadState({coins:coinCopy,games:gameList,gameMap,coinMap,voteMap,gameVoteMap,baseUrl,bannerMap,admin,partners}) )
    
    
    
  }, [dispatch])

  const connectWallet = () => {
    const provider = new BrowserProvider(window.ethereum)
    if (window.ethereum) {
        provider.send("eth_requestAccounts", []).then(async () => {
          const signer  = await provider.getSigner()
          const userAddress = await signer.getAddress()
          const voteService = new VoteService(baseUrl)
          const voteMap = await voteService.getVotes(userAddress)
          const gameVoteMap = await voteService.getGameVotes(userAddress)
          dispatch( connectUser({userAddress,connected:true,voteMap,gameVoteMap}) )
        })
    } else {
        console.log("Please Install Metamask!!!");
    }
  }

  const uploadBanner = async (image,name,link) => {
    const service = new BannerService(baseUrl)
    if (image){
      // console.log(cloudinaryKey)
      const formData = new FormData()
      formData.append("file",image, `${name}`)
      formData.append("upload_preset",`ml_default`)
      // const api = `https://api.cloudinary.com/v1_1/${cloudinaryKey}/image/upload`
      const api = `https://api.cloudinary.com/v1_1/dwf6iuvbh/image/upload`
      const res = await axios.post(api, formData)
      service.updateBanner(name,res.data.secure_url,link) 
      dispatch( updateBanner({name,url:res.data.secure_url,link}) )
    }else{
      const url = ""
      service.updateBanner(name,url,link) 
      dispatch( updateBanner({name,url,link}) )
    }
  }

  const disconnectWallet = () =>  dispatch( connectUser( {userAddress:undefined,connected:false} ) )

  const voteCoin = async address => {
    const coin = coinMap[address]
    const updatedCoin = {...coin,votes:(parseInt(coin.votes) + 1).toString(),tags:coin.tags.join(",")}
    const { price, ...coinData } = updatedCoin
    const payload = {
        coin:address,
        address:userAddress,
        time: Math.floor( new Date().getTime() / 1000 ).toString(),
        coinData
    }
    const voteService = new VoteService(baseUrl)
    try{
      await voteService.postVote(payload)
      dispatch( updateVotes({updatedCoin}) )

    }catch(err){
      console.log(`Error posting votes -> ${err}`)
    }
  }


  const voteGame = async address => {
    console.log(address)
    const game = gameMap[address]
    const updatedGame = {...game,votes:(parseInt(game.votes) + 1).toString()}
    const { price, ...gameData } = updatedGame
    const payload = {
        game:address,
        address:userAddress,
        time: Math.floor( new Date().getTime() / 1000 ).toString(),
        gameData
    }
    const voteService = new VoteService(baseUrl)
    try{
      await voteService.postGameVote(payload)
      dispatch( updateGameVotes({updatedGame}) )

    }catch(err){
      console.log(`Error posting game votes -> ${err}`)
    }
  }
  
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  const styles = {
    navigation:{
      backgroundColor:"#003153"
    },
    loading:{
      display: "flex",
      justifyContent: "center",
      alignItems:"center",
      textAlign: "center",
      minHeight:"100vh"
  }
  }
  
  useEffect( () => { 
    onInit() 
  }, [onInit] )

  return (
    <Suspense fallback={<Loading />}>
      <>
        {/* { (coins && coinMap && voteMap &&  bannerMap && games && gameVoteMap) && */}
        {  bannerMap &&
            <Router>
              <div className='d-flex justify-content-between'>
                <div className='sidebar col-2 d-none d-custom-block bg-dark '>
                  <Sidebar name={name} handleLanguageChange={handleLanguageChange} content={t} />
                </div>
                <div className='content justify-content-center col-12 col-custom-10'>
                  <div className="mb-3 sticky-top " style={styles.navigation}>
                      <div className='container my-5'>
                        <Nav handleLanguageChange={handleLanguageChange} content={t} connectWallet={connectWallet} disconnectWallet={disconnectWallet} userConnection={{userAddress,connected}} name={name} priceDisplay={priceDisplay}/>
                      </div>
                  </div>
                  <div className="container mt-5">
                            <Routes>
                              <Route  exact path="/" 
                                      element={ <Ranks priceDisplay={priceDisplay} content={t}
                                      voteCoin={voteCoin} telegramPosts={telegramPosts} /> }
                              />
                              <Route  exact path='/addCoin'
                                      element={<AddCoin baseUrl={baseUrl} />}
                              />
                              <Route  exact path="/:address" 
                                      element={ <Coin 
                                      voteCoin={voteCoin} /> }
                              />

                              <Route  exact path='/addGame'
                                      element={<AddGame baseUrl={baseUrl} />}
                              />

                              <Route  exact path="/games" 
                                      element={ <Games voteCoin={voteCoin} voteGame={voteGame} /> }
                              />
                              
                              <Route  exact path="/partners" 
                                      element={ <Partners 
                                      voteCoin={voteCoin} /> }
                              />
                              <Route  exact path="/services/:service" 
                                      element={ <Promotion 
                                      voteCoin={voteCoin} name={name} /> }
                              />
                              <Route  exact path="/admin" 
                                      element={ <Admin 
                                      voteCoin={voteCoin} uploadBanner={uploadBanner}/> }
                              />

                              <Route  exact path="/admin/:address" 
                                      element={ <Coin 
                                      voteCoin={voteCoin} /> }
                              />
                            </Routes>
                            <Footer partners={partners} name={name} />
                  </div>
                </div>
              </div>
                <div className='position-relative' >
                  {
                    showLowerLeft && 
                    <>
                      <div className="position-fixed bottom-0 start-0 d-none d-md-block">
                        <div className='d-flex justify-content-end'>
                          <button type="button" className="btn-close" onClick={() => setshowLowerLeft(false)}></button>
                        </div>
                          {
                            bannerMap['banner6'].url!=="" &&
                            <BottomBanners banner={bannerMap['banner6']}/>
                          }
                      </div>
                    </>
                  }
                  {
                    showLowerRight && 
                    <div className="position-fixed bottom-0 end-0 d-none d-md-block">
                        <div className='d-flex justify-content-end'>
                          <button type="button" className="btn-close" onClick={() => setshowLowerRight(false)}></button>
                        </div>
                        {
                          bannerMap['banner5'].url!=="" &&
                          <BottomBanners banner={bannerMap['banner5']}/>
                        }
                    </div>
                  }
                </div>
            </Router>
        }

        { !(bannerMap) &&
          <Loading />
        }
      </>
    </Suspense>
  );
}

export default App;
