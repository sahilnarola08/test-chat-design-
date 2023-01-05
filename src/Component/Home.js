import React from 'react'
import Sidebar from './Sidebar'
import Profile from './Profile'
import Posts from './Posts'
import Gallery from './Gallery'
import Todo from './Todo'

const Home = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <Profile />
                {/* <Posts />
                <Gallery />
                <Todo /> */}
            </div>
        </>
    )
}

export default Home