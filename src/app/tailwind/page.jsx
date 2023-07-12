import { navbarItems } from '@/components/navArray'

const Tw = () => {
	const page = navbarItems.find(item => item.to === 'tailwind')
	return (
		<div
			style={{ background: page.color }}
			className='text-6xl font-bold flex items-center text-center justify-center h-screen '
		>
			{page.title} page
		</div>
	)
}

export default Tw
