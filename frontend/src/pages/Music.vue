<template>
  <Layout :bind="createFilter">
    <h1>Reenchantment</h1>
    <p class="font-semibold">Music by Victor Fisher</p>

    <!-- Opportunity for modularization of select elements -->
    <div>
      <div class="block sm:inline">
        <button v-on-clickaway="dropdown_closed" type="button" v-on:click="dropdown_open = !dropdown_open" class="px-2 py-1 rounded-sm hover:bg-gray-300 focus:bg-gray-200 bg-gray-200 block sm:inline mb-2 sm:mb-0 sm:mr-4">
          <span>{{ filters.recordingtype }}</span>
          <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': dropdown_open, 'rotate-0': !dropdown_open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform -mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <transition
            enter-active-class="transition duration-100 ease-out"
            leave-active-class="transition duration-75 ease-in"
            enter-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
          <div v-if="dropdown_open" class="absolute sm:mt-2 mb-5 origin-top-right rounded-md shadow-lg w-48 z-40">
            <div class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
              <button type="button" class="w-full text-left block px-4 py-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer" @click="filters.recordingtype='All Songs'; dropdown_open=false">All Songs</button>
              <button type="button" class="w-full text-left block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer" @click="filters.recordingtype='Recordings'; dropdown_open=false">Recordings</button>
              <button type="button" class="w-full text-left block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer" @click="filters.recordingtype='Demos'; dropdown_open=false">Demos</button>
              <button type="button" class="w-full text-left block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer" @click="filters.recordingtype='Drafts'; dropdown_open=false">Drafts</button>
              <button type="button" class="w-full text-left block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-sm md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer" @click="filters.recordingtype='Videos'; dropdown_open=false">Videos</button>
            </div>
          </div>
        </transition>
      </div>
      <!-- <select v-model="filters.recordingtype">
        <option>All Songs</option>
        <option>Recordings</option>
        <option>Demos</option>
        <option>Drafts</option>
        <option>Videos</option>
      </select> -->
      <button type="button" v-on:click="reverse" class="px-2 py-1 rounded-sm hover:bg-gray-300 focus:bg-gray-200 bg-gray-200 block sm:inline mt-4 sm:mt-0 mb-2 sm:mb-0 sm:mr-4">Reverse</button>
      <button type="button" v-on:click="resetData" class="px-2 py-1 rounded-sm hover:bg-gray-300 focus:bg-gray-200 bg-gray-200 block sm:inline mt-4 sm:mt-0">Refresh</button>
    </div>

    <!-- <select v-model="filters.genre" style="margin-left: 20px">
      <option>All Styles</option>
      <option>Rock</option>
      <option>Metal</option>
    </select> -->

    <div class="mb-2">
      <input id="search" v-model="search" class="field ~neutral !normal my-4" placeholder="Search" type="search"> <!-- type="text" -->
      <!-- <button type="button" v-on:click="clearSearch" class="button ~neutral !normal mb-1 ml-3">Clear</button> -->
    </div>

    <h3 v-if="filterData.length > 0">Results: {{ filterData.length }}</h3>
    <h3 v-else>No results.</h3>

    <div v-for="(song, count) in filterData" :key="count">
      <h2>
        <span>{{ song.count }}. </span>
        <g-link v-bind:to="'/music/' + song.slug" class="no-underline hover:underline">
        {{ song.title }}
        </g-link>
      </h2>
    </div>
  </Layout>
</template>

<page-query>
  query {
    songs: allStrapiSongs (sortBy: "title", order: ASC) { 
      edges{
        node {
          id
          title
          slug
          recordings {
            multitrack
          }
          videos {
            id
          }
        }
      }
    }
  }
</page-query>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  mixins: [ clickaway ],
  metaInfo: {
    title: 'Music'
  },
  methods: {
    // Vue Router Data Fetching
    fetchData() {
      this.$page.songs.edges.map((edge) => {
        let song = edge.node
        // song.recordingtype = "All Songs"

        if (song.videos.length > 0) {
          song.hasVideo = true
        } else {
          song.hasVideo = false
        }

        if (song.recordings.length > 0) {
          song.recordingtype = "Demos"

          song.recordings.map((recording) => {
            if (recording.multitrack) {
              song.recordingtype = "Recordings"
            }
          })
        } else if (song.recordings.length == 0 && song.hasVideo == false) {
          song.recordingtype = "Drafts"
        }

        this.songData.push(song)
        this.songData.sort((a, b) => a.title.localeCompare(b.title))
      })

    },
    reverse () {
      this.isReversed = !this.isReversed
    },
    clearSearch () {
      this.search = ""
    },
    resetData () {
      Object.assign(this.$data, this.$options.data.call(this))
      this.fetchData()
    },
    dropdown_closed () {
      this.dropdown_open = false
    }
  },
  data () {
    return {
      isReversed: false,
      songData: [],
      filterData: [],
      filters: {
        recordingtype: "All Songs"
        // , genre: "All Styles"
      },
      search: "",
      dropdown_open: false,
      mobile_open: false
    }
  },
  created () {
    this.fetchData()
  },
  mounted() {
    if (sessionStorage.isReversed) {
      if (sessionStorage.isReversed == 'true') {
        this.isReversed = true
      } else if (sessionStorage.isReversed == 'false') {
        this.isReversed = false
      }
    }
    if (sessionStorage.search) {
      this.search = sessionStorage.search
    }
    if (sessionStorage.filters) {
      this.filters = JSON.parse(sessionStorage.filters)
    }
  },
  watch: {
    isReversed(value) {
      sessionStorage.isReversed = value
    },
    search(value) {
      sessionStorage.search = value
    },
    filters: {
      handler(value){
        sessionStorage.filters = JSON.stringify(value)
      },
      deep: true
    }
  },
  computed: {
    createFilter () {
      let filterData = this.songData
      for (let [key, value] of Object.entries(this.filters)) {
        if (value.startsWith("All")) {
          break
        } else if (value == "Videos") {
            filterData = filterData.filter(song => song.hasVideo == true)
        } else {
          filterData = filterData.filter(song => song[key] == value)
        }
      }

      filterData = filterData.filter(song => song.title.toLowerCase().includes(this.search.toLowerCase()))
      
      let filterCount = 1
      filterData.map((song) => {
        song.count = filterCount
        filterCount = filterCount + 1
      })

      if (this.isReversed) {
        filterData.reverse()
      }

      this.filterData = filterData
      return this.filterData

      // Add filter song count as an attribute
    }
  }
}
</script>

<style>
#search {
  width: 17rem;
}

#search:focus {
  outline: 0;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}

/* input, select, textarea, button {
  font-size: 16px;
} */
</style>