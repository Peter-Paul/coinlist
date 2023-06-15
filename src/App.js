import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './shared/nav';
import Ranks from './pages/ranks';
import Footer from './shared/footer';
import { useDispatch, useSelector } from 'react-redux';
import { connectUser, loadState, updateVotes, updateBanner } from './state/app.reducers';
import { useCallback, useEffect, useState } from 'react';
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


const partners = [
  {id:1,url:"https://res.cloudinary.com/dwf6iuvbh/image/upload/v1685827951/doctoreclub_x4xdkc.png", name:"DOCTORECLUB",link:"http://T.me/DoctoreClub"},
  {id:2,url:"https://res.cloudinary.com/dwf6iuvbh/image/upload/v1685827950/ninja_jv7ecc.png", name:"CFG NINJA",link:"https://t.me/Bladepool"},
  {id:3,url:"https://res.cloudinary.com/dwf6iuvbh/image/upload/v1685827950/pinksale_p8zpwo.png", name:"PINKSALE",link:"http://www.pinksale.finance"},
]


function App() {
  // console.log(process.env.REACT_APP_ENV)
  const {coinMap,coins,voteMap,userAddress,connected,bannerMap,baseUrl} = useSelector((state) => state.app)
  const dispatch = useDispatch()
  const [showLowerLeft,setshowLowerLeft] = useState(true)
  const [showLowerRight,setshowLowerRight] = useState(true)
  // const [cloudinaryKey,setCloudinaryKey] = useState(undefined)
  const [priceDisplay,setpriceDisplay] = useState(undefined)
  const [telegramPosts,setTelegramPosts] = useState(undefined)
  const name = "DoctoreCoins"
 
  
  const onInit = useCallback( async () => {
    const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
    // const key = process.env.REACT_APP_CLOUDINARY_API_KEY
    const coinMap = {}
    const bannerMap = {}
    const voteMap = {}

    // setCloudinaryKey( key )
    const bannerService = new BannerService(baseUrl)
    const bannersList = await bannerService.getBanners()

    const coinService = new CoinService(baseUrl)
    const coinList = await coinService.getCoins()

    // console.log(bannersList)
    

    for (let {name,url,link} of bannersList){
      bannerMap[name] = {url,link}
    }
    
    console.log(bannerMap)

    try{
      const displayPrices = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1")
      setpriceDisplay(displayPrices.data.map( ({symbol,current_price:price,price_change_24h}) => {return {symbol,price,percentageChange:price_change_24h.toFixed(4)}} ))
    }catch(err){
      console.log(err)
    }
    
    if(coinList){
      for(let c of coinList){
        let price
        try{
          const res = await axios.get(`https://api.coingecko.com/api/v3/simple/token_price/${c.chain}?contract_addresses=${c.address}&vs_currencies=usd`)
          console.log(res)
          price = Object.keys(res.data).length > 0 ? res.data[(c.address).toLowerCase()]["usd"] : 0
  
        }catch(err){
          console.log(err)
          price = 0
        }
        coinMap[c.address] = {...c,price}
        coinList[ coinList.indexOf(c) ] = {...c,price}
      }
    }else{console.log("Error getting coins")}
    
    const telegram = new Telegram()
    setTelegramPosts(await telegram.getPosts())

    dispatch( loadState({coins:coinList,coinMap,voteMap,baseUrl,bannerMap,}) )
    
    
  }, [dispatch])

  const connectWallet = () => {
    const provider = new BrowserProvider(window.ethereum)
    if (window.ethereum) {
        provider.send("eth_requestAccounts", []).then(async () => {
          const signer  = await provider.getSigner()
          const userAddress = await signer.getAddress()
          const voteService = new VoteService(baseUrl)
          const voteMap = await voteService.getVotes(userAddress)
          console.log(voteMap)
          dispatch( connectUser({userAddress,connected:true,voteMap}) )
        })
    } else {
        console.log("Please Install Metamask!!!");
    }
  }

  const uploadBanner = async (image,name,link) => {
    const service = new BannerService(baseUrl)
    // console.log(cloudinaryKey)
    const formData = new FormData()
    formData.append("file",image, `${name}`)
    formData.append("upload_preset",`ml_default`)
    // const api = `https://api.cloudinary.com/v1_1/${cloudinaryKey}/image/upload`
    const api = `https://api.cloudinary.com/v1_1/dwf6iuvbh/image/upload`
    const res = await axios.post(api, formData)
    service.updateBanner(name,res.data.secure_url,link) 
    dispatch( updateBanner({name,url:res.data.secure_url,link}) )
    console.log(res.data.secure_url)
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
    <>
      { (coins && coinMap && voteMap  && bannerMap) &&
          <Router>
            <div className='d-flex justify-content-between'>
              <div className='sidebar col-2 d-none d-custom-block bg-dark '>
                <Sidebar name={name} />
              </div>
              <div className='content justify-content-center col-12 col-custom-10'>
                <div className="mb-3 sticky-top " style={styles.navigation}>
                    <div className='container my-5'>
                      <Nav connectWallet={connectWallet} disconnectWallet={disconnectWallet} userConnection={{userAddress,connected}} name={name} priceDisplay={priceDisplay}/>
                    </div>
                </div>
                <div className="container mt-5">
                          <Routes>
                            <Route  exact path="/" 
                                    element={ <Ranks priceDisplay={priceDisplay}
                                    voteCoin={voteCoin} telegramPosts={telegramPosts} /> }
                            />
                            <Route  exact path="/:address" 
                                    element={ <Coin 
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
                        <BottomBanners banner={bannerMap['banner6']}/>
                    </div>
                  </>
                }
                {
                  showLowerRight && 
                  <div className="position-fixed bottom-0 end-0 d-none d-md-block">
                      <div className='d-flex justify-content-end'>
                        <button type="button" className="btn-close" onClick={() => setshowLowerRight(false)}></button>
                      </div>
                      <BottomBanners banner={bannerMap['banner5']}/>
                  </div>
                }
              </div>
          </Router>
      }

      { !(coins && coinMap) &&
        <div style={styles.loading}>
            <div>
              <div className="loadingio-spinner-gear-kf6jkp8svg"><div className="ldio-lw2jfx443j">
              <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              </div></div>

            </div>
        </div>
      }
    </>
  );
}

export default App;
