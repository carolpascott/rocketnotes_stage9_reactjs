import { Link } from 'react-router-dom';

import { Container, Form }  from "./styles"

import { Header } from "../../components/Header"
import { Textarea } from "../../components/Textarea"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">
                            Voltar
                        </Link>
                        
                    </header>

                    <Input placeholder="Título" />
                    <Textarea placeholder="Observações" />

                    <Section title={"Links úteis"}>
                        <NoteItem value={"https://rocketseat.com.br/"} />
                        <NoteItem isNew placeholder="Novo Link" />
                    </Section>

                    <Section title={"Marcadores"}>
                        <div className="tags">
                            <NoteItem value={"React"} />
                            <NoteItem isNew placeholder="Novo marcador" />
                        </div>
                    </Section>

                    <Button title={"Salvar"}/>

                </Form>
            </main>

        </Container>

        
    )
}