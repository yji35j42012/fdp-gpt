(function(){"use strict";var t={2268:function(t,i,a){var s=a(144),e=function(){var t=this,i=t._self._c;return i("div",{ref:"wrap",class:["wrap","_"+t.nowPage],attrs:{id:"app"}},[i("div",{class:["header","landing"==t.nowPage?"_landing":"",t.headerBg?"_on":""]},[i("div",{staticClass:"header_title"},[i("div",{staticClass:"logo"},["landing"==t.nowPage?i("img",{attrs:{src:a(2835),alt:""}}):i("img",{attrs:{src:a(1446),alt:""}})]),t._v(" MEDPILOT "),"backend"==t.nowPage?i("span",{staticClass:"isBack"},[t._v("Backend")]):t._e()]),"landing"==t.nowPage?i("ul",{staticClass:"menu"},[i("li",{staticClass:"menu_li",on:{click:function(i){return t.menuHandler("home")}}},[t._v("Home")]),i("li",{staticClass:"menu_li",on:{click:function(i){return t.menuHandler("about")}}},[t._v("About")]),i("li",{staticClass:"menu_li",on:{click:function(i){return t.menuHandler("highlights")}}},[t._v("Highlights")]),i("li",{staticClass:"menu_li",on:{click:function(i){return t.menuHandler("pruducts")}}},[t._v("Pruducts")]),i("li",{staticClass:"menu_li",on:{click:function(i){return t.menuHandler("team")}}},[t._v("Team")]),i("li",{staticClass:"menu_li",on:{click:function(i){return t.menuHandler("contact")}}},[t._v("Contact")]),i("li",{staticClass:"menu_li _try"},[i("router-link",{attrs:{to:"/"}},[t._v("Try it")])],1),t._m(0)]):t._e(),"front"==t.nowPage?i("button",{staticClass:"normal_btn _generate _download",attrs:{disabled:"",id:"dow"},on:{click:t.download}},[t._v("Download")]):t._e(),"front"==t.nowPage?i("div",{staticClass:"user"},[t._v("Member 0001")]):t._e()]),"landing"==t.nowPage?i("button",{ref:"gotop",class:["gotop",t.headerBg?"_on":""],on:{click:t.gotopHandler}},[i("img",{attrs:{src:a(3342),alt:""}})]):t._e(),i("router-view")],1)},n=[function(){var t=this,i=t._self._c;return i("li",{staticClass:"menu_li _btn _disabled"},[i("button",{staticClass:"border_btn",attrs:{disabled:""}},[t._v("Login")])])}],l={data(){return{nowPage:"",scrollTime:"",headerBg:!1,screenH:0}},mounted(){var t=this.$route.path;"/landing"==t&&(this.nowPage="landing"),this.screenH=window.innerHeight,this.$refs.wrap.addEventListener("scroll",this.scrollHandler),window.onload=function(){let t=document.querySelector('link[rel="icon"]');console.log("favicon",t);var i,a=t.href;"landing"==this.nowPage?i=a.split("/favicon.ico")[0]+"/favicon_landing.ico":a.split("/favicon.ico")[0],console.log("newHref",i),t.href=i}},watch:{$route(t,i){var a=this.$route.path;let s=document.querySelector('link[rel="icon"]');console.log("favicon_watch",s);var e,n=s.href;"/landing"==a?(this.nowPage="landing",e=n.split("/favicon.ico")[0]+"/favicon_landing.ico"):(this.nowPage=a.split("/")[1],e=n.split("/favicon.ico")[0]+"/favicon.ico"),console.log("newHref_watch",e),s.href=e}},methods:{download(){},menuHandler(t){clearInterval(this.scrollTime);var i=document.querySelector(".wrap"),a=document.querySelector("#"+t).offsetTop,s=document.querySelector(".landing").offsetHeight,e=document.querySelector(".landing_info:last-child").offsetHeight,n=this.screenH>e?s-this.screenH:s-e;a>i.scrollTop?this.downScroll(i,a,n):this.upScroll(i,a)},downScroll(t,i,a){var s=30;Math.abs(i-t.scrollTop)>1e3&&(s=60),this.scrollTime=setInterval((()=>{t.scrollTop+=s,t.scrollTop>=a&&clearInterval(this.scrollTime),!this.headerBg&&t.scrollTop>=this.screenH-60&&(this.headerBg=!0),t.scrollTop>=i&&(t.scrollTop=i,clearInterval(this.scrollTime))}),1)},upScroll(t,i){var a=30;Math.abs(i-t.scrollTop)>1e3&&(a=60),this.scrollTime=setInterval((()=>{t.scrollTop-=a,this.headerBg&&t.scrollTop<this.screenH-60&&(this.headerBg=!1),t.scrollTop<=i&&(t.scrollTop=i,clearInterval(this.scrollTime))}),1)},scrollHandler(){var t=this.$refs.wrap;!this.headerBg&&t.scrollTop>=this.screenH-60&&(this.headerBg=!0),this.headerBg&&t.scrollTop<this.screenH-60&&(this.headerBg=!1)},gotopHandler(){var t=document.querySelector(".wrap");this.upScroll(t,0)}}},r=l,c=a(1001),o=(0,c.Z)(r,e,n,!1,null,null,null),d=o.exports,_=a(8345),u=function(){var t=this,i=t._self._c;return i("div",{staticClass:"front"},[i("div",{staticClass:"front_content"},[i("div",{staticClass:"front_msg"},[i("div",{staticClass:"front_textarea"},[i("div",{staticClass:"front_textarea_title"},[t._v(" Technical Description... ")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.serchInp,expression:"serchInp"}],attrs:{placeholder:"Please enter a technical description of 250 to 300 words"},domProps:{value:t.serchInp},on:{input:function(i){i.target.composing||(t.serchInp=i.target.value)}}}),i("div",{staticClass:"front_textarea_func"},[i("button",{staticClass:"normal_icon _clear",on:{click:t.clearSearch}}),i("button",{staticClass:"normal_btn _generate",on:{click:t.submitSearch}},[t._v("Generate")])])]),i("div",{staticClass:"front_info"},[i("div",{staticClass:"front_info_head"},[i("i",{staticClass:"icon _ai"}),i("ul",{staticClass:"front_filter"},t._l(t.filter_item,(function(a,s){return i("li",{key:s,class:["front_filter_item",s==t.filter_itemPage?"on":""],on:{click:function(i){return t.fliterItemHandler(s)}}},[t._v(" "+t._s(a)+" ")])})),0)]),i("div",{staticClass:"front_info_content"},[i("ul",{staticClass:"front_info_group"},t._l(t.filter_item_content[0],(function(a,s){return i("li",{key:s,staticClass:"front_info_list"},[t._v(" "+t._s(a)+" ")])})),0)])])]),i("div",{staticClass:"front_detail"},[i("div",{staticClass:"front_detail_head"},[i("i",{staticClass:"icon _ai"}),t._v(" Search and List Predicate Device "),i("ul",{staticClass:"front_filter"},t._l(t.filter_tb_item,(function(a,s){return i("li",{key:s,class:["front_filter_item",s==t.tb_itemPage?"on":""],on:{click:function(i){return t.fliterTbItem(s)}}},[t._v(" "+t._s(a)+" ")])})),0)]),i("div",{staticClass:"front_detail_content"},[0==t.tb_itemPage?i("div",{staticClass:"front_detail_tbScroll"},[i("table",{staticClass:"front_detail_tb"},[i("thead",[i("tr",[i("th",[i("div",{class:["normal_sort",t.sortList[0]],on:{click:function(i){return t.sortHandler(0)}}},[t._v(" Device "),i("br"),t._v(" Class "),i("i",{staticClass:"icon_sort"})])]),i("th",[i("div",{class:["normal_sort",t.sortList[1]],on:{click:function(i){return t.sortHandler(1)}}},[t._v(" 510(k) "),i("br"),t._v(" Number "),i("i",{staticClass:"icon_sort"})])]),i("th",[i("div",{class:["normal_sort",t.sortList[2]],on:{click:function(i){return t.sortHandler(2)}}},[t._v(" Applicant "),i("i",{staticClass:"icon_sort"})])]),i("th",[i("div",{class:["normal_sort",t.sortList[3]],on:{click:function(i){return t.sortHandler(3)}}},[t._v(" DeviceName "),i("i",{staticClass:"icon_sort"})])]),i("th",[i("div",{class:["normal_sort",t.sortList[4]],on:{click:function(i){return t.sortHandler(4)}}},[t._v(" Decision "),i("br"),t._v(" Date "),i("i",{staticClass:"icon_sort"})])])])]),i("tbody",t._l(t.filter_tb_content,(function(a,s){return i("tr",{key:s},[i("td",[t._v(t._s(a.device_id))]),i("td",[i("a",{attrs:{href:"https://www.google.com",target:"_blank"}},[t._v(t._s(a.number))])]),i("td",[t._v(t._s(a.applicant))]),i("td",[t._v(t._s(a.DeviceName))]),i("td",[t._v(t._s(a.date))])])})),0)])]):i("div",{staticClass:"front_nodata"},[i("img",{attrs:{src:a(1487),alt:""}}),i("div",{staticClass:"front_nodata_txt"},[t._v("Under Construction")])])])])]),i("div",{staticClass:"front_footer"},[t._v(" Please note that our system utilizes data from the openFDA database, primarily covering reports and events related to medical devices. This information is intended for reference purposes only and should not be used to make specific decisions regarding medical care. For advice on the specific care and treatment of medical devices, consult with healthcare professionals. ")]),t.showLoading?i("Loading"):t._e(),t.alertMsg.show?i("Alert",{attrs:{alertTitle:t.alertMsg.title,alertMsg:t.alertMsg.msg},on:{alertConfirm:t.returnAlert}}):t._e()],1)},m=[],g=function(){var t=this;t._self._c;return t._m(0)},v=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"alert _loading"},[i("div",{staticClass:"alert_box"},[i("div",{staticClass:"alert_head"},[t._v("Executing")]),i("div",{staticClass:"alert_body"},[i("div",{staticClass:"loading"},[i("div",{staticClass:"loading loading_circle"})]),i("div",{staticClass:"alert_txt"},[t._v(" Generating.., it will take about 5-10 minutes, "),i("br"),t._v(" please do not close the Screen! ")])])])])}],p={},h=(0,c.Z)(p,g,v,!1,null,null,null),f=h.exports,b=function(){var t=this,i=t._self._c;return i("div",{staticClass:"alert"},[i("div",{staticClass:"alert_box"},[i("div",{staticClass:"alert_head"},[t._v(t._s(t.alertTitle))]),i("div",{staticClass:"alert_body"},[i("div",{staticClass:"alert_txt"},[t._v(" "+t._s(t.alertMsg)+" ")]),i("div",{staticClass:"alert_func"},[i("button",{staticClass:"normal_btn _generate",on:{click:t.confirmHandler}},[t._v("確定")])])])])])},C=[],k={props:{alertTitle:String,alertMsg:String},methods:{confirmHandler(){this.$emit("alertConfirm")}}},w=k,x=(0,c.Z)(w,b,C,!1,null,null,null),y=x.exports,T=["All","Potential Applications","Benchmark Company","Benchmark Product","MD Assessment"],M=[["[Potential Applications]潛在應用","1. 精準腦部腫瘤切除：利用此技術，醫師能夠更精確地規劃切除腦部腫瘤的路徑，避免損傷重要的腦血管，降低手術風險。","2. 腦動脈瘤手術：在治療腦動脈瘤時，此技術能夠幫助醫師確定最佳的手術進入點和路徑，以減少手術過程中對周圍組織的損傷。","3. 腦血管異常修復：對於腦血管異常（如動靜脈畸形）的修復手術，此技術能提供更清晰的血管結構視圖，幫助醫師進行精確修復。","4. 神經功能保護手術：在進行可能影響神經功能的手術時，此技術能夠幫助醫師避開關鍵的神經結構，保護病人的神經功能。","5. 教育與訓練：此技術可用於醫學教育和手術訓練，提供學生和醫生更直觀的3D腦部結構和血管模型，增進手術技巧的學習。","6. 手術模擬：在實際手術前，醫師可以利用此技術進行手術模擬，提高手術計劃的準確性和成功率。","7. 術中即時導航：在手術過程中，此技術能夠提供即時的3D導航，幫助醫師根據實際情況調整手術策略。","8. 術中即時導航：在手術過程中，此技術能夠提供即時的3D導航，幫助醫師根據實際情況調整手術策略。","9. 術中即時導航：在手術過程中，此技術能夠提供即時的3D導航，幫助醫師根據實際情況調整手術策略。","10. 術中即時導航：在手術過程中，此技術能夠提供即時的3D導航，幫助醫師根據實際情況調整手術策略。","11. 術中即時導航：在手術過程中，此技術能夠提供即時的3D導航，幫助醫師根據實際情況調整手術策略。"]],P=["510K","De Novo","PMA","Registration ＆ Listing"],I=[{device_id:2,number:"K232802",applicant:"Think Surgical, Inc.,",DeviceName:"TMINI Miniature Robotic System",date:"2023/10/12"},{device_id:2,number:"K232802",applicant:"Think Surgical, Inc.,",DeviceName:"TMINI Miniature Robotic System",date:"2023/10/12"},{device_id:2,number:"K232802",applicant:"Think Surgical, Inc.,",DeviceName:"TMINI Miniature Robotic System",date:"2023/10/12"},{device_id:2,number:"K232802",applicant:"Think Surgical, Inc.,",DeviceName:"TMINI Miniature Robotic System",date:"2023/10/12"},{device_id:2,number:"K232802",applicant:"Think Surgical, Inc.,",DeviceName:"TMINI Miniature Robotic System",date:"2023/10/12"},{device_id:2,number:"K232802",applicant:"Think Surgical, Inc.,",DeviceName:"TMINI Miniature Robotic System",date:"2023/10/12"},{device_id:2,number:"K232802",applicant:"Think Surgical, Inc.,",DeviceName:"TMINI Miniature Robotic System",date:"2023/10/12"},{device_id:2,number:"K232802",applicant:"Think Surgical, Inc.,",DeviceName:"TMINI Miniature Robotic System",date:"2023/10/12"},{device_id:2,number:"K232802",applicant:"Think Surgical, Inc.,",DeviceName:"TMINI Miniature Robotic System",date:"2023/10/12"},{device_id:2,number:"K232802",applicant:"Think Surgical, Inc.,",DeviceName:"TMINI Miniature Robotic System",date:"2023/10/12"},{device_id:2,number:"K232802",applicant:"Think Surgical, Inc.,",DeviceName:"TMINI Miniature Robotic System",date:"2023/10/12"},{device_id:2,number:"K232802",applicant:"Think Surgical, Inc.,",DeviceName:"TMINI Miniature Robotic System",date:"2023/10/12"},{device_id:2,number:"K232802",applicant:"Think Surgical, Inc.,",DeviceName:"TMINI Miniature Robotic System",date:"2023/10/12"},{device_id:2,number:"K232802",applicant:"Think Surgical, Inc.,",DeviceName:"TMINI Miniature Robotic System",date:"2023/10/12"},{device_id:2,number:"K232802",applicant:"Think Surgical, Inc.,",DeviceName:"TMINI Miniature Robotic System",date:"2023/10/12"}],S={data(){return{serchInp:"",showLoading:!1,filter_item:[],filter_itemPage:0,filter_tb_item:[],tb_itemPage:0,filter_item_content:[],filter_tb_content:[],alertMsg:{show:!1,title:"系統異常",msg:"目前系統異常，請在稍後再次執行"},sortList:["","","","",""]}},components:{Loading:f,Alert:y},methods:{clearSearch(){this.serchInp=""},submitSearch(){this.showLoading=!0;var t=document.querySelector("#dow");t.removeAttribute("disabled"),this.fakeGet()},fliterItemHandler(t){this.filter_itemPage=t},fliterTbItem(t){this.tb_itemPage=t},fakeGet(){setTimeout((()=>{this.showLoading=!1,this.filter_item=T,this.filter_tb_item=P,this.filter_item_content=M,this.filter_tb_content=I}),1e3)},returnAlert(){this.alertMsg.show=!1,this.alertMsg.title="",this.alertMsg.msg=""},sortHandler(t){""==this.sortList[t]?(this.sortList=["","","","",""],this.sortList[t]="_asc"):"_asc"==this.sortList[t]?(this.sortList=[0,0,0,0,0],this.sortList[t]="_desc"):"_desc"==this.sortList[t]&&(this.sortList=[0,0,0,0,0],this.sortList[t]="")}}},N=S,H=(0,c.Z)(N,u,m,!1,null,null,null),A=H.exports,D=function(){var t=this,i=t._self._c;return i("div",{staticClass:"backend"},[i("div",{staticClass:"backend_content"},t._l(t.b_data,(function(a,s){return i("div",{key:s,class:["backend_list",a.show?"":"_desable"]},[i("div",{staticClass:"backend_list_info",attrs:{"data-num":s+1}},[i("div",{staticClass:"backend_textareaBox"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:a.txt,expression:"item.txt"}],ref:"f"+s,refInFor:!0,staticClass:"backend_textarea",domProps:{value:a.txt},on:{input:function(i){i.target.composing||t.$set(a,"txt",i.target.value)}}})])]),0==s?i("div",{staticClass:"backend_list_bot",attrs:{"data-bef":"起始問題"}}):i("div",{staticClass:"backend_list_bot",attrs:{"data-bef":"接續第","data-aft":"個問答"}},[i("input",{attrs:{type:"number"}})])])})),0),i("ul",{staticClass:"backend_filter"},[i("li",{staticClass:"backend_filter_list"},[i("p",{staticClass:"backend_filter_txt"},[t._v("Prompt 數量")]),i("div",{staticClass:"numBox"},[i("button",{staticClass:"numBox_btn _minus",on:{click:function(i){return t.countHandler(-1)}}},[i("i")]),i("div",{staticClass:"numBox_num"},[t._v(t._s(t.b_func.Prompt_count))]),i("button",{staticClass:"numBox_btn _plus",on:{click:function(i){return t.countHandler(1)}}},[i("i")])])]),i("li",{staticClass:"backend_filter_list"},[i("p",{staticClass:"backend_filter_txt"},[t._v("回答身份")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.b_func.identity,expression:"b_func.identity"}],staticClass:"normal_inp",attrs:{type:"text"},domProps:{value:t.b_func.identity},on:{input:function(i){i.target.composing||t.$set(t.b_func,"identity",i.target.value)}}})]),i("li",{staticClass:"backend_filter_list"},[i("p",{staticClass:"backend_filter_txt"},[t._v("標題名稱")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.b_func.title,expression:"b_func.title"}],staticClass:"normal_inp",attrs:{type:"text"},domProps:{value:t.b_func.title},on:{input:function(i){i.target.composing||t.$set(t.b_func,"title",i.target.value)}}})]),i("li",{staticClass:"backend_filter_list _btxt",attrs:{"data-note":"請用 “/ “ 分開如：software/system"}},[i("p",{staticClass:"backend_filter_txt"},[t._v("停用詞")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.b_func.words,expression:"b_func.words"}],staticClass:"normal_inp",attrs:{type:"text"},domProps:{value:t.b_func.words},on:{input:function(i){i.target.composing||t.$set(t.b_func,"words",i.target.value)}}})]),i("li",{staticClass:"backend_filter_list"},[i("p",{staticClass:"backend_filter_txt"},[t._v("替換原文關鍵詞")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.b_func.keywords,expression:"b_func.keywords"}],staticClass:"normal_inp",attrs:{type:"text"},domProps:{value:t.b_func.keywords},on:{input:function(i){i.target.composing||t.$set(t.b_func,"keywords",i.target.value)}}})]),i("li",{staticClass:"backend_filter_list _tline"},[i("p",{staticClass:"backend_filter_txt"},[t._v("api key")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.b_func.apikey,expression:"b_func.apikey"}],staticClass:"normal_inp",attrs:{type:"text"},domProps:{value:t.b_func.apikey},on:{input:function(i){i.target.composing||t.$set(t.b_func,"apikey",i.target.value)}}})]),i("li",{staticClass:"backend_filter_list"},[i("p",{staticClass:"backend_filter_txt"},[t._v("GPT 版本")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.b_func.version,expression:"b_func.version"}],staticClass:"normal_inp",attrs:{type:"text"},domProps:{value:t.b_func.version},on:{input:function(i){i.target.composing||t.$set(t.b_func,"version",i.target.value)}}})]),i("li",{staticClass:"backend_filter_list _test _bline"},[i("button",{staticClass:"normal_btn _generate _test",on:{click:t.testGpt}},[t._v("測試")])]),i("li",{staticClass:"backend_filter_list"},[i("p",{staticClass:"backend_filter_txt"},[t._v("溫度")]),i("div",{staticClass:"numBox"},[i("button",{staticClass:"numBox_btn _minus",on:{click:function(i){return t.tempHandler(-1)}}},[i("i")]),i("div",{staticClass:"numBox_num"},[t._v(t._s(t.b_func.temp))]),i("button",{staticClass:"numBox_btn _plus",on:{click:function(i){return t.tempHandler(1)}}},[i("i")])])]),i("li",{staticClass:"backend_filter_list"},[i("button",{staticClass:"normal_btn _generate",on:{click:t.saveHandler}},[t._v("儲存")])])]),t.alertMsg.show?i("Alert",{attrs:{alertTitle:t.alertMsg.title,alertMsg:t.alertMsg.msg},on:{alertConfirm:t.returnAlert}}):t._e()],1)},B=[],L=(a(560),{data(){return{b_func:{Prompt_count:1,identity:"",title:"",words:"",keywords:"",apikey:"",version:"",temp:0},b_data:[{b_dataId:0,txt:"根據〔技術描述 〕，列出3～10項與醫療相關“的可能的“potential Applications ”潛在應用，回答一開始先加上標題：〔potential Applications〕，標題加上中括號。技術描述：〔輸入內容 〕。請使用英文回答",show:!0}],b_dataNum:0,alertMsg:{show:!1,title:"",msg:""}}},components:{Alert:y},mounted(){this.$refs.f0[0].focus()},methods:{saveHandler(){""!==this.b_func.keywords?(this.alertMsg.title="輸入錯誤",this.alertMsg.msg="請輸入正確的版本、關鍵詞"):(this.alertMsg.title="儲存",this.alertMsg.msg="儲存成功"),this.alertMsg.show=!0},returnAlert(){this.alertMsg.show=!1,this.alertMsg.title="",this.alertMsg.msg=""},countHandler(t){t<0&&this.b_func.Prompt_count>1?(this.b_func.Prompt_count--,this.minusB_data()):t>0&&(this.b_func.Prompt_count++,this.setB_data())},setB_data(){0==this.b_dataNum?this.b_data.push({b_dataId:this.b_data.length,txt:"根據〔技術描述 〕，列出3～10項與醫療相關“的可能的“potential Applications ”潛在應用，回答一開始先加上標題：〔potential Applications〕，標題加上中括號。技術描述：〔輸入內容 〕。請使用英文回答根據〔技術描述 〕，列出3～10項與醫療相關“的可能的“potential Applications ”潛在應用，回答一開始先加上標題：〔potential Applications〕，標題加上中括號。技術描述：〔輸入內容 〕。請使用英文回答",show:!0}):this.b_dataNum>0&&(console.log("b_dataNum",this.b_dataNum),this.b_data[this.b_data.length-this.b_dataNum].show=!0,this.b_dataNum--)},minusB_data(){this.b_data.length>1&&(this.b_data[this.b_data.length-1-this.b_dataNum].show=!1,this.b_dataNum++)},tempHandler(t){t<0&&this.b_func.temp>0?(this.b_func.temp-=.1,this.b_func.temp=parseFloat(this.b_func.temp.toFixed(2))):t>0&&this.b_func.temp<2.2&&(this.b_func.temp=this.b_func.temp+.1,this.b_func.temp=parseFloat(this.b_func.temp.toFixed(2)))},testGpt(){this.alertMsg.show=!0,this.alertMsg.title="測試結果",this.alertMsg.msg="GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此GPT 回覆結果文案在此"}}}),G=L,R=(0,c.Z)(G,D,B,!1,null,null,null),K=R.exports,$=function(){var t=this,i=t._self._c;return i("div",{staticClass:"landing"},[i("div",{staticClass:"landing_banner",attrs:{id:"home"}},[i("div",{staticClass:"landing_banner_txt"},[i("img",{staticClass:"landing_logo",attrs:{src:a(2920),alt:""}}),i("div",{staticClass:"landing_banner_t1"},[t._v("Empowering Solutions, Global Reach")]),i("div",{staticClass:"landing_banner_t2"},[t._v("MEDPilot's AI at Your Service")]),i("div",{staticClass:"landing_banner_t3"},[t._v("Intelligent Tools for FDA submission")]),i("router-link",{staticClass:"border_btn _blue",attrs:{to:"/"}},[t._v("Try It Now!")]),t._m(0)],1)]),t._m(1),t._m(2),i("div",{staticClass:"landing_info _products",attrs:{id:"pruducts"}},[i("div",{staticClass:"landing_products_bg"},[i("svg",{staticStyle:{"enable-background":"new 0 0 1845 1065"},attrs:{version:"1.1",id:"圖層_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1845 1065","xml:space":"preserve"}},[i("path",{staticClass:"st0",attrs:{d:"M1575.7,155.5c-359.3-207.3-946.9-207.3-1306.1,0c-359.4,207.4-359.4,546.6,0,753.9\n\tc359.2,207.4,946.8,207.4,1306.1,0C1934.8,702.1,1934.8,362.9,1575.7,155.5z"}})])]),i("h1",[t._v("Products")]),t._m(3)]),t._m(4),t._m(5)])},F=[function(){var t=this,i=t._self._c;return i("span",{staticClass:"landing_banner_scroll"},[t._v("Scroll"),i("i",{staticClass:"icon _down"})])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"landing_info _about",attrs:{id:"about"}},[i("h1",[t._v("About")]),i("div",{staticClass:"landing_about"},[i("div",{staticClass:"landing_about_img"},[i("img",{attrs:{src:a(4336),alt:""}})]),i("div",{staticClass:"landing_about_txt"},[t._v(" We are committed to driving the development of ​medical equipment through innovative technology, ​using AI tool as a guide to provide smarter ​decision-making support for startup company. "),i("br"),i("br"),t._v(" Smart Solutions, Global Reach MEDPilot's AI at Your Service ")])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"landing_info _highlights",attrs:{id:"highlights"}},[i("h1",[t._v("Highlights")]),i("ul",{staticClass:"landing_highlights"},[i("li",{staticClass:"landing_highlights_item"},[i("div",{staticClass:"landing_highlights_img"},[i("img",{attrs:{src:a(8932),alt:""}})]),i("div",{staticClass:"landing_highlights_title"},[t._v("Streamline")]),i("div",{staticClass:"landing_highlights_txt"},[t._v(" Simple and smooth process ​makes complex tasks easier ​to handle. ")])]),i("li",{staticClass:"landing_highlights_item"},[i("div",{staticClass:"landing_highlights_img"},[i("img",{attrs:{src:a(4942),alt:""}})]),i("div",{staticClass:"landing_highlights_title"},[t._v("Catalyzing")]),i("div",{staticClass:"landing_highlights_txt"},[t._v(" Quickly obtain product-​related similar product ​review documents 510(K) to ​speed up the product launch ​process. ")])]),i("li",{staticClass:"landing_highlights_item"},[i("div",{staticClass:"landing_highlights_img"},[i("img",{attrs:{src:a(2319),alt:""}})]),i("div",{staticClass:"landing_highlights_title"},[t._v("Seamless")]),i("div",{staticClass:"landing_highlights_txt"},[t._v(" Good user experience allows ​those without medical device ​review experience to easily ​understand the review ​submission requirements. ")])])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"landing_products"},[i("div",{staticClass:"landing_products_img"},[i("img",{attrs:{src:a(1683),alt:""}})]),i("div",{staticClass:"landing_products_content"},[i("div",{staticClass:"landing_products_title"},[t._v("Stay Tuned")]),i("div",{staticClass:"landing_products_txt"},[t._v("For Some Exciting news")]),i("ul",{staticClass:"landing_products_circles"},[i("li",[t._v("De Novo")]),i("li",[t._v("PMA")])])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"landing_info _team",attrs:{id:"team"}},[i("h1",[t._v("Team")]),i("ul",{staticClass:"landing_team"},[i("li",{staticClass:"landing_team_item"},[i("div",{staticClass:"landing_team_pic"},[i("img",{attrs:{src:a(4628),alt:""}})]),i("div",{staticClass:"landing_team_title"},[t._v("Jenny Wilson")]),i("div",{staticClass:"landing_team_txt"},[t._v("Medical Assistant")])]),i("li",{staticClass:"landing_team_item"},[i("div",{staticClass:"landing_team_pic"},[i("img",{attrs:{src:a(4628),alt:""}})]),i("div",{staticClass:"landing_team_title"},[t._v("Jenny Wilson")]),i("div",{staticClass:"landing_team_txt"},[t._v("Medical Assistant")])]),i("li",{staticClass:"landing_team_item"},[i("div",{staticClass:"landing_team_pic"},[i("img",{attrs:{src:a(4628),alt:""}})]),i("div",{staticClass:"landing_team_title"},[t._v("Jenny Wilson")]),i("div",{staticClass:"landing_team_txt"},[t._v("Medical Assistant")])]),i("li",{staticClass:"landing_team_item"},[i("div",{staticClass:"landing_team_pic"},[i("img",{attrs:{src:a(4628),alt:""}})]),i("div",{staticClass:"landing_team_title"},[t._v("Jenny Wilson")]),i("div",{staticClass:"landing_team_txt"},[t._v("Medical Assistant")])]),i("li",{staticClass:"landing_team_item"},[i("div",{staticClass:"landing_team_pic"},[i("img",{attrs:{src:a(4628),alt:""}})]),i("div",{staticClass:"landing_team_title"},[t._v("Jenny Wilson")]),i("div",{staticClass:"landing_team_txt"},[t._v("Medical Assistant")])]),i("li",{staticClass:"landing_team_item"},[i("div",{staticClass:"landing_team_pic"},[i("img",{attrs:{src:a(4628),alt:""}})]),i("div",{staticClass:"landing_team_title"},[t._v("Jenny Wilson")]),i("div",{staticClass:"landing_team_txt"},[t._v("Medical Assistant")])]),i("li",{staticClass:"landing_team_item"},[i("div",{staticClass:"landing_team_pic"},[i("img",{attrs:{src:a(4628),alt:""}})]),i("div",{staticClass:"landing_team_title"},[t._v("Jenny Wilson")]),i("div",{staticClass:"landing_team_txt"},[t._v("Medical Assistant")])]),i("li",{staticClass:"landing_team_item"},[i("div",{staticClass:"landing_team_pic"},[i("img",{attrs:{src:a(4628),alt:""}})]),i("div",{staticClass:"landing_team_title"},[t._v("Jenny Wilson")]),i("div",{staticClass:"landing_team_txt"},[t._v("Medical Assistant")])])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"landing_info _contact",attrs:{id:"contact"}},[i("h1",[t._v("Contact")]),i("ul",{staticClass:"landing_contact"},[i("li",{staticClass:"landing_contact_item",attrs:{"data-txt":"Address："}},[t._v(" (106-36) Floor 1,14-15, No. 106, Section 2, Heping East Road, Taipei City ")]),i("li",{staticClass:"landing_contact_item",attrs:{"data-txt":"Tel："}},[t._v("(02)2737-7769")]),i("li",{staticClass:"landing_contact_item",attrs:{"data-txt":"Fax："}},[t._v("Fax：(02)2737-7836")]),i("li",{staticClass:"landing_contact_item",attrs:{"data-txt":"Email："}},[i("a",{attrs:{href:"mailto:medpilot@narlabs.org.tw"}},[t._v("medpilot@narlabs.org.tw")])]),i("li",{staticClass:"landing_contact_item _privacy"},[t._v(" Privacy and Information Security Policy ")])])])}],O={data(){return{}},components:{},mounted(){},methods:{}},Z=O,q=(0,c.Z)(Z,$,F,!1,null,null,null),E=q.exports;s.ZP.use(_.ZP);const W=[{path:"/landing",name:"landing",component:E},{path:"/",name:"front",component:A},{path:"/backend",name:"backend",component:K},{path:"*",name:"front"}],J=new _.ZP({mode:"",base:"/fdp-gpt/",routes:W});var j=J;s.ZP.config.productionTip=!1,new s.ZP({router:j,render:t=>t(d)}).$mount("#app")},3342:function(t,i,a){t.exports=a.p+"img/icon_gotop.a8b45a71.svg"},1487:function(t,i,a){t.exports=a.p+"img/icon_undefined.3e4d3a92.svg"},2920:function(t,i,a){t.exports=a.p+"img/landing_logo.ad5e8f78.svg"},2835:function(t,i,a){t.exports=a.p+"img/logo.78100e53.svg"},1446:function(t,i,a){t.exports=a.p+"img/logo_s.b194a4b1.svg"},1683:function(t,i,a){t.exports=a.p+"img/products_img.401eb56d.svg"},4336:function(t,i,a){t.exports=a.p+"img/about_img.6bf4db5d.jpg"},8932:function(t,i,a){t.exports=a.p+"img/highlights_img_1.65d9b085.png"},4942:function(t,i,a){t.exports=a.p+"img/highlights_img_2.75d707c5.png"},2319:function(t,i,a){t.exports=a.p+"img/highlights_img_3.2829d4b0.png"},4628:function(t,i,a){t.exports=a.p+"img/team_img.328c6c1e.png"}},i={};function a(s){var e=i[s];if(void 0!==e)return e.exports;var n=i[s]={exports:{}};return t[s].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(i,s,e,n){if(!s){var l=1/0;for(d=0;d<t.length;d++){s=t[d][0],e=t[d][1],n=t[d][2];for(var r=!0,c=0;c<s.length;c++)(!1&n||l>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[c])}))?s.splice(c--,1):(r=!1,n<l&&(l=n));if(r){t.splice(d--,1);var o=e();void 0!==o&&(i=o)}}return i}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,e,n]}}(),function(){a.d=function(t,i){for(var s in i)a.o(i,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){a.p="/fdp-gpt/"}(),function(){var t={143:0};a.O.j=function(i){return 0===t[i]};var i=function(i,s){var e,n,l=s[0],r=s[1],c=s[2],o=0;if(l.some((function(i){return 0!==t[i]}))){for(e in r)a.o(r,e)&&(a.m[e]=r[e]);if(c)var d=c(a)}for(i&&i(s);o<l.length;o++)n=l[o],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},s=self["webpackChunkfdp"]=self["webpackChunkfdp"]||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(2268)}));s=a.O(s)})();
//# sourceMappingURL=app.16a203e1.js.map