import './ShopList.css'
import { useSelector  } from 'react-redux'
import { ShopCard } from '../shopCard/ShopCard'

export const ShopList = () => {
  const shops = useSelector(state => state.filteredShops)
  
  return (
    <div className='shop-list-div'>
            <div className="shop-list-container">
            {shops.map(shop => <ShopCard key={ shop.id } data = { shop} />)  }
            </div>
            
    </div>
  )
}
