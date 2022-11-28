<script setup>
</script>

<style>
@media (max-width:640px) {
    .about-title:after {
        position: absolute;
        left: 50%;
        top: 100%;
        width: 200px!important;
        margin-top: 5px!important;
        transform: translate(-50%,0%);
    }
}


.about-title:after {
    display: block;
    content: "";
    text-align: center;
    background: #213140;
    width: 100px;
    height: 2px;
    margin-top: 23px;
}

.about-title {
    position: relative;
}

.about-list li::before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #213140; /* Change the color */
  font-size: 15px;
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}
</style>

<template>
  <div class="sm:pt-16 pt-0 container grid grid-cols-1 sm:grid-cols-2 mx-auto">
    <div class="col-span-1 animate-fadeInLeft">
      <div class="img-wrapper overflow-hidden flex justify-center">
        <img class="w-3/4 sm:w-fit rounded-full" src="../assets/about.jpg" alt="" style="display: block;"/>
      </div>
    </div>

    <div class="px-5 sm:px-0 sm:pl-10 xl:pl-0 col-span-1  text-sm sm:text-base animate-fadeInRight">
      <h1 class="text-4xl font-bold about-title text-center sm:text-left pt-6 sm:pt-0">ÜBER UNS</h1>
      <p class="mt-8 xl:pr-10 font-thin">
        Founded by Kevin Smith back in 2000, Renovate has established itself as one of the greatest and prestigious providers of construction focused interior renovation services and building. We provide a professional renovation and installation services with a real focus on customer satisfaction. Our construction Services is a multi-task company specializing in the following core areas:
      </p>  
      <br>
      <ul class="list-disc list-inside font-thin about-list">
					<li class="mb-1">We combine Quality Workmanship, Superior Knowledge and Low Prices</li>
					<li class="mb-1">We Can Ensure a Job is Done on Time and on Budget</li>
					<li class="mb-1">Proven Results for Setting Exceptional Standards in</li>
					<li class="mb-1">Proffesional Service for Private and </li>
					<li class="mb-1">15 Years Experience and a Real Focus on Customer Satisfaction</li>
				</ul>
    </div>
   
  </div>
</template>
