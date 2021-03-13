import React from 'react'
import {connect} from 'react-redux'
import {fetchposts} from '../action/postaction'
import PropTypes from 'prop-types'


class Posts extends React.Component{

componentDidMount(){
    this.props.fetchposts()
}

componentWillReceiveProps(nextProps){
    if(nextProps.newpost){
        this.props.posts.unshift(nextProps.newpost)
    }
}

render(){
    const postitems=this.props.posts.map(data=>(
        <div id={data.id}>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
        </div>
    ))

    return(
        <>
            <h1>Posts</h1>
            {postitems}
        </>
    )
}


}

Posts.propTypes={
    fetchposts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired,
    newpost:PropTypes.object
}

const mapStateToProps=state=>({
    // state.posts is indicating rootreducer's posts where postreducer combined
    posts:state.posts.items,
    newpost:state.posts.item
})


export default connect(mapStateToProps,{fetchposts})(Posts)
