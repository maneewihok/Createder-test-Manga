<template>
  <div class="p-4 md:py-2 bg-black border-b border-light">
    <div class="header mx-auto flex items-center justify-center">
      <div
        @click="$router.push('/')"
        class="cursor-pointer transform hover:scale-125 logo font-bold text-xl text-black text-white"
      >
        MANGA
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  }
}
</script>

<style scoped>
</style>