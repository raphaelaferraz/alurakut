import React, { useState } from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken'
import styled from "styled-components"
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
       {propriedades.title}   ({ propriedades.items.length }) 
      </h2>
      <ul> 
        {propriedades.items.map((itemAtual) => { 
          return (
            <li key={itemAtual.login}>
              <a href={`${itemAtual.html_url}`}>
                <img src={`${itemAtual.html_url}.png`} />
                <span>{itemAtual.login}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </ProfileRelationsBoxWrapper> 
  )
}

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 14px;
`;

const ScrapBox = styled(Box)`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
span {
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #f4f4f4;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  color: #5a5a5a;
  font-size: 0.8rem;
  h1 {
    font-size: 1rem;
    font-weight: 400;
    color: #000;
  }
}
p {
  max-width: 550px;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;








export default function Home(props) {
  const [isShowingMoreComunidades, setIsShowingMoreComunidades] = useState(false);
  const usuarioAleatorio = props.githubUser;
  const [comunidades, setComunidades] = React.useState([]);
  console.log(comunidades);
  //const comunidades = ['Alurakut']
  const [scraps, setScraps] = React.useState([]);
  const [selecionarOpcao, setSelecionarOpcao] = useState(true);

  

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
  }, []);

  
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
      allScraps {
        userSlug
        description
      }
    }`  })
  })
    .then((response) => response.json())
    .then ((respostaCompleta) => {
      const comunidadesDoDato=respostaCompleta.data.allCommunities;
      console.log(comunidadesDoDato)
      const scrapsDoDato=respostaCompleta.data.allScraps
      setScraps(scrapsDoDato)
      setComunidades(comunidadesDoDato)
    })
  

  function handleShowMoreComunidades(e) {
    e.preventDefault();
    setIsShowingMoreComunidades(!isShowingMoreComunidades);
  }


  const [seguindo, setSeguindo] = React.useState([]);
  React.useEffect(function() {
    fetch('https://api.github.com/users/raphaelaferraz/following')
    .then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    })
    .then(function (respostaCompleta){
      setSeguindo(respostaCompleta);
    })
  }, []);

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

          <OrkutNostalgicIconSet
            recados={scraps.length} /> 
        </Box>

        <Box> 
          <h2 className="subTitle"> O que você deseja fazer?</h2>
          <ButtonContainer>
            <button 
              onClick={() => setSelecionarOpcao(true)}>
              Criar comunidade
            </button>
            <button
              onClick={() => setSelecionarOpcao(false)}>
              Deixe um recado
            </button>
          </ButtonContainer>

          {selecionarOpcao ? ( 
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                 
                const dadosDoFormulario = new FormData(e.target);
                console.log('Campo: ', dadosDoFormulario.get('title'));
                console.log('Campo: ', dadosDoFormulario.get('image'));
                console.log('Campo: ', dadosDoFormulario.get('link'));
                 

                const comunidade = {
                  title: dadosDoFormulario.get('title'),
                  imageUrl: dadosDoFormulario.get('image'),
                  communityUrl: dadosDoFormulario.get('link')
                };
                 
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
                });
              }}
            >
  
              
              
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
          ) : (
            <form 
              onSubmit={(e) => {
                e.preventDefault();

                const dadosDeRecados = new FormData(e.target);  
                console.log('Campo: ', dadosDeRecados.get('title'));
                console.log('Campo: ', dadosDeRecados.get('title'));
                
                const scrap = {
                  userSlug: dadosDeRecados.get('title') ? dadosDeRecados.get('title') : "Anônimo",
                  description: dadosDeRecados.get('title'),
                };
                fetch('/api/comunidades', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringfy(scrap),
                })
                .then(async(response) => {
                  const data = await response.json();
                  const scrapsAtualizados = [data.registerSuceeded, ...scraps];
                  setScraps(scrapsAtualizados);
                });
              }}
            >
              <div>
                <input 
                  placeholder="Qual seu nome?"
                  name="scrapSenderName"
                  aria-label="Qual seu nome?"
                  type="text"
                />
              </div> 
              <div>
                <input 
                  placeholder="Deixe seu recado"
                  name="scrapDescription"
                  aria-label="Deixe seu recado"
                  type="text"
                />
              </div>
              <button> Deixar recado</button>
          </form> 
          )}
        </Box>
        <Box>
          <h2 className="subTitle">Recados</h2>
          {scraps.map((scrap) => {
            return (
              <ScrapBox key={scrap.id}>
                <span>
                  <h1>{scrap.userSlug}</h1>
                </span>
                <p>{scrap.description}</p>
              </ScrapBox>
            );
          })}
        </Box>
      </div>
        <div className="profileRelationsArea" style= {{ gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBox title="Seguidores" items={seguidores} />

        <ProfileRelationsBox title='Seguindo' items={seguindo}/>
      
      
        <ProfileRelationsBoxWrapper isShowingMoreItems={isShowingMoreComunidades}>
          <h2 className="smallTitle">
            Minhas comunidades ({ comunidades.length }) 
          </h2>
          <ul>
            {comunidades.map((itemAtual) => {
              return (
                <li key={itemAtual.id} >
                  <a href={`/comunidades/${itemAtual.communityUrl}`}>
                    <img src={itemAtual.imageUrl} /> 
                    <span>{itemAtual.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
          {comunidades.length > 6 && (
          <div className="showMoreComunidades">
            <hr />
            <button className="toggleButton" onClick={(e) => handleShowMoreComunidades(e)}>
              {isShowingMoreComunidades ? 'Ver menos' : 'Ver todos'}
            </button>
          </div>
        )}
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


export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN;


  const { isAuthenticated } = await fetch('https://alurakut-base-sepia.vercel.app/api/auth', {
    headers: {
      Authorization: token
    }
  })
  .then((resposta) => resposta.json())

  console.log('isAuthenticated', isAuthenticated);

  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const { githubUser } = jwt.decode(token);

  return{
    props: {
      githubUser
    },
  } 
}