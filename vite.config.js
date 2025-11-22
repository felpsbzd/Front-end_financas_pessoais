import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa' // <--- Import

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'FinTech Pro Dashboard',
        short_name: 'FinTech',
        description: 'Controle financeiro pessoal avançado',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone', // Faz parecer app nativo (sem barra de URL)
        icons: [
          {
            src: 'pwa-192x192.png', // *Você precisará criar essa imagem depois
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png', // *E essa também
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})