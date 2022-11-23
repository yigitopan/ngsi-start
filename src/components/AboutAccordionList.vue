<template>
  <div>
      <ul>
          <li v-for="index in list" :key="index._id" class="py-4 px-2 my-2 bg-mainColor">

            <button class="text-white flex items-center text-left" @click="contentVisible === index._id ? contentVisible = false : contentVisible = index._id">
                <div class="h-6 w-6 mr-4 ml-2 bg-white transition duration-500 rounded-full" :class="{'bg-black': (contentVisible === index._id)}"></div>    {{ index.title }}
            </button>

              <p class="pt-4 text-sm text-white" v-if='contentVisible === index._id'>{{ index.item }}</p>

          </li>
      </ul>
  </div>
</template>

<script>
  export default {
      name: "sameName",
      data() {
          return {
              contentVisible: false,
              list: [
                  {
                  _id: "1",
                  title: "Why does a renovation project cost so much?",
                  item: "Paetos dignissim at cursus elefeind norma arcu. Pellentesque accumsan est in tempus etos ullamcorper, sem quam suscipit lacus maecenas tortor. Erates vitae node metus. Suspendisse gravida ornare non mattis velit rutrum modest. Morbi suspendisse a tortor velim pellentesque uter justo magna gravida et maecenas."
                  },
                  {
                  _id: "2",
                  title: "What is the timeline for the project?",
                  item: "Paetos dignissim at cursus elefeind norma arcu. Pellentesque accumsan est in tempus etos ullamcorper, sem quam suscipit lacus maecenas tortor. Erates vitae node metus. Suspendisse gravida ornare non mattis velit rutrum modest. Morbi suspendisse a tortor velim pellentesque uter justo magna gravida et maecenas."
                  },
                  {
                  _id: "3",
                  title: "Why does a renovation project cost so much?",
                  item: "Paetos dignissim at cursus elefeind norma arcu. Pellentesque accumsan est in tempus etos ullamcorper, sem quam suscipit lacus maecenas tortor. Erates vitae node metus. Suspendisse gravida ornare non mattis velit rutrum modest. Morbi suspendisse a tortor velim pellentesque uter justo magna gravida et maecenas."
                  },
                  {
                  _id: "4",
                  title: "What is the timeline for the project?",
                  item: "Paetos dignissim at cursus elefeind norma arcu. Pellentesque accumsan est in tempus etos ullamcorper, sem quam suscipit lacus maecenas tortor. Erates vitae node metus. Suspendisse gravida ornare non mattis velit rutrum modest. Morbi suspendisse a tortor velim pellentesque uter justo magna gravida et maecenas."
                  }
              ]
          };
      },
  };
</script>