export default {
  name: 'login-registro',
  components: {


  },
  props: [],
  data () {
    return {
blLoginVisible: true,
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
clickBotonRegistrarse:function (event) {
  this.blLoginVisible=false;
},
clickBotonCancelar:function (event) {
  this.blLoginVisible=true;
}

  }
}
