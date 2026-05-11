<template>
  <main class="guides-page">
    <section class="guides-hero">
      <p class="eyebrow">База знаний</p>
      <h1>Гайды по сборке ПК</h1>
      <p>Всё самое важное по выбору комплектующих — на одной странице.</p>
    </section>

    <section class="guides-tools">
      <input
        v-model="search"
        type="text"
        placeholder="Найти гайд..."
        class="search-input"
      />

      <div class="categories">
        <button
          v-for="category in categories"
          :key="category"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>
    </section>

    <section class="guides-list">
      <article
        v-for="guide in filteredGuides"
        :key="guide.id"
        class="guide-card"
      >
        <button class="guide-header" @click="toggleGuide(guide.id)">
          <div>
            <span class="guide-category">{{ guide.category }}</span>
            <h3>{{ guide.icon }} {{ guide.title }}</h3>
            <p>{{ guide.description }}</p>
          </div>

          <span class="arrow" :class="{ opened: openedGuide === guide.id }">
            ↓
          </span>
        </button>

        <div v-if="openedGuide === guide.id" class="guide-content">
          <h4>Кратко</h4>
          <p>{{ guide.content.short }}</p>

          <h4>На что смотреть</h4>
          <ul>
            <li v-for="item in guide.content.points" :key="item">
              {{ item }}
            </li>
          </ul>

          <div class="tip">
            <strong>Совет:</strong> {{ guide.content.tip }}
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'

const search = ref('')
const selectedCategory = ref('Все')
const openedGuide = ref(null)

const categories = [
  'Все',
  'Процессор',
  'Видеокарта',
  'Совместимость',
  'Бюджет',
  'Апгрейд'
]

const guides = [
  {
    id: 1,
    icon: '🧠',
    category: 'Процессор',
    title: 'Как выбрать процессор',
    description: 'Ядра, потоки, сокеты и частоты простыми словами.',
    content: {
      short:
        'Процессор влияет на общую скорость системы, работу программ и стабильность FPS в некоторых играх.',
      points: [
        'Проверь сокет процессора и материнской платы',
        'Для игр часто достаточно 6–8 ядер',
        'Для монтажа и рендера лучше больше ядер и потоков',
        'Не переплачивай за слишком мощный CPU при слабой видеокарте'
      ],
      tip: 'Для игровой сборки лучше соблюдать баланс между CPU и GPU.'
    }
  },
  {
    id: 2,
    icon: '🎮',
    category: 'Видеокарта',
    title: 'Как выбрать видеокарту',
    description: 'Главный компонент для игр, 3D и тяжёлой графики.',
    content: {
      short:
        'Видеокарта сильнее всего влияет на FPS в играх, особенно в 2K и 4K.',
      points: [
        'Смотри на производительность в нужном разрешении',
        'Проверяй объём видеопамяти',
        'Учитывай длину видеокарты и корпус',
        'Проверь рекомендуемую мощность блока питания'
      ],
      tip: 'Для Full HD не всегда нужна топовая видеокарта.'
    }
  },
  {
    id: 3,
    icon: '⚡',
    category: 'Совместимость',
    title: 'Проверка совместимости',
    description: 'Как понять, что комплектующие подойдут друг к другу.',
    content: {
      short:
        'Совместимость — это проверка сокета, памяти, питания, размеров и форм-фактора.',
      points: [
        'CPU должен подходить к socket материнской платы',
        'RAM должна поддерживаться материнской платой',
        'Корпус должен поддерживать размер платы',
        'Блок питания должен иметь запас мощности'
      ],
      tip: 'Всегда проверяй совместимость до покупки комплектующих.'
    }
  },
  {
    id: 4,
    icon: '💸',
    category: 'Бюджет',
    title: 'Как собрать ПК без переплаты',
    description: 'Где можно сэкономить, а где лучше не рисковать.',
    content: {
      short:
        'Главная идея бюджетной сборки — не покупать слишком дорогие детали там, где они почти не дадут прироста.',
      points: [
        'Не бери слишком дорогую материнскую плату без необходимости',
        'Не экономь на блоке питания',
        'SSD важнее большого HDD для скорости системы',
        'Сравнивай цену и производительность'
      ],
      tip: 'Лучше взять сбалансированную сборку, чем одну дорогую деталь и всё остальное слабое.'
    }
  },
  {
    id: 5,
    icon: '🔧',
    category: 'Апгрейд',
    title: 'Что обновлять первым',
    description: 'Как найти слабое звено и выбрать правильный апгрейд.',
    content: {
      short:
        'Апгрейд зависит от того, что именно ограничивает производительность: CPU, GPU, RAM или накопитель.',
      points: [
        'В играх чаще первым обновляют видеокарту',
        'Если система тормозит в целом — проверь SSD и RAM',
        'Если CPU загружен на 100%, он может ограничивать видеокарту',
        'Перед апгрейдом проверь блок питания'
      ],
      tip: 'Не обновляй деталь вслепую — сначала найди слабое место.'
    }
  }
]

