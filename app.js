const videos = [
  {
    title: "地球上最后一个诗人",
    category: "创意短片",
    tag: "后人类寓言",
    duration: "12:06",
    description:
      "关于记忆、痛苦、存在与救赎的后人类寓言。在“飞升”成为普遍选择后，最后一个人类创造仿生人与机器人同伴，试图解答何为人类的终极困惑。",
    cover: "./assets/covers/last-poet-on-earth.jpg",
    platform: "douyin",
    douyinShareUrl: "https://www.douyin.com/user/MS4wLjABAAAAItpm3NcYwJWZvulfd_dUDkD977AndSKy-2eiSIHG5MJqLt_YYMlIFKo24RRiT-pH?from_tab_name=main&modal_id=7561347762295786802",
    douyinVideoId: "7561347762295786802",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "山的那边是什么",
    category: "创意短片",
    tag: "现实诗性",
    duration: "02:01",
    description:
      "一只流浪猫的独白，用爪尖的自由哲学反衬人类世界的爱与囚笼。诗意背后，是无法选择的伤痛、寒冷与饥饿。",
    cover: "./assets/covers/beyond-the-mountain.png",
    platform: "douyin",
    douyinShareUrl: "https://www.douyin.com/user/MS4wLjABAAAAItpm3NcYwJWZvulfd_dUDkD977AndSKy-2eiSIHG5MJqLt_YYMlIFKo24RRiT-pH?from_tab_name=main&modal_id=7565731356559887625",
    douyinVideoId: "7565731356559887625",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "囍",
    category: "创意短片",
    tag: "聊斋短片",
    duration: "01:42",
    description:
      "AI 挑战聊斋气质短片，以婚嫁意象、民俗阴影和东方惊悚氛围，进入古典志怪的情绪空间。",
    cover: "./assets/covers/xi.jpg",
    platform: "douyin",
    douyinShareUrl: "https://www.douyin.com/user/MS4wLjABAAAAItpm3NcYwJWZvulfd_dUDkD977AndSKy-2eiSIHG5MJqLt_YYMlIFKo24RRiT-pH?from_tab_name=main&modal_id=7605074719074831635",
    douyinVideoId: "7605074719074831635",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "比亚迪腾势",
    category: "汽车广告",
    tag: "汽车广告",
    duration: "01:55",
    description:
      "一台能陪孩子一起长大的车，藏在日常里的温柔陪伴，也承载阖家出行时的安心与欢喜。",
    cover: "./assets/covers/byd.jpg",
    platform: "douyin",
    douyinShareUrl: "https://www.douyin.com/user/MS4wLjABAAAAItpm3NcYwJWZvulfd_dUDkD977AndSKy-2eiSIHG5MJqLt_YYMlIFKo24RRiT-pH?from_tab_name=main&modal_id=7644566606844038463&vid=7625852519557713215",
    douyinVideoId: "7644566606844038463",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "方程豹",
    category: "汽车广告",
    tag: "汽车广告",
    duration: "02:30",
    description:
      "方程豹钛 3 以技术谱写向往，用全新的 AI 影像方式记录出行、探索与生活可能性。",
    cover: "./assets/covers/fangchengbao.jpg",
    platform: "douyin",
    douyinShareUrl: "https://www.douyin.com/user/MS4wLjABAAAAItpm3NcYwJWZvulfd_dUDkD977AndSKy-2eiSIHG5MJqLt_YYMlIFKo24RRiT-pH?from_tab_name=main&modal_id=7621094404614393097",
    douyinVideoId: "7621094404614393097",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "给自己的一封信【联想】",
    category: "汽车广告",
    tag: "品牌叙事",
    duration: "02:28",
    description:
      "从 1999 年的旧电脑到未来的全息数据海洋，两个时代的小雅隔空相望，完成一次关于选择、成长与自我接纳的时光回信。",
    cover: "./assets/covers/letter-to-myself.png",
    platform: "douyin",
    douyinShareUrl: "https://www.douyin.com/user/MS4wLjABAAAAItpm3NcYwJWZvulfd_dUDkD977AndSKy-2eiSIHG5MJqLt_YYMlIFKo24RRiT-pH?from_tab_name=main&modal_id=7519441971397889331",
    douyinVideoId: "7519441971397889331",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "诡秘之主：我们拯救了廷根",
    category: "漫剧",
    tag: "IP 漫剧",
    duration: "01:23",
    description:
      "“我们是守护者，也是一群时刻对抗危险和疯狂的可怜虫。”以克制而阴郁的视听进入廷根守护者的命运切面。",
    cover: "./assets/covers/lord-of-mysteries-tinggen.png",
    platform: "douyin",
    douyinShareUrl: "https://www.douyin.com/user/MS4wLjABAAAAItpm3NcYwJWZvulfd_dUDkD977AndSKy-2eiSIHG5MJqLt_YYMlIFKo24RRiT-pH?from_tab_name=main&modal_id=7625852519557713215",
    douyinVideoId: "7625852519557713215",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "我在怪谈论坛学斩鬼",
    category: "漫剧",
    tag: "怪谈漫剧",
    duration: "03:13",
    description:
      "普通学生误入神秘怪谈论坛，论坛诡事逐渐照进现实。他在一次次危机中升级求生，进入规则怪谈的阴影深处。",
    cover: "./assets/covers/ghost-forum-slayer.png",
    platform: "douyin",
    douyinShareUrl: "https://www.douyin.com/user/MS4wLjABAAAAItpm3NcYwJWZvulfd_dUDkD977AndSKy-2eiSIHG5MJqLt_YYMlIFKo24RRiT-pH?from_tab_name=main&modal_id=7585179005993766171",
    douyinVideoId: "7585179005993766171",
    ratio: "16:9",
    status: "ready",
  },
  {
    title: "诸神愚戏",
    category: "漫剧",
    tag: "真人漫剧",
    duration: "02:05",
    description:
      "恍如昨日，嗤笑今朝。真人版试炼开启，以强风格视觉进入规则、谎言与命运互相纠缠的叙事场。",
    cover: "./assets/covers/foolish-play-of-gods.png",
    platform: "douyin",
    douyinShareUrl: "https://www.douyin.com/user/MS4wLjABAAAAItpm3NcYwJWZvulfd_dUDkD977AndSKy-2eiSIHG5MJqLt_YYMlIFKo24RRiT-pH?from_tab_name=main&modal_id=7585570996866829618",
    douyinVideoId: "7585570996866829618",
    ratio: "16:9",
    status: "ready",
  },
];

