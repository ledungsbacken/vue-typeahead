<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <typeahead
        v-model="selectedId"
        :data="data"
    />
  </div>
</template>

<script>
import Typeahead from './components/Typeahead.vue'

export default {
    name: 'app',
    components: {
        Typeahead
    },
    data() {
        return {
            selectedId: null,
            data: [
                {
                    id: 1,
                    label: 'thing1',
                },
                {
                    id: 2,
                    label: 'something2',
                },
                {
                    id: 3,
                    label: 'thingsome3',
                },
                {
                    id: 4,
                    label: 'some4',
                },
            ]
        };
    },
    // computed: {
    //     selectedLabel() {
    //         if (!this.selectedId) {
    //             return '';
    //         }
    //         return this.data.find(e => e.id === this.selectedId).label;
    //     },
    // },
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
