(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{BZsk:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return O}));var l=t("vYYK"),n=t("q1tI"),o=t.n(n),r=t("Ol7k"),i=t("bE4q"),s=t("BMrR"),d=t("kPKH"),p=t("Vl3Y"),c=t("2/Rp"),m=t("YFqc"),u=t.n(m),b=t("nOHt"),g=t("ays0"),h=t("g2I7"),y=t("vDqi"),f=t.n(y),I=t("hfma"),x=t("Zr0A"),w=o.a.createElement,k=r.a.Footer,v=r.a.Sider,T=r.a.Content;function O(a){var e,o=Object(b.useRouter)().asPath.split("=")[1],m=Object(n.useState)({outlet:"",merchant:"",area:"",skuId:"",satuan:"",image:"",thumbnail:"",name:"",price:"",noted:"",orderType:"",loyalty:"",badged:"",nutrition:[],description:"",availableType:[],createdby:""}),y=m[0],O=m[1];Object(n.useEffect)((function(){Object(h.a)(),P()}),[]);var P=function(){f.a.get("".concat(I.a,"/api/item/").concat(o),{headers:{Authorization:localStorage.getItem("token")}}).then((function(a){var e=a.data.data;console.log(e),O(e)})).catch((function(a){console.log(a)}))};return w(r.a,null,w(x.a,null),w(v,{theme:"light",reverseArrow:!0,style:{overflow:"auto",height:"100vh",position:"fixed",left:0,boxShadow:"0 4px 38px 0 rgba(22,21,55,.06), 0 0 21px 0 rgba(22,21,55,.03)"}},w("img",{src:t("P6Ho"),style:{width:80,paddingTop:20,margin:"0px auto",display:"block"}}),w(g.a,{selectPage:["items"]})),w(r.a,{style:{marginLeft:200}},w(i.a,{style:{marginLeft:15,marginTop:15}},w(i.a.Item,null,"Home"),w(i.a.Item,null,w("a",{href:"/products/list"},"Product Data")),w(i.a.Item,null,"Product Detail")),w(T,{style:{margin:"24px 16px 0",overflow:"initial",backgroundColor:"white",padding:5,boxShadow:"0 4px 38px 0 rgba(22,21,55,.06), 0 0 21px 0 rgba(22,21,55,.03)"}},w("div",{style:{display:"flex",width:"100%"}},w("div",{style:{padding:"15px 0px"}},w("h1",{style:{borderLeft:"solid 4px #1890ff",paddingLeft:15}},"Edit Product"))),w(s.a,null,w(d.a,(e={xs:{span:22},sm:{span:14},md:{span:10}},Object(l.a)(e,"md",{span:10}),Object(l.a)(e,"lg",{span:8}),Object(l.a)(e,"xl",{span:10}),e),w(p.a,{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},w(p.a.Item,{label:"Outlet"},y.outlet),w(p.a.Item,{label:"Merchant"},y.merchant),w(p.a.Item,{label:"Area"},y.area),w(p.a.Item,{label:"SKU ID"},y.skuId),w(p.a.Item,{label:"Satuan"},y.satuan),w(p.a.Item,{label:"Image"},y.image),w(p.a.Item,{label:"Thumbnail"},y.thumbnail),w(p.a.Item,{label:"Name"},y.name),w(p.a.Item,{label:"Price"},y.price),w(p.a.Item,{label:"Noted"},y.noted),w(p.a.Item,{label:"Order Type"},y.orderType),w(p.a.Item,{label:"Loyalty"},y.loyalty),w(p.a.Item,{label:"Badged"},y.badged),w(p.a.Item,{label:"Nutrition"},y.nutrition),w(p.a.Item,{label:"Description"},y.description),w(p.a.Item,{label:"Available Type"},y.availableType),w(p.a.Item,null,w(u.a,{href:"/users/list"},w(c.a,{type:"warning",htmlType:"submit",className:"login-form-button",size:"large",style:{marginRight:15,marginLeft:15}},"Back"))))))),w(k,{style:{textAlign:"center"}},"GorryWell CMS Merchant \xa92018 Created by ",w("a",null,"Anak Nongkrong Kebon Jeruk "))))}},Yc3q:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/detail",function(){return t("BZsk")}])}},[["Yc3q",1,2,3,0,32,33,34,35,36]]]);