const filteredGuides = computed(() => {
  return guides.filter((guide) => {
    const matchesCategory =
      selectedCategory.value === 'Все' ||
      guide.category === selectedCategory.value

    const text = `${guide.title} ${guide.description} ${guide.category}`.toLowerCase()
    const matchesSearch = text.includes(search.value.toLowerCase())

    return matchesCategory && matchesSearch
  })
})

const toggleGuide = (id) => {
  openedGuide.value = openedGuide.value === id ? null : id
}
</script>

<style scoped>
.guides-page {
  min-height: 100vh;
  padding: 40px;
  background: var(--bg-color, #070b14);
  color: var(--text-color, #f5f7ff);

  /* Основной текст */
  font-family: 'JetBrains Mono', monospace;
}

.guides-hero {
  padding: 56px;
  border-radius: 28px;
  border: 1px solid rgba(59, 130, 246, 0.35);
  background:
    radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.38), transparent 35%),
    linear-gradient(135deg, #0f172a, #070b14);
  box-shadow: 0 0 40px rgba(59, 130, 246, 0.14);
}

.eyebrow {
  color: #38bdf8;
  text-transform: uppercase;
  letter-spacing: 2px;

  /* Заголовочный шрифт */
  font-family: 'Jura', sans-serif;
}

.guides-hero h1 {
  font-size: 52px;
  margin: 12px 0;

  font-family: 'Jura', sans-serif;
}

.guides-hero p {
  color: #94a3b8;
}

.guides-tools {
  margin: 32px 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.search-input {
  min-width: 280px;
  padding: 16px 18px;
  border-radius: 14px;
  border: 1px solid #1e293b;
  background: #0f172a;
  color: white;
  outline: none;

  font-family: 'JetBrains Mono', monospace;
}

.search-input::placeholder {
  color: #64748b;
}

.search-input:focus {
  border-color: #38bdf8;
  box-shadow: 0 0 18px rgba(56, 189, 248, 0.25);
}

.categories {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.categories button {
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid #1e293b;
  background: #0f172a;
  color: #94a3b8;
  cursor: pointer;
  transition: 0.2s;

  font-family: 'Jura', sans-serif;
}

.categories button:hover {
  color: white;
  border-color: #38bdf8;
}

.categories button.active {
  color: white;
  border-color: #38bdf8;
  background: rgba(56, 189, 248, 0.16);
  box-shadow: 0 0 18px rgba(56, 189, 248, 0.18);
}

.guides-list {
  display: grid;
  gap: 18px;
}

.guide-card {
  border-radius: 22px;
  background: #0f172a;
  border: 1px solid #1e293b;
  overflow: hidden;
  transition: 0.25s;
}

.guide-card:hover {
  border-color: #38bdf8;
  box-shadow: 0 0 26px rgba(56, 189, 248, 0.16);
}

.guide-header {
  width: 100%;
  padding: 24px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  text-align: left;
}

.guide-category {
  color: #38bdf8;
  font-size: 14px;

  font-family: 'Jura', sans-serif;
}

.guide-header h3 {
  margin: 8px 0;
  font-size: 24px;

  font-family: 'Jura', sans-serif;
}

.guide-header p {
  color: #94a3b8;
}

.arrow {
  font-size: 24px;
  color: #38bdf8;
  transition: 0.2s;

  font-family: 'Jura', sans-serif;
}

.arrow.opened {
  transform: rotate(180deg);
}

.guide-content {
  padding: 0 24px 24px;
  color: #cbd5e1;
  border-top: 1px solid #1e293b;
}

.guide-content h4 {
  margin-top: 20px;
  color: white;

  font-family: 'Jura', sans-serif;
}

.guide-content li {
  margin: 10px 0;
}

.tip {
  margin-top: 20px;
  padding: 18px;
  border-radius: 16px;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.28);
  box-shadow: inset 0 0 18px rgba(56, 189, 248, 0.06);
}

.tip strong {
  font-family: 'Jura', sans-serif;
}

</style>