import { createSlice } from '@reduxjs/toolkit'

export const contact = createSlice({
  name: 'contact',
  initialState: {
    mainList: [],
    list: [],
    page: 1
  },
  reducers: {
    setContacts: (state, { payload }) => {
      state.mainList = payload
      state.list = payload
    },
    search: (state, { payload }) => {
      const keyword = (payload as string).toLowerCase();
      state.list = state.mainList.filter((data: any) => {
        const name = data.name.toLowerCase();  
        const address = data.address.toLowerCase();  
        const phoneNumber = data.phoneNumber.toLowerCase();  
        const email = data.email.toLowerCase();  

        return name.search(keyword) > -1 ||  address.search(keyword) > -1 || phoneNumber.search(keyword) > -1 || email.search(keyword) > -1
      })
      
    },
    setPage: (state, { payload }) => {
      state.page = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setContacts, setPage, search } = contact.actions

export default contact.reducer