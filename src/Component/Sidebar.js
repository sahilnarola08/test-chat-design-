import React from 'react'
import "./Sidebar.scss";
import { useNavigate } from "react-router-dom";
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("Posts")
  }

  const handlechange = () => {
    navigate("Gallery")
  }

  const handletodo = () => {
    navigate("ToDo")
  }
  return (
    <>
      <div className='sidebar_section'>
        <div className='sidebar_div'>
          <a >Profile</a>
          <a onClick={handleClick}>Posts</a>
          <a onClick={handlechange}>Gallery</a>
          <a onClick={handletodo}>ToDo</a>
        </div>


      </div>

      <div className='chat_box_div'>
        <div className='chat_box'>
          {/* <ChatBubbleOutlineIcon /> */}
          <p>Chats</p>
        </div>

        <div style={{ backgroundColor: "#fff", borderLeft: "1px solid #2C65C8", borderRight: "1px solid #2C65C8" }}>


          <div className='chat_contact'>
            <img src={require("../assest/profile.jpg")} alt="" />
            <p>Ervin Howell</p>
          </div>

          <div className='chat_contact'>
            <img src={require("../assest/profile.jpg")} alt="" />
            <p>Ervin Howell</p>
          </div>


          <div className='chat_contact'>
            <img src={require("../assest/profile.jpg")} alt="" />
            <p>Ervin Howell</p>
          </div>
        </div>

      </div>
    </>

  )
}

export default Sidebar