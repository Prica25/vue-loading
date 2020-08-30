<template>
  <div>
    <v-row class="ma-1 mb-4 align-center justify-center">
      <v-col
        class="pa-0"
        cols="3"
        style="border: 1px solid rgba(0,0,0,0.14); height: 445px"
      >
        <vue-loading
          :active="loading"
          :is-full-screen="fullScreen"
          background-color="rgba(200,200,200,1)"
          color="green"
          spinner="Custom"
          :svgCode="
            codeSVG !== '' && codeSVG !== '<!-- Insert SVG here -->'
              ? codeSVG
              : undefined
          "
          :text="textCode"
          duration="1.5"
          size="64"
        ></vue-loading>
      </v-col>
    </v-row>
    <v-row class="ma-1 align-center justify-center">
      <v-col
        class="pa-0 mx-2"
        cols="3"
        style="border: 1px solid rgba(0,0,0,0.14); height: 300px"
      >
        <prism-editor
          class="my-editor"
          v-model="codeJS"
          :highlight="highlighterJS"
          line-numbers
          :readonly="!text"
        ></prism-editor>
      </v-col>
      <v-col
        class="pa-3 mx-2"
        cols="3"
        style="border: 1px solid rgba(0,0,0,0.14); height: 300px"
      >
        <v-switch v-model="text" label="Descrição no loader"></v-switch>
        <v-switch v-model="customSpinner" label="Custom Spinner"></v-switch>
        <v-btn @click="fullScreenActivate" color="primary">FullScreen</v-btn>
      </v-col>
      <v-col
        class="pa-0 mx-2"
        cols="3"
        style="border: 1px solid rgba(0,0,0,0.14); height: 300px"
      >
        <prism-editor
          class="my-editor"
          v-model="codeSVG"
          :highlight="highlighterSVG"
          line-numbers
          :readonly="!customSpinner"
        ></prism-editor>
      </v-col>
    </v-row>
  </div>
</template>

<script>
//Imports para o prism editor
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'
import 'prismjs/themes/prism-tomorrow.css'

export default {
  components: {
    PrismEditor,
  },
  data: () => ({
    loading: true,
    fullScreen: false,
    codeJS: '// Insert JS here',
    codeSVG: '<!-- Insert SVG here -->',
    text: false,
    customSpinner: false,
  }),
  methods: {
    fullScreenActivate() {
      this.fullScreen = true
      setTimeout(() => {
        this.fullScreen = false
      }, 1000)
    },
    highlighterJS(code) {
      return highlight(code, languages.js)
    },
    highlighterSVG(code) {
      return highlight(code, languages.svg)
    },
  },
  computed: {
    textCode() {
      function IsJsObject(str) {
        try {
          eval(str)
        } catch (e) {
          console.log(e)
          return false
        }
        return true
      }

      let code = this.codeJS.replace('// Insert JS here', '')
      if (code !== '' && IsJsObject(code)) {
        return eval(code)
      } else {
        return code
      }
    },
  },
}
</script>

<style>
.my-editor {
  background: #1e1e1e;
  color: #ccc;
  font-family: 'Roboto', Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

.prism-editor__textarea:focus {
  outline: none;
}

.v-image__image {
  height: 90% !important;
}
</style>
