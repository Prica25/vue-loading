

# vue-loading-twa

⏳ Loading inside a container or full screen for Vue.js. This is a improved extension from [[vue-element-loading](https://github.com/biigpongsatorn/vue-element-loading)]

# 💻 Install

```sh
npm install vue-loading-twa
```
# 🕹 Usage
```javascript
import Vue from 'vue'
import VueLoading from 'vue-loading-twa'

Vue.component('VueLoading', VueLoading)
```
or
```javascript
import VueLoading from 'vue-loading-twa'

export default {
  components: {
    VueLoading
  }
}
```

# 🔎 Example

## Inside container
```html
<div class="parent">
  <vue-loading :active="show" spinner="bar-fade-scale"/>
  <span>
    This is my content.
  </span>
</div>
```

## Full screen
```html
<body>
  <vue-loading :active="show" is-full-screen/>
</body>
```

## Adjust Spinner Color
Use the `color` parameter to set the color of the displayed spinner (does not affect custom spinner images).
```html
<div class="parent">
  <vue-loading :active="show" spinner="bar-fade-scale" color="#FF6700"/>
  <span>
    This is my content.
  </span>
</div>
```

## Set text
Use the `text` parameter to set the text which will appear below loader.
```html
<div class="parent">
  <vue-loading :active="show" spinner="bar-fade-scale" color="#FF6700" text="Please wait..."/>
  <span>
    This is my content.
  </span>
</div>
```

## Set text style
Use the `textStyle` parameter to set the style of text( you need to pass css-in-js way using camelCase exp. fontSize, backgroundColor etc).
```html
<div class="parent">
  <vue-loading :active="show" spinner="bar-fade-scale" color="#FF6700" text="Please textStyle={fontSize: '25px'}  wait..."/>
  <span>
    This is my content.
  </span>
</div>
```

## Adjust Spinner Size
Use the `size` parameter to set the size of the displayed spinner (does not affect custom spinner images).
```html
<div class="parent">
  <vue-loading :active="show" spinner="bar-fade-scale" size="128"/>
  <span>
    This is my content.
  </span>
</div>
```

## Adjust Spinner Animation Speed
Use the `duration` parameter to set the animation loop duration in seconds (does not affect custom spinner images).
```html
<div class="parent">
  <vue-loading :active="show" spinner="bar-fade-scale" duration="1.0"/>
  <span>
    This is my content.
  </span>
</div>
```

## Customize loader
```html
<div class="parent">
  <vue-loading :active="show">
    <img src="/static/pikachu.gif" width="55px" height="55px">
  </vue-loading>
</div>
```

## Text
```html
<div class="parent">
  <vue-loading :active="show1" :text="showText1" />
  <vue-loading :active="show2" :text="showText2" />
  <vue-loading :active="show3" :text="showText3" />
</div>
```

```javascript
showText1 = "Example" //Text appears normal bellow spinner
showText2 = { text: 'Example2' icon:  'Cog' } //Text appears with an icon on left side of string
showText3 = [{ text: 'Example3' icon:  'Cog' }, { text: 'Example3' icon:  'Cog' }] //Appears multiple strings bellow spinner

// Options for icons: 'Cog', 'Error', 'Check'
```

# 🌀 Spinner

<img src="https://raw.githubusercontent.com/biigpongsatorn/vue-element-loading/HEAD/static/spinner.png">


# ⚙️ Props
| Props       | Type          | Default  | Description  |
| ----------- |:--------------| ---------|--------------|
| active      | Boolean       | -        | Status for show/hide loading |
| spinner    | String        | spinner   | Spinner icon name: `spinner`, `mini-spinner`, `ring`, `line-wave`, `line-scale`, `line-down`, `bar-fade`, `bar-fade-scale` |
| color    | String        | #000        | Color of spinner icon |
| background-color    | String        | rgba(255, 255, 255, .9)        | Background color of spinner icon (for overlay) |
| size    | String        | "40"        | The size to display the spinner in pixels  (**NOTE:** this will not affect custom spinner images) |
| duration    | String        | "0.6"        | The duration of one 'loop' of the spinner animation, in seconds  (**NOTE:** this will not affect custom spinner images) |
| is-full-screen    | Boolean        | false        | Loader will overlay the full page |
| text   | String or Array    | -  | Text will appear below loader |
| text-style | Object | {} | Change style of the text below loader |


# 📄 License

[MIT](LICENSE)

