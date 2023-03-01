import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { resolve } from 'path';

// const pathResolve = (dir: string): any => {
// 	return resolve(__dirname, '.', dir);
// };
// const alias: Record<string, string> = {
// 	'/@': pathResolve('./src/'),
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
	base: "./",
  server: {
		host: '0.0.0.0',
		port: 5173,
		open: true,
		proxy: {
			'/main': {
				// target: 'http://ows.thingplecloud.com:82', // 测试环境
				target: 'http://localhost:81', // 本地环境
				ws: true,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/main/, '/api'), // 本地环境
			}
		}
  },
	build: {
		outDir: 'dist',
		minify: 'esbuild',
		sourcemap: false,
		chunkSizeWarningLimit: 1500,
		assetsDir: './'
	},
})
