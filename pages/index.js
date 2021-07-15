import React from 'react';
import MainGrid from '../src/componentes/MainGrid'
import Box from '../src/componentes/Box'
import  { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet }  from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/componentes/ProfileRelations';

function ProfileSidebar(propriedades) {
  return ( 
    <Box as="aside">
      <img src={`https://github.com/${propriedades.usuarioAleatorio}.png`} style={{ borderRadius: '8px'}}/>
      <hr /> 

      <p> 
        <a className="boxLink" href ={`https://github.com/${propriedades.usuarioAleatorio}`}>
          @{propriedades.usuarioAleatorio}
        </a>

      </p>
      <hr /> 
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  
   
  
  
  )
}

export default function Home() {
  const usuarioAleatorio = 'raphaelaferraz'
  const [comunidades, setComunidades] = React.useState(['Alurakut']);
  console.log(comunidades);
  //const comunidades = ['Alurakut']
  const pessoasFavoritas = [
    'VictorGM01',
    'juunegreiros',
    'omariosouto',
    'peas'
  ]
  
  return ( 
    <>
    <AlurakutMenu />
    <MainGrid> 
      <div className="profileArea" style = {{ gridArea: 'profileArea' }}> 
       <ProfileSidebar usuarioAleatorio={usuarioAleatorio} />
      </div>
        
      <div className="welcomeArea" style = {{ gridArea: 'welcomeArea' }}>
        
        <Box>
          <h1 className="title"> 
            Bem vindo (a)
          </h1>

          <OrkutNostalgicIconSet />
        </Box>

        <Box> 
          <h2 className="subTitle"> O que você deseja fazer?</h2>
          <form onSubmit={function handleCriarcomunidade(e) {
              e.preventDefault();
              

              setComunidades(comunidades => [...comunidades, 'Alura Stars'])
              console.log(comunidades);
          }}>
            <div> 
              <input placeholder="Qual vai ser o nome da comunidade?" name="title" 
              aria-label="Qual vai ser o nome da comunidade?" 
              type="text"
              />
            </div>
          </form>
          <div> 
            <input placeholder="Coloque aqui a URL da capa de sua comunidade" name="image" 
            aria-label="Coloque aqui a URL da capa de sua comunidade" 
            /> 
          </div>
          <button> Criar comunidade </button>
        </Box>

      </div>
        
        
      <div className="profileRelationsArea" style = {{ gridArea: 'profileRelationsArea' }}>
      <ProfileRelationsBoxWrapper>
          <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                     <img src={`http://placehold.it/300x300`} /> 
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        
        
        
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle"> 
            Pessoas da comunidade({pessoasFavoritas.length}) 
          </h2>
          

          <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}

