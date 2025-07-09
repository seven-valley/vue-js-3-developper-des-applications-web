<script setup>
import { ref, onMounted,reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { getGuest ,updateGuest} from '../services/api'
library.add(faFloppyDisk)
const route = useRoute()
const id = route.params.id
const nom = ref('')
const prenom = ref('')

const router = useRouter()
onMounted(async () => {
   const data = await getGuest(id);
   console.log(data)
     if (data) {
       prenom.value=data.prenom
       nom.value=data.nom
    }
    else{
        router.push({   name:'Error'})
    }
})
const modifier =async ()=>{
        const data = {prenom:prenom.value,nom:nom.value}
        await updateGuest(id,data);
        router.push({   name:'Builder'})
}
</script>

<template>
<div className="container">
        <div className="row">
          <div className="col-8">
            <div className="bg-gris p-4">
             
                <div className="row">
                  <div className="col-4">
                    <input
                      aria-label="Prenom"
                      className="form-control"
                      placeholder="Prenom"
                      name="prenom"
                      v-model = "prenom"
                    />
                  </div>
                  <div className="col-4">
                    <input
                      aria-label="Nom"
                      className="form-control"
                      placeholder="Nom"
                      name="nom"
                     v-model = "nom"
                    />
                  </div>
                  <div className="col-1">
                    <button className="btn btn-primary" @click="modifier()">
                       <font-awesome-icon icon="floppy-disk" />
                    </button>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
</template>

