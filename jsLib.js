Url = "https://raw.githubusercontent.com/csgtavs/data/main/jsLib.js";
var parse = x => JSON.parse(x),
    trim = x => String(x).trim(),
    times = () => new Date().getTime(),
    encode = x => encodeURIComponent(x),
    objfy = (x, n) => n > 1 ? JSON.stringify(x, null, n) : JSON.stringify(x),
    header = (x, y) => JSON.stringify({ headers: { Referer: y, "User-Agent": x || andUA } }),
    evalfn = (fn) => { return eval(`(${fn})()`); },
    error = (x, y) => `${y ? y + '：' : ''}${x.name}@${x.message}`;

function exec(fn) {
    let str = String(fn);
    try {
        return str.substring(str.indexOf('{') + 1, str.lastIndexOf('}'));
    } catch (e) {
        let err = error(e);
        this.java.log(err);
        this.java.toast(err);
    }
}

function toast(x) { this.java.toast(x); }
function log(x) { this.java.log(x); return x; }
function longToast(x) { this.java.longToast(x); }
function t2s(x) { return String(this.java.t2s(x)) }
function s2t(x) { return String(this.java.s2t(x)) }
function setV(x) { this.source.setVariable(String(x || "")) }
function getV() { return String(this.source.getVariable()).trim(); }
function logToast(x, y) { this.java.log(x); this.java.toast(x); return y; }
function getMap(x) { try { return String(this.source.getLoginInfoMap().get(x)); } catch { this.java.log("获取map失败!"); return ""; } }
function getHeader(x) { return x ? x = cache.get('nowUA') ? objfy({ "User-Agent": x }) : "" : "" }
function importJs(url) {
    let java = this.java;
    url = url || Url;
    try {
        let text = String(java.ajax(url));
        java.deleteFile(java.downloadFile(url));
        java.cacheFile(url);
        return text;
    } catch (e) {
        try {
            let text = String(java.importScript(url));
            java.toast(`网络不佳，使用缓存：${error(e)}`);
            return text;
        } catch (x) {
            java.toast(`请检查或切换网络！${error(e)}`);
        }
    }
}

function getCacheDatas() {
    var version = "v2.2.8",
        Url = "https://raw.githubusercontent.com/csgtavs/data/main/jsLib.js",
        winUA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        andUA = "Mozilla/5.0 (Linux; Android 11; V2069A Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/108.0.5359.128 Mobile Safari/537.36",
        iosUA = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Snapchat/10.77.5.59 (like Safari/604.1)",
        helpUrl = "https://csgta.tawk.help/",
        translateJsUrl = "https://cdn.jsdelivr.net/gh/csgtavs/data/translate.min.js",
        winHeader = `,${header(winUA) || ""}`,
        longToastStr = `例如填写：[1,[3,2,4],5]，表示隐藏（从左往右）第1栏、第5栏、第3栏的第2和第4项。
此功能用于去除您不认同/需要的栏目/子项，如果不生效或异常可能是因为：
1、未完成登录（点击【登录】上方【√】）；
2、设置后需【右上角】点击【刷新分类】内容后重新生成；
3、格式错误，为数组格式，不能含有空项，重复项会覆盖前面的`;
    let _version = cache.get('version');
    if (_version === null) {
        cache.put('version', version);
        if (_version !== version)
            java.toast("请点击登录更新此源！");
    }
    cache.put("nowUA", iosUA);
    cache.put("helpUrl", helpUrl);
    cache.put('translateJsUrl', translateJsUrl);
    cache.put('longToastStr', longToastStr);
    cache.put('getLoginUrl', getLoginUrl.toString());
    cache.put('getRuleArticles', getRuleArticles.toString());
    cache.put('sourceUrl', "https://www.coolapk.com/link?url=legado://import/bookSource?src=https://qyyuapi.com/json/V2.2.json");
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
    cache.put('datas', objfy(datas));
}

function getSortUrl() {
    sortUrl = (() => {
        let base = "https://www.baidu.com/";
        let list, hide, str = getMap('需隐藏的栏目').replace(/\s+/g, "");
        let arr = datas.map((x, i) => `${x.class}[${x.list.length}]::${base}#${i}`);
        if (!str) return arr.join('\n');
        try {
            hide = parse(str || "[]");
        } catch (e) {
            log(error(e));
        }
        if (!Array.isArray(hide) || hide.length < 1) return arr.join('\n');
        list = arr.filter((x, i) => hide.indexOf(i + 1) < 0).join('\n');
        //log(list+"\n");
        hide.forEach(arr => {
            if (!Array.isArray(arr)) return;
            arr[0]--;
            list = list.replace(new RegExp(`#${arr[0]}.*`), `#${arr.join(",")}`);
        });
        return list;
    })();
    sortUrl = sortUrl ? (cache.put('sortUrl', sortUrl), sortUrl) : cache.get('sortUrl');
    log(sortUrl);
}

