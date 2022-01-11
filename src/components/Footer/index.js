import logo from '../../../src/img/logo.png';

import social from '../../../src/img/social-twitter.png';
import social2 from '../../../src/img/social-facebook.png';
import social3 from '../../../src/img/social-youtube.png';

const Footer = () => {
    return(

        <div>

<footer id="footer">
      <div class="container">
        <div class="row">
          <div class="col col-offset-desktop-1 col-desktop-3 ">
            <p><a href=""><img src={logo} alt="Logo da Empresa"/></a></p>

            <p>Lorem ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet ipsum dolor sit amet. Proin gravida nibh vel velit auctor aliquet</p>
          </div>
            <div class="col col-offset-desktop-1 col-desktop-2 col-2">
              <h3>Menu</h3>
              <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="sobre">Quem Somos</a></li>
                  <li><a href="contato">Contato</a></li>
    
                </ul>
              </nav>

            </div>
            <div class="col col-desktop-3 social col-4">
              <a href=""><img src={social} alt=""/></a>
               <a href=""><img src={social2} alt=""/></a>
               <a href=""><img src={social3} alt=""/></a>
            </div>

        </div>
      </div>


    </footer>

    <div class="rodape">
      <div class="low">
        <div class="col-desktop-12">
          <p>&copy; Carlos Alberto Ferreira Filho - UNYLEIA - 09/01/2022</p>
        </div>
      </div>
    </div>


        </div>
    )


}

export default Footer;