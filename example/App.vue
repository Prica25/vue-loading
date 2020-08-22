<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <span style="font-size: 26px"><b>Vue</b> Loading</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/Prica25/vue-loading" target="_blank" text>
        <span class="mr-2">GITHUB</span>
      </v-btn>
      <v-btn
        href="https://www.npmjs.com/package/vue-loading-twa"
        target="_blank"
        text
      >
        <span class="mr-2">NPM</span>
      </v-btn>
    </v-app-bar>

    <v-content class="align-center text-center">
      <TestComponent />
    </v-content>
  </v-app>
</template>

<script>
import TestComponent from './components/TestComponent'

export default {
  name: 'App',

  components: {
    TestComponent,
  },

  data: () => ({
    //
  }),
}
</script>
