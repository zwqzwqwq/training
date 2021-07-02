import profile from './imgs/头像.jpg';
import './Header.css'

function Header() {
    return (
      <div>
        <div className='img-box'>
          <img src={profile} className="Header-profile" alt="logo"  />
        </div>
        
        <div className='brief-intro'>
        Zhi-Hua Zhou, Professor, Computer Science and Artificial Intelligence, Nanjing University, China.
        </div>
        
      </div>
    );
  }
  
  export default Header;
  