import { ProductT , CartT} from '@/interfaces'
import { RootState } from '@/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { Dispatch, PayloadAction } from '@reduxjs/toolkit'

type AsyncThunkConfig = {
    /** return type for `thunkApi.getState` */
    state?: unknown
    /** type for `thunkApi.dispatch` */
    dispatch?: Dispatch
    /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
    extra?: unknown
    /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
    rejectValue?: unknown
    /** return type of the `serializeError` option callback */
    serializedErrorType?: unknown
    /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
    pendingMeta?: unknown
    /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
    fulfilledMeta?: unknown
    /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
    rejectedMeta?: unknown
}
export interface ProductState {
    products: ProductT[];
    cart: CartT[];
    filteredProduct: ProductT[];
    product: ProductT | null;
    wishlist: ProductT[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: ProductState = {
    product: null,
    products: [],
    cart: [],
    filteredProduct: [],
    wishlist: [],
    loading: "idle"
}

// export const fetchProductsAsynkThunk = createAsyncThunk<ProductT[], void, AsyncThunkConfig>("product/AllProduct", async () => {
//     const response =  await fetch("/api/products");
//     const {data }= await response.json()
//     return data as ProductT[]
// })
// export const fetchProductsInCartAsynkThunk = createAsyncThunk<ProductT[], void, AsyncThunkConfig>("product/Cart", async () => {
//     const response = await fetch("/api/products/userid"); //todo add user id here
//     const { data } = await response.json()
//     return data as ProductT[]
// })
// export const fetchProductsInWishListAsynkThunk = createAsyncThunk<ProductT[], void, AsyncThunkConfig>("product/Wishlist", async () => {
//     const response = await fetch("/api/products"); //todo add use rid here also
//     const { data } = await response.json()
//     return data as ProductT[]
// })


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        AddtoCart: (state, action) => {
            state.cart.push(action.payload);
        },
        RemoveFormCart: (state, action) => {
            state.cart = [...state.cart.filter(cart => cart._id !== action.payload)]
        },
        LoadProducts: (state,action) =>{
            state.products = action.payload;
        },
        UpdateCart:(state,action)=>{

        },
        filterProductByCategory:(state,action)=>{

        },
        AddtoWishList:(state,action)=>{
            state.wishlist.push(action.payload);
        },
    }
})

// Action creators are generated for each case reducer function
export const { AddtoCart, RemoveFormCart,UpdateCart,filterProductByCategory,AddtoWishList, LoadProducts } = productSlice.actions

export default productSlice.reducer

export const productsSelecter  = (state:RootState)=>state.product.products;
export const cartSelector = (state:RootState)=>state.product.cart;
export const WishListSelector = (state:RootState)=>state.product.wishlist;
