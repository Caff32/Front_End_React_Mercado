const contato = () => {
    return(

        <div>

<section class="section-center " id='contato'>
            <h2>Contato</h2>
            <p class="subtitle">
                Essa tela apenas simula uma outra tela para aplicação do conceito de SPA. Ela de fato não envia o e-mail.
            </p>

            <div class="container">
                <form class="row" action='/' method="get"> 
                    <div class="col col-desktop-6 col-6">
                        <div class="input-control">
                            <input id="nome" name="nome" type="text" required placeholder="Nome..."/>
                            <label for="nome">Nome*</label>
                        </div>
                        <div class="input-control">
                            <input id="email" name="email" type="email" required placeholder="Email..."/>
                            <label for="email">Email*</label>
                        </div>
                        <div class="input-control">
                            <input id="telefone" name="telefone" type="number" placeholder="Telefone..."/>
                            <label for="telefone">Telefone</label>
                        </div>
                    </div>
                    <div class="col col-desktop-6 col-6">
                        <div class="input-control">
                            <textarea id="mensagem" name="mensagem" id="" cols="30" rows="10" placeholder="Mensagem..."></textarea>
                            <label for="mensagem">Mensagem</label>
                        </div>
                    </div>

                    <div class="col col-desktop-12 btnorange col-6">
                      <input type="submit" value="Enviar" class="btn orange"/>
                  </div>




                  </form>
            </div>
        </section>


        </div>
    )


}

export default contato;