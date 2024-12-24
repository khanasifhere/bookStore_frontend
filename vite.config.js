import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //   proxy:{"/api":"https://dc0775f2-c637-487e-9d97-f4794ed997d1.e1-us-east-azure.choreoapps.dev"},
  // },
  plugins: [react()],
})
