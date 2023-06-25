<template>
  <div class="wrapper-action">
    <div class="mb-10">
      <div class="action absolute top-0 left-80 px-4 my-8">
        <button
          href="#"
          class="add-student bg-green-500 hover:bg-green-600 flex flex-col items-start rounded-sm p-2 text-white w-max h-10"
          v-if="!isHide"
          @click="toggleShow"
        >
          Add Student
        </button>
        <div
          class="card-wrapper fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50"
          v-else
        >
          <form @submit.prevent="addStudent">
            <div
              class="fixed top-1/4 left-1/4 w-[600px] rounded-md flex justify-center items-center"
            >
              <div
                class="w-full h-full bg-white p-5 rounded-lg shadow-2xl shadow-black/50 max-w-[500px]"
              >
                <div class="card">
                  <div class="card-body flex flex-col gap-2 w-full mt-4">
                    <div class="flex flex-col">
                      <label for="nim">NIM</label>
                      <input
                        type="text"
                        id="nim"
                        v-model="nim"
                        class="border-2 outline-none px-2"
                        :required="true"
                        pattern="^23552014[0-9]{3}$"
                      />
                    </div>

                    <div class="flex flex-col">
                      <label for="name">Nama lengkap</label>
                      <input
                        type="text"
                        id="name"
                        v-model="name"
                        :required="true"
                        pattern="^[a-zA-Z\s]+$"
                        class="border-2 outline-none px-2"
                      />
                    </div>

                    <div class="flex flex-col">
                      <label for="value">Nilai</label>
                      <input
                        type="text"
                        id="value"
                        v-model="value"
                        :required="true"
                        max="100"
                        pattern="^(?:100|\d{1,2})$"
                        class="border-2 outline-none px-2"
                      />
                    </div>

                    <div
                      class="button-wrapper flex flex-row-reverse gap-2 mt-5"
                    >
                      <button
                        type="submit"
                        class="bg-blue-500 rounded px-4 py-1 text-white hover:bg-blue-600 w-20"
                      >
                        Add
                      </button>
                      <button
                        class="border rounded px-4 py-1 hover:bg-gray-200 w-20"
                        @click="cancelForm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isHide: {
      type: Boolean,
      required: true,
    },
    students: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    addStudent() {
      const isExistingNim = this.students.some(
        (student) => student.nim === this.nim
      );
      if (isExistingNim) {
        alert("NIM sudah digunakan");
        return;
      }

      const student = {
        id: this.students.length + 1,
        nim: this.nim,
        name: this.name,
        value: this.value,
      };

      this.$emit("add-student", student);
      this.clearForm();
      this.toggleShow();
    },
    toggleShow() {
      this.$emit("toggle-show");
    },
    cancelForm() {
      this.clearForm();
      this.toggleShow();
    },
    clearForm() {
      this.nim = "";
      this.name = "";
      this.value = "";
    },
  },
};
</script>
