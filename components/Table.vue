<template>


  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Name
        </th>
        <th scope="col" class="px-6 py-3">
          Author
        </th>
        <th scope="col" class="px-6 py-3">
          Pages
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="i in db" :key="i.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {{i.title}}
        </th>
        <td class="px-6 py-4">
          {{i.author }}
        </td>
        <td class="px-6 py-4">
          {{i.pages }}
        </td>

      </tr>

      </tbody>
    </table>
  </div>


</template>

<script setup>

const { data: db } = await useFetch("/api/db",{
  transform:(_db) => _db.data
})
</script>
