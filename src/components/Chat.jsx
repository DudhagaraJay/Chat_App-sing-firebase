import React, { useContext } from 'react'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {
  const { data } = useContext(ChatContext)


  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src="https://cdn-icons-png.flaticon.com/512/3747/3747190.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/512/747/747554.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/512/9205/9205210.png" alt="" />
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat