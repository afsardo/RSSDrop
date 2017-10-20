<template>
  <div id="app">
    <h1 class="text-center">RSS Feeds</h1>
    <RSSFeed/>
  </div>
</template>

<script>
import RSSFeed from './components/RSSFeed'

export default {
  name: 'app',
  components: {
    RSSFeed
  }
}
</script>

<style>
#app {
  padding: 20px;
}
</style>