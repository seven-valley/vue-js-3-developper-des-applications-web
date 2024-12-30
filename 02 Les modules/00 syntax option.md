```vue
<script>
import Personne from './components/Personne.vue';
export default  {
  
  data() {
          return {
            titre: "Hello Vue 3!",
            info:'lorem ipsum'
          };
        },
        methods: {
            toUp(){
                console.log("abc");
                // transformer input -> MAJ
                this.titre = this.info.toUpperCase();
                this.info =''; // vider input
            },
            calculer(){
            }
        }
  
}
</script>
<template>
  <h1>{{ titre }}</h1>
  <h2>{{ info }}</h2>
  <input v-model="info">
  <button @click="toUp()">go</button>

</template>
```