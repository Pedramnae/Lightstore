import { create } from "zustand";

const useFetch = create((set)=>({
    mydata: [],
    getData : async () =>{
        const res = await fetch('https://66c48d96b026f3cc6cefd3a3.mockapi.io/lights/LampOutdoorLightSources')
        let data = await res.json()
        set((state) => ({mydata : data}))
    }
}))


export default useFetch