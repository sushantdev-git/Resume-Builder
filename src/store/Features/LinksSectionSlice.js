import { createSlice } from "@reduxjs/toolkit";

const LinkObjectTemplate ={
    linkName:"New Link",
    link:null,
}

function swap(ind1, ind2, arr){
    const temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
}

export const LinksSectionSlice = createSlice({
    name:"LinksSection",
    initialState:{
        links:[],
    },
    reducers:{
        addNewLink: (state) => {
            console.log("Adding new link")
            state.links.push(LinkObjectTemplate);
        },

        updateName:(state, action) => {
            const data=action.payload;
            state.links[data.index].linkName=data.value;
        },

        updatelink:(state, action) => {
            const data=action.payload;
            state.skills[data.index].link=data.link;
        },

        deleteLink:(state, action)=>{
            const data=action.payload;
            const links = state.links.filter((_, ind)=> ind!=data.index);
            state.links=links;
        },

        moveUp:(state, action) => {
            const data=action.payload;
            const links=state.links;
            swap(data.index, data.index-1, links);
            state.links=links;
        },

        moveDown:(state, action)=>{
            const data=action.payload;
            const links=state.links;
            swap(data.index, data.index+1, links);
            state.links=links;
        }

    }
})

export const LinksActions = LinksSectionSlice.actions;
export default LinksSectionSlice.reducer;
