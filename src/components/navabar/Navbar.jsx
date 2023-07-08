import './navbar.scss'
import profileImg from '../../assets/img-2.jpg'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <Link to="/" style={{textDecoration: "none"}}>
                <span>Retuwet Social</span>
            </Link>
            <HomeOutlinedIcon />
            <DarkModeOutlinedIcon/>
            <GridViewOutlinedIcon />
            <div className="search">
                <SearchOutlinedIcon />
                <input type="text" placeholder="Search..." />
            </div>
                
        </div>
        <div className="right">
            <PersonOutlinedIcon />
            <EmailOutlinedIcon />
            <NotificationsOutlinedIcon />
            <div className="user">
                <img src={profileImg} alt="" />
                <span>John Doe</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar