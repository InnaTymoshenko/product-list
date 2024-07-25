import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import dataProduct from '@/data.json'

interface IProductCartStore {
	productCart: IProductCart[]
	addCart: (value: string) => void
}

export const useProductCart = create<IProductCartStore>()((set, get) => ({
	productCart: [],
	addCart: value => {
		const findProduct = dataProduct.find(dessert => {
			return dessert.name === value
		})
		if (findProduct) {
			const newProductCart: IProductCart = {
				product: findProduct,
				id: uuidv4(),
				count: 1,
				total: findProduct.price
			}

			set({ productCart: [newProductCart, ...get().productCart] })
		}
	}
}))
