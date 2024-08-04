/* eslint-disable @next/next/no-img-element */
'use client'

import Button from './ui/Button'
import { useProductCart } from '@/store/store'
import Add from './Icons/Add'
import ProductCount from './ProductCount'
import { SCREEN_SIZES, useScreenSize } from '@/method/hooks'

type DessertProps = {
	dessert: IProductCart
}

const ProductCard = ({ dessert }: DessertProps) => {
	const { addCart } = useProductCart()
	const screenSize = useScreenSize()

	const handleAddToCart = (id: string) => {
		addCart(id)
	}

	return (
		<div className="sx:w-full lg:w-[45%] xl:w-[30%] flex flex-col p-2 gap-8">
			<div className="relative flex justify-center items-center">
				{screenSize === SCREEN_SIZES.MOBILE && (
					<img
						src={`/${dessert.image.mobile}`}
						alt={dessert.name}
						className={`sx:w-auto rounded  ${dessert.checked ? 'border-red-100 border-[3px]' : 'border-transparent'} `}
					/>
				)}
				{screenSize === SCREEN_SIZES.TABLET && (
					<img
						src={`/${dessert.image.tablet}`}
						alt={dessert.name}
						className={`sx:w-auto rounded  ${dessert.checked ? 'border-red-100 border-[3px]' : 'border-transparent'} `}
					/>
				)}
				{screenSize === SCREEN_SIZES.PC && (
					<img
						src={`/${dessert.image.desktop}`}
						alt={dessert.name}
						className={`sx:w-auto rounded  ${dessert.checked ? 'border-red-100 border-[3px]' : 'border-transparent'} `}
					/>
				)}

				{dessert.checked ? (
					<ProductCount dessert={dessert} />
				) : (
					<div className="w-full absolute z-10 bottom-[-6%] left-0 flex justify-center items-center">
						<Button onClick={() => handleAddToCart(dessert.id)} className={`button bg-primary xl:px-6 sx:px-12 py-3 `}>
							<Add />
							<span className="font-bold">Add to Cart</span>
						</Button>
					</div>
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
