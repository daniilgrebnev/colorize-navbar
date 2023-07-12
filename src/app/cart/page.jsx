import { navbarItems } from '@/components/navArray'

const Cart = () => {
	const page = navbarItems.find(item => item.to === 'cart')
	return (
		<div
			style={{ background: page.color }}
			className='text-6xl font-bold flex items-center justify-center h-screen text-white'
		>
			{page.title} page
		</div>
	)
}

export default Cart
