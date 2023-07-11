import "./posts.scss"
import postImg from '../../assets/image-2.jpg'
import profileImg from '../../assets/img-3.jpg'
import Post from '../../components/post/Post'

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic: profileImg,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: postImg
    },

    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic: profileImg,
      desc: "amet consectetur adipisicing elit. Libero recusandae eius voluptatibus, maxime voluptates nesciunt",
      img: postImg
    }
  ];

  return (
    <div className='posts'>
      { posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts