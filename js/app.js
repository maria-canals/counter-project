const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      textoActual: "",
    };
  },
  methods: {
    updateCounter(num) {
      this.counter += num;
    },
  },
});

app.mount("#container");