const categoryNotes = {
  创意短片: "以 AI 影像承载寓言、现实议题与东方志怪情绪。",
  汽车广告: "用 AIGC 建立品牌叙事、产品想象与情绪记忆。",
  漫剧: "围绕 IP、怪谈与类型叙事，探索 AI 影像的连续剧感。",
};

const categories = ["创意短片", "汽车广告", "漫剧"];

const workGroups = categories.map((category) => ({
  category,
  note: categoryNotes[category],
  works: videos
    .map((video, index) => ({ ...video, index }))
    .filter((video) => video.category === category),
}));

const worksGrid = document.querySelector("#worksGrid");
const videoModal = document.querySelector("#videoModal");
const modalDialog = document.querySelector(".modal-dialog");
const modalCloseButton = document.querySelector("[data-modal-close]");
const modalMeta = document.querySelector("#modalMeta");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalPlayer = document.querySelector("#modalPlayer");
let lastFocusedElement = null;

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });

const platformLabels = {
  bilibili: "B站",
  douyin: "抖音",
};

const ratioConfigs = {
  "16:9": {
    cssRatio: "16 / 9",
    dialogClass: "modal-dialog--wide",
    playerMaxWidth: "clamp(280px, calc((100svh - 230px) * 16 / 9), 1040px)",
  },
  "9:16": {
    cssRatio: "9 / 16",
    dialogClass: "modal-dialog--portrait",
    playerMaxWidth: "clamp(220px, calc((100svh - 230px) * 9 / 16), 460px)",
  },
  "4:3": {
    cssRatio: "4 / 3",
    dialogClass: "modal-dialog--classic",
    playerMaxWidth: "clamp(260px, calc((100svh - 230px) * 4 / 3), 900px)",
  },
};

const getPlatform = (video) => (video.platform === "bilibili" ? "bilibili" : "douyin");

const getRatioConfig = (video) => ratioConfigs[video.ratio] || ratioConfigs["16:9"];

const getVideoEmbedUrl = (video) => {
  const platform = getPlatform(video);
  const bvid = String(video.bvid || "").trim();
  const douyinVideoId = String(video.douyinVideoId || "").trim();

  if (platform === "bilibili" && bvid) {
    const encodedBvid = encodeURIComponent(bvid);
    const page = encodeURIComponent(String(video.page || 1));

    return `https://player.bilibili.com/player.html?bvid=${encodedBvid}&p=${page}&poster=1&autoplay=0&danmaku=0`;
  }

  if (platform === "douyin" && douyinVideoId) {
    const encodedDouyinVideoId = encodeURIComponent(douyinVideoId);

    return `https://open.douyin.com/player/video?vid=${encodedDouyinVideoId}&autoplay=0`;
  }

  return "";
};

const getStatusLabel = (video) => {
  if (getVideoEmbedUrl(video)) {
    return `${platformLabels[getPlatform(video)]}播放`;
  }

  if (getPlatform(video) === "douyin" && String(video.douyinShareUrl || "").trim()) {
    return "需补 VideoID";
  }

  return "视频即将上线";
};

const getIframeTitle = (video) => {
  return `${video.title} - ${platformLabels[getPlatform(video)]}播放器`;
};

