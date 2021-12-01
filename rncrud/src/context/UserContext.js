import React, { createContext, useReducer } from 'react'

import users from '../data/users'

const UserContext = createContext({ })

const actions = {
	create: (state, action, statePropName) => ({
		...state,
		[statePropName]: [...state[statePropName], { ...action.payload, id: Math.random() }]
	}),
	update: (state, action, statePropName) => ({
		...state,
		[statePropName]: state.users.map(i => i.id === action.payload.id ? action.payload : i)
	}),
	delete: (state, action, statePropName) => ({
		...state,
		[statePropName]: state.users.filter(i => i.id !== action.payload.id)
	}),

}

export const UserProvider = props => {

	const reducer = (state, action) => {
		const fn = actions[action.type]
		return fn ? fn(state, action, action.stateName) : state
	}

	const [state, dispatch] = useReducer(reducer, {
		users
	})

	return (
		<UserContext.Provider
			value={{
				state,
				dispatch
			}}
		>
			{ props.children }
		</UserContext.Provider>
	)
}

export default UserContext
