<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const isThemeLight = ref(true)

const footerNavigation = [
    {
        title: 'Навигация',
        links: [
            { label: 'Главная', route: 'main', icon: '⌂' },
            { label: 'Сборка ПК', route: 'build', icon: '▱' },
            { label: 'Сборки', route: 'madebuilds', icon: '▰' },
            { label: 'Комплектующие', route: 'components', icon: '▦' },
            { label: 'Гайды', route: 'guides', icon: '◌' },
        ],
    },
    {
        title: 'Инструменты',
        links: [
            { label: 'Автосборка', route: 'autobuild', icon: '✦' },
            { label: 'Проверка совместимости', route: 'build', icon: '◈' },
            { label: 'Сравнение сборок', route: 'madebuilds', icon: '≋' },
            { label: 'Сохранённые сборки', route: 'buildsave', icon: '▯' },
            { label: 'Топ сборки', route: 'madebuilds', icon: '☆' },
        ],
    },
    {
        title: 'Полезное',
        links: [
            { label: 'Блог', route: 'guides', icon: '□' },
            { label: 'Частые вопросы', route: 'guides', icon: '?' },
            { label: 'Гайд по сборке', route: 'guides', icon: '▱' },
            { label: 'Обратная связь', route: 'lobby', icon: '○' },
            { label: 'Поддержка', route: 'lobby', icon: '♧' },
        ],
    },
]

const contacts = [
    { label: 'support@pcbuilder.dev', href: 'mailto:support@pcbuilder.dev', icon: '✉' },
    { label: 'github.com/pcbuilder', href: 'https://github.com/pcbuilder', icon: 'GH' },
    { label: 't.me/pcbuilder', href: 'https://t.me/pcbuilder', icon: '➤' },
]

function changeThemeToLight () {
    isThemeLight.value = true
}

function changeThemeToDark () {
    isThemeLight.value = false
}

function scrollToTop () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <header class="header">
        <RouterLink :to="{name: 'main'}" class="logo"><span class="logo_first">PC</span><span class="logo_second">Builder</span></RouterLink>
        <div class="header_menu">
            <RouterLink :to="{name: 'main'}" class="header_menu_item">Главная</RouterLink>
            <RouterLink :to="{name: 'build'}" class="header_menu_item">Собрать ПК</RouterLink>
            <RouterLink :to="{name: 'madebuilds'}" class="header_menu_item">Готовые сборки</RouterLink>
            <RouterLink :to="{name: 'components'}" class="header_menu_item">Комплектующие</RouterLink>
            <RouterLink :to="{name: 'guides'}" class="header_menu_item">Гайды</RouterLink>
        </div>
        <div class="header_right">
            <img src="/img/Search.svg" alt="кнопка поиска" class="header_right_btn">
            <img @click="changeThemeToDark" v-if="isThemeLight" src="/img/Moon.svg" alt="кнопка смены темы на темную" class="header_right_btn">
            <img @click="changeThemeToLight" v-if="!isThemeLight" src="/img/Sun.svg" alt="кнопка смены темы на светлую" class="header_right_btn">
        </div>
    </header>

    <!--УДАЛИТЬ, ЕСЛИ НЕ НУЖНО <router-link :to="{name: 'build' }">test</router-link> -->
    <RouterView></RouterView>

    <footer class="footer">
        <div class="footer_top">
            <div class="footer_brand">
                <RouterLink :to="{name: 'main'}" class="footer_logo">
                    <img src="/img/logo.png" alt="PC Builder" class="footer_logo_img">
                    <span><span class="logo_first">PC</span><span class="logo_second"> Builder</span></span>
                </RouterLink>
                <p class="footer_text">Собери идеальный ПК под свои задачи. Быстро, удобно и с максимальной совместимостью.</p>
                <div class="footer_socials">
                    <a href="https://github.com/pcbuilder" class="footer_social" aria-label="GitHub">GH</a>
                    <a href="https://t.me/pcbuilder" class="footer_social" aria-label="Telegram">➤</a>
                    <a href="https://discord.com" class="footer_social" aria-label="Discord">DC</a>
                </div>
            </div>

            <nav v-for="column in footerNavigation" :key="column.title" class="footer_column">
                <h2 class="footer_title">{{ column.title }}</h2>
                <RouterLink
                    v-for="link in column.links"
                    :key="link.label"
                    :to="{name: link.route}"
                    class="footer_link"
                >
                    <span class="footer_icon">{{ link.icon }}</span>
                    {{ link.label }}
                </RouterLink>
            </nav>

            <div class="footer_column footer_contacts">
                <h2 class="footer_title">Контакты</h2>
                <a v-for="contact in contacts" :key="contact.label" :href="contact.href" class="footer_link">
                    <span class="footer_icon">{{ contact.icon }}</span>
                    {{ contact.label }}
                </a>
                <a href="mailto:support@pcbuilder.dev" class="footer_contact_btn">
                    <span class="footer_icon">✉</span>
                    Связаться с нами
                </a>
            </div>
        </div>

        <div class="footer_bottom">
            <p>© 2026 <span>PC Builder</span>. Все права защищены.</p>
            <p class="footer_made"><span class="footer_heart">♡</span> Сделано с любовью на <span>Vue 3</span></p>
            <button class="footer_to_top" type="button" aria-label="Наверх" @click="scrollToTop">↑</button>
        </div>
    </footer>
</template>

