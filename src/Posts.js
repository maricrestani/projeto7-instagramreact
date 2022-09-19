import React from 'react'

function Post(props) {

  const [salvo, setSalvo] = React.useState(false)
  const [curtido, setCurtido] = React.useState(false)
  let [curtidas, setCurtidas] = React.useState(props.numero_curtidas)

  function salvar() {
    setSalvo(!salvo)
  }

  function curtir() {
    setCurtido(!curtido)

    if (curtido === false) {
      parseInt(curtidas++)
      setCurtidas(curtidas)

    } else {
      parseInt(curtidas--)
      setCurtidas(curtidas)
    }
  }

  return (
    <div class="post">

      <div class="topo">
        <div class="usuario">
          <img src={props.imagem_topo} alt='' />
          {props.usuario_topo}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img onClick={curtir} src={props.imagem_conteudo} alt={''} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon onClick={curtir} style={{ display: curtido ? 'none' : '' }} name="heart-outline"></ion-icon>
            <ion-icon onClick={curtir} style={{ display: curtido ? '' : 'none' }} class="vermelho" name="heart"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div onClick={salvar}>
            <ion-icon style={{ display: salvo ? 'none' : '' }} name="bookmark-outline"></ion-icon>
            <ion-icon style={{ display: salvo ? '' : 'none' }} name="bookmark"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imagem_curtidas} alt='' />
          <div class="texto">
            Curtido por <strong>respondeai</strong> e <strong>outras {curtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function Posts() {

  const array_posts = [
    {
      imagem: "img/meowed.svg",
      usuario: "meowed",
      img_conteudo: "img/gato-telefone.svg",
      img_curtidas: "img/respondeai.svg",
      num_curtidas: 101523
    },
    {
      imagem: "img/barked.svg",
      usuario: "barked",
      img_conteudo: "img/dog.svg",
      img_curtidas: "img/adorable_animals.svg",
      num_curtidas: 99159
    },
  ]

  return (
    <div class="posts">

      {array_posts.map((post) => <Post imagem_topo={post.imagem} usuario_topo={post.usuario} imagem_conteudo={post.img_conteudo} imagem_curtidas={post.img_curtidas} numero_curtidas={post.num_curtidas} />)}

    </div>
  )
}