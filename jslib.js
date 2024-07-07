var parse = x => JSON.parse(x),
    trim = x => String(x).trim(),
    times = () => new Date().getTime(),
    encode = x => encodeURIComponent(x),
    //decode = x => decodeURIComponent(x),
    //random = x => Math.cell(x * Math.random()),
    objfy = (x, n) => n > 1 ? JSON.stringify(x, null, n) : JSON.stringify(x),
    header = (x, y) => JSON.stringify({ headers: { Referer: y, "User-Agent": x || andUA } });

var winUA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    andUA = "Mozilla/5.0 (Linux; Android 11; V2069A Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.128 Mobile Safari/537.36",
    iosUA = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Snapchat/10.77.5.59 (like Safari/604.1)";

var winHeader = `,${header(winUA)}`;

function toast(x) { this.java.toast(x); }
function log(x) { this.java.log(x); return x; }
function longToast(x) { this.java.longToast(x); }
function t2s(x) { return String(this.java.t2s(x)) }
function s2t(x) { return String(this.java.s2t(x)) }
function baseMatch(x) { return String(this.baseUrl.match(x)); }
function setV(x) { this.source.setVariable(String(x || "")) }
function getV() { return String(this.source.getVariable()).trim(); }
function getMap(x) { try { return String(this.source.getLoginInfoMap().get(x)); } catch { this.java.log("获取失败!"); return ""; } }
function trans(x, y, z) {
    switch (arguments.length) {
        case 1: return x === null ? "" : typeof x === 'object' ? String(x) : x;
        case 2: return x ? x : y;
        case 3: return x === y ? z : x;
        default: this.java.log("$ doesn't work！");
    }
}

