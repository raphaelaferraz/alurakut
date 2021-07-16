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


export default function Home() {
  const usuarioAleatorio = 'raphaelaferraz'
  const [comunidades, setComunidades] = React.useState([{
    id: '15154112106645448878784',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    link: 'https://www.netflix.com/br/'
  },
  {
    id: '545454545484545',
    title: 'Os gatos me completam',
    image: 'https://lh3.googleusercontent.com/FXgpJ10rMzKgKngw1CYlXwTB6sizQzushuwkQMPKJiTVzQcqdoEUg32VAd9Ta2TENkWYaCF9XvBDBedn8KOOU0YtWFIAUqGvSNU4p2aA1wmziBk59ei8PemYpMtk-l7okJLJDPLlrw3BU00nRCms6Ee7bJFwcF3hQlahvf8hnCcYiJNXcNTFsErC458B070xV5G_zXecdz9BMAU94vHKS2ug56St7WQn_cONsoIXrv0PhQEejiUxihgX0eT7UVDKlt7joaFca63ylghtKCWKXdAYbejf_-Sh527B9YQ2W2HWBuNuJBUfJw1uSXGZ8o266nR8HvrgOYvRf5avGdCir_zrkiF2rLWFtqgZVbbc_HVG2yO-WWhq1ADw_pjVZCRiCiF8IP0veFi5gb7VpYKoWVD_lvsWchOAzlM8vBO6MzCH-s6BrbivA4vnpi6l2WA6RfOFu4ThGvOHPGVARSoGgqF_wdtrAilF5mJ1djTU_9DHn1zsi3Ls8fC4BS3mXYLdhA8EAplzWtTo_4meOfYU1aIH1-U-8K1SnkJm71AngMc1IUdSGvxXTZs87EuQPj1e6S42EbB46HKO9ThwDHHiNgYLLPbGtOiHx_XhQeOfcPC4DWfDL453WlJu--GOEs5qVUj1hL05BztoWfXEQX1rhRMbtdX9s-SzKPf2Kh_DPBXD7EEU0XO00wr75DgY1METhYrBGlRP8fNnZKKOSdUcbLBQFw=w994-h568-no?authuser=0',
    link: 'https://m.facebook.com/groups/263662481660304/permalink/580305316662684/'
  },
  {
    id: '232323232323',
    title: 'Completamente apaixonada pelo meu benzinho',
    image: 'https://lh3.googleusercontent.com/xnJhkWTINRSIxaWXmjrLFoKt6nAberTN-JqaU7N-qgS3kq58QYlKRAPHSgYv_F9RvlxiN1qUSgUoNYQ3Ibq9OfIDtS80Ik5FjLLQbxEAj1p3NwsiCVUhIdBPBdmr7Kw83c6oPXA9hCcjeh_2fRC9CKi2yemiEHFsya4-OrR2XI0L6hFz1Q9QkD2FMLOum4-PUHnvtcwxiYdDqHkc9mVDXTmiKaytmNDwP5Mi8_2F1s_RGXYZd_PCs4Tb83L3jX7zhJNnWmkGUqnqMeV3iFzuwBQJbfQ4BTWi9e00hvYtrYQ_Jpvb7JucrlLgE118nSB0BVOJbSit5AFakKyfh2lOuQgfpdbpFlZmcxpyyxBes-LYGaYFT6NQ_9PD3A5ELlpA7uqUK9Tj8sOJH6QRKD0AIn7pFAgcfGK5hmqhPTwEF7q28lI1XUv0uT1HH8i0E4vVI9VTwj_09wsuukH4FM3Y_dsgk4JrscsVlZQLS5lJvt8dnpv37_0ILMyK-kK3247NlazsAkKxXB1a3trDrDNAbk6eNt4DZhlFrgCPg_d7VmUvQwMVx5muOY9aZfX42I5hE_hsUopP0YWO_WSnqqkY5VFImpBZogz_1SGdOcPYj7goNCZBjRCbA7vN1OumFc_svr8ai4Fs_BuqdDWXgvMxLir1vWbvrghydvUEz6EMF6z4qo0ESG5KvSQxyhRjRtaU4s8H85oWCOVd9mO79XqhvVT5sw=w516-h291-no?authuser=0',
    link: 'https://www.youtube.com/watch?v=9_egsWu-B7M'
  },
  {
    id: '4545452688555',
    title: 'Eu amo praia',
    image: 'https://lh3.googleusercontent.com/PCUHpJm9UO0ZzviTVe9yugahEnZ6gKy61kdsoFwLmnbae0FVWr_FGByUZBceFNnrHX8Xv23HTvPf0akota54Yi5fRDh04RL2XsHka7W3iqle9FqTMDDsnMWm22v1eytc2omEzqKh5H_OtnOZo4bKx03Baq1qNAly_WPkH-dcn_-lJ4DlU7ennL2y9VBOmujaNeO7sHaOMjDF4hUsub64uJ0gzXtNVy0_eVPnQhsz6_lX4o0llqI61husyPNU6fzbmQLi6P01gJZBEAEG3w74tTUrMNlumkv0vic6fwpEBhBvSE37Fuy-dGQCXcKiaAJ13vRePMM8y8TLcOO05c5y_GQitNXhAJaPIiy7ifzcrpQKUR7U1hpb4iqez8vvCSrM8nlR2u94FXt95jSaMJ0kDfh095nETzSTXQeX55MjQh7QImFjxHSDyBbXL9JOHNayuVo2KhHcpXSkPvr_88wWNry7p5gfdn5lcXw06mehkt9uk9ODV3HW8vQWTYhBQIwAR_3zDKbk7HrbmyKj72i26d7kIOFRgd3wZhF48jBt4pVu5G_ex7V6L-072g0gUH557zWma_J7CmgO9gryNUnDhcmWTiFTfHzOi2ndaQm0yR-Dy7BJ8dFnxTFMGEdGg1GRtwkLqAK93F3BA842O3OY1Guazjm6j5rSn_7aXiuOeK98WNY-MMSQU2kk7tdp9qdZrjHCrphXWstz8a4mwXfi15YSkA=w853-h568-no?authuser=0',
    link: 'https://www.facebook.com/ckturistando/videos/396884570888197/'
  },
  {
    id: '5856595656',
    title: 'Amante de itens de papelaria',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxV0LfXYq6Wq2tc-vM27AxjfXqEIOfzeDWAAImfCPRJVa4eEqdCpJfOJooKHov_ChgF4&usqp=CAU',
    link: 'https://shopee.com.br/search?keyword=canetas'
  }
  ]);


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
              console.log('Campo: ', dadosDoFormulario.get('link'))

              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoFormulario.get('title'),
                image: dadosDoFormulario.get('image'),
                link: dadosDoFormulario.get('link')
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
      <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
              Minhas comunidades ({ comunidades.length }) </h2>
          <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id} >
                    <a href={itemAtual.link}>
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

