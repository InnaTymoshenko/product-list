import { v4 as uuidv4 } from 'uuid'

export const newProduct = (product: IDessert) => {
	return {
		...product,
		id: uuidv4(),
		count: 0,
		total: 0,
		checked: false
	}
}
