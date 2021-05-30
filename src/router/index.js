import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/BlogHome.vue'
import About from '../views/about/About.vue'
import TrendingNews from '../views/trending_news/TrendingNews.vue'
import BlogPost from '../views/post/BlogPost.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    linkExactActiveClass: 'blog-nav-item-active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/trending',
            name: 'TrendingPosts',
            component: TrendingNews
        },
        {
            path: '/post/:postId',
            name: 'BlogPost',
            component: BlogPost,
            props: true,
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        const position = {}
        if (to.hash) {
            position.selector = to.hash;
            if (document.querySelector(to.hash)) {
                return position;
            }
            return false;
        }
    }
})