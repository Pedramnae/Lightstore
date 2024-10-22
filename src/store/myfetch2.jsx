import { create } from "zustand";

const useFetch2 = create((set)=>({
    mydata2: [],
    getData : async () =>{
        const res = await fetch('https://66c48d96b026f3cc6cefd3a3.mockapi.io/lights/AccessoriesbathroomLightSmartHome')
        let data = await res.json()
        set((state) => ({mydata2 : data}))
    }
}))


export default useFetch2