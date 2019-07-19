import { CartItem } from './types'
export const addItemToCart = (cartItems: CartItem[], itemToAdd: CartItem) : CartItem[] => {
    const foundItem = cartItems.find((item) => {
        return item.id === itemToAdd.id;
    });
    if(foundItem) {
        return cartItems.map((item) : CartItem => item.id === itemToAdd.id ?
                             { ...item, quantity: item.quantity + 1} :
                             item
                            );
    }
    return [...cartItems, itemToAdd];
}