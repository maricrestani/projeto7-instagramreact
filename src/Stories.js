function Story(props) {

  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagem} />
      </div>
      <div class="usuario">
        {props.usuario}
      </div>
    </div>
  )
}

export default function Stories() {

  const array_stories = [
    {
      story_img: "img/9gag.svg",
      story_usuario: "9gag"
    },
    {
      story_img: "img/meowed.svg",
      story_usuario: "meowed"
    },
    {
      story_img: "img/barked.svg",
      story_usuario: "barked"
    },
    {
      story_img: "img/nathanwpylestrangeplanet.svg",
      story_usuario: "nathanwpylestrangeplanet"
    },
    {
      story_img: "img/wawawicomics.svg",
      story_usuario: "wawawicomics"
    },
    {
      story_img: "img/respondeai.svg",
      story_usuario: "respondeai"
    },
    {
      story_img: "img/filomoderna.svg",
      story_usuario: "filomoderna"
    },
    {
      story_img: "img/memeriagourmet.svg",
      story_usuario: "memeriagourmet"
    }
  ]

  return (

    <div class="stories">

      {array_stories.map((story) => <Story imagem={story.story_img} usuario={story.story_usuario} />)}


      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}


