const { createApp } = Vue

createApp({
  data() {
    return {
      images: ['./img/01.jpg', './img/02.jpg', './img/03.jpg', './img/04.jpg', './img/05.jpg'],
      imageIndex: 0
    }
  },

  methods:{
    increase(){
      if(this.imageIndex >= this.images.length - 1){
        this.imageIndex = 0
      }else{
        this.imageIndex++
      }
    },
    decrease(){
      if(this.imageIndex <= 0){
        this.imageIndex = this.images.length - 1
      }else{
        this.imageIndex--
      }
    }
  }
}).mount('#app')