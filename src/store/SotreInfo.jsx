import { create } from "zustand";

const useInfo = create((set)=>({
    info: [{
        name:'name',
        price:'price',
        image: '',
        description: 'description'
    }],
    getInfo: (name,price,image,description)=>{
        let myitem = [{
            name:name,
            price:price,
            image:image,
            description:description
        }]
        set((state)=>({info : myitem}))
        localStorage.setItem('info' , JSON.stringify(myitem))
    },
    localinfo: (storageinfo)=>{
        set((state)=>({info : storageinfo}))
    }
}))

export default useInfo