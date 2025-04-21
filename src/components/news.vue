<template>
    <div class="container">
        <div class="header">
            <h1>Новости</h1>
            <button class="btn" @click="openMain">На главную</button>
        </div>

        <div class="cards-grid">
            <div class="card">
            <div class="image-container">
                <img class="news-image" src="../assets/fish.jpg" alt="">
            </div>
            <div class="content">
                <div class="head-container">
                    <h3>Невероятный улов</h3>
                    <p>19.04.2025</p>
                </div>
                <p>В одной из пригородных рек, мужчина выловил карпа 
                колосальных размеров. Данной историей он поделился в 
                свом телеграмм канале.</p>
            </div>
        </div>

        <div class="card">
            <div class="image-container">
                <img class="news-image" src="../assets/granta.png" alt="">
            </div>
            <div class="content">
                <div class="head-container">
                    <h3>Новая модель</h3>
                    <p>19.04.2024</p>
                </div>
                <p>АвтоВаз анонсировали новую модель серии Granta, которая 
                не будет уступать заграничным авто.
                </p>
            </div>
        </div>

        <div class="card">
            <div class="image-container">
                <img class="news-image" src="../assets/doctor.jpg" alt="">
            </div>
            <div class="content">
                <div class="head-container">
                    <h3>Возвращение легенды</h3>
                    <p>09.04.2025</p>
                </div>
                <p>Быков возвращается на телеикраны в новом сезоне интернов.</p>
            </div>
        </div>

        <div class="card">
            <div class="image-container">
                <img class="news-image" src="../assets/cat.jpg" alt="">
            </div>
            <div class="content">
                <div class="head-container">
                    <h3>Ночной тыгыдык</h3>
                    <p>19.04.2025</p>
                </div>
                <p>Котенок по кличке Дуся не на шутку перепугал своих хозяев,
                    ночной забег по квартире был больше похож на землетрясение в китае.
                </p>
            </div>
        </div>


        <div class="card">
            <div class="image-container">
                <img class="news-image" src="../assets/pubg.png" alt="">
            </div>
            <div class="content">
                <div class="head-container">
                    <h3>Закат</h3>
                    <p>19.04.2025</p>
                </div>
                <p>Просто красивый вид в пабге
                </p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import api from '@/api';

export default {
    name: 'news',
    data() {
        return {
            news: []
        }
    },

    async created() {
        try {
        const response = await api.getNews();
        this.news = response.data;
        } catch (error) {
        console.error('Error fetching news:', error);
        }
    },
    
    methods: {
        openMain() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 20px;
}

.card {
    background: var(--card-color);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    overflow: hidden;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.image-container {
    height: 200px;
    overflow: hidden;
}

.news-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    padding: 15px;
}

.head-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
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