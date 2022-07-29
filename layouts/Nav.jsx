import Link from 'next/link'

export default function Nav({ subMenu }) {
	return (
		<div style={{ backgroundColor: 'pink', float: 'left', height: '90vh' }}>
			{subMenu?.length > 0 &&
				subMenu.map(snb => (
					<ul key={snb.id}>
						<Link href={snb.url}>
							<li>{snb.title}</li>
						</Link>
					</ul>
				))}
		</div>
	)
}
