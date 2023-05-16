import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './shared/nav';
import Ranks from './pages/ranks';
import Token from './pages/token';
import Footer from './shared/footer';
import { useDispatch, useSelector } from 'react-redux';
import { connectUser, loadState, updateVotes } from './state/app.reducers';
import { useCallback, useEffect } from 'react';
import Coin from './pages/coin';
import Promotion from './pages/promotion';
import { BrowserProvider } from 'ethers';

const data = [
  {
      id:1,
      address:"0x29a11801a2d355c46AF338be6A0B42F32dac220b",
      name: "WEFI",
      symbol: "WEFI",
      chain: "BSC",
      price: "+1.2",
      mrkCap: "1200000",
      votes: "100000",
      promoted: false,
      tag:["new","audited","doxxed"],
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Nec feugiat nisl pretium fusce id. Convallis posuere morbi leo urna. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sit amet nisl purus in. Morbi quis commodo odio aenean sed adipiscing diam. Amet volutpat consequat mauris nunc. Tellus rutrum tellus pellentesque eu tincidunt tortor. Purus non enim praesent elementum. Sit amet justo donec enim diam vulputate. Sit amet risus nullam eget felis eget. Etiam erat velit scelerisque in dictum non consectetur a. Convallis a cras semper auctor neque vitae. Congue nisi vitae suscipit tellus mauris a diam. Viverra orci sagittis eu volutpat."
  },
  {
      id:2,
      name: "Mind Music",
      address: "0x897304D4606B2d5FcAf886aa7AA143e478EC36C5",
      symbol: "MND",
      chain: "BSC",
      price: "+1.2",
      mrkCap: "10000",
      votes: "10000",
      promoted: false,
      tag:["trending","audited","doxxed"],
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Nec feugiat nisl pretium fusce id. Convallis posuere morbi leo urna. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sit amet nisl purus in. Morbi quis commodo odio aenean sed adipiscing diam. Amet volutpat consequat mauris nunc. Tellus rutrum tellus pellentesque eu tincidunt tortor. Purus non enim praesent elementum. Sit amet justo donec enim diam vulputate. Sit amet risus nullam eget felis eget. Etiam erat velit scelerisque in dictum non consectetur a. Convallis a cras semper auctor neque vitae. Congue nisi vitae suscipit tellus mauris a diam. Viverra orci sagittis eu volutpat."
  },
  {
      id:3,
      name: "Inverted Pepe",
      address:"0xFE60FbA03048EfFB4aCf3f0088Ec2f53d779D3BB",
      symbol: "$3D3D",
      chain: "ETH",
      price: "+1.2",
      mrkCap: "45000",
      votes: "10000",
      promoted: true,
      tag:["trending","audited","doxxed"],
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Nec feugiat nisl pretium fusce id. Convallis posuere morbi leo urna. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sit amet nisl purus in. Morbi quis commodo odio aenean sed adipiscing diam. Amet volutpat consequat mauris nunc. Tellus rutrum tellus pellentesque eu tincidunt tortor. Purus non enim praesent elementum. Sit amet justo donec enim diam vulputate. Sit amet risus nullam eget felis eget. Etiam erat velit scelerisque in dictum non consectetur a. Convallis a cras semper auctor neque vitae. Congue nisi vitae suscipit tellus mauris a diam. Viverra orci sagittis eu volutpat."
  },
  {
      id:4,
      name: "EthShares",
      address: "0x5f12D4012185e044B5FEd1B3dBD9B8B1e7Ffb27f",
      symbol: "ETS",
      chain: "BSC",
      price: "+1.2",
      mrkCap: "500000",
      votes: "86000",
      promoted: false,
      tag:["trending","audited","doxxed"],
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Nec feugiat nisl pretium fusce id. Convallis posuere morbi leo urna. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sit amet nisl purus in. Morbi quis commodo odio aenean sed adipiscing diam. Amet volutpat consequat mauris nunc. Tellus rutrum tellus pellentesque eu tincidunt tortor. Purus non enim praesent elementum. Sit amet justo donec enim diam vulputate. Sit amet risus nullam eget felis eget. Etiam erat velit scelerisque in dictum non consectetur a. Convallis a cras semper auctor neque vitae. Congue nisi vitae suscipit tellus mauris a diam. Viverra orci sagittis eu volutpat."
  },
  {
      id:5,
      name: "PepeCola",
      address: "0x55fB228730ED971269EBF284C7500d5fF572A141",
      symbol: "PEPECOLA",
      chain: "ETH",
      price: "+1.2",
      mrkCap: "750000",
      votes: "20000",
      promoted: true,
      tag:["trending","new","doxxed"],
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Porttitor eget dolor morbi non arcu risus quis varius. Nec feugiat nisl pretium fusce id. Convallis posuere morbi leo urna. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sit amet nisl purus in. Morbi quis commodo odio aenean sed adipiscing diam. Amet volutpat consequat mauris nunc. Tellus rutrum tellus pellentesque eu tincidunt tortor. Purus non enim praesent elementum. Sit amet justo donec enim diam vulputate. Sit amet risus nullam eget felis eget. Etiam erat velit scelerisque in dictum non consectetur a. Convallis a cras semper auctor neque vitae. Congue nisi vitae suscipit tellus mauris a diam. Viverra orci sagittis eu volutpat."
  }
]

