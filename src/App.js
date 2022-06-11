import './App.css';
import { Filterbar } from './components/filterBar/Filterbar';
import { Form } from './components/form/Form';
import { ShopList } from './components/shopList/ShopList';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
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

  return (
    <div className="App">
      <div className='shop-registration'>
            <Form />
      </div>
      <div className='shop-list'>
            <Filterbar categoryFilter = { filterCategory() } areaFilter={ filterArea() } nameFilter = { filterShopName }/>
            <ShopList allData={ allData } />         
      </div>

    </div>
  );
}

export default App;
