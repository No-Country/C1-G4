const userReducer = (state = { user: {}, token: null }, action) => {
   switch (action.type) {
      case 'AUTH_USER':
         localStorage.setItem('token', action.payload.token)
         return { ...state, user: action.payload, token: action.payload.token }

      case 'AUTH_USER_LS':
         return { ...state, user: action.payload, token: action.payload.token }

      case 'SIGN_OUT':
         localStorage.removeItem('token')
         return { ...state, user: null, token: null }
      default:
         return state
   }
}

export default userReducer