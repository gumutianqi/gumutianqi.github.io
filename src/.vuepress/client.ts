import type { ClientConfig } from 'vuepress';
import { inject } from '@vercel/analytics';

export default {
  enhance({ router }) {
    if (typeof window !== 'undefined') {
      inject();
      router.afterEach(() => {
        // VuePress v2 使用 History 路由，切换路由后由 @vercel/analytics 自动上报
      });
    }
  },
} as ClientConfig;


