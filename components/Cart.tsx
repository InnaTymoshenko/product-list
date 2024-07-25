import EmptyCart from './Icons/EmptyCart'

type Props = {}

const Cart = (props: Props) => {
	return (
		<div className="w-full flex flex-col gap-8 p-8 bg-primary">
			<h2 className="text-xl text-red-100 font-bold">
				Your Cart <span>{`(0)`}</span>
			</h2>
			<div>
				<div className="w-full text-rose-500 text-xl font-semibold p-4 flex flex-col justify-between items-center">
					<EmptyCart />
					Your added items will appear here
				</div>
			</div>
		</div>
	)
}

export default Cart
