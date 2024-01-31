import { Container, Links, Content }  from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tags } from "../../components/Tags"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
    return(
        <Container>

            <Header />

            <main>
                <Content>            

                    <ButtonText title={"Excluir nota"} />

                    <h1>Introdução ao React</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Voluptatem blanditiis tempora, aliquam dolorum laborum aut 
                        temporibus minima fugit quas laboriosam saepe magni iusto 
                        maxime possimus amet officiis consequatur explicabo quae?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolorum vero, deleniti mollitia amet beatae inventore 
                        excepturi veniam. Culpa maxime adipisci illo ab voluptatum provident? 
                        Sequi, unde quo. Nihil, nemo culpa.
                    </p>

                    <Section title={"Links úteis"}>
                        <Links>
                            <li><a href="https://www.rocketseat.com.br/" target="_blank">https://www.rocketseat.com.br/</a></li>
                            <li><a href="http://" target="_blank">https://www.rocketseat.com.br/</a></li>
                        </Links>
                    </Section>

                    <Section title={"Marcadores"}>
                        <Tags title={"express"} />
                        <Tags title={"node"} />
                    </Section>

                    <Button title={"Voltar"} />

                </Content>
            </main>      

        </Container>      
    )
}
