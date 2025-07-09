# TP 04 Conso voiture

```vue
<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWeightScale } from '@fortawesome/free-solid-svg-icons'
library.add(faWeightScale)
import { ref,computed } from 'vue'

  // déclarer une reference
const littre = ref('');
const km = ref('');

const conso = computed(() => {
  const kmValue = parseFloat(km.value);
  const litreValue = parseFloat(littre.value);    
  const consoValue = (litreValue / kmValue) * 100;
  if (isNaN(consoValue) || !isFinite(consoValue)) {
    return ''; // retourne une chaine vide si la valeur n'est pas un nombre
  }else{
      return consoValue.toFixed(2); // retourne la consommation arrondie à 2 décimales
  }
})

</script>

<template>
  <div class="container">
    <div class="row" id="app">
      <div class="col-4 pt-4">
        <h1 class="h3">Calculer votre consomation</h1>
        <input aria-label="litre" v-model="littre" class="form-control" placeholder="Litres d'essence" />

        <input aria-label="km" v-model="km" class="form-control my-3" placeholder="Kilomètres" />
     


        <div class="alert alert-success mt-4" role="alert" v-if="conso.length > 0">
          <h3>Conso : <b>{{conso}}</b> Litres/100km</h3>
          <p>Normal</p>
        </div>

      </div>
    </div>
  
  </div>



</template>

<style scoped></style>
```