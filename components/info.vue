<template>

  <section
      class="bg-[url('https://cdn.pixabay.com/photo/2020/10/14/20/31/hands-5655424_1280.png')] dark:bg-gray-900 bg-no-repeat items-center bg-cover py-8 lg:py-16 px-4 mx-auto  max-w-screen-2xl				 ">
  <!--      class="bg-[url('https://cdn.pixabay.com/photo/2023/10/21/09/50/hands-8331123_1280.jpg')] dark:bg-gray-900 bg-no-repeat py-8 lg:py-16 px-4 mx-auto max-w-screen-xl ">-->
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black dark:text-white">Contact Us</h2>
      <p class="mb-8 lg:mb-16 text-center  text-black dark:text-gray-500 sm:text-xl">Send us a message and we will reply you shortly</p>
      <form action="#" class="space-y-8">
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-black dark:text-gray-300">Your email</label>
          <p v-show="!conform.mail" class="text-rose-600	">please write correct email format</p>
          <input v-model="formInfo.email" type="email" id="email"  :class="!conform.mail? 'border-red-600':''" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
        </div>

        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-black dark:text-gray-300">Name</label>
          <p v-show="!conform.name" class="text-red-600	">Please enter your name</p>
          <input v-model="formInfo.firstName" type="text" id="name"  :class="!conform.name? 'border-red-600':''" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your name" required>
        </div>

        <div>
          <label for="subject" class="block mb-2 text-sm font-medium text-black dark:text-gray-300">Subject</label>
          <p v-show="!conform.sub" class="text-red-600	">Please enter subject</p>
          <input v-model="formInfo.subject" type="text" id="subject" :class="!conform.sub? 'border-red-600':''" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
        </div>

        <div class="sm:col-span-2">
          <label for="message" class="block mb-2 text-sm font-medium text-black dark:text-gray-400">Your message</label>
          <p v-show="!conform.msg" class="text-red-600	">Please write your message</p>
          <textarea v-model="formInfo.message" id="message" rows="6"  :class="!conform.msg? 'border-red-600':''" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
        </div>

        <button @click.prevent="conformCheck" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  </section>












</template>

<script setup>
import {useTaskStore} from "../stores/TaskStore";
const store = useTaskStore()

const formInfo = reactive({
  firstName:'',
  lastName:'',
  email:'',
  subject:'',
  message:''
})

const conform = reactive({
  mail:true,
  name:true,
  sub:true,
  msg:true
})

const regex =  /@.*\.com$/;


function conformCheck() {
  const containsLogo = regex.test(formInfo.email);

  if (!containsLogo) {
    conform.mail = false;
  } else {
    conform.mail = true;
  }

  if (formInfo.firstName === '') {
    conform.name = false;
  } else {
    conform.name = true;
  }

  if (formInfo.subject === '') {
    conform.sub = false;
  } else {
    conform.sub = true;
  }

  if (formInfo.message === '') {
    conform.msg = false;
    console.log(conform.msg);
  } else {
    conform.msg = true;
  }

  if (conform.mail && conform.name && conform.sub && conform.msg) {
    store.formData(formInfo);
    clearForm();
    alert('registered');
  }
}











function clearForm () {
  Object.keys(formInfo).forEach((key) => {
    formInfo[key]=''
  })

}


function handelSubmit () {
  conformCheck()
  }


</script>