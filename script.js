const bulbs = {
    data() {
        return {
            showImage: true,
        };
    },
    methods: {
        changeImage() {
            this.showImage = !this.showImage;
        }
    }
};
Vue.createApp(bulbs).mount('#app');