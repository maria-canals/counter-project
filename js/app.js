const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      textoActual: "",
      green: false,
      red: false,
    };
  },
  methods: {
    updateCounter() {
      this.counter++;
      if (this.counter === 0) {
        this.green = false;
        this.red = false;
      } else if (this.counter > 0) {
        this.green = true;
        this.red = false;
      }
    },
    removeCounter() {
      this.counter--;
      if (this.counter === 0) {
        this.green = false;
        this.red = false;
      } else if (this.counter < 0) {
        this.green = false;
        this.red = true;
      }
    },
  },
});

app.mount("#container");
