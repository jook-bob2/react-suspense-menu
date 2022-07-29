import React, { Suspense } from 'react'
import '../styles/globals.css'

const Layouts = React.lazy(() => import('../layouts'))

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Suspense fallback={<h1>로딩중...</h1>}>
				<Layouts Component={Component} pageProps={pageProps} />
			</Suspense>
		</div>
	)
}

export default MyApp
