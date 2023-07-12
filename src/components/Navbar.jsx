'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { navbarItems } from './navArray'

const Navbar = () => {
	const [transition, setTransition] = useState(false)
	const [elemColor, setElemColor] = useState('')
	const router = useRouter()
	const pathname = usePathname()

	const startTransition = () => {
		setTransition(true)
	}
	const endTransition = () => {
		setTransition(false)
	}
	const redirect = route => {
		router.push(route)
	}

	const clickHandler = id => {
		const color = navbarItems.find(item => item.id === id).color
		const route = navbarItems.find(item => item.id === id).to
		setElemColor(color)

		startTransition()

		setTimeout(() => redirect(route), 500)
		setTimeout(endTransition, 1000)
	}

	return (
		<div>
			<div className='w-1/5 relative right-0 max-tablet:w-full'>
				<div
					style={{ background: elemColor }}
					className={
						transition
							? `w-screen h-screen z-40 right-[-400%]  transition-all duration-500`
							: `w-0 h-screen z-40 right-[200%]  absolute transition-all duration-500`
					}
				>
					<div className='w-full h-full shadow-2xl flex justify-center items-center'>
						<p
							className={
								transition
									? 'text-2xl font-bold block  left-auto min-w-[300px]   '
									: 'text-2xl font-bold hidden -left-60 min-w-[300px]'
							}
						>
							<i className='font-normal text-sm mr-6'>made by </i> Danii Grebnev
						</p>
					</div>
				</div>
				<div className='py-10 px-10 max-tablet:flex flex-wrap justify-center items-center'>
					{navbarItems.map(item => (
						<div key={item.id} className='cursor-pointer '>
							<div className=''>
								<div onClick={() => clickHandler(item.id)}>
									<div
										style={
											pathname === '/' + item.to
												? {
														background: item.color,
														boxShadow: '1px 1px 5px',
												  }
												: { background: item.color }
										}
										className={
											'px-8 py-4 text-center text-white relative rounded-[6px] right-0 mb-5 w-full '
										}
									>
										{item.title}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Navbar
