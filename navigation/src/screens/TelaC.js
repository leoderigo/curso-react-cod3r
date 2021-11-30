import React from 'react'

import TextCenter from '../components/TextCenter'

export default props => (
	<TextCenter bgColor='#9932cd'>
		Tela C - { (props || { }).route?.params?.number || 0 }
	</TextCenter>
)
