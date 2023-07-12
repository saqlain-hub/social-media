import "./comments.scss"
import userPic from '../../assets/img-2.jpg';
import femalePic from '../../assets/img-4.jpg';

const Comments = () => {

    const comments = [
        {
            id: 1,
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam itaque laboriosam atque sed! Id aspernatur reiciendis placeat, quo nam eum sint dolores enim praesentium reprehenderit.",
            name: 'John Doe',
            userId: 2,
            profilePicture: userPic
        },
        {
            id: 2,
            desc: "Adipisicing elit Quibusdam itaque laboriosam atque sed! Id aspernatur reiciendis placeat, quo nam eum sint dolores enim praesentium reprehenderit.",
            name: 'Jane Doe',
            userId: 2,
            profilePicture: femalePic
        },
    ];

  return (
    <div className='comments'>
        {
            comments.map(comment => (
                <div className="comment">
                    <img src={comment.profilePicture} alt="user profile pic" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))
        }
    </div>
  )
}

export default Comments