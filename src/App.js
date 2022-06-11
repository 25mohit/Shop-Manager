import './App.css';
import { Filterbar } from './components/filterBar/Filterbar';
import { Form } from './components/form/Form';
import { ShopList } from './components/shopList/ShopList';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { WelcomeModal } from './components/welcomeModal/WelcomeModal';

function App() {
  const [showWelcomeMessage, setshowWelcomeMessage] = useState(false)
  useEffect(() => {
      const interval = setInterval(() => {
          setshowWelcomeMessage(true)
        },3000)
        setTimeout(() => {
          clearInterval(interval)
    },3001)
  },[])

  const shops = useSelector(state => state.shops)
  const [allData, setAllData] = useState(shops)

  const filterCategory = () => {
      return[...new Set(shops.map(item => item.sCategory))]
  }

  const filterArea = () => {
    return[...new Set(shops.map(item => item.sArea))]
    }

    const filterShopName = (sName) => {
        const filterData = shops.filter( shop => {
          if(shop.sName.toLowerCase().includes(sName.toLowerCase())){
              return shop
          }
        })
        setAllData( filterData )
    }
    const filterShopCategory = (category) => {
      const filterData = shops.filter( shop => {
        if(shop.sCategory == category){
          return shop;
        }
      } )
      setAllData(filterData)
    }
    const filterShopArea = (area) => {
        const filterData = shops.filter(shop => {
          if(shop.sArea == area){
            return shop;
          }
        })
        setAllData( filterData)
    }

  return (
    <div className="App">
      <div className='shop-registration'>
            <Form />
      </div>
      <div className='shop-list'>
            <Filterbar categoryFilter = { filterCategory() } areaFilter={ filterArea() } nameFilter = { filterShopName } shopAreaFilter = {filterShopArea} shopCategoryFilter = { filterShopCategory }/>
            <ShopList allData={ allData } />         
      </div>
      {showWelcomeMessage &&<WelcomeModal setshowWelcomeMessage={setshowWelcomeMessage} showWelcomeMessage={showWelcomeMessage}/> }
    </div>
  );
}

export default App;
