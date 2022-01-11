import './styles.css';

import logo from '../../../src/img/logo.png';

const Header = () => {
    return(

        <header id="header" >
        <div class="container">
        <div class="row">
          <div class="col col-desktop-3 col-6">
            <a href="/"><img src={logo} alt="Logo da empresa"/> </a>
          </div>
          <div class="col col-desktop-9 col-6" >
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="sobre">Quem Somos</a></li>
                <li><a href="contato">Contato</a></li>
                
              </ul>
            </nav>
          </div>
        </div>
          
       </div>
      </header>
  
    )


}

export default Header;