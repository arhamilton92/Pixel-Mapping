(this["webpackJsonppet-color"]=this["webpackJsonppet-color"]||[]).push([[0],{11:function(a,e,n){},12:function(a,e,n){"use strict";n.r(e);var i,t=n(0),r=n.n(t),d=n(4),m=n.n(d),s=n(1),l=n.n(s),o=n(2),c=[{name:"snow",id:0,base:[255,255,255],shade:[211,213,219],line:[202,188,193]},{name:"ivory",id:1,base:[247,238,241],shade:[202,188,193],line:[174,147,156]},{name:"vanilla",id:2,base:[255,232,215],shade:[228,183,172],line:[204,150,150]},{name:"peach",id:3,base:[255,215,224],shade:[235,173,187],line:[216,125,145]},{name:"dusty",id:4,base:[220,189,189],shade:[180,149,149],line:[151,106,115]},{name:"creamsicle",id:5,base:[255,173,134],shade:[255,131,116],line:[231,97,97]},{name:"jam",id:6,base:[143,13,81],shade:[112,0,59],line:[77,1,41]},{name:"bubblegum",id:7,base:[255,125,194],shade:[228,84,160],line:[209,33,125]},{name:"wine",id:8,base:[100,0,53],shade:[50,0,26],line:[50,0,26]},{name:"strawberry",id:9,base:[240,59,78],shade:[174,3,57],line:[112,0,59]},{name:"grape jelly",id:10,base:[84,67,147],shade:[59,43,117],line:[42,28,95]},{name:"lavender",id:11,base:[200,200,238],shade:[151,140,194],line:[120,106,173]},{name:"dandelion",id:12,base:[251,255,188],shade:[225,194,142],line:[199,144,105]},{name:"seafoam",id:13,base:[88,229,192],shade:[52,179,186],line:[33,121,173]},{name:"sky",id:14,base:[183,244,255],shade:[100,195,229],line:[73,135,220]},{name:"ash",id:15,base:[98,91,99],shade:[80,69,82],line:[45,43,56]},{name:"space",id:16,base:[42,47,86],shade:[25,29,61],line:[14,17,43]},{name:"chocolate",id:17,base:[95,27,34],shade:[73,14,39],line:[52,7,26]},{name:"squirrel",id:18,base:[177,70,40],shade:[165,51,38],line:[129,30,18]},{name:"matcha",id:19,base:[153,229,169],shade:[92,164,138],line:[44,125,112]},{name:"indigo",id:20,base:[104,91,216],shade:[79,64,203],line:[59,45,182]}],g={base:[255,0,242],baseShade:[194,17,185],baseLine:[125,9,119],marking1:[255,255,0],marking1Shade:[0,134,255],marking1Line:[255,0,0],marking2:[0,255,0],marking2Shade:[0,160,0],marking2Line:[0,102,108],marking3:[0,161,255],marking3Shade:[0,194,164],marking3Line:[0,60,95],marking4:[161,0,255],marking4Shade:[115,0,182],marking4Line:[46,0,75]},u=function(a){var e=a.data;console.log(e.markNum);var n,i=Object(t.useRef)(null),d=new Image,m=[void 0,void 0,void 0,void 0],s=c[e.base.id],u=[void 0,void 0,void 0,void 0],h=[];if(null!==e.markNum){for(var p=0;p<e.markNum;p++)h.push(c[e.markings[p].colorId]);console.log("colors "+h);for(var k=0;k<h.length;k++)u[k]=e.markings[k].colorId}var v=function(){var a=Object(o.a)(l.a.mark((function a(e,n){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b(e,n);case 2:return a.next=4,y(e,n);case 4:case"end":return a.stop()}}),a)})));return function(e,n){return a.apply(this,arguments)}}(),b=function(){var a=i.current,e=a.getContext("2d");d.crossOrigin="Anonymous",d.src="https://res.cloudinary.com/dw2l5yiim/image/upload/v1600027701/FURLET/furletMAP_bpck2t.png",d.onload=function(){f(this,e,a)}},f=function(){var a=Object(o.a)(l.a.mark((function a(e,i,t){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i.drawImage(e,0,0),n=i.getImageData(0,0,t.width,t.height),i.putImageData(n,0,0),E(n,i);case 4:case"end":return a.stop()}}),a)})));return function(e,n,i){return a.apply(this,arguments)}}(),y=function(){var a=Object(o.a)(l.a.mark((function a(n,t,r){var d,s;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:for(s=function(){var a=i.current,n=a.getContext("2d");u[d]=c[e.markings[d].colorId],m[d]=new Image,m[d].crossOrigin="Anonymous",m[d].src=e.markings[d].src[d],m[d].onload=function(){f(this,n,a)}},d=0;d<e.markNum;d++)s();case 2:case"end":return a.stop()}}),a)})));return function(e,n,i){return a.apply(this,arguments)}}(),w=function(a,e){n.data[a]=e[0],n.data[a+1]=e[1],n.data[a+2]=e[2]};function E(a,n){var i;for(i=0;i<a.data.length;i+=4)a.data[i]===g.base[0]&&a.data[i+1]===g.base[1]&&a.data[i+2]===g.base[2]?w(i,s.base):a.data[i]===g.baseLine[0]&&a.data[i+1]===g.baseLine[1]&&a.data[i+2]===g.baseLine[2]?w(i,s.line):a.data[i]===g.baseShade[0]&&a.data[i+1]===g.baseShade[1]&&a.data[i+2]===g.baseShade[2]&&w(i,s.shade),null!==e.markNum&&(a.data[i]===g.marking1[0]&&a.data[i+1]===g.marking1[1]&&a.data[i+2]===g.marking1[2]?w(i,u[0].base):a.data[i]===g.marking1Line[0]&&a.data[i+1]===g.marking1Line[1]&&a.data[i+2]===g.marking1Line[2]?w(i,u[0].line):a.data[i]===g.marking1Shade[0]&&a.data[i+1]===g.marking1Shade[1]&&a.data[i+2]===g.marking1Shade[2]?w(i,u[0].shade):a.data[i]===g.marking2[0]&&a.data[i+1]===g.marking2[1]&&a.data[i+2]===g.marking2[2]?w(i,u[1].base):a.data[i]===g.marking2Line[0]&&a.data[i+1]===g.marking2Line[1]&&a.data[i+2]===g.marking2Line[2]?w(i,u[1].line):a.data[i]===g.marking2Shade[0]&&a.data[i+1]===g.marking2Shade[1]&&a.data[i+2]===g.marking2Shade[2]?w(i,u[1].shade):a.data[i]===g.marking3[0]&&a.data[i+1]===g.marking3[1]&&a.data[i+2]===g.marking3[2]?w(i,u[2].base):a.data[i]===g.marking3Line[0]&&a.data[i+1]===g.marking3Line[1]&&a.data[i+2]===g.marking3Line[2]?w(i,u[2].line):a.data[i]===g.marking3Shade[0]&&a.data[i+1]===g.marking3Shade[1]&&a.data[i+2]===g.marking3Shade[2]?w(i,u[2].shade):a.data[i]===g.marking4[0]&&a.data[i+1]===g.marking4[1]&&a.data[i+2]===g.marking4[2]?w(i,u[3].base):a.data[i]===g.marking4Line[0]&&a.data[i+1]===g.marking4Line[1]&&a.data[i+2]===g.marking4Line[2]?w(i,u[3].line):a.data[i]===g.marking4Shade[0]&&a.data[i+1]===g.marking4Shade[1]&&a.data[i+2]===g.marking4Shade[2]&&w(i,u[3].shade));n.putImageData(a,0,0)}return Object(t.useEffect)((function(){v(),console.log(e)}),[]),r.a.createElement("div",null,r.a.createElement("canvas",{ref:i,width:"250",height:"250"}))},h=function(a){var e=a.data;return r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,"Base color: ",e.base.name," "),r.a.createElement("h5",null,"Number of markings: ",e.markings.length),r.a.createElement("br",null),r.a.createElement("div",null,e.markings.map((function(a){return r.a.createElement("p",null,r.a.createElement("strong",null,a.name)," \xb7 ",a.color)}))))},p=[{_id:1,name:"helmet",src:["https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034825/FURLET/helmet_emwecz.png","https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034825/FURLET/helmet2_ciwzov.png","https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034825/FURLET/helmet3_iwlmah.png","https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034825/FURLET/helmet4_e9dgwa.png"]},{_id:2,name:"spotty",src:["https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034825/FURLET/spotty_uem9gy.png","https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034825/FURLET/spotty2_otkscw.png","https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034825/FURLET/spotty3_clos2p.png","https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034825/FURLET/spotty4_v4ganb.png"]},{_id:3,name:"speck",src:["https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034825/FURLET/speck_pvasek.png","https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034825/FURLET/speck2_dqvhoc.png","https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034825/FURLET/speck3_ji7xtf.png","https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034825/FURLET/speck4_zzrj5x.png"],variants:[{name:"double speck",src:"https://res.cloudinary.com/dw2l5yiim/image/upload/v1600026590/FURLET/furletMAPdoublespec_ljegcl.png"}]},{_id:4,name:"stripe",src:["https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034825/FURLET/stripe.small_pdajpo.png","https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034825/FURLET/stripe.small2_jz7f95.png","https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034825/FURLET/stripe.small3_hxnjyz.png","https://res.cloudinary.com/dw2l5yiim/image/upload/v1600034826/FURLET/stripe.small4_zxrex4.png"]}],k={base:{},markings:[],markNum:null},v=function(){var a;for(i=Math.floor(5*Math.random()),console.log("number of Markings: ".concat(i)),a=0;a<i;a++){var e=Math.floor(Math.random()*p.length);k.markings.push({name:p[e].name,src:p[e].src}),console.log(p[e].src),k.markNum=i}},b=function(){var a,e=c[Math.floor(Math.random()*c.length)];for(k.base={name:e.name,id:e.id},a=0;a<k.markings.length;a++){var n=Math.floor(Math.random()*c.length);k.markings[a].color=c[n].name,k.markings[a].colorId=c[n].id}console.log(k)},f=function(){return console.log("getting pet data"),v(),b(),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row align-items-center justify-content-center"},r.a.createElement("div",{className:"col-2"},r.a.createElement(u,{data:k})),r.a.createElement("div",{className:"col-4 mx-0"},r.a.createElement(h,{data:k}))))};n(11);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};m.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))},5:function(a,e,n){a.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.12e14fa1.chunk.js.map