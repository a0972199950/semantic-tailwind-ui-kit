<template>
  <div id="app">
    <p class="benchmark__key">benchmark__key</p>

    <hr />
  
    <jh-button type="primary">button</jh-button>

    <hr>
    
    <div style="width: 300px; border: 1px grey dashed;">
      <jh-updates-for-you
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
  </div>
</template>

<script>

export default {
  name: 'App',

  methods: {
    seeDetail () {
      alert('Click see detail')
    }
  }
}
</script>

<style>
.benchmark__key {
  color: red;
}
</style>
