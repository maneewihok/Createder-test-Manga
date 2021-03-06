<template>
  <div class="flex flex-col min-h-screen">
    <nuxt class="mt-10" />
    <div class="fixed w-full top-0">
      <TheHeader />
    </div>
    <TheFooter class="mt-40" />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
<style scoped>
</style>