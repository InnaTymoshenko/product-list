import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import dataProduct from '@/data.json'
import { newProduct } from '@/method/fn'

interface IProductCartStore {
	product: IProductCart[]
	productCart: IProductCart[]
	addCart: (id: string) => void
	plusCount: (id: string) => void
	minusCount: (id: string) => void
	deleteProduct: (id: string) => void
	resetCount: (id: string) => void
	clearCart: () => void
}

export const useProductCart = create<IProductCartStore>()(
	devtools(
		persist<IProductCartStore>(
			(set, get) => ({
				product: dataProduct.map(product => {
					return newProduct(product)
				}),
				productCart: [],
				addCart: id => {
					const findProduct = get().product.find(product => product.id === id)
					if (findProduct) {
						const newProductCart = {
							...findProduct,
							count: 1,
							total: findProduct.price,
							checked: true
						}

						set({
							product: get().product.map(product =>
								product.id === id ? { ...product, count: 1, checked: true } : product
							),
							productCart: [newProductCart, ...get().productCart]
						})
					}
				},
				plusCount: id => {
					set({
						product: get().product.map(product =>
							id === product.id
								? { ...product, count: product.count + 1, total: product.price * (product.count + 1) }
								: product
						),
						productCart: get().productCart.map(product =>
							id === product.id
								? { ...product, count: product.count + 1, total: product.price * (product.count + 1) }
								: product
						)
					})
				},
				minusCount: id => {
					set({
						product: get().product.map(product =>
							id === product.id
								? { ...product, count: product.count - 1, total: product.price * (product.count - 1) }
								: product
						),
						productCart: get().productCart.map(product =>
							id === product.id
								? { ...product, count: product.count - 1, total: product.price * (product.count - 1) }
								: product
						)
					})
				},
				resetCount: id => {
					set({
						product: get().product.map(product =>
							product.id === id ? { ...product, count: 0, total: 0, checked: false } : product
						)
					})
				},
				deleteProduct: id => {
					set({
						product: get().product.map(product =>
							product.id === id ? { ...product, count: 0, total: 0, checked: false } : product
						),
						productCart: get().productCart.filter(product => product.id !== id)
					})
				},
				clearCart: () => {
					set({
						product: get().product.map(product => ({
							...product,
							count: 0,
							checked: false,
							total: 0
						})),
						productCart: []
					})
				}
			}),
			{ name: 'dessert-storage' }
		)
	)
)
