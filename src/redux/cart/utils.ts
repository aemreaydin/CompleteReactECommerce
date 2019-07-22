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

export const removeItemFromCart = (cartItems: CartItemInfo[], itemToRemove: CartItemInfo) : CartItemInfo[] => {
    return cartItems.filter(item => {
        return item.id !== itemToRemove.id;
    });
}

export const removeItemByOne = (cartItems: CartItemInfo[], itemToRemove: CartItemInfo) : CartItemInfo[] => {
    const foundItem = cartItems.find(item => {
        return item.id === itemToRemove.id;
    });
    console.log('item found');

    if(foundItem) {
        if(foundItem.quantity === 1) {
            return removeItemFromCart(cartItems, itemToRemove);
        } else {
            return cartItems.map((item): CartItemInfo => item.id === itemToRemove.id ?
                { ...item, quantity: item.quantity - 1}
                :
                item
            );
        }
    }
    return cartItems;
}