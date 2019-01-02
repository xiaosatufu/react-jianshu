import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})
export const searchBulr = () => ({
    type: constants.SEARCH_BLUR
})

const changeList = (data) => {
    return {
        type: constants.CHANGE_LIST,
        data: fromJS(data)
    }
}
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            // console.log(res)
            const data = res.data
            console.log(data)
            dispatch(changeList(data.data))
        }).catch(() => {
            console.log('err')
        })
        // console.log(dispatch)
    }
}
// export const searchBulr = () =>{
//     return {
//         type: 'search_blur'
//     }
// }