import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { listFriends } from '../fakedata/listFriends';
import { IFriends } from '../fakedata/listFriends';

interface IInitialState {
    info: IFriends[]
}
const initialState: IInitialState  = {
     info: []
}

export const infoUserSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        updateFriendInfo: (state, action: PayloadAction<IFriends>) => {
            state.info.push(action.payload);
        }  
    }
})
export const {updateFriendInfo} = infoUserSlice.actions;