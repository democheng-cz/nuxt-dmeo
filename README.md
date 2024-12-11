# Nuxt.js 项目指南

这是一个使用 Nuxt.js 构建的项目，包含基本的页面、组件和布局示例。

## 项目结构

```
.
├── app.vue
├── components
│   ├── footer
│   │   └── index.vue
│   └── header
│       └── index.vue
├── layouts
│   ├── custom-layout.vue
│   └── default.vue
├── pages
│   ├── about.vue
│   ├── index.vue
│   └── user
│       ├── [id].vue
│       └── index.vue
└── README.md
```

## 安装与运行

### 创建项目

```bash
pnpm dlx nuxi@latest init <project-name>
```

#### 安装时可能会遇到的问题：

1. **Failed to download template from registry**: 可能是由于 DNS 解析服务器 IP
   地址错误。
   - **解决方案**：通过域名获取服务器的 IP 地址，修改电脑上的 host 文件，通过 IP
     直接映射地址。
   - **路径**：`C:\Windows\System32\drivers\etc\hosts`

### 安装依赖

确保您已安装 Node.js 和 npm，然后在项目根目录下运行：

```bash
pnpm install
```

### 开发环境

启动开发服务器：

```bash
pnpm run dev
```

### 生成静态文件

生成静态站点：

```bash
pnpm run generate
```

### 生产环境

构建并启动生产服务器：

```bash
pnpm run build
pnpm run start
```

## 使用说明

### 页面

- `pages/index.vue`：主页，展示欢迎信息。
- `pages/about.vue`：关于页面。
- `pages/user/index.vue`：用户列表页面。
- `pages/user/[id].vue`：用户详情页面，使用动态路由。

### 布局

- `layouts/default.vue`：默认布局，包含头部和页脚。
- `layouts/custom-layout.vue`：自定义布局，包含侧边栏。

### 组件

- `components/header/index.vue`：头部组件，包含导航菜单。
- `components/footer/index.vue`：页脚组件，包含版权信息和链接。

## 注意事项

- **路径别名**：使用`~`或`@`作为路径别名，指向项目的根目录。
- **数据获取**：使用`asyncData`或`fetch`方法在页面组件中获取数据。
- **SEO 优化**：通过`head`方法设置页面的 meta 信息。
- **TypeScript**：确保在`tsconfig.json`中正确配置 TypeScript 支持。



## 插件

- 注册插件

  ```ts
  // 注册一个插件 plugins/test-plugin.ts
  export default defineNuxtPlugin(nuxtApp => {
  	const testPlugin = () => console.log("Hello from testPlugin!")
  
  	nuxtApp.provide("testPlugin", testPlugin)
  })
  
  // nuxt.config.ts
  export default defineNuxtConfig({
  	plugins: ["~/plugins/test-plugin.ts"],
  })
  
  
  // 添加对应的类型 types/nuxt.d.ts
  import { NuxtApp } from "nuxt/app"
  
  declare module "nuxt/app" {
  	interface NuxtApp {
  		$testPlugin: () => string
  	}
  }
  
  declare module "@vue/runtime-core" {
  	interface ComponentCustomProperties {
  		$testPlugin: () => string
  	}
  }
  
  ```

  

- 使用插件

  ```js
  // 在页面中使用 
  const { $testPlugin } = useNuxtApp()
  ```

  

## 部署

### 生成静态站点

1. **生成静态文件**：在项目根目录下运行以下命令，生成静态文件：

   ```bash
   pnpm run generate
   ```

   这将创建一个`dist/`目录，其中包含所有静态文件。

2. **选择托管服务**：选择一个静态文件托管服务，例如 Netlify、Vercel 或 GitHub
   Pages。

3. **上传文件**：将`dist/`目录中的文件上传到所选的托管服务。

   - **Netlify**：可以直接将`dist/`目录拖放到 Netlify 的部署面板中，或使用
     Netlify CLI 进行部署。
   - **Vercel**：使用 Vercel CLI 进行部署，或通过 Vercel 的 Web 界面连接 GitHub
     仓库进行自动化部署。
   - **GitHub Pages**：将`dist/`目录中的文件推送到 GitHub 仓库的`gh-pages`分支。

### 部署为 SSR 应用

1. **构建应用**：在项目根目录下运行以下命令，构建应用：

   ```bash
   pnpm run build
   ```

   这将创建一个`.output/`目录，其中包含构建后的应用文件。

2. **选择服务器**：选择一个支持 Node.js 的服务器，例如
   Vercel、Heroku、AWS、DigitalOcean 等。

3. **上传和配置**：将`.output/`目录中的文件上传到服务器，并进行必要的配置。

   - **Vercel**：可以直接使用 Vercel CLI 进行部署，Vercel 会自动识别 Nuxt.js 项
     目并进行配置。
   - **Heroku**：将项目推送到 Heroku 的 Git 仓库，并在 Heroku 的设置中配置环境变
     量和启动命令。
   - **AWS**：使用 AWS Elastic Beanstalk 或 EC2 实例进行部署，确保安装 Node.js
     环境并配置启动脚本。
   - **DigitalOcean**：使用 Droplet 创建一个 Node.js 环境，上传项目文件并配置启
     动脚本。

4. **启动应用**：在服务器上运行以下命令，启动应用：

   ```bash
   pnpm run start
   ```

   确保服务器的防火墙和网络设置允许外部访问应用的端口。

### 注意事项

- **环境变量**：在生产环境中，确保正确配置所有必要的环境变量。
- **安全性**：确保服务器的安全性设置正确，防止未经授权的访问。
- **性能优化**：在部署前，进行性能优化，例如启用缓存、压缩静态资源等。
