import React from 'react'
import Image from 'next/image'
import Button from './ui/Button'
import Order from './Icons/Order'
import { useProductCart } from '@/store/store'

type OrderProps = {
	productCart: IProductCart[]
	modal: boolean
	setModal: (value: boolean) => void
}

const OrderComponent = ({ productCart, modal, setModal }: OrderProps) => {
	const { clearCart } = useProductCart()

	const totalPrice = productCart.reduce((acc, product) => {
		return acc + product.total
	}, 0)

	const handleClearCart = async () => {
		console.log(JSON.stringify(productCart))
		clearCart()
		setModal(!modal)
	}

	return (
		<div
			className="w-full h-full absolute z-10 left-0 bottom-0 bg-rose-900/50 flex justify-center 2xl:items-center sx:items-start 2xl:pt-0 sx:pt-40"
			onClick={() => handleClearCart()}
		>
			<div className="lg:w-[40%] sx:w-full bg-primary p-8 rounded-lg flex flex-col gap-8">
				<Order />
				<div className="w-full text-left">
					<h2 className="text-4xl font-bold mb-2">Order Confirmed</h2>
					<p className="text-rose-500 font-semibold">We hope you enjoy your food!</p>
				</div>
				<div className="w-full bg-rose-50 px-4 font-semibold">
					{productCart.map(product => (
						<div
							key={product.id}
							className="w-full min-h-16 border-b-2 border-b-rose-100 flex gap-3 justify-between items-center py-4"
						>
							<div className="w-full flex gap-4 justify-start">
								<div className="w-[20%] ">
									<Image
										priority
										src={`/${product.image.tablet}`}
										alt={product.name}
										width={50}
										height={50}
										className="w-auto rounded-lg"
									/>
								</div>
								<div className="w-[80%] flex flex-col items-start justify-between gap-2">
									<strong className="text-rose-900">{product.name}</strong>
									<div className="flex gap-4 justify-start items-center text-rose-500">
										<span className="text-red-100">{`${product.count}x`}</span>
										<span>{`@ $${product.price.toFixed(2)}`}</span>
									</div>
								</div>
							</div>

							<span>{`$${product.total.toFixed(2)}`}</span>
						</div>
					))}
				</div>
				<div className="w-full h-16 flex justify-between items-center font-semibold">
					<span className="text-rose-500 ">Order Total</span>
					<strong className="text-rose-900 text-2xl">{`$${totalPrice.toFixed(2)}`}</strong>
				</div>
				<Button
					className="w-full py-4 px-8 bg-red-100 transition-all hover:bg-rose-500 rounded-full text-primary text-xl font-light"
					onClick={() => handleClearCart()}
				>
					Start New Order
				</Button>
			</div>
		</div>
	)
}

export default OrderComponent
