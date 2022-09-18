import React from 'react';

export default function Usuario() {

  const [nome, setNome] = React.useState("Catana")
  const [usuario, setUsuario] = React.useState("catanacomics")
  const [imagem, setImagem] = React.useState("img/catanacomics.svg")

  function mudaUsuario() {
    const nomePrompt = prompt("Insira seu nome")
    setNome(nomePrompt)
    const usuarioPrompt = prompt("Insira seu usuário")
    setUsuario(usuarioPrompt)
  }

  function mudaImagem() {
    const imagemPrompt = prompt("Insira seu link da foto de perfil")
    setImagem(imagemPrompt)
  }

  return (
    <div class="usuario">
      <img onClick={mudaImagem} src={imagem} />
      <div class="texto">
        <strong>{usuario}</strong>
        <span>
          {nome}
          <ion-icon name="pencil" onClick={mudaUsuario} ></ion-icon>
        </span>
      </div>
    </div>
  )
}

/*
function User(props) {

  return (
    <div class="usuario">
      <img onclick={props.clickImagem} src={props.imagem} />
      <div class="texto">
        <strong>{props.usuario}</strong>
        <span>
          {props.nome}
          <ion-icon name="pencil" onclick={props.clickLapis}></ion-icon>
        </span>
      </div>
    </div>
  )
}

return (
   <User imagem="img/catanacomics.svg" usuario="catanacomics" nome="Catana" />
 )
*/