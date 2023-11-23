import{d as w,h as i,r as u,o as S,c as z,b as e,e as t,a as s,w as b,I as v,an as m,v as g,f as K,aw as p,_ as R}from"./app-460eea48.js";import{_ as T}from"./aliyundrive-2cb15386.js";const A=e("h1",{id:"阿里云盘-分享",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#阿里云盘-分享","aria-hidden":"true"},"#"),t(" 阿里云盘/分享")],-1),q={class:"hint-container warning"},P=e("p",{class:"hint-container-title"},"注意",-1),F=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,[t("由于阿里云盘 referer 的限制，必须使用移动端 token。 使用桌面 Web 令牌将导致无法下载和预览。 当然，如果你在本地使用或者带宽足够大，你也可以开启代理，让桌面 Web 的 "),e("code",null,"refresh token"),t(" 正常工作。")])],-1),M=e("h3",{id:"刷新令牌",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#刷新令牌","aria-hidden":"true"},"#"),t(),e("strong",null,"刷新令牌")],-1),N={href:"https://github.com/Xhofe/alist/issues/88",target:"_blank",rel:"noopener noreferrer"},W=e("code",null,"/data/media/0/Android/data/com.alicloud.databox/files/logs/trace/",-1),E=["disabled"],J={style:{margin:"4px"}},O=["src"],Q={class:"hint-container info"},U={class:"hint-container-title"},D={href:"http://replit.com",target:"_blank",rel:"noopener noreferrer"},L=e("h3",{id:"root-folder-file-id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#root-folder-file-id","aria-hidden":"true"},"#"),t(),e("strong",null,"Root folder file_id")],-1),G=e("p",null,"打开阿里云盘官网，点击进入要设置的文件夹时点击 URL 后面的字符串",-1),I={href:"https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940",target:"_blank",rel:"noopener noreferrer"},V=K('<p>这个文件夹的 file_id 即为 <code>5fe01e1830601baf774e4827a9fb8fb2b5bf7940</code>：</p><p><img src="'+T+'" alt="file_id"></p><h3 id="秒传" tabindex="-1"><a class="header-anchor" href="#秒传" aria-hidden="true">#</a> <strong>秒传</strong></h3><p>上传的时候校验 hash，如果云端有，直接生成文件，不消耗流量</p><h3 id="内部上传" tabindex="-1"><a class="header-anchor" href="#内部上传" aria-hidden="true">#</a> <strong>内部上传</strong></h3><p>如果你部署 Alist 的服务器是阿里云北京地区 ECS，打开此开关可以提升文件上传速度。不符合要求的服务器请不要打开此开关，否则会出现无法上传的问题。</p><br><h2 id="阿里云盘分享" tabindex="-1"><a class="header-anchor" href="#阿里云盘分享" aria-hidden="true">#</a> <strong>阿里云盘分享</strong></h2>',8),B=e("strong",null,"阿里云盘Open",-1),Z=e("br",null,null,-1),X=e("h3",{id:"默认使用的下载方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#默认使用的下载方式","aria-hidden":"true"},"#"),t(),e("strong",null,"默认使用的下载方式")],-1),Y=w({__name:"aliyundrive.html",setup(j){const o=i("获取 Token"),n=i(0),d=i(""),c=i(""),_=i(""),k=async()=>{o.value="等待...",n.value=1;const a=await(await fetch(`${p()}/alist/ali/qr`)).json();console.log(a),o.value="使用阿里云盘 APP 扫描然后点击",n.value=2,_.value=JSON.stringify({ck:a.content.data.ck,t:a.content.data.t.toString()}),d.value=`${p()}/qr/?size=400&text=${encodeURIComponent(a.content.data.codeContent)}`},x=async()=>{n.value=3,o.value="等待...";const a=await(await fetch(`${p()}/alist/ali/ck`,{method:"POST",headers:{"Content-Type":"application/json"},body:_.value})).json(),{content:{data:{qrCodeStatus:l,loginResult:r,bizExt:h}}}=a;if(r!=="success"){n.value=2,o.value="使用阿里云盘 App 扫描然后点击",alert("Status:"+l);return}const C=JSON.parse(atob(h));c.value=C.pds_login_result.refreshToken,o.value="获取 Token 成功",n.value=4,console.log(a)},y=async()=>{n.value===0&&k(),n.value===2&&x()};return(f,a)=>{const l=u("RouterLink"),r=u("ExternalLinkIcon"),h=u("Mermaid");return S(),z("div",null,[A,e("div",q,[P,e("p",null,[t("不推荐使用该驱动，因为它不稳定，随时可能被屏蔽，我们会在以后的版本中移除。推荐使用官方 API 的驱动 "),s(l,{to:"/zh/guide/drivers/aliyundrive_open.html"},{default:b(()=>[t("Aliyundrive Open")]),_:1}),t("。")])]),F,M,e("p",null,[t("按照这个 "),e("a",N,[t("issue"),s(r)]),t(" 在手机上捕获/查找日志（"),W,t("）。 或者您可以点击：")]),e("p",null,[e("button",{disabled:n.value===3||n.value===1,style:{outline:"none",padding:"12px",background:"#70c6be",border:"none","border-radius":"8px",cursor:"pointer","font-size":"20px"},onClick:y},v(o.value),9,E)]),m(e("div",J,[e("img",{src:d.value},null,8,O)],512),[[g,d.value]]),m(e("div",null,[e("div",Q,[e("p",U,"Token: "+v(c.value),1)])],512),[[g,c.value]]),e("p",null,[e("em",null,[t("API is hosted on "),e("a",D,[t("replit.com"),s(r)])])]),L,G,e("p",null,[t("如 "),e("a",I,[t("https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940"),s(r)])]),V,e("p",null,[t("已经无法使用，并且后续不再开发和维护分享存储方式，同时"),s(l,{to:"/zh/guide/drivers/aliyundrive_open.html"},{default:b(()=>[B]),_:1}),t("获取的Token也不可以在阿里云盘分享挂载存储使用。")]),Z,X,s(h,{id:"mermaid-69",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="})])}}}),ee=R(Y,[["__file","aliyundrive.html.vue"]]);export{ee as default};