import React, { useState, useEffect } from 'react'
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data() })))
        })
    }, [])
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map(post => (
                <Post 
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}/>
            ))}

            {/*     
            <Post profilePic="https://instagram.fboi1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/38184101_414116362328139_7660781325896384512_n.jpg?_nc_ht=instagram.fboi1-1.fna.fbcdn.net&_nc_ohc=0byNT0xlgZEAX-9Zslm&oh=b9843cda4db2578d42f7cfd0cac14c1c&oe=5F9C50D3" 
                  message="Woo this works" 
                  timestamp="This is a timestanp"
                  username="Bobby"
                  image="https://instagram.fboi1-1.fna.fbcdn.net/v/t51.2885-15/e35/51379328_155440555453384_5662248349192068336_n.jpg?_nc_ht=instagram.fboi1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=edI4CnHup6EAX_6opPD&_nc_tp=18&oh=dd6f8c22d8903136aee2c3d6acb3c43c&oe=5F995A80"/>
            <Post />
            <Post /> */}


        </div>
    )
}

export default Feed
