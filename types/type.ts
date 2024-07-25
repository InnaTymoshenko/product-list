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
