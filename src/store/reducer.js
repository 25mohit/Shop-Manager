import { createStore } from "redux";

const initialState = {
    shops:[],
    filteredShops: []
}

const reducer = (state  = initialState, action) => {
        switch(action.type) {
                case "REGISTER_SHOP":
                    return {
                        ...state,
                        shops: [...state.shops, action.payload],
                        // Add logic to add only when new shop satisfy existing filter
                        filteredShops: [...state.filteredShops, action.payload],
                    }
                case "DELETE_SHOP":
                    return{
                        ...state,
                        shops: state.shops.filter(name => name.id !== action.payload),
                        filteredShops: state.filteredShops.filter(name => name.id !== action.payload)
                    }
                case "SEARCH":
                    let newState = Object.assign({}, state);
                    let sName = action.payload.sName;
                    const filteredValues = state.shops.filter( shop => {
                        if(shop.sName.toLowerCase().includes(sName.toLowerCase())){
                            return shop
                        }
                      })
                    
                    //if the value from the input box is not empty
                    if (sName) {
                        //change the filtered products to reflect the change
                        newState.filteredShops = filteredValues;
                    } else {
                        newState.filteredShops = newState.shops;
                    }
                    return newState;
                    
                case "FILTER_BY_AREA":
                    const filteredArea = shops.sArea == action.payload
                    state.shops.filter( shop => {
                        if( filteredArea ){
                            return shop
                        }
                    })
                    
                case "EDIT_SHOP_DATA":
                    const shopIndex = state.shops.findIndex((shop => shop.id == action.payload.id))
                    console.log(shopIndex, action.payload)
                    if (shopIndex >= 0) {
                        state.shops[shopIndex].sName = action.payload.shopName
                        state.shops[shopIndex].sArea = action.payload.shopArea
                        state.shops[shopIndex].sCategory = action.payload.shopCategory
                        
                        const filteredShopIndex = state.filteredShops.findIndex((shop => shop.id == action.payload.id))
                        if (filteredShopIndex >= 0) {
                            state.filteredShops[filteredShopIndex].sName = action.payload.shopName
                            state.filteredShops[filteredShopIndex].sArea = action.payload.shopArea
                            state.filteredShops[filteredShopIndex].sCategory = action.payload.shopCategory
                        }
                    } 
                    return state
                default :   
                    return state;
        }
}
export default createStore( reducer )