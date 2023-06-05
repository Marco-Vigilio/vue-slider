/**
 * 
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
Consigli del giorno:
regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe :occhiolino:
:githubparrot: :githubparrot: Buon lavoro e buon divertimento! :githubparrot: :githubparrot:
 * 
 */

let { createApp } = Vue;

createApp({
    data(){
        return{
            arrayImg: ["01.webp","02.webp","03.webp","04.webp","05.webp"],
            activeIndex: 0,
        }
    },
    methods:{
        previewImage(){
            if(this.activeIndex <= 0){
                this.activeIndex = (this.arrayImg.length - 1);
            }
            else{
                this.activeIndex--;
            }
        },
        nextImage(){
            if(this.activeIndex === (this.arrayImg.length - 1)){
                this.activeIndex = 0;
            }
            else{
                this.activeIndex++;
            }
        }
    }
}).mount("#app");