var datas = [
  {
    class: "🏳️‍🌈同性gay",
    list: [
      {
        title: "iGay69",
        cover: "https://i.postimg.cc/v8tgRDCz/igay69.png",
        intro: "#gay #同性 #无中文搜索 #视频&写真",
        href: "https://igay69.com/" + winHeader,
        search: "https://igay69.com/?s=<k>" + winHeader
      },
      {
        title: "Instagrammen",
        cover: "https://i.postimg.cc/J4KMKkWp/instagrammen.jpg",
        intro: "#gay #同性 #异男集中营 #视频&写真",
        href: "https://mens1069.com/" + winHeader,
        search: "https://mens1069.com/?s=<k>" + winHeader
      },
      {
        title: "GayMaleTube",
        cover: "https://i.postimg.cc/JhYvBJdy/Gay-Male-Tube.png",
        intro: "#gay",
        href: "https://www.gaymaletube.com/zh/",
        search: "https://www.gaymaletube.com/zh/search/a/<k>"
      },
      {
        title: "MyBoyLove",
        cover: "",
        intro: "#Asian Gay Porn & Videos",
        href: "https://myboylove.com/",
        search: "https://myboylove.com/?s=<k>"
      },
      {
        title: "gayfun",
        cover: "",
        intro: "#写真 #刷新后随机更新",
        href: "https://www.gayfun.net/" + winHeader,
        search: ""
      },
      {
        title: "Netfuck",
        cover: "",
        intro: "#亚洲GV",
        href: "https://www.netfuck.net/",
        search: "https://www.netfuck.net/?s=<k>"
      }
    ]
  },
  {
    class: "🍉吃瓜黑料",
    list: [
      {
        title: "51吃瓜",
        cover: "https://i.postimg.cc/JzxtTP8s/image.png",
        intro: "#吃瓜",
        href: "https://www.51cg1.com/",
        search: "https://www.51cg1.com/search/<k>/"
      },
      {
        title: "51吃瓜发布页",
        cover: "https://avatars.githubusercontent.com/u/151897589",
        intro: "#吃瓜 #发布页",
        href: "https://51cg42.me/",
        search: ""
      },
      {
        title: "海角社区",
        cover: "https://i.postimg.cc/G2zgXPC6/haijiao.png",
        intro: "#吃瓜 #乱伦",
        href: "https://haijiao.one/",
        search: ""
      }
    ]
  },
  {
    class: "📺︎国产综合",
    list: [
      {
        title: "91短视频",
        cover: "",
        intro: "# ",
        href: "https://cn1.91-short.com/",
        search: "https://cn1.91-short.com/search?wd=<k>"
      },
      {
        title: "91Porn",
        cover: "https://sjtu.jiuse826.com/assets-static/images/icons/icon-144x144.png",
        intro: "#91Porn #国产视频大全",
        href: "https://sjtu.jiuse826.com/",
        search: "https://sjtu.jiuse826.com/search?keywords=<k>"
      },
      {
        title: "偷偷啪视频",
        cover: "https://i.postimg.cc/SQwFQqJX/ttp.png",
        intro: "#综合 #高清 #含羞草 #在线",
        href: "https://ttp.mobi/",
        search: "https://ttp214.shop/Search/<k>"
      },
      {
        title: "西瓜色视频",
        cover: "https://i.postimg.cc/4nC19vc1/xgs.png",
        intro: "#综合 #超高清 #在线",
        href: "https://xgs.mobi/",
        search: "https://xgs238.me/s/<k>"
      },
      {
        title: "九色视频发布页",
        cover: "https://sjtu.jiuse826.com/assets-static/images/icons/icon-144x144.png",
        intro: "#91Porn #九色视频发布页",
        href: "https://dizhi22.com/",
        search: ""
      },
      {
        title: "91PORN",
        cover: "https://sjtu.jiuse826.com/assets-static/images/icons/icon-144x144.png",
        intro: "#正版 #永久域 #搜索需登录",
        href: "https://91porn.com/index.php",
        search: "https://91porn.com/index.php/search_result.php?search_id=<k>&search_type=search_videos&min_duration="
      },
      {
        title: "四虎TV",
        cover: "https://i.postimg.cc/kGCMx8bq/4huTv.png",
        intro: "#综合",
        href: "https://4hu.tv/Enter/home.html",
        search: "https://4hu.tv/searchs/index.php?keyboard=<k>"
      }
    ]
  },
  {
    class: "🗾AV在线看",
    list: [
      {
        title: "7MMTV",
        cover: "https://i.postimg.cc/fbKYsMPc/7mmtv.png",
        intro: "#AV",
        href: "https://7mmtv.sx/",
        search: "https://7mmtv.sx/zh/searchall_search/all/<k>/1.html"
      },
      {
        title: "18AV",
        cover: "https://i.postimg.cc/1XVQDLN6/18AV.png",
        intro: "#日本/国产AV #漫画 #小说 #中文字幕",
        href: "https://18av.mm-cg.com/zh/",
        search: "https://18av.mm-cg.com/zh/fc_search/all/<k>/1.html"
      },
      {
        title: "njav",
        cover: "https://i.postimg.cc/Cx5JHLpg/njav.png",
        intro: "#日本AV #模糊搜索",
        href: "https://njav.xyz/zh/",
        search: "https://njav.xyz/zh/search?keyword=<k>"
      },
      {
        title: "MissAV",
        cover: "https://i.postimg.cc/YSsNWMC3/MissAV.png",
        intro: "#HD日本AV #模糊搜索",
        href: "https://missav.li/zh/",
        search: "https://missav.li/zh/search?keyword=<k>"
      },
      {
        title: "NJAV",
        cover: "https://i.postimg.cc/tCc263vP/njav.png",
        intro: "",
        href: "https://njav.com/zh/",
        search: "https://www.njav.com/zh/search?q=<k>"
      },
      {
        title: "MISSAV",
        cover: "https://i.postimg.cc/VLJ8qFgW/MISSAV.png",
        intro: "",
        href: "https://missav.com/dm4/cn",
        search: "https://missav.com/cn/search/<k>"
      },
      {
        title: "Jable",
        cover: "https://i.postimg.cc/dVBjJgZq/Jable.png",
        intro: "#日本AV",
        href: "https://jable.tv/",
        search: "https://jable.tv/search/<k>/"
      },
      {
        title: "Avple",
        cover: "https://i.postimg.cc/FKkhXZcF/Avple.png",
        intro: "#AV #国产视频",
        href: "https://avple.tv/",
        search: "https://avple.tv/search?key=<k>"
      },
      {
        title: "Netflav",
        cover: "https://i.postimg.cc/cHpFcpfG/Netflav.png",
        intro: "#AV",
        href: "https://netflav5.com/",
        search: "https://netflav5.com/search?type=title&keyword=<k>"
      },
      {
        title: "Supjav",
        cover: "https://i.postimg.cc/59SjBwB6/Supjav.png",
        intro: "#日本AV #不支持中文搜索",
        href: "https://supjav.com/zh/",
        search: "https://supjav.com/zh/?s=<k>"
      },
      {
        title: "JAVDAY",
        cover: "https://i.postimg.cc/wTD0FxKw/JAVDAY.png",
        intro: "#日本AV #国产AV",
        href: "https://javday.tv/",
        search: "https://javday.tv/search/?wd=<k>"
      }
    ]
  },
  {
    class: "🎴动漫专区",
    list: [
      {
        title: "Anime1",
        cover: "",
        intro: "#动漫线上看",
        href: "https://anime1.me/",
        search: "https://anime1.me/?s=<k>"
      }
    ]
  },
  {
    class: "🧲番号磁力",
    list: [
      {
        title: "磁力爬",
        cover: "",
        intro: "#magent #番号搜索",
        href: "https://clp.mobi/",
        search: "https://clp33.shop/Search/<k>"
      },
      {
        title: "磁力爬",
        cover: "",
        intro: "#magent #番号",
        href: "https://cilipa.me/",
        search: "https://clp22.shop/Search/<k>"
      },
      {
        title: "番号预览",
        cover: "https://c0.jdbstatic.com/images/logo_120x120.png",
        intro: "#番号预览工具",
        href: "https://fanhao.me/",
        search: "https://fanhao.me/<k>"
      },
      {
        title: "JAV111番号网",
        cover: "https://i.postimg.cc/VLm2B6Px/jav111.png",
        intro: "#番号(介绍&预览) #日本AV",
        href: "https://jav111.mobi/",
        search: "https://jav111.mobi/search/<k>"
      },
      {
        title: "好色妻AV",
        cover: "https://hsq777.shop/logo.png",
        intro: "#番号(介绍&预览) #日本AV",
        href: "https://hsq.mobi/",
        search: "https://hsq777.shop/Censored-search/<k>"
      }
    ]
  },
  {
    class: "🔰论坛登录",
    list: [
      {
        title: "搜书吧",
        cover: "",
        intro: "#知名论坛 #需登录",
        href: "https://www.soushu2025.com/",
        search: ""
      },
      {
        title: "推特",
        cover: "",
        intro: "#twitter #需登录",
        href: "https://x.com/",
        search: "https://x.com/search?q=<k>&src=typed_query"
      },
      {
        title: "pixiv",
        cover: "",
        intro: "#p站 #需登录",
        href: "https://www.pixiv.net/",
        search: "https://www.pixiv.net/tags/<k>/artworks?s_mode=s_tag"
      },
    ]
  },
  {
    class: "💞特殊发布",
    list: [
      {
        title: "综合发布页",
        cover: "",
        intro: "#发布页",
        href: "https://www.kaoav.xyz/",
        search: ""
      }
    ]
  },
  {
    class: "🎨漫画专区",
    list: [
      {
        title: "禁漫天堂",
        cover: "https://i.postimg.cc/sDHXYcWV/18comic.png",
        intro: "#18comic #漫画",
        href: "https://18comic.vip/",
        search: "https://18comic.vip/search/photos?main_tag=0&search_query=<k>"
      },
      {
        title: "禁漫天堂发布页",
        cover: "https://i.postimg.cc/sDHXYcWV/18comic.png",
        intro: "#漫画 #发布页",
        href: "https://jmcomic-fb.vip/",
        search: ""
      },
      {
        title: "蛙漫漫画",
        cover: "https://i.postimg.cc/ZKHfV9YY/manwa.png",
        intro: "#漫画 #永久",
        href: "https://manwa.me/",
        search: "https://manwa.me/search?keyword=<k>"
      },
      {
        title: "蛙漫漫画发布页",
        cover: "https://manwa.me/static/images/new_logo.svg",
        intro: "#漫画 #腐漫 #发布页",
        href: "https://fuw11.cc/",
        search: ""
      },
      {
        title: "绅士漫画",
        cover: "https://i.postimg.cc/k4k4rXnB/ssmh.png",
        intro: "",
        href: "https://www.wnacg.com/",
        search: "https://www.wnacg.com/q/?q=<k>&f=_all&s=create_time_DESC&syn=yes"
      },
      {
        title: "绅士漫画发布页",
        cover: "https://i.postimg.cc/k4k4rXnB/ssmh.png",
        intro: "#发布页",
        href: "https://wnacg.date/",
        search: ""
      },
      {
        title: "E站 / e-hentai",
        cover: "https://i.postimg.cc/28t0PsWg/E-Hentai.png",
        intro: "#r18漫画大全",
        href: "https://e-hentai.org/",
        search: "https://e-hentai.org/?f_search=<k>"
      }
    ]
  },
  {
    class: "🎬国际名站",
    list: [
      {
        title: "Pornhub",
        cover: "https://i.postimg.cc/tJsmxQRQ/Pornhub.png",
        intro: "#p站",
        href: "https://cn.pornhub.com/",
        search: "https://cn.pornhub.com/video/search?search=<k>"
      },
      {
        title: "XVIDEOS",
        cover: "https://i.postimg.cc/90KDbTGg/XVIDEOS.png",
        intro: "#x站",
        href: "https://www.xvideos.com/?k=<k>",
        search: ""
      },
      {
        title: "XNXX",
        cover: "https://i.postimg.cc/k5PZV0fL/XNXX.png",
        intro: "#x站",
        href: "https://www.xnxx.com/search/<k>",
        search: ""
      }
    ]
  },
  {
    class: "🖼写真图片",
    list: []
  },
  {
    class: "📚️小说阅读",
    list: []
  }
];
