import axios from 'axios'

const userActions = {
   authUser: (user, flag) => {
      return (dispatch, getState) => {
         axios.post(`http://localhost:4000/api/user/${flag}`, { ...user })
            .then(res => { if (res.data) dispatch({ type: 'AUTH_USER', payload: res.data.user }) })
            .catch(error => console.log(error))
      }
   },
   loginUserLS: (token) => {
      return (dispatch, getState) => {
         axios.get('http://localhost:4000/api/verifytoken', {
            headers: { Authorization: 'Bearer ' + token }
         })
            .then(res => dispatch({ type: 'AUTH_USER_LS', payload: res.data.user }))
            .catch(error => dispatch({ type: 'SIGN_OUT', payload: error }))
      }
   },
   signOut: () => (dispatch, getState) => dispatch({ type: 'SIGN_OUT', payload: null })
}

export default userActions
