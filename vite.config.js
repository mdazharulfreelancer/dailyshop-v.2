import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server :{
    proxy : {
      '/api/v1' : {
        target : ' http://localhost:5175' ,
        changeOrigin: true,
     
      }
    },
    // hmr: {
    //   overlay: false, // Disable HMR overlay to avoid double logs
    // },
  }
  
})

