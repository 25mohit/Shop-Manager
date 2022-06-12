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
                    console.log(state.shops, "total")
                    console.log(action.payload.sName, "reducer")
                    // return{
                    //     ...state,
                    //     shops: action.payload.filterData
                    // }
                    let newState = Object.assign({}, state);
                    //the value received from our presentational component
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
                case "EDIT_SHOP_DATA":
                    return{
                        ...state,
                        shops:[action.payload],
                        filteredShops:[action.payload]
                    }
                    default :   
                    return state;
        }
}
export default createStore( reducer )