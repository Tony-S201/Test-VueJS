new Vue({
  el: '#app',
  data: {
      message: 'Salut ',
      success: true,
      goodbye: 'Aurevoir !',
      persons: ['Sarah &', ' Tony'],
      ecriture: '',
      banane: 'banane',
      bananeepluchee: 'banane épluchée',
      hedgehog: 'hérisson',
      messageaccueil: 'Vous regardez cette page le ' + new Date().toLocaleString(),
  },
  methods: {
    close: function(){
        this.success = false
    }
  }
})