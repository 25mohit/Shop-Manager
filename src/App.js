import './App.css';
import { Filterbar } from './components/filterBar/Filterbar';
import { Form } from './components/form/Form';
import { ShopList } from './components/shopList/ShopList';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { WelcomeModal } from './components/welcomeModal/WelcomeModal';
import { useDispatch } from 'react-redux'
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
  const dispatch = useDispatch()

  const filterCategory = () => {
      return[...new Set(shops.map(item => item.sCategory))]
  }

  const filterArea = () => {
    return[...new Set(shops.map(item => item.sArea))]
    }

    const filterShopName = (sName) => {
        dispatch({
          type: "SEARCH",
          payload:{
            sName
            }
        })
        
    }

    const filterShopCategory = (category) => {
      dispatch({
        type:"FILTER_BY_CATEGORY",
        payload:{
          category
        }
      })
    }
    
    const filterShopArea = (area) => {
        dispatch({
          type:"FILTER_BY_AREA",
          payload:{
            area
          }
        })
    }

    const filterShopState = (state) => {
      dispatch({
        type:"FILTER_BY_STATE",
        payload:{
          state
        }
      })
  }

  return (
    <div className="App">
      <div className='shop-registration'>
            <Form />
      </div>
      <div className='shop-list'>
            <Filterbar categoryFilter = { filterCategory() } areaFilter={ filterArea() } nameFilter = { filterShopName } shopAreaFilter = {filterShopArea} shopCategoryFilter = { filterShopCategory } shopStateFilter= {filterShopState}/>
            <ShopList allData={ allData } />         
      </div>
      {showWelcomeMessage &&<WelcomeModal setshowWelcomeMessage={setshowWelcomeMessage} showWelcomeMessage={showWelcomeMessage}/> }
    </div>
  );
}

export default App;
