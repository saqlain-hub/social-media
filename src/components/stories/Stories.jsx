import "./stories.scss"
import profileImg from '../../assets/image-2.jpg'
import { useContext } from "react"
import {AuthContext } from '../../context/authContext'

const Stories = () => {

    const { currentUser } = useContext(AuthContext);

    /// TEMPORARY
    const stories = [
        {
            id: 1,
            name: "Ava Angelina",
            img: profileImg
        },
        {
            id: 2,
            name: "Dani Adams",
            img: profileImg
        },
        {
            id: 3,
            name: "Kimmy Samuel",
            img: profileImg
        },
        {
            id: 4,
            name: "Mia Handerix",
            img: profileImg
        }
    ]

  return (
    <div className='stories'>
        <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
        { stories.map(story => (
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}

    </div>
  )
}

export default Stories