<template>
  <form @submit.prevent="getPic" class="m-2">
    <input v-model="state.newDate" type="date" id="Test_Date" class="m-2">
    <button class="btn px-2 py-0" type="submit">
      <i class="mdi mdi-earth f-18"></i>
    </button>
  </form>
  <div v-if="date" class="container-fluid">
    <div class="row d-felx justify-content-center">
      <div class="col-6">
        <div class="card rounded bg-warning shadow">
          <div class="card-header m-1">
            <h1>NASA PHOTOS</h1>
            <h3>Date of photo: {{ date }}</h3>
            <h5>Description of photo:</h5>
            <p>{{ description }}</p>
            <div class="card-body p-0 m-0">
              <img :src="url" alt="" class="img-fluid p-0 m-0 img-sizing rounded-bottom">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Pop from '../utils/Pop'
import { calendarPicService } from '../services/CalendarPicService'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  setup() {
    const state = reactive({
      newDate: ''
    })
    return {
      state,
      description: computed(() => AppState.description),
      date: computed(() => AppState.date),
      url: computed(() => AppState.img),
      async getPic() {
        try {
          await calendarPicService.findPicByDate(state.newDate)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style>
.img-sizing{

  height:80vh;

}
</style>
