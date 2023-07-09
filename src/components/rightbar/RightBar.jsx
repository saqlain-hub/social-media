import './rightBar.scss'
import profileImg from '../../assets/img-2.jpg'
const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={ profileImg } alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={ profileImg } alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={ profileImg } alt="" />
              <p>
                <span>John Doe</span> changed cover picture
              </p>
            </div>
            <span> 1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={ profileImg } alt="" />
              <p>
                <span>John Doe</span> liked a post
              </p>
            </div>
            <span> 1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={ profileImg } alt="" />
              <p>
                <span>John Doe</span> liked a comment
              </p>
            </div>
            <span> 1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={ profileImg } alt="" />
              <p>
                <span>John Doe</span> posted
              </p>
            </div>
            <span> 1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={ profileImg } alt="" />
              <div className="online"></div>
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={ profileImg } alt="" />
              <div className="online"></div>
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={ profileImg } alt="" />
              <div className="online"></div>
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={ profileImg } alt="" />
              <div className="online"></div>
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={ profileImg } alt="" />
              <div className="online"></div>
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={ profileImg } alt="" />
              <div className="online"></div>
              <span>John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar