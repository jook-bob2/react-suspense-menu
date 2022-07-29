import { useRouter } from 'next/router'

export default function Header({ menu, setUpperIdx }) {
	const { push } = useRouter()
	return (
		<header style={{ display: 'flex', flex: 1, justifyContent: 'center', backgroundColor: 'red' }}>
			<button
				onClick={() => {
					setUpperIdx(0)
					push('/')
				}}>
				<img src={'/static/vercel.svg'} alt="none" />
			</button>
			{menu.length > 0 &&
				menu.map((m, idx) => {
					if (m.url !== '/') {
						return (
							<nav key={m.id}>
								<div
									style={{ textAlign: 'center', background: 'yellow', padding: 10 }}
									onClick={() => {
										console.log(menu[idx])
										setUpperIdx(m.id)
										push(menu[idx].lower[0].url)
									}}>
									<h1 style={{ color: 'grey', textAlign: 'center' }}>{m.title}</h1>
								</div>
							</nav>
						)
					}
				})}
		</header>
	)
}
