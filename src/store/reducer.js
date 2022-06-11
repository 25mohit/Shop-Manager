import { createStore } from "redux";

const initialState = {
    shops:[]
}

const reducer = (state  = initialState, action) => {
        switch(action.type) {
                case "REGISTER_SHOP":
                    return{
                        ...state,
                        shops: [...state.shops, action.payload]
                    }
                case "DELETE_SHOP":
                    return{
                        ...state,
                        shops: state.shops.filter(name => name.id !== action.payload)
                    }
                    default :
                    return state;
        }
}
export default createStore( reducer )