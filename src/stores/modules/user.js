import { defineStore } from 'pinia'
//user模块 token 登录 登出
import { ref } from 'vue'
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }
    return { token, setToken, removeToken }
  },
  {
    persist: true // 持久化
  }
)
