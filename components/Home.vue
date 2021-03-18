<template>
  <div class="bg-white">
    <!----Slide---->
    <div v-show="showCover" class="carousel relative shadow-2xl bg-white mt-6">
      <div class="carousel-inner relative overflow-hidden w-full">
        <!--Slide 1-->
        <input
          class="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div class="carousel-item absolute opacity-0" style="height: 70vh">
          <div class="block h-full w-full bg-black text-white text-5xl text-center">
            <img src="https://www.themebeta.com/files/windows/images/201902/22/7b60f4a9a07c34ff596572e41c751a27.jpeg" />
          </div>
        </div>
        <label
          for="carousel-3"
          class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >‹</label
        >
        <label
          for="carousel-2"
          class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >›</label
        >

        <!--Slide 1-->
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />
        <div class="carousel-item absolute opacity-0" style="height: 70vh">
          <div class="block h-full w-full bg-orange text-white text-5xl text-center">
            <img src="https://www.themebeta.com/files/windows/images/201902/22/7b60f4a9a07c34ff596572e41c751a27.jpeg" />
          </div>
        </div>
        <label
          for="carousel-1"
          class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >‹</label
        >
        <label
          for="carousel-3"
          class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >›</label
        >

        <!--Slide 2-->
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />
        <div class="carousel-item absolute opacity-0" style="height: 70vh">
          <div class="block h-full w-full bg-primary-blue text-white text-5xl text-center">
            <img class="w-full" src="https://images5.alphacoders.com/606/606284.jpg" />
          </div>
        </div>
        <label
          for="carousel-2"
          class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >‹</label
        >
        <label
          for="carousel-1"
          class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >›</label
        >

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >•</label
            >
          </li>
          <li class="inline-block mr-3">
            <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >•</label
            >
          </li>
          <li class="inline-block mr-3">
            <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
              >•</label
            >
          </li>
        </ol>
      </div>
    </div>
    <!--search--->
    <div v-show="showSearch" class="pt-2 relative mx-auto text-gray-600">
      <input
        @keyup.enter="search($event)"
        v-model="query"
        class="border-2 border-gray bg-white w-full h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button @click="search" type="submit" class="absolute right-0 top-0 mt-5 mr-4">
        <svg
          class="text-gray-600 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style="enable-background: new 0 0 56.966 56.966"
          xml:space="preserve"
          width="512px"
          height="512px"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
      </button>
      <div class="ml-3 mt-3 text-danger">Ex.Dragon ball , One Piece ...</div>
    </div>
    <div v-show="showReccom" class="p-24 flex flex-wrap items-center justify-center">
      <div
        v-for="(recom, index) in recom"
        :key="index"
        class="bg-black flex-shrink-0 m-6 relative overflow-hiddenrounded-lg max-w-xs shadow-lg"
      >
        <div class="flex justify-end">
          <svg class="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"
            ></path>
          </svg>
        </div>
        <svg
          class="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style="transform: scale(1.5); opacity: 0.1"
        >
          <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
          <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div class="fix-size relative pt-10 px-20 flex items-center justify-center">
          <img class="relative w-40" :src="recom.image_url" />
        </div>
        <div class="relative text-white px-6 pb-6 mt-6">
          <div class="fix-sizex flex justify-start">
            <NuxtLink to="/detail"
              ><span
                @click="RecomClick(index)"
                class="cursor-pointer hover:text-orange block font-semibold text-xl mt-10"
                >{{ recom.title }}</span
              ></NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="bg-danger text-xl text-white w-20 text-center rounded">แนะนำ</div>
    </div>
    <div v-show="showManga" class="p-24 flex flex-wrap items-center justify-center mr-20">
      <div
        v-for="(manga, mal_id) in manga"
        :key="mal_id"
        class="bg-black flex-shrink-0 m-6 relative overflow-hiddenrounded-lg max-w-xs shadow-lg"
      >
        <div class="flex justify-end">
          <svg class="h-6 w-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"
            ></path>
          </svg>
        </div>
        <svg
          class="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style="transform: scale(1.5); opacity: 0.1"
        >
          <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
          <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
        </svg>
        <div class="fix-size relative pt-10 px-20 flex items-center justify-center">
          <img class="relative w-40" :src="manga.image_url" />
        </div>
        <div class="relative text-white px-6 pb-6 mt-6">
          <div class="fix-sizex flex justify-start">
            <NuxtLink to="/detail">
              <span
                @click="MangaClick(mal_id)"
                class="cursor-pointer hover:text-orange block font-semibold text-xl mt-10"
                >{{ manga.title }}</span
              >
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- LOGO -->
    <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
      <div>
        <a
          title="Buy me a beer"
          href="https://www.buymeacoffee.com/scottwindon"
          target="_blank"
          class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
        >
          <img
            class="object-cover object-center w-full h-full rounded-full"
            src="https://mangageliyor.files.wordpress.com/2008/04/wall2_11.jpg"
          />
        </a>
      </div>
    </div>
    <div v-show="btMORE" class="flex items-center justify-end mt-4 top-auto">
      <button @click="more" class="bg-gray px-4 py-2 rounded mr-auto hover:underline">MORE..</button>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      query: '',
      btMORE: false,
      recom: [],
      manga: [],
      detail: [],
      showCover: true,
      showSearch: true,
      showManga: true,
      showReccom: true
    }
  },
  async fetch() {
    const url = await this.$http.$get(`https://api.jikan.moe/v3/search/anime?q=onepiech&limit=3`)
    this.recom = url.results
  },
  methods: {
    async search(event) {
      if (this.query !== '') {
        const url = await this.$http.$get(`https://api.jikan.moe/v3/search/anime?q=${this.query}&limit=5`)
        this.manga = url.results
        this.btMORE = true
        this.showReccom = false
      } else {
        return
      }
    },
    async more() {
      const url = await this.$http.$get(`https://api.jikan.moe/v3/search/anime?q=${this.query}&page=1`)
      this.manga = url.results
      this.btMORE = false
    },
    MangaClick(mal_id) {
      localStorage.setItem('image_url', this.manga[mal_id].image_url)
      localStorage.setItem('title', this.manga[mal_id].title)
      localStorage.setItem('synopsis', this.manga[mal_id].synopsis)
    },
    RecomClick(mal_id) {
      localStorage.setItem('image_url', this.recom[mal_id].image_url)
      localStorage.setItem('title', this.recom[mal_id].title)
      localStorage.setItem('synopsis', this.recom[mal_id].synopsis)
    }
  }
}
</script>
<style scoped>
.fix-size {
  height: 200px;
  width: 100%;
}
.fix-sizex {
  height: 120px;
  width: 100%;
}
.w-input {
  margin-top: 10px;
  margin-left: 2px;
  margin-right: 2px;
}
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}
.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}
#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}
#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
  color: #2b6cb0; /*Set to match the Tailwind colour you want the active one to be */
}
</style>