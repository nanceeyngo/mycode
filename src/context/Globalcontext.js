import React, { createContext, useReducer } from "react";
import { products } from "../data";


export const Cartcontext = createContext();

const Cartreducer = (state, action) => {
    switch (action.type){

        case 'ADD_TO_CART':
            if (action.payload.stock > 0) {
                return [...state, {...action.payload, quantity : 1}];
            }else{
                alert('Out of Stock!');
            };


         case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload.id);

        
         case 'INCREMENT_QUANTITY':
            return state.map(item => item.id === action.payload.id ? {...item, quantity: item.quatity + 1 }: item);


            case 'DECREMENT_QUANTITY' :
                return state.map(item => item.id === action.payload.id? {...item, quantity: item.quantity - 1 }: item

                ).filter(item => item.quantity > 0);    


            case 'SET_CART' :
                return action.payload;
            
            default:
                return state;
       
    };

};

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(Cartreducer, []);

    return (
        <Cartcontext.Provider value={{cart, dispatch}}>
            {children}
        </Cartcontext.Provider>
    )
}

 // const itemsincart = state.find(item => item.id === action.payload.id);
       
    //     if (itemsincart){

    //     if(itemsincart.quantity < action.payload.stock) {
    //         return state.map(items => items.id === action.payload.id ? {...items, quantity: items.quantity + 1} : item)

    //     }

    // }