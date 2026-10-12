import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export type dataSlice = {
    id: number,
    name: string,
    age: number,
    image: string,
    phone: number,
    status: boolean
}

export type initialState={
    data: dataSlice[]
}

export const initialState:initialState = {
    data:[
        {id:1, image: 'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png', name: 'Jurabek', age: 20, status: false, phone: 12092109},
        {id:2,  image: 'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png',name: 'Murod', age: 21, status: false, phone: 12092109},
        {id:3, image: 'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png', name: 'Ali', age: 17, status: false, phone: 12092109},
        {id:4, image: 'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png', name: 'Jurabek', age: 20, status: false, phone: 12092109},
        {id:5, image: 'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png', name: 'Murod', age: 21, status: false, phone: 12092109},
        {id:6, image: 'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png', name: 'Ali', age: 17, status: false, phone: 12092109},
    ]
}
export const counterSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        updateUser: (state, action: PayloadAction<dataSlice>) => {
            const index = state.data.findIndex((el) => el.id === action.payload.id)
            if (index !== -1) state.data[index] = action.payload
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state.data = state.data.filter((el) => el.id !== action.payload)
        },
    }
})

export const { updateUser, deleteUser } = counterSlice.actions
export default  counterSlice.reducer