const voteData = [
  {
    id:1,
    address: "0xc58F0E2007B4c52597042cB212a3683AF2ABDA06",
    coin: "0xFE60FbA03048EfFB4aCf3f0088Ec2f53d779D3BB",
    latestTimestamp:1684127976
  }
]

const priceDisplay = [
  {symbol:"ETH", price:"100", percentageChange:"+0.03"},
  {symbol:"COINLIST", price:"100", percentageChange:"-1.55"},
  {symbol:"BTC", price:"100", percentageChange:"+2.55"},
  {symbol:"BNB", price:"100", percentageChange:"-0.5"},
]





function App() {
  const secondsPerDay =  86400
  const {coinMap,coins,votes,voteMap,userAddress,connected} = useSelector((state) => state.app)
  const dispatch = useDispatch()

  const validTimestamp = (time) =>   time < (  (new Date().getTime() / 1000) - secondsPerDay )

  const styles = {
    navigation:{
      backgroundColor:"#282c34"
    }
  }
  
  const onInit = useCallback( () => {
    let coinMap = {}
    let voteMap = {}
    for(let c of data){
      coinMap[c.address] = c
    }

    for (let v of voteData){
      voteMap[`${v.address}/${v.coin}`] = v.latestTimestamp
    }
    dispatch( loadState({coins:data,coinMap,votes:voteData,voteMap}) )
    
    
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

  const disconnectWallet = () =>  dispatch( connectUser( {userAddress:undefined,connected:false} ) )

  const voteCoin = address => dispatch( updateVotes({address,userAddress}) )
  
  
  useEffect( () => { 
    onInit() 
  }, [onInit] )

  
  
  

  return (
    <>
      { (coins && coinMap && votes && voteMap) &&
          <Router>
            <div className="mb-3 sticky-top " style={styles.navigation}>
                <div className='container my-5'>
                  <Nav connectWallet={connectWallet} disconnectWallet={disconnectWallet} userConnection={{userAddress,connected}}/>
                </div>
            </div>
            <div className="container mt-5">
                      <Routes>
                        <Route  exact path="/" 
                                element={ <Ranks priceDisplay={priceDisplay}
                                validTimestamp={validTimestamp} voteCoin={voteCoin}/> }
                        />
                        <Route  exact path="/token/*" 
                                element={ <Token  /> }
                        />
                        <Route  exact path="/:address" 
                                element={ <Coin 
                                validTimestamp={validTimestamp} voteCoin={voteCoin} /> }
                        />
                        <Route  exact path="/promote" 
                                element={ <Promotion 
                                validTimestamp={validTimestamp} voteCoin={voteCoin} /> }
                        />
                      </Routes>
                      <Footer />
              </div>
          </Router>
      }

      { !(coins && coinMap) &&
          <p>Loading...</p>
      }
    </>
  );
}

export default App;
