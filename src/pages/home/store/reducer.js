import {
    fromJS
} from 'immutable'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: '//upload.jianshu.io/collections/images/47/%E9%A6%96%E9%A1%B5%E6%8A%95%E7%A8%BF.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    }, {
        id: 2,
        title: '热点',
        imgUrl: '//upload.jianshu.io/collections/images/47/%E9%A6%96%E9%A1%B5%E6%8A%95%E7%A8%BF.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp'
    }]
})

export default (state = defaultState, action) => {
    return state
}