<template>
  <h1>tester tester tester</h1>
  <form>
    <input type="datetime-local" id="Test_DatetimeLocal">
    <button>Submit</button>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  setup() {
    const state = reactive({
      date: ''
    })
    return {
      state
    }
  }

}
</script>

<style>

</style>
