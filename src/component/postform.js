import React from 'react'
import {connect} from 'react-redux'
import {createpost} from '../action/postaction'

class Postform extends React.Component{
constructor(props){
    super(props)

    this.state={
        title:'',
        body:''
    }
}

change=(e)=>{
    const {name,value}=e.target
    this.setState({[name]:value})
}    

submit=(e)=>{
    e.preventDefault()

    const post={
        title:this.state.title,
        body:this.state.body
    }
    this.props.createpost(post)
}

render(){
    console.log(this.props.createdpost)
    return(
        <>
         <h1>Add Posts</h1>
         <form onSubmit={this.submit}>
             <div>
                 <label>Title:</label><br/>
                 <input onChange={this.change} value={this.state.title} type='text' name='title' />
             </div>
             <div>
                 <label>Body:</label><br/>
                 <textarea onChange={this.change} name='body' value={this.state.body} />
             </div>
             <br/>
            <button type='submit'>Submit</button>
         </form>
        </>
    )
}

}



export default connect(null,{createpost})(Postform)