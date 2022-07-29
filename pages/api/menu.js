// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	res.status(200).json([
		{
			id: 1,
			title: '메인',
			url: '/',
			lower: [],
		},
		{
			id: 2,
			title: '상위 메뉴1',
			url: '/menu/menu-1',
			lower: [
				{
					id: 1,
					title: '하위 메뉴1',
					url: '/menu/menu-1/lower-menu-1',
				},
				{
					id: 2,
					title: '하위 메뉴2',
					url: '/menu/menu-1/lower-menu-2',
				},
			],
		},
		{
			id: 3,
			title: '상위 메뉴2',
			url: '/menu/menu-2',
			lower: [
				{
					id: 3,
					title: '하위 메뉴3',
					url: '/menu/menu-2/lower-menu-1',
				},
				{
					id: 4,
					title: '하위 메뉴4',
					url: '/menu/menu-2/lower-menu-2',
				},
			],
		},
	])
}
