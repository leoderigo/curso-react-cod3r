import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import First from './components/First'
import Oficial, { Comp1, Comp2 } from './components/Multi'
import Minmax from './components/Minmax'
import Random from './components/Random'
import Title from './components/Title'
import Buttons from './components/Buttons'
import Counter from './components/Counter'
import Father from './components/direct/Father'
import Dad from './components/indirect/Dad'
import Family from './components/children/Family'
import Member from './components/children/Member'
import LoggedUser from './components/LoggedUser'
import ProductList from './components/products/productList'
import ProductListV2 from './components/productsV2/productListV2'
import Flexbox1 from './components/layout/Flexbox1'
import Flexbox2 from './components/layout/Flexbox2'
import Flexbox3 from './components/layout/Flexbox3'
import Flexbox4 from './components/layout/Flexbox4'
import Mega from './components/mega/Mega'

export default () => (
	<SafeAreaView style={styles.App}>
		<Mega size={7} />
		{/* <Flexbox4 /> */}
		{/* <Flexbox3 /> */}
		{/* <Flexbox2 /> */}
		{/* <Flexbox1 /> */}
		{/* <ProductListV2 /> */}
		{/* <ProductList /> */}
		{/* <LoggedUser user={{ name: 'Leo', email: 'leoderigo.sjb@gmail.com' }} />
		<LoggedUser user={{ email: 'leoderigo.sjb@gmail.com' }} />
		<LoggedUser user={{ name: 'Leo' }} />
		<LoggedUser user={null} />
		<LoggedUser /> */}
		{/* <Family>
			<Member name='Leo' lastName='Derigo' />
		</Family>
		<Family>
			<Member name='Solange' lastName='De Paula' />
			<Member name='Gi' lastName='De Paula' />
			<Member name='Paula' lastName='De Paula' />
		</Family> */}
		{/* <Dad /> */}
		{/* <Father></Father> */}
		{/* <Counter start={100} step={20} />
		<Counter /> */}
		{/* <Buttons/> */}
		{/* <Title /> */}
		{/* <Random max={20} min={5} />
		<Random max={20} min={5} />
		<Random max={20} min={5} />
		<Random max={20} min={5} />
		<Random max={20} min={5} /> */}
		{/* <Minmax max={28} min={10} />
		<Minmax max={20} min={19} /> */}
		{/* <Oficial/>
		<Comp1/>
		<Comp2/>
		<First/> */}
	</SafeAreaView>
)

const styles = StyleSheet.create({
	App: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20
	}
})
