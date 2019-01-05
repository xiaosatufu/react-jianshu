import React,{Component} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import './index.scss'
class Detail extends Component {
    render (){
        
      console.log(this.props.match.params.id)
        return (
            <div className="detail-wrapper">
                <div className="article">
                    <h1 className="title">{this.props.title}
                    </h1>
                    <div className="show-content">
                    {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }


}


const mapStateProps = (state) => ({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})


const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
})



export default connect(mapStateProps,mapDispatch)(Detail)