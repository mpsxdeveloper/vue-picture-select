const app = Vue.createApp({
    data() {
        return {            
            pictures: [
                { titulo: '', img: 'assets/1.jpg', isFav: false },
                { titulo: '', img: 'assets/2.jpg', isFav: false },
                { titulo: '', img: 'assets/3.jpg', isFav: false }
            ]
        }
    },
    methods: {        
        toggleFav(picture) {
            picture.isFav = !picture.isFav
        }
    }
})

app.mount('#app')
