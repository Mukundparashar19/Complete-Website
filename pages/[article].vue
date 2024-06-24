<template>
  <Head>
    <Title> {{articleData.title}}</Title>
  </Head>

  <body class=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
  <header class="mb-4 lg:mb-6 not-format">
    <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{{articleData.title}}</h1>
  </header>
  <br>
  <br>
  <br>
  <br>
  <br>

  <article class="text-lg flex flex-wrap text-justify">
    <p class="px-6">{{articleData.description}}</p>

    <hero3 class=" flex flex-col ">
      <div class=" flex flex-col md:flex-row pt-6  ">
        <div class="md:w-3/4">

          <p class="px-6">We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to deliver
            the scope you want at the pace you need.</p>
          <p class="px-6">We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.</p>
          <br>
          <p class="px-6" >Integer interdum dolor at nunc molestie, eget sodales dui lobortis. Phasellus eleifend magna vitae ex hendrerit, sit amet tempus velit vehicula. Morbi ut velit eu nulla faucibus viverra. Nullam nec aliquet libero, non egestas odio. Aenean nec mauris justo. Nulla facilisi. Pellentesque et mauris arcu. Mauris malesuada ex ac massa auctor, at tempor odio vulputate. Maecenas non odio vel arcu venenatis ullamcorper.</p>
          <p class="px-6" >JavaScript is a versatile programming language used primarily for web development.
            With JavaScript, developers can create dynamic and interactive web pages.
            It is a client-side scripting language, meaning it runs on the user's browser.
            JavaScript can also be used on the server-side through platforms like Node.js.
            One of JavaScript's key features is its asynchronous programming capabilities, allowing non-blocking operations.
            Modern JavaScript frameworks like React, Angular, and Vue.js have revolutionized front-end development.
            JavaScript has a vast ecosystem of libraries and frameworks for various purposes, from data visualization to animation.</p>


          <br>
           </div>

        <div class="flex flex-col flex-wrap justify-end w-2/4 pb-5">
          <Table/>
        </div>


      </div>
    </hero3>


    <br>
    <img class="w-full md:w-1/2 rounded-xl shadow-md " :src="'https://picsum.photos/id/' + articleData.pages + '/800'" alt="">
    <div class="w-full md:w-1/2 px-6">
      <p >Quisque ultrices purus vel libero efficitur, eget malesuada turpis vestibulum. Integer tincidunt elit nec felis viverra, at mattis ante hendrerit. Praesent at tincidunt enim, quis sodales dolor. Ut sed semper lorem. Morbi pretium eleifend nulla nec placerat. In hac habitasse platea dictumst. Nam dapibus mi eu sollicitudin lobortis. Fusce id orci non velit venenatis interdum. Nullam lobortis metus a metus venenatis, quis lacinia quam lacinia.</p>

      <p>Quisque ultrices purus vel libero efficitur, eget malesuada turpis vestibulum. Integer tincidunt elit nec felis viverra, at mattis ante hendrerit. Praesent at tincidunt enim, quis sodales dolor. Ut sed semper lorem. Morbi pretium eleifend nulla nec placerat. In hac habitasse platea dictumst. Nam dapibus mi eu sollicitudin lobortis. Fusce id orci non velit venenatis interdum. Nullam lobortis metus a metus venenatis, quis lacinia quam lacinia.</p>
    <br>
    <p>Subtitles:{{articleData.subtitle}}</p>
      <p> Rating:  🌟🌟🌟🌟☆</p>
    <p>Author: {{articleData.author}}</p>
    <p>Published on: {{articleData.published}}</p>
    <p>Published By: {{articleData.publisher}}</p>
    <p>Pages: {{articleData.pages}}</p>


    </div>



  </article>
  </body>




  <section class="bg-white">
    <div class="py-8 px-4 mx-auto  lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md sm:text-center">
        <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Contact us for latest updates</h2>
        <p class="mx-auto mb-8 max-w-2xl  text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay ahead of the curve with our contact! Join today for exclusive updates, insightful articles, and expert tips delivered straight to your inbox. Don't miss out on the latest trends and industry news contact now!</p>
        <NuxtLink to="/contact" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register </NuxtLink>

      </div>
    </div>
  </section>
















</template>

<script setup>
const {article} = useRoute().params
// console.log(article)

const { data: db } = await useFetch("/api/db",{
  transform:(_db) => _db.data
})
const articleData = db.value.find(item => item.id == article)

</script>