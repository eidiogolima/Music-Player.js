export default class Player {
  constructor(goPlay, goBack, goNext) {
    this.goNext = document.querySelector(goNext)
    this.goBack = document.querySelector(goBack)
    this.goPlay = document.querySelector(goPlay);
    this.i = 0; 
    this.audio = new Audio();

    this.audios = {
      src: ["../../assets/audio/hanging.mp3", "../../assets/audio/Snacks.mp3", "../../assets/audio/Still.mp3"]
    }
  }

  // da o play na musica
  playAudio() {
    this.audios.src.forEach((item) => {
      return item;
    });
    this.audio.src = this.audios.src[0];
    this.audio.play();
  }

  // Passa para a próxima musica
  nextAudio() {

    // i é o valor inicial do index que é igual a zero
    this.i += 1;

    //Se passar o taol da de item da string volta do zero novamente
    this.i = this.i % this.audios.src.length;

    // Atribui o próximo index ao src atual 
    this.audio.src = this.audios.src[this.i];

    // Ativa o play da musica 
    this.audio.play();
  }

  // Volta para musica anterior 
  prevAudio() {
    this.i === 0 ? this.i = this.audios.src.length : '';
    this.i = this.i - 1;
    this.audios.src[this.i];
    this.audio.src = this.audios.src[this.i];
    this.audio.play();
  }

  // Pega o evento de clique
  activeEvent() {
    this.goPlay.addEventListener('click', this.playAudio)
    this.goNext.addEventListener('click', this.nextAudio)
    this.goBack.addEventListener('click', this.prevAudio)
  }

  // Faz o bind dos eventos
  bindEvents() {
    this.playAudio = this.playAudio.bind(this);
    this.nextAudio = this.nextAudio.bind(this);
    this.prevAudio = this.prevAudio.bind(this);
  }

  // Inicia a Class
  init() {
    this.bindEvents();
    this.activeEvent();
    return this;
  }
};