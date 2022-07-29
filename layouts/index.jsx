import { fetchProfileData } from '@/core/api/fetchApi'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import Header from './Header'
import Nav from './Nav'

const resource = fetchProfileData()

export default function Layouts({ Component, pageProps }) {
	const { pathname } = useRouter()
	const menu = resource.menu.read().data
	const [upperIdx, setUpperIdx] = useState(getUpperIdx() ? getUpperIdx() : 0)

	// asPath 는 parameter 까지 출력된다.

	function getUpperIdx() {
		return menu.filter(m => {
			return pathname.includes(m.url) && m.lower.filter(l => l.url === pathname)[0]?.url === pathname
		})[0]?.id
	}

	const subMenu = useMemo(createSubMenu, [menu, upperIdx])
	function createSubMenu() {
		return menu.filter(m => m.id === upperIdx)[0]?.lower
	}

	return (
		<div style={{ flexDirection: 'row' }}>
			<Header menu={menu} setUpperIdx={setUpperIdx} />
			<Nav subMenu={subMenu} />
			<main style={{ textAlign: 'center' }}>
				<Component {...pageProps} />
			</main>
		</div>
	)
}
