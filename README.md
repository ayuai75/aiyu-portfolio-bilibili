# 向AI进击的阿鱼个人主页嵌入测试版

这是独立于 `aiyu-portfolio` 的 GitHub Pages 测试项目，用于验证 B站和抖音 iframe 弹窗播放方案。

## 本地预览

```bash
cd /Users/zhuyu/Documents/Playground/aiyu-portfolio-bilibili
npm run serve
```

然后打开 `http://localhost:5175`。

## 视频配置

所有作品配置集中在 `app.js` 顶部的 `videos` 数组中。现在 `bvid` 和 `douyinVideoId` 都为空时，点击作品会在当前页面弹出“视频即将上线”提示，不会创建 iframe。

后续拿到 B站 BV 号后，使用 `platform: "bilibili"` 并填写对应作品的 `bvid`：

```js
{
  title: "地球上最后一个诗人",
  platform: "bilibili",
  douyinVideoId: "",
  bvid: "BVxxxxxxxxxx",
  page: 1,
  ratio: "16:9",
}
```

页面会自动生成 B站播放器地址：

```text
https://player.bilibili.com/player.html?bvid=对应BV号&p=对应page&poster=1&autoplay=0&danmaku=0
```

后续拿到抖音 VideoID 后，使用 `platform: "douyin"` 并填写 `douyinVideoId`：

```js
{
  title: "抖音作品",
  platform: "douyin",
  douyinVideoId: "抖音VideoID",
  bvid: "",
  page: 1,
  ratio: "9:16",
}
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
