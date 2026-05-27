# 向AI进击的阿鱼个人主页 B站嵌入测试版

这是独立于 `aiyu-portfolio` 的 GitHub Pages 测试项目，用于验证 B站 iframe 弹窗播放方案。

## 本地预览

```bash
cd /Users/zhuyu/Documents/Playground/aiyu-portfolio-bilibili
npm run serve
```

然后打开 `http://localhost:5175`。

## 视频配置

所有作品配置集中在 `app.js` 顶部的 `videos` 数组中。现在 `bvid` 为空时，点击作品会在当前页面弹出“视频待更新”提示，不会创建 iframe。

后续拿到 B站 BV 号后，只需要填写对应作品的 `bvid`：

```js
{
  title: "地球上最后一个诗人",
  platform: "bilibili",
  bvid: "BVxxxxxxxxxx",
  page: 1,
}
```

页面会自动生成：

```text
https://player.bilibili.com/player.html?bvid=对应BV号&p=对应page&poster=1&autoplay=0&danmaku=0
```

## 仓库说明

这个版本不提交 mp4 视频文件，只保留网页代码和封面图。`.gitignore` 已经忽略：

```gitignore
*.mp4
assets/videos/
```
