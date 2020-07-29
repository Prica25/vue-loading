<template>
  <svg :height="size" :width="size" viewBox="0 0 150.000000 121.000000">
    <g transform="translate(0.000000,121.000000) scale(0.090000,-0.090000)" :fill="color">
      <path d="M1300 1179 c-140 -76 -317 -227 -593 -509 l-215 -218 -142 129 c-154
139 -186 157 -252 139 -40 -11 -84 -57 -94 -96 -15 -58 4 -94 104 -198 119
-124 207 -225 278 -322 63 -85 99 -109 157 -101 54 7 79 34 201 216 199 297
431 561 637 724 52 42 101 88 107 102 27 58 2 128 -53 151 -49 20 -73 17 -135
-17z" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'check',
  props: {
    color: {
      type: String,
      default: '#CCC'
    },
    size: {
      type: String,
      default: '40'
    },
    duration: {
      type: String,
      default: '0.6s'
    }
  }
}
</script>

<style scoped>
svg {
  margin-right: 4px;
}
</style>
