import { defineConfig  } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  let proxyURL;

  if (mode === 'development') {
    // proxyURL = 'http://localhost:5000'; // Proxy URL for development environment
    proxyURL = 'https://tic-tac-toe-h8ml.onrender.com'; // Proxy URL for production environment
  } else {
    proxyURL = 'https://tic-tac-toe-h8ml.onrender.com'; // Proxy URL for production environment
  }

  console.log({mode, proxyURL})

  return {
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: proxyURL,
          changeOrigin: true
        },
      },
    },
  };
});
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:5000',
//         changeOrigin: true
//       }
//     }
//   }
// })
