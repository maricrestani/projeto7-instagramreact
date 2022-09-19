import React from 'react';
 
export default function Usuario() {
 
 const [nome, setNome] = React.useState("Catana")
 const [usuario, setUsuario] = React.useState("catanacomics")
 const [imagem, setImagem] = React.useState("img/catanacomics.svg")
 
 function mudaUsuario() {
   let nomePrompt = prompt("Insira seu nome")
   let usuarioPrompt = prompt("Insira seu usuário")
 
   if (nomePrompt === "" || nomePrompt === null || usuarioPrompt === "" || usuarioPrompt === null) {}
   else {
     setNome(nomePrompt)
     setUsuario(usuarioPrompt)
   }
 }
 
 function mudaImagem() {
   let imagemPrompt = prompt("Insira seu link da foto de perfil")
 
   if (imagemPrompt === "" || imagemPrompt === null ){}
   else {
   setImagem(imagemPrompt)
   }
 }
 
 return (
   <div class="usuario">
     <img onClick={mudaImagem} src={imagem} alt='' />
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