<style scoped>
/* ВЕРСТКА ШАПКИ */
.header {
    position: sticky;
    top: 12px;
    z-index: 10;
    width: calc(100% - 32px);
    min-height: 70px;
    margin: 12px auto 0;
    padding: 10px 24px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    background:
        radial-gradient(circle at 8% 0%, color-mix(in srgb, var(--blue) 22%, transparent), transparent 30%),
        linear-gradient(180deg, rgba(15, 18, 35, 0.96), rgba(8, 12, 24, 0.94));
    border: 1px solid color-mix(in srgb, var(--blue) 42%, transparent);
    border-bottom-color: rgba(255, 255, 255, 0.06);
    border-radius: 18px;
    box-shadow: 0 -10px 42px color-mix(in srgb, var(--blue) 16%, transparent), 0 18px 54px rgba(0, 0, 0, 0.34);
    backdrop-filter: blur(14px);
}

.header_menu {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 32px;
}

.header_right {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 32px;
}

/* ЛОГОТИП */
.logo {
    text-decoration: none;
    font-family: 'Jura_Bold';
    font-size: 25px;
}

.logo_first{
    color: var(--blue);
}

.logo_second {
    color: var(--white);
}

/* МЕНЮ В ШАПКЕ */
.header_menu_item {
    color: var(--light-gray);
    text-decoration: none;
    text-underline-offset: 6px;
    text-decoration-thickness: 1px;
    font-family: 'JetBrains_Mono';
    padding: 20px 0;
}

.header_menu_item:hover {
    color: var(--blue);
    text-decoration: underline;
}

/* ПРАВАЯ ЧАСТЬ ШАПКИ */
.header_right_btn {
    width: 35px;
    height: 35px;
    padding: 7px;
    border: 1px solid color-mix(in srgb, var(--blue) 26%, transparent);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.055);
    cursor: pointer;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.header_right_btn:hover {
    border-color: color-mix(in srgb, var(--blue) 70%, transparent);
    box-shadow: 0 0 18px color-mix(in srgb, var(--blue) 22%, transparent);
    transform: translateY(-1px);
}

.footer {
    width: calc(100% - 32px);
    margin: 72px auto 24px;
    color: rgba(253, 253, 253, 0.92);
    background:
        radial-gradient(circle at 12% 0%, color-mix(in srgb, var(--blue) 24%, transparent), transparent 28%),
        linear-gradient(180deg, rgba(15, 18, 35, 0.98), rgba(8, 12, 24, 0.98));
    border: 1px solid color-mix(in srgb, var(--blue) 46%, transparent);
    border-bottom-color: rgba(255, 255, 255, 0.05);
    border-radius: 22px;
    box-shadow: 0 -18px 60px color-mix(in srgb, var(--blue) 18%, transparent), 0 24px 80px rgba(0, 0, 0, 0.42);
    overflow: hidden;
}

.footer_top {
    display: grid;
    grid-template-columns: 1.4fr repeat(4, minmax(170px, 1fr));
    gap: 48px;
    padding: 64px 52px 56px;
}

.footer_brand {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 26px;
}

.footer_logo {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--white);
    font-family: 'Jura_Bold';
    font-size: 26px;
    text-decoration: none;
}

.footer_logo_img {
    width: 46px;
    height: 46px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 0 24px color-mix(in srgb, var(--blue) 44%, transparent);
}

.footer_text {
    max-width: 260px;
    margin: 0;
    color: rgba(209, 209, 209, 0.82);
    font-family: 'Jura';
    font-size: 19px;
    line-height: 1.55;
}

.footer_socials {
    display: flex;
    align-items: center;
    gap: 18px;
}

.footer_social,
.footer_to_top {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 52px;
    height: 52px;
    color: var(--white);
    background: rgba(255, 255, 255, 0.055);
    border: 1px solid color-mix(in srgb, var(--blue) 32%, transparent);
    border-radius: 12px;
    text-decoration: none;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.footer_column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
}

.footer_title {
    margin: 0 0 14px;
    color: var(--white);
    font-family: 'Jura';
    font-weight: 700;
    font-size: 22px;
}

.footer_link {
    display: flex;
    align-items: center;
    gap: 14px;
    min-height: 30px;
    color: rgba(209, 209, 209, 0.78);
    font-family: 'JetBrains_Mono';
    font-size: 18px;
    line-height: 1.25;
    text-decoration: none;
    transition: color 0.2s ease, transform 0.2s ease;
}

.footer_link:hover {
    color: var(--white);
    transform: translateX(4px);
}

.footer_icon {
    width: 26px;
    min-width: 26px;
    color: var(--blue);
    font-family: 'JetBrains_Mono';
    font-size: 21px;
    line-height: 1;
    text-align: center;
    text-shadow: 0 0 16px color-mix(in srgb, var(--blue) 50%, transparent);
}

.footer_contact_btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    min-height: 60px;
    margin-top: 14px;
    padding: 0 26px;
    color: var(--white);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid color-mix(in srgb, var(--blue) 86%, transparent);
    border-radius: 12px;
    font-family: 'Jura_Bold';
    font-size: 18px;
    text-decoration: none;
    box-shadow: 0 0 24px color-mix(in srgb, var(--blue) 12%, transparent);
}

.footer_bottom {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 24px;
    min-height: 110px;
    padding: 24px 46px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(209, 209, 209, 0.82);
    font-family: 'Jura';
    font-size: 17px;
}

.footer_bottom p {
    margin: 0;
}

.footer_bottom span,
.footer_heart {
    color: var(--blue);
}

.footer_made {
    text-align: center;
}

.footer_heart {
    display: inline-block;
    margin-right: 10px;
    font-size: 31px;
    vertical-align: middle;
}

.footer_to_top {
    justify-self: end;
    width: 58px;
    height: 58px;
    color: rgba(253, 253, 253, 0.9);
    font-size: 28px;
    cursor: pointer;
}
</style>
