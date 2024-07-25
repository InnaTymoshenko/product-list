'use client'

import EmptyCart from './Icons/EmptyCart'
import { useProductCart } from '@/store/store'
import Button from './ui/Button'
import Carbon from './Icons/Carbon'
import Remove from './Icons/remove'

type Props = {}

const Cart = (props: Props) => {
	const { productCart } = useProductCart()
	console.log(productCart)

	return (
		<div className="w-full flex flex-col gap-8 py-6 px-4 bg-primary">
			<h2 className="text-2xl text-red-100 font-bold">
				Your Cart <span>{`(0)`}</span>
			</h2>
			<div>
				<div className="w-full text-rose-500 text-lg font-semibold p-4 flex flex-col justify-between items-center gap-4">
					{productCart.length !== 0 ? (
						<div className="w-full flex flex-col gap-4">
							{productCart.map(product => (
								<div
									key={product.id}
									className="w-full min-h-16 border-b-2 border-b-rose-100 flex justify-between items-center py-2"
								>
									<div className="w-full flex flex-col items-start justify-between gap-2">
										<strong className="text-rose-900">{product.product.name}</strong>
										<div className="flex gap-4 justify-start items-center text-rose-500">
											<span className="text-red-100">{`${product.count}x`}</span>
											<span>{`@ $${product.product.price.toFixed(2)}`}</span>
											<span>{`$${product.total.toFixed(2)}`}</span>
										</div>
									</div>
									<div className="icon border-rose-300 hover:bg-red-100 hover:text-primary cursor-pointer">
										<Remove />
									</div>
								</div>
							))}
							<div className="w-full h-16 flex justify-between items-center">
								<span className="text-rose-500 ">Order Total</span>
								<strong className="text-rose-900 text-2xl">{`$46.50`}</strong>
							</div>
							<div className="w-full flex gap-2 justify-center items-center bg-rose-50 rounded-md py-4 px-8">
								<Carbon />
								This is a <strong>carbon-neutral</strong> delivery
							</div>
							<Button className="w-full py-4 px-8 bg-red-100 rounded-full text-primary text-xl font-light">
								Confirm Order
							</Button>
						</div>
					) : (
						<>
							<EmptyCart />
							<span>Your added items will appear here</span>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Cart
