// vite.config.ts
import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "file:///Users/wythe/Space/Code/starter-vue/node_modules/.pnpm/vite@4.1.2_@types+node@18.14.0/node_modules/vite/dist/node/index.js";
import Vue from "file:///Users/wythe/Space/Code/starter-vue/node_modules/.pnpm/@vitejs+plugin-vue@4.0.0_vite@4.1.2+vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Pages from "file:///Users/wythe/Space/Code/starter-vue/node_modules/.pnpm/vite-plugin-pages@0.28.0_vite@4.1.2/node_modules/vite-plugin-pages/dist/index.mjs";
import UnoCSS from "file:///Users/wythe/Space/Code/starter-vue/node_modules/.pnpm/unocss@0.49.7_vite@4.1.2/node_modules/unocss/dist/vite.mjs";

// use.ts
import { minify } from "file:///Users/wythe/Space/Code/starter-vue/node_modules/.pnpm/html-minifier@4.0.0/node_modules/html-minifier/src/htmlminifier.js";
import autoprefixer from "file:///Users/wythe/Space/Code/starter-vue/node_modules/.pnpm/autoprefixer@10.4.13_postcss@8.4.21/node_modules/autoprefixer/lib/autoprefixer.js";
import postcssSorting from "file:///Users/wythe/Space/Code/starter-vue/node_modules/.pnpm/postcss-sorting@8.0.1_postcss@8.4.21/node_modules/postcss-sorting/index.js";
import cssnano from "file:///Users/wythe/Space/Code/starter-vue/node_modules/.pnpm/cssnano@5.1.15_postcss@8.4.21/node_modules/cssnano/src/index.js";
import { presetAttributify, presetIcons, presetUno } from "file:///Users/wythe/Space/Code/starter-vue/node_modules/.pnpm/unocss@0.49.7_vite@4.1.2/node_modules/unocss/dist/index.mjs";
var UnoConfig = {
  presets: [
    presetUno({ preflight: false }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: { "display": "inline-block", "vertical-align": "bottom" }
    })
  ],
  exclude: "**/node_modules/**",
  theme: {
    colors: {
      primary: "#767676",
      secondary: "#6054ba",
      tertiary: "#d8b162"
    }
  }
};
function VitePlugins() {
  return [
    {
      name: "vite-plugin-html-minify",
      enforce: "post",
      apply: "build",
      transformIndexHtml(html) {
        return minify(html, {
          removeComments: true,
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          minifyJS: true,
          minifyCSS: true
        });
      }
    },
    {
      name: "vite-plugin-build-css",
      apply: "build",
      config() {
        const plugins = [
          postcssSorting({
            "order": ["custom-properties", "dollar-variables", "declarations", "at-rules", "rules"],
            "properties-order": "alphabetical",
            "unspecified-properties-position": "bottom"
          }),
          cssnano({ preset: "default" }),
          autoprefixer
        ];
        return { css: { postcss: { plugins } } };
      }
    }
  ];
}

// vite.config.ts
var __vite_injected_original_import_meta_url = "file:///Users/wythe/Space/Code/starter-vue/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    Vue(),
    Pages({ dirs: [{ dir: "src/pages", baseRoute: "" }] }),
    VitePlugins(),
    UnoCSS(UnoConfig)
  ],
  resolve: {
    alias: { "~": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)) }
  },
  server: {
    host: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidXNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3d5dGhlL1NwYWNlL0NvZGUvc3RhcnRlci12dWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy93eXRoZS9TcGFjZS9Db2RlL3N0YXJ0ZXItdnVlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy93eXRoZS9TcGFjZS9Db2RlL3N0YXJ0ZXItdnVlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgVVJMLCBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcydcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgeyBVbm9Db25maWcsIFZpdGVQbHVnaW5zIH0gZnJvbSAnLi91c2UnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICBWdWUoKSxcbiAgICAgICAgUGFnZXMoeyBkaXJzOiBbeyBkaXI6ICdzcmMvcGFnZXMnLCBiYXNlUm91dGU6ICcnIH1dIH0pLFxuICAgICAgICBWaXRlUGx1Z2lucygpLFxuICAgICAgICBVbm9DU1MoVW5vQ29uZmlnKSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHsgJ34nOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSkgfSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgICBob3N0OiB0cnVlLFxuICAgIH0sXG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvd3l0aGUvU3BhY2UvQ29kZS9zdGFydGVyLXZ1ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3d5dGhlL1NwYWNlL0NvZGUvc3RhcnRlci12dWUvdXNlLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy93eXRoZS9TcGFjZS9Db2RlL3N0YXJ0ZXItdnVlL3VzZS50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IG1pbmlmeSB9IGZyb20gJ2h0bWwtbWluaWZpZXInXG5pbXBvcnQgdHlwZSB7IEFjY2VwdGVkUGx1Z2luIH0gZnJvbSAncG9zdGNzcydcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJ1xuaW1wb3J0IHBvc3Rjc3NTb3J0aW5nIGZyb20gJ3Bvc3Rjc3Mtc29ydGluZydcbmltcG9ydCBjc3NuYW5vIGZyb20gJ2Nzc25hbm8nXG5pbXBvcnQgdHlwZSB7IFVzZXJDb25maWcgfSBmcm9tICd1bm9jc3MnXG5pbXBvcnQgeyBwcmVzZXRBdHRyaWJ1dGlmeSwgcHJlc2V0SWNvbnMsIHByZXNldFVubyB9IGZyb20gJ3Vub2NzcydcblxuZXhwb3J0IGNvbnN0IFVub0NvbmZpZzogVXNlckNvbmZpZyA9IHtcbiAgICBwcmVzZXRzOiBbXG4gICAgICAgIHByZXNldFVubyh7IHByZWZsaWdodDogZmFsc2UgfSksXG4gICAgICAgIHByZXNldEF0dHJpYnV0aWZ5KCksXG4gICAgICAgIHByZXNldEljb25zKHtcbiAgICAgICAgICAgIHNjYWxlOiAxLjIsXG4gICAgICAgICAgICBleHRyYVByb3BlcnRpZXM6IHsgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJywgJ3ZlcnRpY2FsLWFsaWduJzogJ2JvdHRvbScgfSxcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBleGNsdWRlOiAnKiovbm9kZV9tb2R1bGVzLyoqJyxcbiAgICB0aGVtZToge1xuICAgICAgICBjb2xvcnM6IHtcbiAgICAgICAgICAgIHByaW1hcnk6ICcjNzY3Njc2JyxcbiAgICAgICAgICAgIHNlY29uZGFyeTogJyM2MDU0YmEnLFxuICAgICAgICAgICAgdGVydGlhcnk6ICcjZDhiMTYyJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gVml0ZVBsdWdpbnMoKTogUGx1Z2luW10ge1xuICAgIHJldHVybiBbe1xuICAgICAgICBuYW1lOiAndml0ZS1wbHVnaW4taHRtbC1taW5pZnknLFxuICAgICAgICBlbmZvcmNlOiAncG9zdCcsXG4gICAgICAgIGFwcGx5OiAnYnVpbGQnLFxuICAgICAgICB0cmFuc2Zvcm1JbmRleEh0bWwoaHRtbCkge1xuICAgICAgICAgICAgcmV0dXJuIG1pbmlmeShodG1sLCB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29tbWVudHM6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVtb3ZlQXR0cmlidXRlUXVvdGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbGxhcHNlV2hpdGVzcGFjZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtaW5pZnlKUzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtaW5pZnlDU1M6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAndml0ZS1wbHVnaW4tYnVpbGQtY3NzJyxcbiAgICAgICAgYXBwbHk6ICdidWlsZCcsXG4gICAgICAgIGNvbmZpZygpIHtcbiAgICAgICAgICAgIGNvbnN0IHBsdWdpbnM6IEFjY2VwdGVkUGx1Z2luW10gPSBbXG4gICAgICAgICAgICAgICAgcG9zdGNzc1NvcnRpbmcoe1xuICAgICAgICAgICAgICAgICAgICAnb3JkZXInOiBbJ2N1c3RvbS1wcm9wZXJ0aWVzJywgJ2RvbGxhci12YXJpYWJsZXMnLCAnZGVjbGFyYXRpb25zJywgJ2F0LXJ1bGVzJywgJ3J1bGVzJ10sXG4gICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0aWVzLW9yZGVyJzogJ2FscGhhYmV0aWNhbCcsXG4gICAgICAgICAgICAgICAgICAgICd1bnNwZWNpZmllZC1wcm9wZXJ0aWVzLXBvc2l0aW9uJzogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgY3NzbmFubyh7IHByZXNldDogJ2RlZmF1bHQnIH0pLFxuICAgICAgICAgICAgICAgIGF1dG9wcmVmaXhlcixcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIHJldHVybiB7IGNzczogeyBwb3N0Y3NzOiB7IHBsdWdpbnMgfSB9IH1cbiAgICAgICAgfSxcbiAgICB9XVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUixTQUFTLEtBQUsscUJBQXFCO0FBQzlULFNBQVMsb0JBQW9CO0FBRTdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxZQUFZOzs7QUNKbkIsU0FBUyxjQUFjO0FBRXZCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sb0JBQW9CO0FBQzNCLE9BQU8sYUFBYTtBQUVwQixTQUFTLG1CQUFtQixhQUFhLGlCQUFpQjtBQUVuRCxJQUFNLFlBQXdCO0FBQUEsRUFDakMsU0FBUztBQUFBLElBQ0wsVUFBVSxFQUFFLFdBQVcsTUFBTSxDQUFDO0FBQUEsSUFDOUIsa0JBQWtCO0FBQUEsSUFDbEIsWUFBWTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsaUJBQWlCLEVBQUUsV0FBVyxnQkFBZ0Isa0JBQWtCLFNBQVM7QUFBQSxJQUM3RSxDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLElBQ0gsUUFBUTtBQUFBLE1BQ0osU0FBUztBQUFBLE1BQ1QsV0FBVztBQUFBLE1BQ1gsVUFBVTtBQUFBLElBQ2Q7QUFBQSxFQUNKO0FBQ0o7QUFFTyxTQUFTLGNBQXdCO0FBQ3BDLFNBQU87QUFBQSxJQUFDO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUCxtQkFBbUIsTUFBTTtBQUNyQixlQUFPLE9BQU8sTUFBTTtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFVBQ2hCLHVCQUF1QjtBQUFBLFVBQ3ZCLG9CQUFvQjtBQUFBLFVBQ3BCLFVBQVU7QUFBQSxVQUNWLFdBQVc7QUFBQSxRQUNmLENBQUM7QUFBQSxNQUNMO0FBQUEsSUFDSjtBQUFBLElBQ0E7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFDTCxjQUFNLFVBQTRCO0FBQUEsVUFDOUIsZUFBZTtBQUFBLFlBQ1gsU0FBUyxDQUFDLHFCQUFxQixvQkFBb0IsZ0JBQWdCLFlBQVksT0FBTztBQUFBLFlBQ3RGLG9CQUFvQjtBQUFBLFlBQ3BCLG1DQUFtQztBQUFBLFVBQ3ZDLENBQUM7QUFBQSxVQUNELFFBQVEsRUFBRSxRQUFRLFVBQVUsQ0FBQztBQUFBLFVBQzdCO0FBQUEsUUFDSjtBQUNBLGVBQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxFQUFFO0FBQUEsTUFDM0M7QUFBQSxJQUNKO0FBQUEsRUFBQztBQUNMOzs7QUQzRDhLLElBQU0sMkNBQTJDO0FBUS9OLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLElBQUk7QUFBQSxJQUNKLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxLQUFLLGFBQWEsV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQUEsSUFDckQsWUFBWTtBQUFBLElBQ1osT0FBTyxTQUFTO0FBQUEsRUFDcEI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU8sRUFBRSxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQyxFQUFFO0FBQUEsRUFDbkU7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKLE1BQU07QUFBQSxFQUNWO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
