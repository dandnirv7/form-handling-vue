<template>
  <div class="container flex flex-col justify-center items-center">
    <FormStudent
      :is-hide="isHide"
      :students="students"
      @add-student="handleAddStudent"
      @toggle-show="toggleShow"
    />
    <TableStudent :students="students" />
  </div>
</template>

<script>
import TableStudent from "@/components/TableStudent";
import FormStudent from "@/components/FormStudent.vue";

export default {
  components: {
    TableStudent,
    FormStudent,
  },
  data() {
    return {
      students: [
        {
          id: 1,
          nim: "23552014001",
          name: "John Doe",
          value: "95",
        },
        {
          id: 2,
          nim: "23552014002",
          name: "Jane Smith",
          value: "90",
        },
        {
          id: 3,
          nim: "23552014003",
          name: "Bambang Wijaya",
          value: "70",
        },
        {
          id: 4,
          nim: "23552014004",
          name: "Dian Anggraini",
          value: "80",
        },
        {
          id: 5,
          nim: "23552014005",
          name: "Joko Santoso",
          value: "75",
        },
        {
          id: 6,
          nim: "23552014006",
          name: "Maya Indah",
          value: "100",
        },
        {
          id: 7,
          nim: "23552014007",
          name: "Surya Permana",
          value: "65",
        },
        {
          id: 8,
          nim: "23552014008",
          name: "Dewi Kusuma",
          value: "90",
        },
        {
          id: 9,
          nim: "23552014009",
          name: "Rudi Hartono",
          value: "85",
        },
        {
          id: 10,
          nim: "23552014010",
          name: "Desi Susanti",
          value: "73",
        },
        {
          id: 11,
          nim: "23552014011",
          name: "Hadi Pratama",
          value: "80",
        },
      ],
      isHide: false,
    };
  },
  methods: {
    handleAddStudent(student) {
      this.students.push(student);
    },
    toggleShow() {
      this.isHide = !this.isHide;
    },
  },
};
</script>
