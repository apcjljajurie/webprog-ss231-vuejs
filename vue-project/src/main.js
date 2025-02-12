import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import PersonalProfile from './components/PersonalProfile.vue'
import Country from './components/Country.vue'

const app = createApp(App)
app.component('food-mango', FoodItem)
app.component('food-strawberry', FoodItem2)
app.component('personal-profile', PersonalProfile)
app.component('country', Country)
app.mount('#app')
