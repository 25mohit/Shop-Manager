import { createStore } from "redux";

const initialState = {
    shops:[],
    filteredShops: [],
    appliedFilters: {}
}

const getFilteredShops = (shops, filters) => {
    let filteredShops = shops
    for (const [filterName, value] of Object.entries(filters)) {
        if (filterName === "NAME") {
            filteredShops = filteredShops.filter( shop => {
            if(shop.sName.toLowerCase().includes(value.toLowerCase())){
                return shop
            }
            })
        } else if (filterName === "AREA") {
            filteredShops = filteredShops.filter( shop => {
            if(shop.sArea.toLowerCase().includes(value.toLowerCase())){
                return shop
            }
            })
        } else if (filterName === "CATEGORY") {
            filteredShops = filteredShops.filter( shop => {
            if(shop.sCategory.toLowerCase().includes(value.toLowerCase())){
                return shop
            }
            })
        } else if (filterName === "STATE") {
            const currentTime = (new Date()).getTime()
            
            if (value === "open") {
                filteredShops = filteredShops.filter( shop => {
                if(new Date(shop.sOpenDate).getTime() <= currentTime && currentTime <= new Date(shop.sCloseDate).getTime()){
                    return shop
                }
                })
            } else if (value === "close") {
                filteredShops = filteredShops.filter( shop => {
                    if(new Date(shop.sOpenDate).getTime() > currentTime || currentTime > new Date(shop.sCloseDate).getTime()){
                        return shop
                    }
                    })
            }
        }
    }
    return filteredShops
}

const reducer = (state  = initialState, action) => {
    let newState = Object.assign({}, state);
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
                    //the value received from our presentational component
                    let sName = action.payload.sName;
                    if (sName) {
                        state.appliedFilters.NAME = sName
                    } else {
                        delete state.appliedFilters.NAME
                    }
                    newState.filteredShops = getFilteredShops(state.shops, state.appliedFilters)
                    return newState;
    
                case "FILTER_BY_AREA":
                    let sArea = action.payload.area;
                    if (sArea) {
                        state.appliedFilters.AREA = sArea
                    }else {
                        delete state.appliedFilters.AREA
                    }
                    newState.filteredShops = getFilteredShops(state.shops, state.appliedFilters)
                    return newState;

                case "FILTER_BY_CATEGORY":
                    let sCategory = action.payload.category;
                    if (sCategory) {
                        state.appliedFilters.CATEGORY = sCategory
                    }else {
                        delete state.appliedFilters.CATEGORY
                    }
                    newState.filteredShops = getFilteredShops(state.shops, state.appliedFilters)
                    return newState;

                    case "FILTER_BY_STATE":
                    let sState = action.payload.state;
                    if (sState) {
                        state.appliedFilters.STATE = sState
                    }else {
                        delete state.appliedFilters.STATE
                    }
                    newState.filteredShops = getFilteredShops(state.shops, state.appliedFilters)
                    return newState;
            
                    
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