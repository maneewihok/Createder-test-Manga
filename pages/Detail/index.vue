<template>
  <div class="mb-40 w-full flex mt-40">
    <div class="w-full flex md:flex shadow-lg mx-6 md:mx-auto max-w-lg md:max-w-2xl h-64">
      <img class="h-full w-full md:w-1/3 object-cover rounded-lg rounded-r-none pb-5/6" :src="image_url" />
      <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
        <div class="items-center">
          <h2 class="text-xl font-semibold mr-auto">{{ title }}</h2>
        </div>
        <p class="justify-end tracking-tighter mt-4">{{ synopsis }}</p>
        <div class="flex items-center justify-end mt-4 top-auto">
          <button @click="$router.push('/')" class="bg-black text-white px-2 py-2 rounded-md mr-3">BACK</button>
          <button @click="urlClick" class="bg-yellow text-black px-2 py-2 rounded-md">BUY</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      synopsis: '',
      image_url: '',
      url: ''
    }
  },
  beforeMount() {
    this.title = localStorage.title
    this.synopsis = localStorage.synopsis
    this.image_url = localStorage.image_url
    this.url = localStorage.url
  },
  methods: {
    urlClick() {
       window.open(this.url, "_blank");
       console.log(this.url)
    }
  }
}
</script>

<style>
</style>