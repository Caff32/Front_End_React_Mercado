import inicial from '../../../src/img/inicial.png';


import inicio2 from '../../../src/img/inicial2.png';

import inicio3 from '../../../src/img/inicio3.png';

import desc1 from '../../../src/img/desconto1.png';
import desc2 from '../../../src/img/desconto2.png';
import desc3 from '../../../src/img/desconto3.png';
import desc4 from '../../../src/img/desconto4.png';
import desc5 from '../../../src/img/desconto5.png';

const Home = () => {
    return(

        <div>
            
            <div class='container'>

                <div class='row'> 
            <a href=""><img src={inicial} alt="inicio" id='inicio' class ='col-desktop-12'/> </a>
            </div>
            </div>

        <section class='sector2'>
        <div class='container'>

<div class='row '> 
<a href=""><img src={inicio2} alt="inicio" id='inicio2' class ='col-desktop-5'/> </a>
<a href=""><img src={inicio3} alt="inicio" id='inicio3' class ='col-desktop-5'/> </a>
</div>
</div>


        </section>




        <section id="pro">
      <div class="container">
        <div class="row ">
        <p class="subtitle">Arraste pro lado e confira as melhores promoções</p>
            
          <div class="col col-offset-desktop-1 col-desktop-2 ">
            <div class="img-box-round"><img src={desc1} alt=""/></div>
            <p >Moda</p>
          </div>
          <div class="col col-desktop-2">
            <div class="img-box-round"><img src={desc2} alt=""/></div>
            <p >Casa e Decor</p>
          </div>
          <div class="col col-desktop-2">
            <div class="img-box-round"><img src={desc3} alt=""/></div>
            <p >Smartphones</p>
          </div>
          <div class="col col-desktop-2">
            <div class="img-box-round"><img src={desc4}alt=""/></div>
            <p >Cozinha</p>
          </div>
          <div class="col col-desktop-2">
            <div class="img-box-round"><img src={desc5} alt=""/></div>
            <p>Ferramentas</p>
          </div>
        </div>
      </div>
</section>
            
            
            </div>
    )


}

export default Home;