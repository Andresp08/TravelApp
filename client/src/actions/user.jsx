
const url = import.meta.env.VITE_APP_SERVER_URL + '/user'

export const register = async(user, dispatch) => {
    dispatch({type: 'START_LOADING'})

    //

    dispatch({type: 'END_LOADING'})
}