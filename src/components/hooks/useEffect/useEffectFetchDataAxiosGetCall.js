import React, {useState, useEffect} from 'react'
import axios from 'axios';

function UseEffectFetchDataAxiosPostCall() {
    // this is for Get Call
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return (
        <div>
        <ul>
            {
                posts.map(item => <li key ={item.id}>{item.title}</li>)
            }
        </ul>
        </div>
    )
}

export default UseEffectFetchDataAxiosPostCall
