const RootComponent = {
  data() {
    return {
      votrePseudo: "",
      motDePasse: "",
      verifDate: "",
    };
  },
  computed: {
    verifPseudo: function () {
      return this.votrePseudo.length <= 16 && this.votrePseudo.length >= 8;
    },
    verifMdp: function () {
      return this.motDePasse.length >= 8;
    },
    verifDate: function () {
      const now = new Date().getTime();
      const date = new Date(this.verifDate).getTime();
      return (now = date >= 56800000000);
    },
  },
};
Vue.createApp(RootComponent).mount("#root");
