import { v4 as uuidv4 } from 'uuid'
import ProductCard from '@/components/ProductCard'
import dataProduct from '@/data.json'
import Cart from '@/components/Cart'

export default function Home() {
	const data: IDessert[] = dataProduct

	return (
		<main className="container min-h-screen lg:flex-row sx:flex-col">
			<div className="w-[70%] flex flex-col gap-8">
				<h1 className="text-4xl font-bold">Desserts</h1>
				<div className="w-full flex justify-between gap-4 flex-wrap">
					{data.map(dessert => (
						<div key={uuidv4()}>
							<ProductCard dessert={dessert} />
						</div>
					))}
				</div>
			</div>
			<div className="w-[30%] min-h-screen p-2">
				<Cart />
			</div>
		</main>
	)
}
