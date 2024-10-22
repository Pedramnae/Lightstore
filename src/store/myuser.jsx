import { create } from "zustand";

const useUser = create((set)=>({
    users: [],
    localExist: false,
    getData : async () =>{
        const res = await fetch('https://66ca087c59f4350f064e38bd.mockapi.io/users')
        let data = await res.json()
        set((state) => ({users : data}))
    },
    changeflag: (flag)=>{
        set((state) => ({localExist : flag}))
    }
}))


export default useUser