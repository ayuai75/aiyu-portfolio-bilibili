# 向AI进击的阿鱼个人主页抖音嵌入测试版

这是独立于 `aiyu-portfolio` 的 GitHub Pages 测试项目，用于验证抖音 iframe 弹窗播放方案。

## 本地预览

```bash
cd /Users/zhuyu/Documents/Playground/aiyu-portfolio-bilibili
npm run serve
```

然后打开 `http://localhost:5175`。

## 视频配置

所有作品配置集中在 `app.js` 顶部的 `videos` 数组中。当前版本不使用本地 mp4，也不会跳转到抖音页面。

```js
{
  title: "作品标题",
  description: "AIGC 视频作品展示",
  cover: "./assets/covers/video1.jpg",
  platform: "douyin",
  douyinShareUrl: "",
  douyinVideoId: "",
  ratio: "16:9",
  status: "pending",
}
```

如果只有抖音分享链接，先填入 `douyinShareUrl`：

```js
douyinShareUrl: "https://v.douyin.com/xxxxxx/",
douyinVideoId: "",
```

此时点击作品会显示：

```text
已添加抖音分享链接，请补充 VideoID 后播放。
```

需要从 PC 端打开该分享链接，等页面跳转到最终地址后，从地址里提取 VideoID，再填入 `douyinVideoId`。

如果已经有抖音 VideoID，直接填写：

```js
douyinShareUrl: "",
douyinVideoId: "抖音VideoID",
```

页面会自动生成抖音播放器地址：

```text
https://open.douyin.com/player/video?vid=抖音VideoID&autoplay=0
```

`ratio` 只控制播放器比例，不和平台绑定。支持 `16:9`、`9:16`、`4:3`，未填写时默认使用 `16:9`。

## 仓库说明

这个版本不提交 mp4 视频文件，只保留网页代码和封面图。`.gitignore` 已经忽略：

```gitignore
*.mp4
assets/videos/
```
