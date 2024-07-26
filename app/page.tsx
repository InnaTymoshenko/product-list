'use client'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ProductCard from '@/components/ProductCard'
import Cart from '@/components/Cart'
import { useProductCart } from '@/store/store'
import OrderComponent from '@/components/OrderComponent'

export default function Home() {
	const { product, productCart } = useProductCart()
	const [modal, setModal] = useState(false)

	return (
		<div className="w-full min-h-screen relative">
			<main className="container xl:flex-row sx:flex-col">
				<div className="xl:w-[65%] sx:w-full flex flex-col gap-6">
					<h1 className="lg:text-4xl sx:text-5xl font-bold">Desserts</h1>
					<div className="w-full flex justify-between gap-4 flex-wrap">
						{product.map(dessert => (
							<ProductCard key={uuidv4()} dessert={dessert} />
						))}
					</div>
				</div>
				<div className="xl:w-[35%] sxLw-full min-h-screen p-2">
					<Cart modal={modal} setModal={setModal} />
				</div>
			</main>
			{modal && <OrderComponent productCart={productCart} modal={modal} setModal={setModal} />}
		</div>
	)
}
