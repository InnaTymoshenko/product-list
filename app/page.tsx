'use client'

import { v4 as uuidv4 } from 'uuid'
import ProductCard from '@/components/ProductCard'
import Cart from '@/components/Cart'
import { useProductCart } from '@/store/store'
import OrderComponent from '@/components/OrderComponent'
import { useState } from 'react'

export default function Home() {
	const { product, productCart } = useProductCart()
	const [modal, setModal] = useState(false)

	return (
		<div className="w-full min-h-screen relative">
			<main className="container lg:flex-row sx:flex-col">
				<div className="w-[70%] flex flex-col gap-6">
					<h1 className="text-4xl font-bold">Desserts</h1>
					<div className="w-full flex justify-between gap-4 flex-wrap">
						{product.map(dessert => (
							<div key={uuidv4()}>
								<ProductCard dessert={dessert} />
							</div>
						))}
					</div>
				</div>
				<div className="w-[30%] min-h-screen p-2">
					<Cart modal={modal} setModal={setModal} />
				</div>
			</main>
			{modal && <OrderComponent productCart={productCart} modal={modal} setModal={setModal} />}
		</div>
	)
}
