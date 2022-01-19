import {ReactComponent as GithubIcon} from '../../assets/img/github.svg'
import './style.css';
function Navbar(){

    return(
        <header>
        <nav className="container">
        
        <div className="dsmovie-nav-content">
        <h1> Cinelist Ranking</h1>
        <a href="github.com/leehfsn">
          <div className="dsmovie-contact-container">
            <GithubIcon />
            <p>/leehfsn</p>
        </div>
  
        </a>
        </div>
        </nav>
      </header>
    );
}

export default Navbar;