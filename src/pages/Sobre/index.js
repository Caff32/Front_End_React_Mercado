
import qs1 from '../../../src/img/quem-somos_01.jpg';

import qs2 from '../../../src/img/quem-somos_02.jpg';
import qs3 from '../../../src/img/quem-somos_03.jpg';
import qs4 from '../../../src/img/quem-somos_04.jpg';



const Sobre = () => {
    return(

        <div>

<section class="section" id="intro">
            <div class="container">
                <div class="row">
                   <div class="col col-desktop-4 col-6 " id="img-box" >
                        <img src={qs1} alt="quemsomoss" />
                        
                    </div>
                    <div class="col col-desktop-8">
                        <h2>Quem Somos</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec dapibus metus, in rutrum nunc. Aenean eu ipsum consequat, lacinia elit a, malesuada eros. Fusce libero felis, viverra at congue ac, tristique in ligula. Etiam pellentesque metus at ex placerat, eget tempus risus venenatis. Maecenas sollicitudin tellus id sapien laoreet dignissim. Aliquam porttitor odio euismod odio feugiat blandit. Sed suscipit, leo id maximus tempor, diam odio placerat velit, a pharetra leo eros eget urna. Sed volutpat, quam nec rutrum euismod, nisl neque viverra enim, nec aliquam ligula sem in sem. Integer laoreet blandit blandit.</p>
                            
                   </div>
                </div>
            </div>
        </section>

        


        <div class="section" id="section">
            <div class="container" >
                <div class="row" id="visao">
                        <div class="col col-desktop-4">
                        <img src={qs2} alt=""/>
                        <h2>Visão</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec dapibus metus, in rutrum nunc. Aenean eu ipsum consequat, lacinia elit a, malesuada eros. Fusce libero felis, viverra at congue ac, tristique in ligula. </p>
                    </div>
                    <div class="col col-desktop-4">
                          <img src={qs3} alt=""/>
                        <h2>Missão</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec dapibus metus, in rutrum nunc. Aenean eu ipsum consequat, lacinia elit a, malesuada eros. Fusce libero felis, viverra at congue ac, tristique in ligula. </p>
                    </div>

                    <div class="col col-desktop-4">
                        <img src={qs4} alt=""/>
                        <h2>Valores</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec dapibus metus, in rutrum nunc. Aenean eu ipsum consequat, lacinia elit a, malesuada eros. Fusce libero felis, viverra at congue ac, tristique in ligula. </p>
                    </div>
                 </div>
            </div>
        </div>


        </div>
    )


}

export default Sobre;