<template>
    <div class="container">
      <h1>Анонсы последних новостей</h1>
      
        <div class="cards-grid">
            <div class="card">
                <div class="image-container">
                    <img class="news-image" src="../assets/fish.jpg" alt="">
                </div>
                <div class="content">
                    <div class="head-container">
                        <h3>Невероятный улов</h3>
                    </div>
                    <p class="news-excerpt">В одной из пригородных рек, мужчина выловил ...</p>
                </div>
            </div>

            <div class="card">
                <div class="image-container">
                    <img class="news-image" src="../assets/granta.png" alt="">
                </div>
                <div class="content">
                    <div class="head-container">
                        <h3>Новая модель</h3>
                    </div>
                    <p class="news-excerpt">АвтоВаз анонсировали новую модель серии Granta, которая ...</p>
                </div>
            </div>

            <div class="card">
                <div class="image-container">
                    <img class="news-image" src="../assets/doctor.jpg" alt="">
                </div>
                <div class="content">
                    <div class="head-container">
                        <h3>Возвращение легенды</h3>
                    </div>
                    <p class="news-excerpt">Быков возвращается на телеикраны в новом сезоне ...</p>
                </div>
            </div>
        </div>
    
        <div class="actions">
            <button class="btn" @click="openNews">Все новости</button>
            <button class="btn" @click="openFeedback">Обратная связь</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'main',

    data() {
        return {
            news: []
        }
    },
    
    methods: {
        openFeedback() {
            this.$router.push('/feedback')
        },

        openNews() {
            this.$router.push('/news')
        }
    }
}
</script>

<style scoped>
.container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 2rem 0;
}

.card {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%; /* Занимает всю доступную высоту */
}

.card:hover {
  transform: translateY(-5px);
}

.image-container {
  height: 200px; /* Фиксированная высота для изображений */
  width: 100%;
  overflow: hidden;
}

.news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Занимает оставшееся пространство */
}

.head-container {
  margin-bottom: 12px;
}

.news-excerpt {
  margin: 0;
  flex-grow: 1; /* Текст занимает оставшееся пространство */
}

.actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 2rem;
}

.btn {
    padding: 10px 20px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: var(--border-radius);
}

.btn:hover {
    background: var(--secondary-color);
}
</style>