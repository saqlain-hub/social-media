import './profile.scss'


import FacebookTwoToneIcon  from "@mui/icons-material/FacebookTwoTone"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import PinterestIcon  from "@mui/icons-material/Pinterest"
import TwitterIcon from "@mui/icons-material/Twitter"
import PlaceIcon from "@mui/icons-material/Place"
import LanguageIcon from "@mui/icons-material/Language"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import MoreVertIcon from "@mui/icons-material/MoreVert"

import Posts from "../../components/posts/Posts"

import userProfile from '../../assets/img-3.jpg';
import coverPic from '../../assets/cover.jpg';

 


const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src={coverPic} alt="" className='cover' />
        <img src={userProfile} alt="" className='profilePic' />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="https://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>John Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>Retuwet.com</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>  
        <Posts />     
      </div>   
    </div>
  )
}

export default Profile