const vm = new Vue({
    el: '#app',
    data: {
    total: $("#total"),
    buffered: $("#buffered"),
    progress: $("#current"),
    duration: $("#duration"),
    currentTime: $("#currenttime"),
    hasHours: false,
        id: ';',
        pl: false,
        ic: 'fas fa-play'
    },
    methods: {
        like() {
            axios.get('api/like').then(response => {
                this.id = response.data
            })
            alert(this.id)
        },
        play() {
            alert(this.buffered)
            if (this.pl) {
                this.$refs.videoRef.pause()
                this.pl = false
                this.ic = 'fas fa-play'
            } else {
                this.$refs.videoRef.play()
                this.pl = true;
                this.ic = 'fas fa-pause'
            }

        }
    }
});
