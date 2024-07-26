'use client'

import Image from 'next/image'
import Button from './ui/Button'

// import carbon from '@/public/assets/images/icon-carbon-neutral.svg'
// import decrement from '@/public/assets/images/icon-decrement-quantity.svg'
// import increment from '@/public/assets/images/icon-increment-quantity.svg'
// import order from '@/public/assets/images/icon-order-confirmed.svg'
// import remove from '@/public/assets/images/icon-remove-item.svg'
// import empty from '@/public/assets/images/illustration-empty-cart.svg'
// import { Icons } from './ui/Icons'
import { useEffect, useState } from 'react'
// import Decrement from './Icons/Decrement'
// import Increment from './Icons/Increment'
import { useProductCart } from '@/store/store'
import Add from './Icons/Add'
import ProductCount from './ProductCount'

type DessertProps = {
	dessert: IProductCart
}

const ProductCard = ({ dessert }: DessertProps) => {
	// const [cart, setCart] = useState(false)
	const { addCart } = useProductCart()

	const handleAddToCart = (id: string) => {
		addCart(id)
		// setCart(true)
		// console.log(obj.name)
	}

	// console.log(dessert)

	return (
		<div className="w-full flex flex-col p-2 gap-8">
			<div className="relative">
				<Image
					priority
					src={`/${dessert.image.tablet}`}
					alt={dessert.name}
					width={270}
					height={270}
					className={`rounded border-[3px] ${dessert.checked ? 'border-red-100' : 'border-transparent'} `}
				/>
				{dessert.checked ? (
					<ProductCount dessert={dessert} />
				) : (
					<Button onClick={() => handleAddToCart(dessert.id)} className={`button bg-primary px-6 py-3 `}>
						<Add />
						<span className="font-bold">Add to Cart</span>
					</Button>
				)}
			</div>
			<div>
				<span className="text-md text-rose-500">{dessert.category}</span>
				<p className="font-bold ">{dessert.name}</p>
				<span className="text-red-100 font-semibold">{`$${dessert.price.toFixed(2)}`}</span>
			</div>
		</div>
	)
}

export default ProductCard
