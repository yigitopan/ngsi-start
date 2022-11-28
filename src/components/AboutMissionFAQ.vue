<script setup>
import AboutAccordionListVue from './AboutAccordionList.vue';
</script>


<style>
.faq-title::after {
    display: block;
    content: "";
    background: #213140;
    width: 30px;
    height: 2px;
    margin-top: 15px;
}


</style>
<template>
  <div class="grid grid-cols-1 px-5 sm:px-0 sm:grid-cols-2 py-16 container gap-10 mx-auto">
        <div>
            <h1 class="font-semibold text-2xl uppercase faq-title">Mission</h1>
            <p class=" text-sm sm:text-base pt-5 font-thin text-md">Wir machen aus ihrem Haus ein richtiges Zuhause damit sie sich wohlfühlen und entspannen können.Aus Handwerk zaubern wir ihre individuellen  Wohnwünsche wir bauen um,
renovieren, restaurieren, wir arbeiten mit Komponenten und kreativen Köpfen zusammen.
Die all ihre Wünsche ins Leben rufen und ihr Traum vom Eigenheim verwirklichen.</p>
            <br>
            <p class=" text-sm sm:text-base font-thin">Ob kleine Maßnahmen oder große Baumaßnahmen ob extravagant oder klassisch
Wir sind mit unserem Fachwissen für sie da!</p>
        </div>
        <div>
          <h1 class="font-semibold text-2xl uppercase faq-title">FAQ</h1>
            <AboutAccordionListVue class="pt-5"/>
        </div>
  </div>
</template>
