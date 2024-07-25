interface Image {
	thumbnail: string
	mobile: string
	tablet: string
	desktop: string
}

interface IDessert {
	name: string
	category: string
	price: number
	image: Image
}

interface IProductCart {
	product: IDessert
	id: string
	count: number
	total: number
}
