export interface ShopItemData {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}
export interface ShopCategory {
    id: number;
    title: string;
    routeName: string;
    items: ShopItemData[];
}
export interface Section {
    id: number;
    title: string;
    linkUrl: string;
    imageUrl: string;
}