(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f1240ee"],{"0033":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"function-container"},[i("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.tabclick},model:{value:t.tabActiveName,callback:function(e){t.tabActiveName=e},expression:"tabActiveName"}},[i("el-tab-pane",{attrs:{label:"文件管理",name:"file"}},[i("div",{staticClass:"card-header"},[i("div",{staticClass:"function-header"},[t.is_tcb?i("el-button",{attrs:{disabled:t.loading||t.userinfo.isInBlackList,type:"primary",size:"mini"},on:{click:t.finder}},[t._v("新建文件夹")]):t._e(),t._v(" "),i("el-button",{attrs:{disabled:t.loading||t.userinfo.isInBlackList,type:"primary",size:"mini"},on:{click:function(e){return t.openDetail("upload")}}},[t._v("上传文件")]),t._v(" "),t.uploadListData.length>0?i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.openDetail("log")}}},[t._v("上传任务")]):t._e(),t._v(" "),t.is_tcb?i("el-button",{attrs:{loading:t.loading,disabled:0===t.multipleSelection.length,size:"mini",type:"danger"},on:{click:t.batchDel}},[t._v("批量删除")]):t._e(),t._v(" "),i("el-button",{attrs:{loading:t.loading,size:"mini"},on:{click:t.refresh}},[t._v("刷新")])],1)]),t._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],class:[t.is_tcb?"table-box":"tcb-box"]},[t.is_tcb?i("div",{staticClass:"storage-box"},[i("div",{staticClass:"storage-box__path"},t._l(t.pathDirs,(function(e,a){return i("p",{key:a,staticClass:"dir-hover",on:{click:function(i){return t.dir(e,a)}}},[0!==a?i("i",{staticClass:"el-icon-arrow-right",staticStyle:{"font-size":"12px",color:"#666","font-weight":"bold",margin:"0 5px"}}):t._e(),t._v(" "),i("span",[t._v(t._s(e))])])})),0)]):t._e(),t._v(" "),t.is_tcb?i("el-table",{key:1,ref:"table",attrs:{data:t.tableData,"row-key":"id",stripe:"",height:"calc(100% - 40px)","span-method":t.arraySpanMethod},on:{"row-click":t.rowclick,"selection-change":t.handleSelectionChange}},[t.is_tcb?i("el-table-column",{attrs:{type:"selection",align:"center",selectable:t.selectable,"reserve-selection":"",width:"60"}}):t._e(),t._v(" "),i("el-table-column",{attrs:{prop:"name",label:"文件名",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.loading?i("div",{staticClass:"table-loading"},[t._v("\n                "+t._s(e.row.loading)+"\n              ")]):i("div",[e.row.prefix?i("div",{staticClass:"table-link",on:{click:function(i){return t.opnedir(e.row.prefix)}}},[i("i",{staticClass:"el-icon-folder-opened"}),t._v("\n                  "+t._s(t._f("pathsLen")(e.row.prefix))+"\n                ")]):i("div",{class:{pointer:e.$index===t.tableData.length-1}},[t._v(t._s(e.row.name))])])]}}],null,!1,3750762700)}),t._v(" "),i("el-table-column",{attrs:{prop:"id",label:"ID",align:"left"}}),t._v(" "),i("el-table-column",{attrs:{prop:"size",label:"文件大小",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"updated_at",label:"更新时间",align:"left"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作",align:"center",width:"260"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.prefix?t._e():i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return t.openDetail("detail",e.row)}}},[t._v("详情")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.removeListFile(e.row,e.$index)}}},[t._v("删除")])]}}],null,!1,4080494438)})],1):i("el-table",{key:2,attrs:{data:t.tableData,stripe:""}},[i("el-table-column",{attrs:{label:"",width:"60",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"name",label:"文件名",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.prefix?i("div",{staticClass:"table-link",on:{click:function(i){return t.opnedir(e.row.prefix)}}},[i("i",{staticClass:"el-icon-folder-opened"}),t._v("\n                "+t._s(t._f("pathsLen")(e.row.prefix))+"\n              ")]):i("div",{class:{pointer:e.$index===t.tableData.length-1}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"id",label:"ID",align:"left"}}),t._v(" "),i("el-table-column",{attrs:{prop:"size",label:"文件大小",width:"160",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{prop:"updated_at",label:"更新时间",width:"160",align:"left"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作",align:"center",width:"260"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.prefix?t._e():i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return t.openDetail("detail",e.row)}}},[t._v("详情")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.removeListFile(e.row,e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("div",{staticClass:"pagination-box"},[t.is_tcb?t._e():i("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper",total:t.pagination.total,"page-sizes":t.pagination.sizes,"page-size":t.pagination.pageSize},on:{"size-change":t.handleSizeChange,"current-change":t.currentChange}}),t._v(" "),t.is_tcb&&t.tableData.length>5?i("div",[t.isTruncated?i("div",[i("el-button",{on:{click:function(e){return t.bottomLoad(t.tableData[t.tableData.length-1].name)}}},[t._v("点击加载更多")])],1):i("div",[t._v("\n              没有更多数据了\n            ")])]):t._e()],1)],1)]),t._v(" "),t.is_tcb?i("el-tab-pane",{attrs:{label:"权限设置",name:"permission"}},[i("permission",{key:t.timer})],1):t._e()],1),t._v(" "),i("drawer",{ref:"drawer",staticClass:"drawer",attrs:{visible:t.drawer},on:{"update:visible":function(e){t.drawer=e}}},[i("div",{staticClass:"drawer-title"},["upload"===t.detialStatus?i("span",[t._v("上传文件")]):t._e(),t._v(" "),"log"===t.detialStatus?i("span",[t._v("文件上传列表")]):t._e(),t._v(" "),"detail"===t.detialStatus?i("span",[t._v("文件详情")]):t._e(),t._v(" "),i("div",{staticClass:"drawer-button",on:{click:t.drawerClose}},[i("i",{staticClass:"el-icon-close"})])]),t._v(" "),"upload"===t.detialStatus?i("div",{staticClass:"upload-wrapper"},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{drag:"",multiple:"",action:t.uploadUrl,headers:t.headers,data:t.formData,"before-upload":t.beforeUpload,"on-progress":t.onProgress,"on-change":t.onChange,"on-success":t.onSuccess,"on-remove":t.onRemove,"auto-upload":!0,"http-request":t.httpRequest}},[i("i",{staticClass:"el-icon-upload"}),t._v(" "),i("div",{staticClass:"el-upload__text"},[i("em",[t._v("将文件拖到此处，或点击选择文件")]),t._v(" "),i("p",[t._v("可以选择多个文件，不支持上传文件夹")]),t._v(" "),i("p",[t._v(t._s(t.is_tcb?"腾讯云单文件最大限制为5G":"阿里云单文件最大限制100M"))])])])],1):t._e(),t._v(" "),"log"===t.detialStatus?i("div",{staticClass:"log-wrapper-box"},[i("div",{staticClass:"log-wrapper-info"},[i("p",[t._v("\n          上传任务:\n          "),i("span",[t._v(t._s(t._f("count")(t.uploadListData,"current"))+"/"+t._s(t._f("count")(t.uploadListData,"total")))])]),t._v(" "),i("p",{staticClass:"success"},[t._v("\n          成功:\n          "),i("span",[t._v(t._s(t._f("count")(t.uploadListData,"success")))])]),t._v(" "),i("p",{staticClass:"error"},[t._v("\n          失败:\n          "),i("span",[t._v(t._s(t._f("count")(t.uploadListData,"fail")))])]),t._v(" "),i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:t.clearOk}},[t._v("清除已完成")])],1),t._v(" "),i("transition-group",{staticClass:"log-wrapper",attrs:{name:"log-list",tag:"div"}},t._l(t.uploadListData,(function(e,a){return i("div",{key:e.uid,staticClass:"log-box"},[i("p",{staticClass:"log-title"},[i("span",{staticClass:"title"},[t._v(t._s(e.name))]),t._v(" "),i("span",{staticClass:"clear",on:{click:function(e){return t.removeFile(a)}}},[t._v("清除")])]),t._v(" "),i("el-progress",{key:e.uid,attrs:{percentage:e.percent,"show-text":!1,status:"fail"===e.status||"prohibit"===e.status?"exception":"success"}}),t._v(" "),i("p",{staticClass:"log-info"},[i("span",[e.size>1073741824?[t._v(t._s((e.size/1024/1024/1024).toFixed(1))+" GB")]:e.size>1048576?[t._v(t._s((e.size/1024/1024).toFixed(1))+" MB")]:[t._v(t._s((e.size/1024).toFixed(1))+" KB")]],2),t._v(" "),i("span",["ready"===e.status?[t._v("准备上传")]:t._e(),t._v(" "),"uploading"===e.status?[t._v("上传中")]:t._e(),t._v(" "),"success"===e.status?[t._v("成功")]:t._e(),t._v(" "),"fail"===e.status?[e.cover?i("p",[t._v("\n                  已经存在同名文件，是否覆盖上传\n                  "),i("span",{staticClass:"coverUpload",on:{click:function(i){return t.coverUpload(e,a)}}},[t._v("覆盖上传")])]):i("span",[t._v("失败")])]:t._e(),t._v(" "),"prohibit"===e.status?[t._v("上传失败，不支持上传该文件格式")]:t._e()],2)])],1)})),0)],1):t._e(),t._v(" "),"detail"===t.detialStatus?i("div",{staticClass:"detail-wrapper"},[i("div",["image"===t.detailData.type?i("el-image",{directives:[{name:"loading",rawName:"v-loading",value:t.imgLoading,expression:"imgLoading"}],staticClass:"detail-showimage",attrs:{src:t.detailData.download_url,fit:"contain"}}):i("div",{staticClass:"detail-showimage"},[t._v("当前格式不支持预览")])],1),t._v(" "),i("el-form",{staticClass:"detail-form",attrs:{"label-position":"left","label-width":"100px"}},[i("el-form-item",{attrs:{label:"文件名"}},[i("span",{staticClass:"detail-text"},[t._v(t._s(t.detailData.name))])]),t._v(" "),i("el-form-item",{attrs:{label:"文件大小"}},[i("span",{staticClass:"detail-text"},[t._v(t._s(t.detailData.size))])]),t._v(" "),i("el-form-item",{attrs:{label:"上传时间"}},[i("span",[t._v(t._s(t.detailData.created_at||"-"))])]),t._v(" "),i("el-form-item",{attrs:{label:"更新时间"}},[i("span",{staticClass:"detail-text"},[t._v(t._s(t.detailData.updated_at||"-"))])]),t._v(" "),i("el-form-item",{attrs:{label:"下载地址"}},[i("div",{staticClass:"detail-url-box"},[i("p",{staticClass:"detail-text"},[t._v(t._s(t.detailData.download_url))]),t._v(" "),i("i",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.detailData.download_url,expression:"detailData.download_url",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],staticClass:"el-icon-document-copy"})])])],1)],1):t._e()])],1)},s=[],n=i("2909"),l=(i("96cf"),i("1da1")),o=(i("20d6"),i("7f7f"),i("5530")),r=(i("ac6a"),i("28a5"),i("bc3a")),c=i.n(r),u=i("3438"),d=i.n(u),p=i("d9b9"),f=i("01ea"),h=i("2f62"),v=i("0472"),g=i("8325"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"permission-container"},[i("Card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[i("div",{attrs:{slot:"header"},slot:"header"},[i("span",{staticClass:"function-header-margin"},[t._v("权限设置")])]),t._v(" "),i("div",{staticClass:"function-header",attrs:{slot:"extra"},slot:"extra"},[i("div",{staticClass:"select-safety",on:{click:t.safety}},[t._v("\n        "+t._s("CUSTOM"===t.authorityradio.AclTag?"切换到基础环境设置":"切换到安全规则")+"\n        "),"CUSTOM"!==t.authorityradio.AclTag?i("el-tooltip",{staticClass:"item",attrs:{content:"Top Center 提示文字",placement:"top",effect:"light"}},[i("div",{staticClass:"tips-content",attrs:{slot:"content"},slot:"content"},[t._v("\n            安全规则为文件管理高级权限配置，切换到安全规则后，权限设置将不再生效。安全规则的使用\n            "),i("a",{attrs:{target:"_balck",href:"https://uniapp.dcloud.io/uniCloud/policy-tcb"}},[t._v("详见文档")])]),t._v(" "),i("i",{staticClass:"el-icon-warning-outline"})]):i("el-tooltip",{staticClass:"item",attrs:{content:"Top Center 提示文字",placement:"top",effect:"light"}},[i("div",{staticClass:"tips-content",attrs:{slot:"content"},slot:"content"},[t._v("\n            切换为简单的权限权限设置，基础权限设置仅有四类权限，切换后原有的安全规则不再生效。\n            "),i("a",{attrs:{target:"_balck",href:"https://uniapp.dcloud.io/uniCloud/policy-tcb"}},[t._v("详见文档")])]),t._v(" "),i("i",{staticClass:"el-icon-warning-outline"})])],1)]),t._v(" "),"CUSTOM"===t.authorityradio.AclTag?i("div",[i("div",{staticClass:"form-button",staticStyle:{"margin-bottom":"15px"}},[i("el-button",{attrs:{size:"mini"},on:{click:t.format}},[t._v("格式化代码")])],1),t._v(" "),i("div",{staticStyle:{"margin-bottom":"15px"}},[i("json-editor",{ref:"jsonEditor",model:{value:t.collectionData,callback:function(e){t.collectionData=e},expression:"collectionData"}})],1)]):i("div",{staticClass:"permission-list"},[i("p",{staticClass:"permission-title"},[t._v("您可以灵活设置哪些用户是否可以读写该存储桶的文件，以保证业务的数据安全。")]),t._v(" "),i("p",{staticClass:"permission-title"},[t._v("存储桶权限：")]),t._v(" "),i("el-radio-group",{model:{value:t.authorityradio.AclTag,callback:function(e){t.$set(t.authorityradio,"AclTag",e)},expression:"authorityradio.AclTag"}},[i("div",{staticClass:"permission-item"},[i("label",[i("el-radio",{attrs:{label:"READONLY"}},[t._v("所有用户可读，仅创建者及管理员可写")]),t._v(" "),i("div",{staticClass:"permission-tips"},[t._v("适用场景：用户头像、用户公开相册等")])],1)]),t._v(" "),i("div",{staticClass:"permission-item"},[i("label",[i("el-radio",{attrs:{label:"PRIVATE"}},[t._v("仅创建者及管理员可读写")]),t._v(" "),i("div",{staticClass:"permission-tips"},[t._v("适用场景：私密相册、网盘文件等")])],1)]),t._v(" "),i("div",{staticClass:"permission-item"},[i("label",[i("el-radio",{attrs:{label:"ADMINWRITE"}},[t._v("所有用户可读，仅管理员可写")]),t._v(" "),i("div",{staticClass:"permission-tips"},[t._v("适用场景：文章配图、商品图片等")])],1)]),t._v(" "),i("div",{staticClass:"permission-item"},[i("label",[i("el-radio",{attrs:{label:"ADMINONLY"}},[t._v("仅管理员可读写")]),t._v(" "),i("div",{staticClass:"permission-tips"},[t._v("适用场景：业务日志等")])],1)])])],1),t._v(" "),i("div",[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleSubmit}},[t._v("保存")])],1)]),t._v(" "),i("safety-rules",{ref:"safety",attrs:{custom:"CUSTOM"===t.authorityradio.AclTag},on:{change:t.change}})],1)},_=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{title:"安全规则权限设置",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.close}},[t.custom?i("div",{staticClass:"permission-list"},[i("el-radio-group",{model:{value:t.authorityradio,callback:function(e){t.authorityradio=e},expression:"authorityradio"}},[i("div",{staticClass:"permission-item"},[i("label",[i("el-radio",{attrs:{label:"READONLY"}},[t._v("所有用户可读，仅创建者及管理员可写")]),t._v(" "),i("div",{staticClass:"permission-tips"},[t._v("适用场景：用户头像、用户公开相册等")])],1)]),t._v(" "),i("div",{staticClass:"permission-item"},[i("label",[i("el-radio",{attrs:{label:"PRIVATE"}},[t._v("仅创建者及管理员可读写")]),t._v(" "),i("div",{staticClass:"permission-tips"},[t._v("适用场景：私密相册、网盘文件等")])],1)]),t._v(" "),i("div",{staticClass:"permission-item"},[i("label",[i("el-radio",{attrs:{label:"ADMINWRITE"}},[t._v("所有用户可读，仅管理员可写")]),t._v(" "),i("div",{staticClass:"permission-tips"},[t._v("适用场景：文章配图、商品图片等")])],1)]),t._v(" "),i("div",{staticClass:"permission-item"},[i("label",[i("el-radio",{attrs:{label:"ADMINONLY"}},[t._v("仅管理员可读写")]),t._v(" "),i("div",{staticClass:"permission-tips"},[t._v("适用场景：业务日志等")])],1)])])],1):i("div",[i("div",{staticClass:"tips-box"},[i("p",[t._v("使用安全规则须知：")]),t._v(" "),i("p",[t._v("安全规则为高级数据库权限配置，请注意，使用安全规则后：")]),t._v(" "),i("p",[t._v("- 客户端代码需要根据场景进行修改，详情请 "),i("a",{attrs:{href:"https://cloud.tencent.com/document/product/876/36414",target:"_black"}},[t._v("查看文档")])]),t._v(" "),i("p",[t._v("- 原始权限设置将不再生效。")])]),t._v(" "),i("div",[i("div",{staticClass:"form-button"},[i("el-button",{attrs:{size:"mini"},on:{click:t.format}},[t._v("格式化代码")])],1),t._v(" "),i("div",[i("json-editor",{ref:"jsonEditor",model:{value:t.collectionData,callback:function(e){t.collectionData=e},expression:"collectionData"}})],1)])]),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("确 定")])],1)])},D=[],y=i("fa7e"),x={components:{JsonEditor:y["a"]},props:{custom:{type:Boolean,default:!1}},data:function(){return{dialogFormVisible:!1,jsonData:{},collectionData:{read:!0,write:"resource.openid == auth.uid"},authorityradio:""}},watch:{dialog:function(t){this.dialogFormVisible=t}},methods:{open:function(){this.authorityradio="",this.dialogFormVisible=!0},close:function(){this.dialogFormVisible=!1},getValue:function(){return this.$refs.jsonEditor.getValue()},format:function(){try{this.$refs.jsonEditor.format()}catch(t){this.$alert("您输入的代码有误，不能格式化，请检查代码","警告",{confirmButtonText:"确定",type:"error",callback:function(){}})}},save:function(){var t="";this.custom?t={}:(this.authorityradio="CUSTOM",t=this.getValue()),this.authorityradio?(this.$emit("change",{value:t,radio:this.authorityradio}),this.close()):this.$alert("请选择安全规则权限","警告",{confirmButtonText:"确定",type:"error",callback:function(){}})}}},C=x,w=(i("5fc6"),i("2877")),S=Object(w["a"])(C,b,D,!1,null,"317c362e",null),k=S.exports,L={components:{JsonEditor:y["a"],safetyRules:k},mixins:[p["a"]],props:{aclTag:{type:String,default:"abc"}},data:function(){return{loading:!0,jsonData:{},collectionData:{read:!0,write:"resource.openid == auth.uid"},authorityradio:{AclTag:"",Rule:""}}},watch:{aclTag:function(t){this.authorityradio.AclTag=t},spaceid:function(t){t&&this.getFileSafeRule()}},mounted:function(){this.getFileSafeRule()},methods:{change:function(t){var e=t.value,i=t.radio;if(this.authorityradio.AclTag=i,"CUSTOM"===i)try{this.collectionData=JSON.parse(e)}catch(t){this.collectionData={read:!0,write:"resource.openid == auth.uid"}}},safety:function(){this.$refs.safety.open()},handleSubmit:function(){this.getFileModifySafeRule()},getValue:function(){return this.$refs.jsonEditor.getValue()},format:function(){try{this.$refs.jsonEditor.format()}catch(t){this.$alert("您输入的代码有误，不能格式化，请检查代码","警告",{confirmButtonText:"确定",type:"error",callback:function(){}})}},getFileSafeRule:function(){var t=this,e={provider:"tcb",spaceId:this.formData.spaceId,appid:this.formData.appid};this.$api.File_Safe_Rule(e).then((function(e){var i=e.data;if(t.authorityradio=i,"CUSTOM"===i.AclTag)try{t.collectionData=JSON.parse(i.Rule)}catch(a){t.collectionData={read:!0,write:"resource.openid == auth.uid"}}t.loading=!1})).catch((function(){t.loading=!1}))},getFileModifySafeRule:function(){var t=this,e={provider:"tcb",spaceId:this.formData.spaceId,appid:this.formData.appid,aclTag:this.authorityradio.AclTag};"CUSTOM"===e.aclTag&&(e.rule=this.getValue()),this.loading=!0,this.$api.File_Modify_Safe_Rule(e).then((function(e){t.$message({message:"权限更新成功",type:"success"}),t.loading=!1})).catch((function(){t.loading=!1}))}}},T=L,F=(i("6230"),Object(w["a"])(T,m,_,!1,null,"f2dccf5a",null)),$=F.exports,I=[".jpg",".jpeg",".png",".gif",".bmp",".wbmp",".webp",".svg",".image"],P={name:"CloudStorage",components:{permission:$,drawer:v["a"]},directives:{clipboard:g["a"]},filters:{pathsLen:function(t){var e=t.split("/");return e[e.length-2]},count:function(t,e){var i=JSON.parse(JSON.stringify(t)),a=[],s=[],n=[];return i.forEach((function(t){"ready"!==t.status&&a.push(t),"success"===t.status&&s.push(t),"fail"!==t.status&&"prohibit"!==t.status||n.push(t)})),"total"===e?i.length:"current"===e?a.length:"success"===e?s.length:"fail"===e?n.length:0}},mixins:[p["a"]],data:function(){return{timer:"",tabActiveName:"file",loading:!0,drawer:!1,detialStatus:"upload",tableData:[],detailData:{},uploadUrl:f["a"].baseURL+"/file/upload",headers:{token:""},uploadList:{},uploadListData:[],fileList:[],pagination:{pageSize:20,last_page:3,current_page:1,total:0,sizes:[10,20,30,40,50,100]},tcbStsData:{},fullPath:"",pathDirs:["根目录"],isTruncated:!1,imgLoading:!1,multipleSelection:[]}},computed:Object(o["a"])({},Object(h["b"])(["token","is_tcb","userinfo"])),watch:{spaceid:function(t){t&&(this.loading=!0,this.formData.spaceId=t,this.tableData=[],this.multipleSelection=[],this.pathDirs=["根目录"],this.fullPath="",this.tabActiveName="file",this.uploadListData=[],t&&(this.is_tcb&&this.getFileTcbStsToken(t),this.getFileList()))},is_tcb:function(t){this.formData.provider=t?"tcb":"aliyun"}},created:function(){this.spaceid&&(this.headers.token=this.token,this.is_tcb&&this.getFileTcbStsToken(this.spaceid),this.is_del_file=!1,this.getFileList(),document.addEventListener("drop",(function(t){t.preventDefault()}),!1),document.addEventListener("dragover",(function(t){t.preventDefault()}),!1))},destroyed:function(){this.is_stop=!1},methods:{refresh:function(){this.tableData=[],this.tabActiveName="file",this.uploadListData=[],this.getFileList()},batchDel:function(){var t=this,e={filePath:[],indexs:[]};this.multipleSelection.forEach((function(i){var a=t.tableData[i];e.filePath.push(a.prefix?a.prefix:t.fullPath+a.name),e.indexs.push(i)}));var i=this.$createElement,a=null;a=i("div",null,[i("div",{style:"display:flex; align-items: center;"},[i("span",{class:"el-icon-warning",style:"font-size:22px;color:#e6a23c;margin-right:10px;"},null),i("p",null,[i("span",null,"即将批量删除 "),i("span",{style:"color:#ff5a5f"},e.filePath.length),i("span",null," 个文件"),i("br",null,null),i("span",null,"此操作将永久删除文件，请确认是否继续?")])])]),this.$msgbox({title:"提示",message:a,showCancelButton:!0,confirmButtonText:"确定删除",cancelButtonText:"取消",confirmButtonClass:"el-button--danger"}).then((function(i){t.getFileDeleteBatch(e)}))},arraySpanMethod:function(t){t.row,t.column;var e=t.rowIndex,i=t.columnIndex;if(this.is_tcb)return this.tableData.length-1===e?1===i?[1,6]:[0,0]:void 0},rowclick:function(t,e,i){if(!t.id&&"点击加载更多"===t.loading){var a=this.tableData[this.tableData.length-2].name,s=a?this.fullPath+a:this.tableData[this.tableData.length-2].prefix;this.bottomLoad(s)}},selectable:function(t,e){return t.name},handleSelectionChange:function(t){var e=this;if(this.is_del_file)this.is_del_file=!1;else{var i=50,a=t.filter((function(t){return t.id}));this.multipleSelection=[];var s=a;a.length>i&&(s=[],this.$message.error("最多选择 50 个文件"),a.forEach((function(t,a){a>=i?t.id&&(e.is_del_file=!0,e.$refs.table.toggleRowSelection(t,!1)):s.push(t)}))),s.forEach((function(t){var i=0;(t.id||t.prefix)&&(t.id&&(i=e.tableData.findIndex((function(e){return e.id===t.id}))),t.prefix&&(i=e.tableData.findIndex((function(e){return e.prefix===t.prefix}))),-1===e.multipleSelection.indexOf(i)&&e.multipleSelection.push(i))}))}},tabclick:function(t){this.timer=(new Date).getTime()},finder:function(){var t=this;this.$prompt("文件夹名称","新建文件夹",{confirmButtonText:"确定",cancelButtonText:"取消",inputValidator:function(t){if(!t)return"文件夹名不能为空"}}).then((function(e){var i=e.value;t.$api.File_Create_Directory({provider:t.formData.provider,spaceId:t.formData.spaceId,folder:t.fullPath+i,appid:t.formData.appid}).then((function(e){t.tableData=[],t.multipleSelection=[],t.$refs.table.clearSelection(),t.getFileList()}))}))},opnedir:function(t){var e=this;this.fullPath=t;var i=this.fullPath.split("/");this.pathDirs=["根目录"],i.forEach((function(t){t&&e.pathDirs.push(t)})),this.tableData=[],this.multipleSelection=[],this.$refs.table.clearSelection(),this.getFileList()},dir:function(t,e){var i="",a=this.pathDirs.slice(0,e+1);a.forEach((function(t){"根目录"===t?t="":t+="/",i+=t})),this.pathDirs=a,this.fullPath=i,this.tableData=[],this.multipleSelection=[],this.$refs.table.clearSelection(),this.getFileList()},clipboardSuccess:function(){this.$message({message:"复制成功",type:"success",duration:1500})},currentChange:function(t){this.pagination.current_page=t,this.getFileList()},handleSizeChange:function(t){this.pagination.pageSize=t,this.pagination.current_page=1,this.getFileList()},handleClose:function(t){t()},drawerClose:function(){this.$refs.drawer.closeDrawer()},closeDrawer:function(){},openDetail:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e,i){var a,s,n,l,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.detialStatus=e,this.fileList=[],this.$nextTick((function(){o.drawer=!0})),"detail"!==e){t.next=21;break}if(a=i.url.lastIndexOf("."),s=i.url.length,n=i.url.substring(a,s),-1!==I.indexOf(n.toLowerCase())?i.type="image":i.type="other",i.download_url=i.url,this.detailData=i,this.$forceUpdate(),!this.is_tcb){t.next=21;break}return i.download_url="",this.imgLoading=!0,t.next=16,this.$api.File_Temp_Url({provider:"tcb",spaceId:this.formData.spaceId,filePath:this.fullPath+i.name,appid:this.formData.appid});case 16:l=t.sent,this.imgLoading=!1,i.download_url=l.data.url,this.detailData=i,this.$forceUpdate();case 21:case"end":return t.stop()}}),t,this)})));function e(e,i){return t.apply(this,arguments)}return e}(),confirm:function(){},beforeUpload:function(t,e){return!0},onProgress:function(t,e,i){},setProgress:function(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=this.uploadListData.findIndex((function(e){return e.uid===t.uid})),n=this.uploadListData[s];n=t,n.status=e,n.percent=i,a&&(n.cover=!0),this.$set(this.uploadListData,s,n)},onChange:function(t,e){var i=t.size/1024/1024<100,a=e.findIndex((function(e){return e.uid===t.uid}));if("ready"===t.status){if(!i&&!this.is_tcb)return this.$message.error("单个上传文件不能超过 100M"),e.splice(a,1),!1;-1===t.name.indexOf(".")&&(t.status="prohibit"),this.setUploadList(t)}},onRemove:function(t){var e=this.uploadListData.findIndex((function(e){return e.uid===t.uid}));this.uploadListData.splice(e,1)},uploadFile:function(){this.detialStatus="log",this.$refs.upload.submit()},httpRequest:function(t){var e=this,i=t.file;this.detialStatus="log";var a=this.uploadListData.findIndex((function(t){return t.uid===i.uid}));i.status=this.uploadListData[a].status,this.tempLists||(this.tempLists=[]),this.tempLists.push(i),clearTimeout(this.uploadTimer),this.uploadTimer=setTimeout((function(){e.is_stop=!0,e.requestQueue(e.tempLists,0),e.tempLists=[]}),10)},requestQueue:function(t,e){var i=this;this.is_stop&&(t.length<=e||(this.is_tcb?this.getTcbUpload(t[e]).then((function(){e++,i.requestQueue(t,e)})):this.getFileUploadInfo(t[e]).then((function(){e++,i.requestQueue(t,e)}))))},coverUpload:function(t,e){this.getTcbUpload(t,!0,e)},removeFile:function(t){this.uploadListData.splice(t,1)},removeAll:function(){this.uploadListData=[],this.uploadList={}},goon:function(){this.fileList=[],this.detialStatus="upload"},clearOk:function(){var t=[];this.uploadListData.forEach((function(e){"success"===e.status||t.push(e)})),this.uploadListData=t},removeListFile:function(t,e){var i=this,a=this.$createElement,s=null;if(t.prefix){var n="";n=this.is_tcb?"此操作将删除文件夹以及文件夹下所有文件，请确认是否继续?":"此操作只能删除空文件夹，请确认是否继续?",s=a("div",null,[a("div",{style:"display:flex; align-items: center;"},[a("span",{class:"el-icon-warning",style:"font-size:22px;color:#e6a23c;margin-right:10px;"},null),a("p",null,[a("span",null,"即将删除文件夹 "),a("span",{style:"color:#ff5a5f"},t.prefix),a("br",null,null),a("span",null,n)])])])}else s=a("div",null,[a("div",{style:"display:flex; align-items: center;"},[a("span",{class:"el-icon-warning",style:"font-size:22px;color:#e6a23c;margin-right:10px;"},null),a("p",null,[a("span",null,"即将删除文件 "),a("span",{style:"color:#ff5a5f"},t.name),a("br",null,null),a("span",null,"此操作将永久删除文件，请确认是否继续?")])]),a("p",{style:"color: #999;font-size:12px;margin-top:10px;"},"文件删除后会存在 CDN 缓存或运营商缓存的情况，具体时间与缓存配置有关，期间文件可以正常访问，请须知")]);this.$msgbox({title:"提示",message:s,showCancelButton:!0,confirmButtonText:"确定删除",cancelButtonText:"取消",confirmButtonClass:"el-button--danger"}).then((function(a){i.getFileDelete(t,e)}))},onSuccess:function(){this.getFileList()},setUploadList:function(t){var e=this.uploadListData.findIndex((function(e){return e.uid===t.uid}));-1!==e&&this.uploadListData.splice(e,1),this.uploadListData.unshift(t)},bottomLoad:function(t){this.getFileList(t)},getFileList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loading=!0,this.formData.spaceId=this.spaceid,this.formData.page=this.pagination.current_page,this.formData.pageSize=this.pagination.pageSize,this.formData.folder=this.fullPath,this.is_tcb&&(this.formData.marker=e),this.$api.File_List(this.formData).then((function(i){var a=i.data,s=a.files,l=a.total,o=a.current_page,r=a.directories,c=a.isTruncated;if(t.is_tcb){e||(t.tableData=[]);var u=JSON.parse(JSON.stringify(t.tableData));t.tableData.length>0&&u.splice(u.length-1,1),s.unshift.apply(s,Object(n["a"])(r)),u.push.apply(u,Object(n["a"])(s)),c?u.push({loading:"点击加载更多"}):u.push({loading:"没有更多数据"}),t.tableData=u,t.isTruncated=c}else t.tableData=s;t.loading=!1,t.pagination.total=l,t.pagination.current_page=o}))},getFileUploadInfo:function(t){var e=this,i={spaceId:this.spaceid,appid:this.formData.appid,provider:this.is_tcb?"tcb":"aliyun",name:t.name,size:t.size};if("prohibit"!==t.status)return this.setProgress(t,"ready",0),this.$api.File_Upload_Info(i).then((function(i){var a=i.data;e.setProgress(t,"uploading",5),e.getUploadFile(a.SignUrl,a.Id,t)})).catch((function(){e.setProgress(t,"fail",0)}));this.setProgress(t,"prohibit",0)},getFileTcbStsToken:function(t){var e=this;this.$api.File_Tcb_Sts_Token({provider:this.is_tcb?"tcb":"aliyun",spaceId:t,appid:this.formData.appid}).then((function(t){var i=t.data;e.tcbStsData=i;var a=i.credentials;e.cos=new d.a({getAuthorization:function(t,e){e({TmpSecretId:a.tmpSecretId,TmpSecretKey:a.tmpSecretKey,XCosSecurityToken:a.sessionToken,StartTime:i.startTime,ExpiredTime:i.expiredTime})}})}))},getUploadFile:function(t,e,i){var a=this,s=new FormData;return s.append("file",i),this.setProgress(i,"uploading",0),this.setUploadList(i),c.a.put(t,i,{headers:{"Content-Type":"application/octet-stream"},onUploadProgress:function(t){var e=t.loaded/t.total*100|0;a.setProgress(i,"uploading",e)}}).then((function(){a.setProgress(i,"uploading",99),a.getFileRegister(e,i)})).catch((function(t){a.setProgress(i,"fail",0)}))},getFileRegister:function(t,e){var i=this,a={provider:this.formData.provider,spaceId:this.formData.spaceId,appid:this.formData.appid,fileId:t};this.$api.File_Register(a).then((function(t){i.setProgress(e,"success",100),i.checkUploadStatus()||i.getFileList()})).catch((function(){i.setProgress(e,"fail",99)}))},checkUploadStatus:function(){return this.uploadListData.some((function(t){return"ready"===t.status||"uploading"===t.status}))},getTcbUpload:function(t,e,i){var a=this;if("prohibit"!==t.status){if(!e)return new Promise((function(e,i){a.cos.headObject({Bucket:a.tcbStsData.bucket,Region:a.tcbStsData.region,Key:a.fullPath+t.name},(function(s,n){s||200!==n.statusCode?a.setUploadFile(t).then((function(){e()})).catch((function(){i()})):(a.setProgress(t,"fail",0,!0),e())}))}));this.setUploadFile(t)}else this.setProgress(t,"prohibit",0,!0)},setUploadFile:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var i,a,s,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.setProgress(e,"ready",0),t.next=3,this.$api.File_Upload_Metadata({provider:"tcb",spaceId:this.formData.spaceId,appid:this.formData.appid,filePath:this.fullPath+e.name});case 3:return i=t.sent,a=i.data,s=new FormData,s.append("key",this.fullPath+e.name),s.append("signature",a.authorization),s.append("x-cos-meta-fileid",a.cosFileId),s.append("success_action_status","201"),s.append("x-cos-security-token",a.token),s.append("file",e),this.setUploadList(e),t.abrupt("return",c.a.request({method:"POST",url:a.url,data:s,onUploadProgress:function(t){n.setProgress(e,"uploading",Math.round(t.loaded/t.total*1e4)/100)}}).then((function(t){if(t.status<400){if(n.setProgress(e,"success",100),n.checkUploadStatus())return;n.getFileList()}else n.setProgress(e,"fail",99)})).catch((function(){n.setProgress(e,"fail",99)})));case 14:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getFileDelete:function(t,e){var i=this,a={appid:this.formData.appid,provider:this.formData.provider,spaceId:this.spaceid,fileId:t.id};this.loading=!0,t.prefix?this.$api.File_Delete_Directory({provider:this.formData.provider,spaceId:this.spaceid,appid:this.formData.appid,folder:t.prefix}).then((function(){i.$refs.table.clearSelection(),i.getFileList()})):(this.is_tcb&&(a.filePath=this.fullPath+t.name),this.$api.File_Delete(a).then((function(t){i.tableData.splice(e,1),i.multipleSelection=[],i.$refs.table.clearSelection(),i.getFileList(),i.loading=!1,i.$message({type:"success",message:"删除成功!"})})).catch((function(){i.loading=!1})))},getFileDeleteBatch:function(t){var e=this,i=this.formData,a=i.provider,s=i.spaceId,n=i.appid,l={provider:a,spaceId:s,appid:n,filePath:JSON.stringify(t.filePath)};this.loading=!0,this.$api.File_Delete_Batch(l).then((function(i){t.filePath.forEach((function(t){var i=e.tableData.findIndex((function(i){return e.fullPath+i.name===t}));e.tableData.splice(i,1)})),e.getFileList(),e.loading=!1,e.$refs.table.clearSelection(),e.$message({type:"success",message:"删除成功!"})})).catch((function(){e.loading=!1}))}}},z=P,U=(i("4738"),i("49b6"),Object(w["a"])(z,a,s,!1,null,"4b122354",null));e["default"]=U.exports},"0472":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visible?i("div",{staticClass:"drawer"},[i("transition",{attrs:{name:"mask"}},[t.show?i("div",{staticClass:"mask",on:{click:function(e){return e.stopPropagation(),t.closeDrawer(e)}}}):t._e()]),t._v(" "),i("transition",{attrs:{name:"fade"}},[t.show?i("div",{staticClass:"box"},[t._t("default")],2):t._e()])],1):t._e()},s=[],n={name:"Drawer",props:{visible:{type:Boolean,default:!1}},data:function(){return{show:!1}},watch:{visible:function(t){var e=this;setTimeout((function(){e.show=t}),30)}},methods:{closeDrawer:function(){var t=this;this.show=!1,setTimeout((function(){t.$emit("update:visible",!1)}),300)}}},l=n,o=(i("68ae"),i("2877")),r=Object(o["a"])(l,a,s,!1,null,"0dd3e6a0",null);e["a"]=r.exports},"29ef":function(t,e,i){},4738:function(t,e,i){"use strict";i("29ef")},"48d5":function(t,e,i){},"49b6":function(t,e,i){"use strict";i("7198")},"5fc6":function(t,e,i){"use strict";i("c501")},6230:function(t,e,i){"use strict";i("e51a")},"68ae":function(t,e,i){"use strict";i("48d5")},7198:function(t,e,i){},c501:function(t,e,i){},e51a:function(t,e,i){}}]);