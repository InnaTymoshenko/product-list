'use client'

import Image from 'next/image'
import Button from './ui/Button'

import carbon from '@/public/assets/images/icon-carbon-neutral.svg'
import decrement from '@/public/assets/images/icon-decrement-quantity.svg'
import increment from '@/public/assets/images/icon-increment-quantity.svg'
import order from '@/public/assets/images/icon-order-confirmed.svg'
import remove from '@/public/assets/images/icon-remove-item.svg'
import empty from '@/public/assets/images/illustration-empty-cart.svg'
import { Icons } from './ui/Icons'
import { useState } from 'react'
import Decrement from './Icons/Decrement'
import Increment from './Icons/Increment'
import { useProductCart } from '@/store/store'
import Add from './Icons/Add'

type DessertProps = {
	dessert: IDessert
}

const ProductCard = ({ dessert }: DessertProps) => {
	const [cart, setCart] = useState(false)
	const [count, setCount] = useState(1)
	const { addCart, productCart } = useProductCart()

	const handleAddToCart = (value: string) => {
		addCart(value)
		setCart(true)
		// console.log(dessert.name)
	}

	const handleMinusCount = () => {
		if (count <= 1) {
			return setCart(false)
		} else {
			setCount(count - 1)
		}
	}

	return (
		<div className="w-full flex flex-col p-2 gap-8">
			<div className="relative">
				<Image
					priority
					src={`/${dessert.image.tablet}`}
					alt={dessert.name}
					width={250}
					height={250}
					className={`rounded border-[3px] ${cart ? 'border-red-100' : 'border-transparent'} `}
				/>
				{cart && productCart.length !== 0 ? (
					<div className="button bg-red-100 px-4 py-3">
						<div className="flex justify-between items-center gap-8 ">
							<div
								onClick={() => handleMinusCount()}
								className="icon border-primary text-primary hover:bg-primary hover:text-red-100 cursor-pointer"
							>
								<Decrement />
							</div>
							<span className="text-primary">{count}</span>
							<div
								onClick={() => setCount(count + 1)}
								className="icon border-primary text-primary hover:bg-primary hover:text-red-100 cursor-pointer"
							>
								<Increment />
							</div>
						</div>
					</div>
				) : (
					<Button onClick={() => handleAddToCart(dessert.name)} className={`button bg-primary px-6 py-2 `}>
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