const getPendingContent = (video) => {
  if (getPlatform(video) === "douyin" && String(video.douyinShareUrl || "").trim()) {
    return {
      title: "已添加抖音分享链接，请补充 VideoID 后播放。",
      body: "请从 PC 端打开分享链接，复制最终地址里的 VideoID。",
    };
  }

  return {
    title: "视频即将上线",
    body: "后续填入抖音 VideoID 后即可在这里播放。",
  };
};

const applyModalRatio = (video) => {
  const ratioConfig = getRatioConfig(video);

  modalPlayer.style.setProperty("--player-ratio", ratioConfig.cssRatio);
  modalPlayer.style.setProperty("--player-max-width", ratioConfig.playerMaxWidth);
  modalDialog.classList.add(ratioConfig.dialogClass);
};

const resetModalRatio = () => {
  modalPlayer.style.removeProperty("--player-ratio");
  modalPlayer.style.removeProperty("--player-max-width");
  modalDialog.classList.remove(
    "modal-dialog--wide",
    "modal-dialog--portrait",
    "modal-dialog--classic",
  );
};

const renderWorkCard = (work) => {
  const statusLabel = getStatusLabel(work);

  return `
    <article class="work-card">
      <button class="video-frame work-trigger" type="button" data-video-index="${work.index}" aria-label="打开《${escapeHtml(work.title)}》视频弹窗">
        <img src="${escapeHtml(work.cover)}" alt="《${escapeHtml(work.title)}》封面" loading="lazy">
        <span class="play-mark" aria-hidden="true"></span>
        <span class="availability-badge">${statusLabel}</span>
      </button>
      <div class="work-body">
        <div class="work-meta">
          <span class="work-tag">${escapeHtml(work.tag)}</span>
          <span class="work-duration">${escapeHtml(work.duration)}</span>
        </div>
        <h4>${escapeHtml(work.title)}</h4>
        <p>${escapeHtml(work.description)}</p>
      </div>
    </article>
  `;
};

worksGrid.innerHTML = workGroups
  .map(
    (group) => `
      <section class="work-group" aria-labelledby="${group.category}">
        <div class="group-heading">
          <div>
            <p class="group-kicker">Category / ${group.works.length} Works</p>
            <h3 id="${group.category}">${group.category}</h3>
          </div>
          <p>${group.note}</p>
        </div>
        <div class="category-grid">
          ${group.works.map(renderWorkCard).join("")}
        </div>
      </section>
    `,
  )
  .join("");

const openVideoModal = (video, trigger) => {
  const embedUrl = getVideoEmbedUrl(video);

  lastFocusedElement = trigger;
  modalMeta.textContent = `${video.category} / ${video.tag} / ${platformLabels[getPlatform(video)]}`;
  modalTitle.textContent = video.title;
  modalDescription.textContent = video.description;
  modalPlayer.replaceChildren();
  applyModalRatio(video);
  modalPlayer.classList.toggle("modal-player--pending", !embedUrl);

  if (embedUrl) {
    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.title = getIframeTitle(video);
    iframe.loading = "lazy";
    iframe.allow = "fullscreen; picture-in-picture; autoplay; encrypted-media";
    iframe.allowFullscreen = true;
    iframe.setAttribute("allowfullscreen", "");
    modalPlayer.append(iframe);
  } else {
    const pendingContent = getPendingContent(video);
    const pendingNotice = document.createElement("div");
    pendingNotice.className = "pending-video";
    pendingNotice.innerHTML = `<strong>${escapeHtml(pendingContent.title)}</strong><span>${escapeHtml(pendingContent.body)}</span>`;
    modalPlayer.append(pendingNotice);
  }

  videoModal.hidden = false;
  document.body.classList.add("modal-open");
  modalCloseButton.focus();
};

const closeVideoModal = () => {
  videoModal.hidden = true;
  modalPlayer.replaceChildren();
  modalPlayer.classList.remove("modal-player--pending");
  resetModalRatio();
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
  lastFocusedElement = null;
};

worksGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-video-index]");

  if (!trigger) {
    return;
  }

  const video = videos[Number(trigger.dataset.videoIndex)];

  if (video) {
    openVideoModal(video, trigger);
  }
});

modalCloseButton.addEventListener("click", closeVideoModal);

videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) {
    closeVideoModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !videoModal.hidden) {
    closeVideoModal();
  }
});

const copyButton = document.querySelector("[data-copy]");

copyButton?.addEventListener("click", async () => {
  const value = copyButton.dataset.copy;
  const originalText = copyButton.textContent;

  try {
    await navigator.clipboard.writeText(value);
    copyButton.textContent = "已复制：lzy57666";
  } catch {
    copyButton.textContent = "联系方式：lzy57666";
  }

  window.setTimeout(() => {
    copyButton.textContent = originalText;
  }, 2200);
});
