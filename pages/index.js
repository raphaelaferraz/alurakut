import React from 'react';
import MainGrid from '../src/componentes/MainGrid'
import Box from '../src/componentes/Box'
import  { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet }  from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/componentes/ProfileRelations';

function ProfileSidebar(propriedades) {
  return ( 
    <Box className>
      <img className="image" src={`https://github.com/${propriedades.usuarioAleatorio}.png`} style={{ borderRadius: '8px'}}/>

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

function ProfileRelationsBox(propriedades){
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
           {propriedades.title}   ({ propriedades.items.length }) </h2>
          <ul>
              { /* seguidores.map((itemAtual) => {
                return (
                  <li key={itemAtual} >
                    <a href={`https://github.com/${itemAtual}.png`}>
                     <img src={itemAtual.image} /> 
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })} */}
            </ul>
          </ProfileRelationsBoxWrapper> 
  )}
export default function Home() {
  const usuarioAleatorio = 'raphaelaferraz'
  const [comunidades, setComunidades] = React.useState([]);

  console.log(comunidades);
  //const comunidades = ['Alurakut']
  const pessoasFavoritas = [
    'VictorGM01',
    'juunegreiros',
    'omariosouto',
    'peas',
    'filipedeschamps'
  ]
  
const [seguidores, setSeguidores] = React.useState([]);
  
React.useEffect(function() {
  fetch('https://api.github.com/users/raphaelaferraz/followers')
  .then(function (respostaDoServidor) {
    return respostaDoServidor.json();
  })
  .then(function (respostaCompleta){
    setSeguidores(respostaCompleta);
  })
 

  //API GraphQL
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '5f9f6416d2cdbe390876028c213d28',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({"query": `query {
        allCommunities {
          title
          imageUrl
          communityUrl
        }
      }`  })
    })
    .then((response) => response.json())
    .then ((respostaCompleta) => {
      const comunidadesDoDato=respostaCompleta.data.allCommunities;
      console.log(comunidadesDoDato)
      setComunidades(comunidadesDoDato)
    })
}, [])

const [seguindo, setSeguindo] = React.useState([]);

React.useEffect(function() {
  fetch('https://api.github.com/users/raphaelaferraz/following')
  .then(function (respostaDoServidor) {
    return respostaDoServidor.json();
  })
  .then(function (respostaCompleta){
    setSeguindo(respostaCompleta);
  })
}, [])

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
              console.log('Campo: ', dadosDoFormulario.get('link'));

              const comunidade = {
                title: dadosDoFormulario.get('title'),
                imageUrl: dadosDoFormulario.get('image'),
                communityUrl: dadosDoFormulario.get('link')
              }
              
              fetch('/api/comunidades', {
                method: 'POST',
                headers: {
                  'Content-Type':'application/json',
                },
                body: JSON.stringify(comunidade)
              })
              .then(async(response) => {
                const dados = await response.json();
                console.log(dados.registroCriado);
                const comunidade = dados.registroCriado;
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas)
              })
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

            <div>
              <input
              placeholder="Coloque aqui, o link da sua comunidade"
              name="link"
              aria-label="Coloque aqui, o link da sua comunidade"
              />
            </div>
            <button type='submit'>
              Criar comunidade
            </button>
          </form>
          
          
          
        </Box>

      </div>
        
        
      <div className="profileRelationsArea" style = {{ gridArea: 'profileRelationsArea' }}>
      <ProfileRelationsBox title="Seguidores" items={seguidores}/>

      <ProfileRelationsBox title='Seguindo' items={seguindo} />
      
      
      <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
              Minhas comunidades ({ comunidades.length }) </h2>
          <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id} >
                    <a href={`/comunidade/${itemAtual.id}`}>
                     <img src={itemAtual.imageUrl} /> 
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

