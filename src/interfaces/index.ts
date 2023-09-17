export type ProductT= {
    _id:                 number;
    category:           string;
    description:        string;
    thumbnail:          string;
    title:              string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    images:             string[];
}

export interface CartT extends ProductT {
    quantity?:number,
    size?:string;
}