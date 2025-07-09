# TP04 Domotique correction

Appareil.vue
```vue
<script setup>


defineProps({
  appareil: Object,
  indice: Number,
  modifier: Function
})


</script>

<template>
  <li class="list-group-item" :class="appareil.status ? 'list-group-item-success' : 'list-group-item-danger'">
    <h4>{{ appareil.name }}</h4>
    <button class="btn btn-success me-3" @click="modifier(indice)">ON</button>
    <button class="ml-2 btn btn-danger" @click="modifier(indice)">OFF</button>
  </li>
</template>
```

App.vue
```vue
<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faPlus)
import { ref, computed } from 'vue'
import Appareil from './components/Appareil.vue'
const nom = ref('')
const appareils = ref([])
const modifier = (i) => {
  appareils.value[i].status = !appareils.value[i].status;
}
const modifierAll = (status) => {
  appareils.value.map(a => { a.status = status });
}
const ajouter = () => {
  const appareil = { name: nom.value, status: true }
  nom.value = ''
  appareils.value.push(appareil)
}
</script>

<template>

  <div class="container mb-3">
    <div class="row">
      <div class="col-4" id="app">
        <h2>Les Appareils</h2>

        <input type="text" class="form-control" placeholder="Appareil" v-model="nom" />

        <button class="btn btn-secondary my-3" @click="ajouter()">
           <font-awesome-icon icon="plus"  />
        </button>

        <ul class="list-group">
          <Appareil v-for="(appareil, i) in appareils" :appareil="appareil" :key="i" :indice="i" :modifier="modifier" />


        </ul>
        <br />
        <button class="btn btn-success me-3" @click="modifierAll(true)">ALL ON</button>

        <button class="ml-2 btn btn-danger" @click="modifierAll(false)">ALL OFF</button>
      </div>
    </div>
  </div>

</template>

<style scoped></style>

```