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
  const [comunidades, setComunidades] = React.useState([{
    id: '15154112106645448878784',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
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
    <AlurakutMenu usuarioAleatorio={usuarioAleatorio}/> 
      
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
              
              const dadosDoFormulario = new FormData(e.target);
              console.log('Campo: ', dadosDoFormulario.get('title'));
              console.log('Campo: ', dadosDoFormulario.get('image'));

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoFormulario.get('title'),
                image: dadosDoFormulario.get('image'),
              }
              
              const comunidadesAtualizadas = [...comunidades, comunidade]

              setComunidades(comunidadesAtualizadas)
            
              
          }}>
            <div> 
              <input placeholder="Qual vai ser o nome da comunidade?" name="title" 
              aria-label="Qual vai ser o nome da comunidade?" 
              type="text"
              />
            </div>

            <div> 
              <input placeholder="Coloque aqui a URL da capa de sua comunidade" name="image" 
              aria-label="Coloque aqui a URL da capa de sua comunidade" 
              /> 
            </div>
            <button type='submit'>
              Criar comunidade
            </button>
          </form>
          
          
          
        </Box>

      </div>
        
        
      <div className="profileRelationsArea" style = {{ gridArea: 'profileRelationsArea' }}>
      <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
              Minha comunidade ({ comunidades.length }) </h2>
          <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id} >
                    <a href={`/users/${itemAtual.title}`}>
                     <img src={itemAtual.image} /> 
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        
        
        
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle"> 
            Pessoas favoritas ({pessoasFavoritas.length}) 
          </h2>
          

          <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
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

