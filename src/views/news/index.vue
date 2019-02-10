<template>
  <div>
    我是新闻aasdasd
  </div>
</template>
<script>
import newsMixin from '../../mixins/mixin.js'
export default {
  name: 'news',
  mixins: [newsMixin],
  data () {
    return {}
  },
  async created () {
    await this.NEWS_LIST()
    console.log(this.getNewsResponse, 'created')
  }
}
</script>