function getRuleArticles() {
    let datas = parse(cache.get('datas'));
    let id = baseUrl.match(/#(\d+),?(.*)/);
    let hide = id[2] ? id[2].split(',').map(x => +x) : [];
    let list = parse(objfy(datas[+id[1]]["list"] || []));
    if (hide.length > 0) {
        list = list.filter((x, i) => hide.indexOf(i + 1) === -1);
    }
    let key = getV(), code = encode(key), add = `　🔎 ${key}`;
    list = key ? (toast(add), list.map(obj => {
        let { title, href, search } = obj;
        if (title.includes('发布')) { return obj; }
        obj.href = search
            ? (obj.title += add, search.replace(/<k>/, code))
            : (obj.title += "　⚠️🔎", href);
        return obj;
    })) : list;
}

//loginUrl

function getLoginUrl() {

    function getKey(x) {
        return String(this.result.get(x || 'input/输入')).trim();
    }

    function t2sV() {
        let x = getV(), y = t2s(x);
        x === y ? toast(`源变量"${x}"中不含可转繁体字符！`)
            : (setV(y), toast(`成功：${x} => ${y}`));
    }

    function s2tV() {
        let x = getV(), y = s2t(x);
        x === y ? toast(`源变量"${x}"中不含可转简体字符！`)
            : (setV(y), toast(`成功：${x} => ${y}`));
    }

    function showV() {
        let k = getV();
        k ? toast('当前源变量为：' + k) : toast('当前源变量为空或空白符！');
    }

    function repV() {
        let x = getV(), y = getKey();
        if (!y) {
            return toast('输入为空！如需清空请点清空键');
        }
        x === y ? toast(`输入"${x}"重复！`)
            : (setV(y), toast(`成功：${x} => ${y}`));
    }

    function updateJs(key) {
        let url = cache.get(key);
        if (!(url && url.startsWith('http'))) return toast('无法更新！');
        try {
            java.ajax(url);
            java.deleteFile(java.downloadFile(url));
            java.importScript(url);
        } catch (e) {
            toast(error(e, '更新失败'));
        }
    }

    function toTry(x) {
        try {
            x();
        } catch (e) {
            toast(error(e));
        }
    }

    function open(x, y) {
        try {
            let str = '网址无法打开！';
            if (!x) {
                x = getKey();
                str = "不是完整网址！";
            } else if (x.startsWith('http')) {
                x = x;
            } else {
                x = cache.get(x);
            }
            x.startsWith('http') ? java.startBrowser(x, y || '') : toast(str);
        } catch (e) {
            toast(error(e));
        }
    }

    let login = x => 10;

    function translate(to, from) {
        let str = getKey();
        if (!str) {
            let key = getV();
            if (key) {
                str = key;
                toast(`输入为空，取源变量："${key}" 翻译！`);
            } else {
                return toast(`请先输入内容或设置源变量！`);
            }
        } else {
            toast('请稍等，翻译结果将自动存为源变量！')
        }
        let lang = {
            ja: "japanese",
            zh: "chinese_simplified",
            en: "english",
            kr: "korean"
        }
        //toast(lang[from || 'zh'] + "@" + lang[to || 'en']);
        let data = java.webView(`
    <script>
    ${java.importScript(cache.get('translateJsUrl'))}
    </script>
    <script>
    translate.service.use('client.edge');
    translate.language.clearCacheLanguage();
    translate.language.setLocal("${lang[from || 'zh']}");
    translate.language.setDefaultTo("${lang[to || 'en']}");
    translate.request.translateText("${str}", function (data) {
       window.myData = data;        
    });
    </script>`, "https://www.translate.com/", "myData");
        data = parse(data);
        let text = data.text[0];
        if (!text) { return toast("翻译失败！"); }
        toast(`翻译成功：${str} => ${text}`);
        if (!text.includes(' ')) { text = text.toLowerCase() };
        setV(text);
    }
}
