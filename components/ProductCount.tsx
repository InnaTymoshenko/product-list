'use client'

import Decrement from './Icons/Decrement'
import Increment from './Icons/Increment'
import { useProductCart } from '@/store/store'

type ProductCountProps = {
	dessert: IProductCart
}

const ProductCount = ({ dessert }: ProductCountProps) => {
	const { plusCount, minusCount, deleteProduct, resetCount } = useProductCart()

	const handleMinusCount = (obj: IProductCart) => {
		if (obj.count <= 1) {
			deleteProduct(obj.id)
			resetCount(obj.id)
		} else {
			minusCount(obj.id)
		}
	}

	return (
		<>
			{dessert && (
				<div className="button bg-red-100 lg:px-4 sx:px-8 py-3">
					<div className="flex justify-between items-center gap-8 ">
						<div
							onClick={() => handleMinusCount(dessert)}
							className="icon border-primary text-primary hover:bg-primary hover:text-red-100 cursor-pointer"
						>
							<Decrement />
						</div>
						<span className="text-primary">{dessert.count}</span>
						<div
							onClick={() => plusCount(dessert.id)}
							className="icon border-primary text-primary hover:bg-primary hover:text-red-100 cursor-pointer"
						>
							<Increment />
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default ProductCount
