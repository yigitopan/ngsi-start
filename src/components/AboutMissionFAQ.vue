<script setup>
import AboutAccordionListVue from './AboutAccordionList.vue';
</script>


<style>
.faq-title::after {
    display: block;
    content: "";
    background: #F4BC16;
    width: 30px;
    height: 2px;
    margin-top: 15px;
}


</style>
<template>
  <div class="grid grid-cols-1 px-5 sm:px-0 sm:grid-cols-2 py-10 container gap-10 mx-auto">
        <div>
            <h1 class="font-semibold text-2xl uppercase faq-title">Mission</h1>
            <p class="pt-5 font-thin text-md">Paetos dignissim at cursus elefeind norma arcu. Pellentesque accumsan est in tempus etos ullamcorper, sem quam suscipit lacus maecenas tortor. Erates vitae node metus. Suspendisse gravida ornare non mattis velit rutrum modest. Morbi suspendisse a tortor velim pellentesque uter justo magna gravida. Pellentesque accumsan, ex in tempus ullamcorper terminal. Setis lacus suscipit tortor erat vitae metus</p>
            <br>
            <p class="font-thin">Morbi nulla tortor, dignissim at node cursus euismod est arcu. Nomad turbina uter vehicula justo magna paetos in terminal. Pellentesque in accumsan tempus, terminal ullamcorper a quam suscipit lacus modest elementum.</p>
        </div>
        <div>
          <h1 class="font-semibold text-2xl uppercase faq-title">FAQ</h1>
            <AboutAccordionListVue class="pt-5"/>
        </div>
  </div>
</template>
