export default class Player {
  constructor(goPlay, goBack, goNext, name, photo) {
    this.goNext = document.querySelector(goNext);
    this.goBack = document.querySelector(goBack);
    this.goPlay = document.querySelector(goPlay);
    this.name = document.querySelector(name);
    this.photo = document.querySelector(photo);
    this.body = document.body;
    this.i = 0;
    this.audio = new Audio();


    this.audios = {
      src: ["../../assets/audio/hanging.mp3", "../../assets/audio/Snacks.mp3", "../../assets/audio/Still.mp3"],
      name: ["Hanging", "Snacks", "Still"],
      photo: ["../../assets/img/musica.jpg", "../../assets/img/musica-2.jpg", "../../assets/img/musica-3.jpg"],
    };
  }

  // da o play na musica
  playAudio() {

    this.audios.src.forEach((item) => {
      return item;
    });
    this.audio.src = this.audios.src[0];
    this.audio.play();
    this.changeName();

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
    this.changeName();

  }

  // Volta para musica anterior 
  prevAudio() {
    this.i === 0 ? this.i = this.audios.src.length : '';
    this.i = this.i - 1;
    this.audios.src[this.i];
    this.audio.src = this.audios.src[this.i];
    this.audio.play();
    this.changeName();

  }

  // Pega o nome pelo index e coloca na tela com innerText
  changeName() {
    this.name.innerText = this.audios.name[this.i];
    this.changePhoto();
    this.body.style.backgroundImage = `url(${this.audios.photo[this.i]})`

  }
  changePhoto() {
    
    this.photo.src = this.audios.photo[this.i];
  }

  // Pega o evento de clique
  activeEvent() {
    this.goPlay.addEventListener('click', this.playAudio);
    this.goNext.addEventListener('click', this.nextAudio);
    this.goBack.addEventListener('click', this.prevAudio);
  }

  // Faz o bind dos eventos
  bindEvents() {
    this.playAudio = this.playAudio.bind(this);
    this.nextAudio = this.nextAudio.bind(this);
    this.prevAudio = this.prevAudio.bind(this);
  }

  // Inicia a Class
  init() {
    // Inicia o background como default
    this.body.style.backgroundImage = `url(${this.audios.photo[this.i]})`
    this.bindEvents();
    this.activeEvent();
    return this;
  }
};