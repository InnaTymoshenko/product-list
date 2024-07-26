/* eslint-disable @next/next/no-img-element */
'use client'

import Image from 'next/image'
import Button from './ui/Button'
import { useProductCart } from '@/store/store'
import Add from './Icons/Add'
import ProductCount from './ProductCount'

type DessertProps = {
	dessert: IProductCart
}

const ProductCard = ({ dessert }: DessertProps) => {
	const { addCart } = useProductCart()

	const handleAddToCart = (id: string) => {
		addCart(id)
	}

	return (
		<div className="sx:w-full lg:w-[45%] xl:w-[30%] flex flex-col p-2 gap-8">
			<div className="relative flex justify-center items-center">
				<img
					src={`/${dessert.image.tablet}`}
					alt={dessert.name}
					className={`sx:w-auto rounded  ${dessert.checked ? 'border-red-100 border-[3px]' : 'border-transparent'} `}
				/>
				{dessert.checked ? (
					<ProductCount dessert={dessert} />
				) : (
					<Button onClick={() => handleAddToCart(dessert.id)} className={`button bg-primary xl:px-6 sx:px-12 py-3 `}>
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
