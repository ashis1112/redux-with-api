import {FETCH_POSTS,NEW_POST} from './types'

export const fetchposts=()=>dispatch=>{   
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(posts=>{
            dispatch({
                type:FETCH_POSTS,
                payload:posts
            })
        })

    

}

export const createpost=(postdata)=>dispatch=>{   
    console.log('postcreated')
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(postdata)
    })
    .then(res=>res.json())
    .then(post=>{
        dispatch({
            type:NEW_POST,
            payload:post
        })
    })



}