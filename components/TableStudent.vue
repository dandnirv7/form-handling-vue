<template>
  <div
    class="wrapper-table border w-max rounded-md mt-10 p-5 flex flex-col items-center justify-center bg-white"
  >
    <caption class="caption-top mb-2 font-bold text-gray-600">
      DATA MAHASISWA
    </caption>
    <div class="entry-search-container flex w-full justify-around my-5">
      <div class="entry flex items-center gap-2">
        <p class="text-gray-500">Rata-rata nilai: {{ averageValue }}</p>
      </div>
      <div class="search gap-2 flex">
        <p class="text-md text-gray-500">Cari:</p>
        <input
          type="search"
          class="border border-gray-400 rounded-sm px-2 py-[1px] text-md outline-none"
          v-model="searchColleger"
        />
      </div>
    </div>
    <table class="table-auto w-[600px]">
      <thead class="">
        <tr>
          <th class="border-t-2 border-b-2 border-gray-300 px-2 w-1/6">
            <span class="text-gray-600">No</span>
          </th>
          <th
            class="border-t-2 border-b-2 border-gray-300 px-5 w-10 text-start"
          >
            <span class="text-gray-600">NIM</span>
          </th>
          <th
            class="border-t-2 border-b-2 border-gray-300 px-5 text-left w-5/12"
          >
            <span class="text-gray-600">Nama Mahasiswa</span>
          </th>
          <th class="border-t-2 border-b-2 border-gray-300 p-2 text-end w-1/12">
            <span class="text-gray-600">Nilai</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="hover:bg-gray-200 hover:cursor-pointer"
          v-for="(student, index) in filteredStudents"
          :key="student.id"
        >
          <td class="border-b border-gray-300 text-gray-500 text-center p-2">
            {{ index + 1 }}
          </td>
          <td class="border-b border-gray-300 text-gray-500 px-5">
            {{ student.nim }}
          </td>
          <td class="border-b border-gray-300 text-gray-500 px-5 capitalize">
            {{ student.name }}
          </td>
          <td class="border-b border-gray-300 text-gray-500 text-center">
            {{ student.value }}
          </td>
        </tr>
        <tr v-if="filteredStudents.length === 0 && searchKeyword !== ''">
          <td colspan="4">
            <p class="text-center mt-5 text-gray-500 text-sm">
              Tidak ditemukan data yang sesuai
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    students: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tableColleger: "table-colleger",
      searchColleger: "",
    };
  },
  methods: {
    updateDataNotFound() {
      this.dataNotFound =
        this.filteredStudents.length === 0 && this.searchColleger !== "";
    },
  },

  computed: {
    filteredStudents() {
      return this.students.filter(
        (student) =>
          student.name
            .toLowerCase()
            .includes(this.searchColleger.toLowerCase()) ||
          student.nim.toLowerCase().includes(this.searchColleger.toLowerCase())
      );
    },
    averageValue() {
      const students = this.students;
      const totalValue = students.reduce(
        (accumulator, student) => accumulator + parseInt(student.value),
        0
      );

      const averageValue = totalValue / students.length;
      return averageValue.toFixed(2);
    },
  },
};
</script>
