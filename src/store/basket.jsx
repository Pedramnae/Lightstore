import { create } from "zustand";

const useBasket = create((set) => ({

    basket: [],
    addTobasket: (name, price, image, number) => {
        let myclone = []
        let product = {
            name: name,
            price: price,
            image: image,
            number: number,
            totalprice: price * number
        }
        set((state) => myclone = [...state.basket])
        if (myclone.length > 0) {
            let error = 0
            myclone.map((item) => {
                if (item.image == image) {
                    error++
                }
            })
            if (error == 0) {
                myclone.push(product)
            }
        } else {
            myclone.push(product)
        }
        set((state) => ({ basket: myclone }))
        localStorage.setItem('basket' , JSON.stringify(myclone))
    },
    removefrombasket: (name, image) => {
        let myclone = []
        set((state) => myclone = [...state.basket])
        myclone.map((item) => {
            if (item.name == name && item.image == image) {
                myclone.splice(myclone.indexOf(item), 1)
            }
        })
        set((state) => ({ basket: myclone }))
        localStorage.setItem('basket' , JSON.stringify(myclone))
    },
    incnumber: (image) => {
        let myclone = []
        set((state) => myclone = [...state.basket])
        myclone.map((item) => {
            if (item.image == image) {
                item.number = item.number + 1
            }
        })
        set((state) => ({ basket: myclone }))
        localStorage.setItem('basket' , JSON.stringify(myclone))
    },
    decnumber: (image) => {
        let myclone = []
        set((state) => myclone = [...state.basket])
        myclone.map((item) => {
            if (item.image == image) {
                if ((item.number - 1) > 0) {
                    item.number = item.number - 1
                }
            }
        })
        set((state) => ({ basket: myclone }))
        localStorage.setItem('basket' , JSON.stringify(myclone))
    },
    getlocalbasket: (storage) => {
        set((state) => ({ basket: storage }))
    },
    calcitemprice: (image) => {
        let myclone = []
        set((state) => myclone = [...state.basket])
        myclone.map((item) => {
            if (item.image == image) {
                item.totalprice = item.price * item.number
            }
        })
        set((state) => ({ basket: myclone }))
        localStorage.setItem('basket' , JSON.stringify(myclone))
    }
}))


export default useBasket