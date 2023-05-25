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
import Partners from './pages/partners';
import Utils from './utils';

const data = [
  {
      address:"0xf68df6df642e8387afc9d03214b78f3087ef8a99",
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
      linkedIn:"https://linkedin.com",
      promoted: false,
      show:true,
  },
  {
      name: "QUAI",
      address: "0x40821cd074dfecb1524286923bc69315075b5c89",
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
      linkedIn:"https://linkedin.com",
      promoted: false,
      show:true,
  },
  {
      name: "Inverted Pepe",
      address:"0xFE60FbA03048EfFB4aCf3f0088Ec2f53d779D3BB",
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
      promoted: true,
      show:true,
  },
  {
      name: "EthShares",
      address: "0x5f12D4012185e044B5FEd1B3dBD9B8B1e7Ffb27f",
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
      linkedIn:"https://linkedin.com",
      promoted: false,
      show:true,
  },
  {
      name: "PepeCola",
      address: "0x55fB228730ED971269EBF284C7500d5fF572A141",
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
      linkedIn:"https://linkedin.com",
      promoted: true,
      show:true,
  }
]
// const bannerList = [
//   {
//       "name": "banner3",
//       "url": "https://res.cloudinary.com/dwf6iuvbh/image/upload/v1684819403/banner_muaak9.png"
//   },
//   {
//       "name": "banner2",
//       "url": "https://res.cloudinary.com/dwf6iuvbh/image/upload/v1684875458/banner2_tqhfed.png"
//   },
//   {
//       "name": "banner1",
//       "url": "https://res.cloudinary.com/dwf6iuvbh/image/upload/v1684921197/banner1_m5me1i.png"
//   }
// ]

const voteData = [
  {
    id:1,
    address: "0xc58F0E2007B4c52597042cB212a3683AF2ABDA06",
    coin: "0xFE60FbA03048EfFB4aCf3f0088Ec2f53d779D3BB",
    latestTimestamp:1684127976
  }
]


function App() {
  const secondsPerDay =  86400
  const {coinMap,coins,votes,voteMap,userAddress,connected,backendUrl,bannerMap} = useSelector((state) => state.app)
  const dispatch = useDispatch()
  const [cloudinaryKey,setCloudinaryKey] = useState(undefined)
  const [priceDisplay,setpriceDisplay] = useState(undefined)
  const name = "DoctoreCoins"

  const validTimestamp = (time) =>   time < (  (new Date().getTime() / 1000) - secondsPerDay )

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
  
  const onInit = useCallback( async () => {
    const utils = new Utils()
    console.log(utils.getConfig())
    const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL
    const key = process.env.REACT_APP_CLOUDINARY_API_KEY
    const coinMap = {}
    const voteMap = {}
    const bannerMap = {}
    
    setCloudinaryKey( key )
    const bannerService = new BannerService(backendUrl)
    const bannersList = await bannerService.getBanners()

    const coinService = new CoinService(backendUrl)
    const coinList = await coinService.getCoins()

    console.log(coinList)
    console.log(bannersList)
    for (let b of bannersList){
      bannerMap[b.name] = b.url
    }
    
    console.log(bannerMap)

    try{
      const displayPrices = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1")
      setpriceDisplay(displayPrices.data.map( ({symbol,current_price:price,price_change_24h}) => {return {symbol,price,percentageChange:price_change_24h.toFixed(4)}} ))
    }catch(err){
      console.log(err)
    }
    
    for(let c of data){
      let price
      try{
        const res = await axios.get(`https://api.coingecko.com/api/v3/simple/token_price/${c.chain}?contract_addresses=${c.address}&vs_currencies=usd`)
        price = Object.keys(res.data).length > 0 ? res.data[(c.address).toLowerCase()]["usd"] : 0

      }catch(err){
        console.log(err)
        price = 0
      }
      coinMap[c.address] = {...c,price}
      data[ data.indexOf(c) ] = {...c,price}
    }
    
    for (let v of voteData){
      voteMap[`${v.address}/${v.coin}`] = v.latestTimestamp
    }
    dispatch( loadState({coins:data,coinMap,votes:voteData,voteMap,backendUrl,bannerMap}) )
    
    
  }, [dispatch])

  const connectWallet = () => {
    const provider = new BrowserProvider(window.ethereum)
    if (window.ethereum) {
        provider.send("eth_requestAccounts", []).then(async () => {
          const signer  = await provider.getSigner()
          const userAddress = await signer.getAddress()

          dispatch( connectUser({userAddress,connected:true}) )

        })
    } else {
        console.log("Please Install Metamask!!!");
    }
  }

  const uploadBanner = async (image,name) => {
    const service = new BannerService(backendUrl)
    console.log(cloudinaryKey)
    const formData = new FormData()
    formData.append("file",image, `${name}`)
    formData.append("upload_preset",`ml_default`)
    const api = `https://api.cloudinary.com/v1_1/${cloudinaryKey}/image/upload`
    const res = await axios.post(api, formData)
    service.updateBanner(name,res.data.secure_url) 
    dispatch( updateBanner({name,url:res.data.secure_url}) )
    console.log(res.data.secure_url)
  }

  const disconnectWallet = () =>  dispatch( connectUser( {userAddress:undefined,connected:false} ) )

  const voteCoin = address => dispatch( updateVotes({address,userAddress}) )
  
  
  useEffect( () => { 
    onInit() 
  }, [onInit] )

  return (
    <>
      { (coins && coinMap && votes && voteMap && backendUrl && bannerMap) &&
          <Router>
            <div className="mb-3 sticky-top " style={styles.navigation}>
                <div className='container my-5'>
                  <Nav connectWallet={connectWallet} disconnectWallet={disconnectWallet} userConnection={{userAddress,connected}} name={name}/>
                </div>
            </div>
            <div className="container mt-5">
                      <Routes>
                        <Route  exact path="/" 
                                element={ <Ranks priceDisplay={priceDisplay}
                                validTimestamp={validTimestamp} voteCoin={voteCoin}/> }
                        />
                        {/* <Route  exact path="/token/*" 
                                element={ <Token  /> }
                        /> */}
                        <Route  exact path="/:address" 
                                element={ <Coin 
                                validTimestamp={validTimestamp} voteCoin={voteCoin} /> }
                        />
                        <Route  exact path="/promote" 
                                element={ <Promotion 
                                validTimestamp={validTimestamp} voteCoin={voteCoin} name={name} /> }
                        />
                        <Route  exact path="/admin" 
                                element={ <Admin 
                                validTimestamp={validTimestamp} voteCoin={voteCoin} uploadBanner={uploadBanner}/> }
                        />
                        <Route  exact path="/partners" 
                                element={ <Partners/> }
                        />
                      </Routes>
                      <Footer />
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
