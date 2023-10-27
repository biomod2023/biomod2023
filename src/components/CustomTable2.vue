<script setup lang="ts">
defineProps<{
  tableData: {
    headers: string[]
    rowHeaders: string[]
    rowsPerRowHeader: number
    data: any[][]
  }
}>()

const border = 'border-notebookText'
</script>

<template>
  <table class="table-fixed border-collapse lg:w-full">
    <tr class="bg-slate">
      <th
        v-for="(header, i) in tableData.headers"
        :key="i"
        :class="'w-1/' + tableData.headers.length"
        class="py-2 px-4 text-sm lg:text-base"
      >
        {{ header }}
      </th>
    </tr>
    <tbody class="bg-[#303030]">
      <tr v-for="(row, i) in tableData.data" :key="i">
        <th
          v-if="i % tableData.rowsPerRowHeader == 0"
          :rowspan="tableData.rowsPerRowHeader"
          class="text-sm lg:text-base"
        >
          {{ tableData.rowHeaders[i / tableData.rowsPerRowHeader] }}
        </th>
        <td v-for="(item, j) in row" :key="j" class="py-1 lg:text-lg">{{ item }}</td>
      </tr>
    </tbody>
  </table>
</template>
