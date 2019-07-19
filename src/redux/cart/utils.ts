import { CartItemInfo } from './types'
export const addItemToCart = (cartItems: CartItemInfo[], itemToAdd: CartItemInfo) : CartItemInfo[] => {
    const foundItem = cartItems.find((item) => {
        return item.id === itemToAdd.id;
    });
    if(foundItem) {
        return cartItems.map((item) : CartItemInfo => item.id === itemToAdd.id ?
                             { ...item, quantity: item.quantity + 1} :
                             item
                            );
    }
    return [...cartItems, itemToAdd];
}