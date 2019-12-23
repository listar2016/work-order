<template>
  <div id="app">
     <work-order></work-order>
  </div>
</template>

<script>
import WorkOrder from './components/WorkOrder.vue';
export default {
  name: 'app',
  components: {
    WorkOrder
  }
}
</script>

