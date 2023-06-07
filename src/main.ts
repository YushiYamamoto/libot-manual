import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { installElementPlus } from '@/plugins/element-plus'
import { registerGlobalComponents } from '@/global-components'
import { installPinia } from '@/plugins/pinia'
import { installI18n } from '@/plugins/i18n'

// styles
import '@/styles/main.scss'

const app = createApp(App)

installPinia(app)
installElementPlus(app)
registerGlobalComponents(app)
installI18n(app)

app.use(router)

app.mount('#app')
