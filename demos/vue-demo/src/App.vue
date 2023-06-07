<template>
  <div id="app">  
    <jh-button type="primary">button</jh-button>

    <hr>
    
    <div style="width: 300px; border: 1px grey dashed;">
      <jh-updates-for-you
        :locale="locale"
        :benchmarks.prop="[
          {
            key: 'INDUSTRY_BENCHMARK_INDEX',
            text: 'Industry benchmark index',
            score: 4
          },
  
          {
            key: 'FININCIAL_HEALTHINESS',
            text: 'Financial healthiness',
            score: 0
          },
  
          {
            key: 'DATA_QUALITY',
            text: 'Data Quality',
            score: 10
          },
        ]"
        @detailBtnClick="seeDetail"
      />
    </div>

    <button @click="changeLocale('en')">Change locale to en</button>
    <button @click="changeLocale('zh-TW')">Change locale to zh-TW</button>
  </div>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      locale: 'en'
    }
  },

  methods: {
    seeDetail () {
      alert('Click see detail')
    },

    changeLocale (val) {
      this.locale = val
    }
  }
}
</script>

<style>

</style>
