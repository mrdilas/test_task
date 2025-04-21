<template>
  <div class="page-container">
    <div class="form-container">
      <h2>Обратная связь</h2>
      <form @submit.prevent="submitForm" class="form">
        <input v-model="formData.fullname" type="text" placeholder="Ваше имя" required>
        <input v-model="formData.address" type="text" placeholder="Адрес">
        <input v-model="formData.telephone" type="tel" placeholder="Телефон" required>
        <input v-model="formData.email" type="email" placeholder="E-mail" required>
        <textarea v-model="formData.feedback" placeholder="Ваш отзыв" rows="4"></textarea>
        <button type="submit" class="btn">Отправить</button>
        <button type="button" class="btn btn-secondary" @click="openMain">На главную</button>
      </form>

      <div class="submissions" v-if="submissions.length > 0">
        <h3>Отправленные данные</h3>
        <table>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Адрес</th>
              <th>Телефон</th>
              <th>E-mail</th>
              <th>Отзыв</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in submissions" :key="index">
              <td>{{ item.fullname }}</td>
              <td>{{ item.address }}</td>
              <td>{{ item.telephone }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.feedback }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'feedback',
  data() {
    return {
      formData: {
        fullname: '',
        address: '',
        telephone: '',
        email: '',
        feedback: ''
      },
      submissions: []
    }
  },
  methods: {
    submitForm() {
      // Добавляем текущие данные в массив отправленных
      this.submissions.push({...this.formData});
      
      // Очищаем форму
      this.formData = {
        fullname: '',
        address: '',
        telephone: '',
        email: '',
        feedback: ''
      };
    },
    openMain() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--card-color);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.form {
  display: grid;
  gap: 1rem;
}

input, textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  width: 100%;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.btn {
  padding: 10px 20px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
}

.btn-secondary {
  background: #6c757d;
}

.btn:hover {
  opacity: 0.9;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}
</style>