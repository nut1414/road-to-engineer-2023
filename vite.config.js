import { defineConfig, loadEnv } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [preact()],
    server: {
      port: Number.parseInt(env.VITE_PORT)
    }
  });
}
