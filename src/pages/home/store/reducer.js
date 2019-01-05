import {
    fromJS
} from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommentList: [],
    writerList: []
})

export default (state = defaultState, action) => {
    if (action.type === constants.CHANGE_HOME_DATA) {
        // console.log(action)
        return state.merge({
            topicList: fromJS(action.topicList),
            articleList: fromJS(action.articleList),
            recommentList: fromJS(action.recommentList),
            writerList: fromJS(action.writerList)
        })
    }
    
    if (action.type === constants.ADD_ARTICLE_LIST) {
        return state.set('articleList',state.get('articleList').concat(action.list))
    }
    return state
}