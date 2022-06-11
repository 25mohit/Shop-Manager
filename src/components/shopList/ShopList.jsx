import './ShopList.css'
import { useSelector  } from 'react-redux'
import { ShopCard } from '../shopCard/ShopCard'

export const ShopList = ({allData}) => {
    // const shops = useSelector(state => state.shops)
// console.log(allData);
  
  return (
    <div className='shop-list-div'>
            <div className="shop-list-container">
            {allData.map(shop => <ShopCard key={ shop.id } data = { shop} />)  }
            </div>
            
    </div>
  )
}
