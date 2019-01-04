import axios from 'axios'
import * as constants from './constants'

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommentList: result.recommentList,
    writerList: result.writerList
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get("/api/home.json").then(res => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        });
    }
}

export const getMoreList = () => {
    return (dispatch) =>{
        console.log('11')
    }
}