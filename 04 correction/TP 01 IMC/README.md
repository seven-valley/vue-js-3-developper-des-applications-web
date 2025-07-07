# TP 01 IMC correction

```vue
<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWeightScale } from '@fortawesome/free-solid-svg-icons'
library.add(faWeightScale)
import { ref } from 'vue'


const poids = ref('90')
const taille = ref('1.8')

const info = ref({
  imc: '',
  objectif: '',
  kilo: '',
  tranche: '',
})


const calculer = () => {
  info.value={
  imc: '',
  objectif: '',
  kilo: '',
  tranche: '',
}
  const imc2 = poids.value / (taille.value * taille.value)
  info.value.imc = imc2.toFixed(1)
  // calculer la tranche
  if (imc2 > 25) {
    // objectif en surpoids
    const objectif2 = 25 * parseFloat(taille.value) * parseFloat(taille.value)
    info.value.objectif = objectif2.toFixed(1)
    const kilo2 = objectif2 - parseFloat(poids.value)
    info.value.kilo = kilo2.toFixed(1)

  }
  if (imc2 < 18.5) {
    info.value.tranche = "maigreur"
    // objectif en maigreur
    const objectif2 = 18 * parseFloat(taille.value) * parseFloat(taille.value)
    info.value.objectif = objectif2.toFixed(1)
    const kilo2 = objectif2 - parseFloat(poids.value)
    info.value.kilo = kilo2.toFixed(1)
  } else if (imc2 < 25) {
    // 18.5 < imc < 25
    info.value.tranche = "normale"
  } else if (imc2 < 30) {
    info.value.tranche = "surpoids"
  } else if (imc2 < 35) {
    info.value.tranche = "obésité"
  } else if (imc2 < 40) {
    info.value.tranche = "obésité massive"
  } else if (imc2 > 40) {
    info.value.tranche = "obésité morbide"
  }
  poids.value = "";
  taille.value = "";
};

</script>

<template>
  <div class="container">
    <div class="row" id="app">
      <div class="col-4 pt-4">
        <h1 class="h3">Calculer votre IMC</h1>
        <label for="poids">Poids en kg.</label>
        <input aria-label="Poids" class="form-control" placeholder="Poids en kg." value="90" v-model="poids" />
        <label for="taille" class="mt-3">Taille en mètre</label>
        <input aria-label="Taille" class="form-control" placeholder="taille en mètre" value="1.8" v-model="taille" />

        <button class="btn btn-success mt-3 col-12" @click="calculer">
          <font-awesome-icon icon="weight-scale"  />
        </button>

        <div class="alert my-3 alert-secondary" v-if="info.imc.length >0">
          <div>{{ info.imc }}</div>
          <div>{{ info.tranche }}</div>
          <div  v-if="info.objectif.length">Objectif : {{ info.objectif }} ({{ info.kilo }} kg)</div>
        </div>
      </div>
    </div>
  </div>



</template>

<style scoped></style>
```