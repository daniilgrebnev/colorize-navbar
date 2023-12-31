'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { navbarItems } from './navArray'

const Navbar = () => {
	const [transition, setTransition] = useState(false)
	const [elemColor, setElemColor] = useState('')
	const [openMobileNav, setOpenMobileNav] = useState(false)
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
		setOpenMobileNav(false)

		startTransition()

		setTimeout(() => redirect(route), 400)
		setTimeout(endTransition, 1000)
	}

	return (
		<div>
			<div className='w-1/5 relative right-0  '>
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
									? 'text-2xl font-bold transition-all duration-500 relative block min-w-[300px]   '
									: 'text-2xl font-bold transition-all duration-500 relative hidden min-w-[300px]'
							}
						>
							<i className='font-normal text-sm mr-3'> by </i> Daniil Grebnev
						</p>
					</div>
				</div>
				<div
					className='py-2 px-2 rounded text-center cursor-pointer my-2 mx-2 bg-[#00000035] text-white'
					onClick={() => setOpenMobileNav(!openMobileNav)}
				>
					MENU
				</div>
				<div
					className={
						openMobileNav
							? 'py-10 px-10 left-[0px] duration-200 relative max-tablet:bg-[#00000057] transition-left'
							: 'py-10 px-10 -left-[1000px] relative duration-200 transition-left max-tablet:bg-[#00000057]'
					}
				>
					{navbarItems.map(item => (
						<div key={item.id} className='cursor-pointer'>
							<div className='flex items-center justify-center'>
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
											'px-8 py-4 text-center w-[250px] max-tablet:text-sm text-white relative rounded-[6px] right-0 mb-5  '
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
