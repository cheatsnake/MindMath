(this["webpackJsonpmath-trainer-pro"]=this["webpackJsonpmath-trainer-pro"]||[]).push([[0],{40:function(n,e,t){},41:function(n,e,t){"use strict";t.r(e);var r,c,i,o,a,s,l,u,j,d,b,h,m,f,O,g,x,p,y=t(4),k=t(1),w=t(16),v=t.n(w),M=t(14),C=t(2),L=t(6),I=t(7),T=t(3),S={answer:""},z="ADD",A="DEL",D="CLS",N=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case z:return n.answer.length<8?Object(T.a)(Object(T.a)({},n),{},{answer:n.answer+e.payload}):Object(T.a)(Object(T.a)({},n),{},{answer:n.answer});case A:return Object(T.a)(Object(T.a)({},n),{},{answer:n.answer.substring(0,n.answer.length-1)});case D:return Object(T.a)(Object(T.a)({},n),{},{answer:""});default:return n}},E=function(){return{type:D}},_=t(0),U=C.c.button(r||(r=Object(y.a)(["\n    cursor: pointer;\n    border: none;\n    border-radius: 0.2rem;\n    transition: 0.4s all;\n    background-color: ",";\n    color: ",";\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.font.dark})),H=Object(C.c)(M.b)(c||(c=Object(y.a)(["\n    cursor: pointer;\n    border: none;\n    border-radius: 0.2rem;\n    transition: 0.5s all;\n    background: ",";\n    color: ",";\n    width: 100%;\n    margin-top: 1rem;\n    padding: 1rem 2rem;\n    font-size: 1.2rem;\n    font-weight: 400;\n    text-align: center;\n    text-decoration: none;\n    &:hover {\n        background: ",";\n    }\n"])),(function(n){return n.bg||n.theme.colors.grey}),(function(n){return n.theme.font.dark}),(function(n){return n.theme.colors.accent})),B=Object(C.c)(M.b)(i||(i=Object(y.a)(["\n    cursor: pointer;\n    border: none;\n    border-radius: 0.2rem;\n    transition: 0.4s all;\n    background-color: ",";\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    text-decoration: none;\n    justify-content: center;\n    align-items: center;\n    font-weight: 400;\n    font-size: 0.7rem;\n    margin-top: 1rem;\n    min-width: 45%;\n    padding: 1rem;\n    ion-icon {\n        font-size: 2rem;\n        margin-bottom: 0.5rem;\n    }\n    &:hover {\n        background-color: ",";\n        font-weight: 400;\n    }\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.font.dark}),(function(n){return n.theme.colors.accent})),F=Object(C.c)(M.b)(o||(o=Object(y.a)(["\n    cursor: pointer;\n    border: none;\n    opacity: 0.7;\n    border-radius: 0.2rem;\n    transition: 0.5s all;\n    color: ",";\n    position: absolute;\n    top: 1rem;\n    left: 1rem;\n    background-color: inherit;\n    width: 50px;\n    height: 50px;\n    ion-icon {\n        transition: 0.5s all;\n        font-size: 2rem;\n        &:hover {\n            color: ",";\n        }\n    }\n    &:hover {\n        opacity: 1;\n    }\n"])),(function(n){return n.theme.font.dark}),(function(n){return n.theme.colors.accent})),R=Object(C.c)(U)(a||(a=Object(y.a)(["\n    border-radius: 0;\n    font-size: 2rem;\n    font-weight: 300;\n    background-color: ",";\n    ion-icon {\n        font-size: 2rem;\n    }\n    &:hover {\n        background-color: ",";\n    }\n    &:focus {\n        outline: none;\n    }\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.accent})),G=Object(C.c)(U)(s||(s=Object(y.a)(["\n    padding: 0.1rem 0.8rem 0.3rem 0.8rem;\n    font-size: 2rem;\n    &:hover {\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.colors.accent})),W=C.c.a(l||(l=Object(y.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-weight: 600;\n    border-radius: 0.2rem;\n    transition: 0.4s all;\n    color: ",";\n    padding: 0.4rem 1rem 0.5rem 1rem;\n    font-size: 1rem;\n    background-color: transparent;\n    border: 2px solid ",";\n    text-decoration: none;\n    ion-icon {\n        margin-left: 0.5rem;\n        font-size: 1.6rem;\n    }\n    &:hover {\n        background-color: ",";\n        color: ",";\n    }\n"])),(function(n){return n.theme.font.dark}),(function(n){return n.theme.font.dark}),(function(n){return n.theme.font.dark}),(function(n){return n.theme.font.light})),V=Object(C.c)(U)(u||(u=Object(y.a)(["\n    margin-top: 4rem;\n    font-size: 4rem;\n    &:hover {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.accent})),P=function(){var n=Object(I.b)();return Object(_.jsx)(F,{onClick:function(){return n(E())},to:"/MindMath/menu",children:Object(_.jsx)("ion-icon",{name:"arrow-back-outline"})})},J=function(n){return Object(_.jsx)(V,{onClick:n.refresh,children:Object(_.jsx)("ion-icon",{name:"refresh-outline"})})},Y=C.c.div(j||(j=Object(y.a)(["\n    width: ",";\n    height: ",";\n    display: flex;\n    flex-wrap: ",";\n    flex-direction: ",";\n    align-items: ",";\n    justify-content: ",";\n    margin: ",";\n    padding: ",";\n    border-bottom: ",";\n"])),(function(n){return n.width||"100%"}),(function(n){return n.height||"auto"}),(function(n){return n.wrap||"nowrap"}),(function(n){return n.direction||"row"}),(function(n){return n.align||"stretch"}),(function(n){return n.justify||"stretch"}),(function(n){return n.margin||0}),(function(n){return n.padding||0}),(function(n){return n.borderBottom||0})),q=function(n){return Object(_.jsx)(Y,Object(T.a)({},n))},K=C.c.h1(d||(d=Object(y.a)(["\n    font-weight: 700;\n    font-size: ",";\n    color: ",";\n"])),(function(n){return n.fsize||"2rem"}),(function(n){return n.color||n.theme.colors.accent})),Q=C.c.div(b||(b=Object(y.a)(["\n    line-height: 1.4rem;\n    font-weight: 300;\n    margin-top: ",";\n    text-align: ",";\n"])),(function(n){return n.marginTop||"1rem"}),(function(n){return n.align||"center"})),X=C.c.h2(h||(h=Object(y.a)(["\n    text-align: ",";\n    font-size: 1.2rem;\n    font-weight: 500;\n"])),(function(n){return n.align||"right"})),Z=C.c.a(m||(m=Object(y.a)(["\n    margin-top: 2rem;\n    opacity: 0.7;\n    font-size: 0.7rem;\n    font-weight: 300;\n    text-decoration: none;\n    color: ",";\n    transition: 0.3s all;\n    &:hover {\n        opacity: 1;\n    }\n"])),(function(n){return n.theme.font.dark})),$=function(){return Object(_.jsxs)(q,{direction:"column",heigth:"100%",justify:"center",align:"center",padding:"2rem 1rem 1rem 1rem",children:[Object(_.jsx)(P,{}),Object(_.jsx)("h1",{children:"Mind Math"}),Object(_.jsx)(X,{children:"version 1.1.0 public"}),Object(_.jsx)(Q,{align:"left",children:"Mind Math is a open source web application for training oral counting. The application has 5 main modes: a mode with addition of numbers, subtraction, multiplication, division and a random mode combining the previous 4. You can independently configure the maximum number of digits for each mode."}),Object(_.jsx)(Q,{align:"left",children:"I hope the application will be useful to you and you will not only pass the time, but also train your brain."}),Object(_.jsxs)(q,{direction:"column",justify:"center",align:"center",padding:"2rem 0 0 0",children:[Object(_.jsxs)(W,{target:"_blank",href:"https://github.com/cheatsnake/MindMath",children:["View on GitHub ",Object(_.jsx)("ion-icon",{name:"logo-github"})]}),Object(_.jsxs)(Z,{target:"_blank",href:"https://cheatsnake.github.io/",children:["Made by ",Object(_.jsx)("b",{children:"Yury"})]})]})]})},nn=t(21),en=t(27),tn=Object(C.c)(q)(f||(f=Object(y.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: ",";\n    color: ",";\n    z-index: 10;\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.font.dark})),rn=C.c.div(O||(O=Object(y.a)(["\n    font-size: 2.5rem;\n    font-weight: 400;\n    text-align: center;\n    color: ",";\n    margin: ",";\n"])),(function(n){return n.color||"inherit"}),(function(n){return n.margin||"0"})),cn=function(n){var e=n.refresh;return Object(_.jsxs)(tn,{direction:"column",justify:"center",align:"center",height:"100vh",children:[Object(_.jsx)(P,{}),Object(_.jsx)(K,{color:"#fff",children:"Results"}),Object(_.jsxs)(q,{justify:"center",margin:"2rem 0 0 0",children:[Object(_.jsxs)(q,{width:"auto",direction:"column",justify:"center",margin:"0 2rem 0 0",children:[Object(_.jsx)(rn,{color:"#0fa36a",children:n.true}),Object(_.jsx)(X,{children:"correct"})]}),Object(_.jsxs)(q,{width:"auto",direction:"column",justify:"center",children:[Object(_.jsx)(rn,{color:"#e74747",children:n.false}),Object(_.jsx)(X,{children:"wrong"})]})]}),Object(_.jsxs)(q,{justify:"center",margin:"2rem 0 0 0",children:[Object(_.jsxs)(q,{width:"auto",direction:"column",justify:"center",margin:"0 2rem 0 0",children:[Object(_.jsx)(rn,{children:n.accuracy}),Object(_.jsx)(X,{children:"accurancy"})]}),Object(_.jsxs)(q,{width:"auto",direction:"column",justify:"center",children:[Object(_.jsx)(rn,{children:n.time}),Object(_.jsx)(X,{children:"time"})]})]}),Object(_.jsx)(J,{refresh:e})]})},on=C.c.div(g||(g=Object(y.a)(["\n    opacity: 0.7;\n    position: absolute;\n    top: 1.4rem;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 1.2rem;\n    font-weight: 300;\n"]))),an=C.c.div(x||(x=Object(y.a)(["\n    font-size: 2.7rem;\n    font-weight: 400;\n"]))),sn=C.c.input(p||(p=Object(y.a)(["\n    width: 90%;\n    color: ",";\n    text-align: center;\n    background-color: transparent;\n    border: none;\n    font-size: 3.2rem;\n    &:focus {\n        outline: none;\n    }\n"])),(function(n){return n.theme.colors.accent})),ln=function(n){var e=Object(I.b)(),t=Object(I.c)((function(n){return n.answer.answer})),r=Object(I.c)((function(n){return n.task.task})),c=Object(I.c)((function(n){return n.task.mode})),i=Object(I.c)((function(n){return n.task.roundTime})),o=Object(k.useState)({true:0,false:0,accuracy:0}),a=Object(nn.a)(o,2),s=a[0],l=a[1],u=Object(k.useState)(60*i),j=Object(nn.a)(u,2),d=j[0],b=j[1],h=["ADDITION","SUBSTRACTION","MULTIPLICATION","DIVISION"];function m(n){e({type:z,payload:n})}var f=function(){e(c?{type:c}:{type:h[Math.floor(Math.random()*h.length)]})};return Object(k.useEffect)((function(){return f()}),[]),Object(k.useEffect)((function(){var n;return n=setInterval((function(){b((function(n){return n-1}))}),1e3),0===d&&clearInterval(n),function(){return clearInterval(n)}}),[d]),Object(_.jsxs)(q,{direction:"column",children:[0===d?Object(_.jsx)(cn,{true:s.true,false:s.false,accuracy:s.accuracy,time:i+"m",refresh:function(){b(60*i),l({true:0,false:0,accuracy:0})}}):null,Object(_.jsx)(P,{}),Object(_.jsx)(on,{children:d}),Object(_.jsxs)(q,{direction:"column",justify:"center",align:"center",height:"100%",children:[Object(_.jsxs)(an,{children:[r.first," ","*"===r.operation?"\xd7":r.operation," ",r.second]}),Object(_.jsx)(an,{children:"?"}),Object(_.jsx)(sn,{type:"number",maxLength:"8",value:t,readOnly:!0})]}),Object(_.jsxs)(en.a,{columns:3,rows:"repeat(4, 13vh)",gap:"0",children:[Object(_.jsx)(R,{onClick:function(){return m("1")},children:"1"}),Object(_.jsx)(R,{onClick:function(){return m("2")},children:"2"}),Object(_.jsx)(R,{onClick:function(){return m("3")},children:"3"}),Object(_.jsx)(R,{onClick:function(){return m("4")},children:"4"}),Object(_.jsx)(R,{onClick:function(){return m("5")},children:"5"}),Object(_.jsx)(R,{onClick:function(){return m("6")},children:"6"}),Object(_.jsx)(R,{onClick:function(){return m("7")},children:"7"}),Object(_.jsx)(R,{onClick:function(){return m("8")},children:"8"}),Object(_.jsx)(R,{onClick:function(){return m("9")},children:"9"}),Object(_.jsx)(R,{onClick:function(){e({type:A})},children:Object(_.jsx)("ion-icon",{name:"backspace-outline"})}),Object(_.jsx)(R,{onClick:function(){return m("0")},children:"0"}),Object(_.jsx)(R,{onClick:function(){var n;switch(r.operation){case"+":n=r.first+r.second;break;case"-":n=r.first-r.second;break;case"*":n=r.first*r.second;break;case"/":n=r.first/r.second}n===+t?(l({true:s.true+1,false:s.false,accuracy:(100*((s.true+1)/(s.true+1+s.false)).toFixed(3)).toFixed(0)+"%"}),f(),e(E())):l({true:s.true,false:s.false+1,accuracy:(100*(s.true/(s.true+s.false+1)).toFixed(3)).toFixed(0)+"%"})},children:Object(_.jsx)("ion-icon",{name:"checkmark-outline"})})]})]})},un=function(){return Object(_.jsxs)(q,{direction:"column",justify:"center",align:"center",padding:"1rem",children:[Object(_.jsx)(K,{children:"Mind Math"}),Object(_.jsxs)(q,{direction:"column",margin:"1rem",justify:"center",align:"center",children:[Object(_.jsx)(H,{to:"/MindMath/modes",children:"Start game"}),Object(_.jsx)(H,{to:"/MindMath/tips",children:"Useful tips"}),Object(_.jsx)(H,{to:"/MindMath/settings",children:"Settings"}),Object(_.jsx)(H,{to:"/MindMath/about",children:"About"})]})]})},jn={task:{first:"",second:"",operation:""},addLenght:99,subLenght:99,mulLenght:99,divLenght:99,mode:"",roundTime:1},dn="ADDITION",bn="SUBSTRACTION",hn="MULTIPLICATION",mn="DIVISION",fn="MODE",On="CHANGE_BIT",gn="CHANGE_SUB",xn="CHANGE_MUL",pn="CHANGE_DIV",yn="CHANGE_TIME";function kn(n){return Math.round(Math.random()*n)}var wn,vn,Mn,Cn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case dn:var t=kn(n.addLenght),r=kn(n.addLenght),c="+";return Object(T.a)(Object(T.a)({},n),{},{task:{first:t,second:r,operation:c}});case bn:var i=kn(n.subLenght),o=kn(n.subLenght),a="-";return i<o?Object(T.a)(Object(T.a)({},n),{},{task:{first:o,second:i,operation:a}}):Object(T.a)(Object(T.a)({},n),{},{task:{first:i,second:o,operation:a}});case hn:var s=kn(n.mulLenght),l=kn(n.mulLenght),u="*";return Object(T.a)(Object(T.a)({},n),{},{task:{first:s,second:l,operation:u}});case mn:for(var j=kn(n.divLenght),d=kn(n.divLenght);j%d!==0||d<1;d=kn(n.divLenght/2));var b="/";return Object(T.a)(Object(T.a)({},n),{},{task:{first:j,second:d,operation:b}});case fn:return Object(T.a)(Object(T.a)({},n),{},{mode:e.payload});case On:return Object(T.a)(Object(T.a)({},n),{},{addLenght:e.payload});case gn:return Object(T.a)(Object(T.a)({},n),{},{subLenght:e.payload});case xn:return Object(T.a)(Object(T.a)({},n),{},{mulLenght:e.payload});case pn:return Object(T.a)(Object(T.a)({},n),{},{divLenght:e.payload});case yn:return Object(T.a)(Object(T.a)({},n),{},{roundTime:e.payload});default:return n}},Ln=function(n){return{type:On,payload:n}},In=function(n){return{type:gn,payload:n}},Tn=function(n){return{type:xn,payload:n}},Sn=function(n){return{type:pn,payload:n}},zn=function(n){return{type:yn,payload:n}},An=function(){var n=Object(I.b)();function e(e){n({type:fn,payload:e})}return Object(_.jsxs)(q,{direction:"column",justify:"center",align:"center",padding:"1rem",children:[Object(_.jsx)(P,{}),Object(_.jsx)(K,{fsize:"1.5rem",children:"Choose game mode"}),Object(_.jsxs)(q,{justify:"space-around",margin:"1rem 0 0 0",wrap:"wrap",children:[Object(_.jsxs)(B,{onClick:function(){return e("ADDITION")},to:"/MindMath/game",children:[Object(_.jsx)("ion-icon",{name:"add-outline"}),"Addition"]}),Object(_.jsxs)(B,{onClick:function(){return e("SUBSTRACTION")},to:"/MindMath/game",children:[Object(_.jsx)("ion-icon",{name:"remove-outline"}),"Subtraction"]}),Object(_.jsxs)(B,{onClick:function(){return e("MULTIPLICATION")},to:"/MindMath/game",children:[Object(_.jsx)("ion-icon",{name:"close-outline"}),"Multiplication"]}),Object(_.jsxs)(B,{onClick:function(){return e("DIVISION")},to:"/MindMath/game",children:[Object(_.jsx)("ion-icon",{name:"pause-outline"}),"Division"]}),Object(_.jsxs)(B,{onClick:function(){return e(null)},to:"/MindMath/game",children:[Object(_.jsx)("ion-icon",{name:"cube-outline"}),"Random"]})]})]})},Dn=C.c.div(wn||(wn=Object(y.a)(["\n    padding: 0 1rem;\n    font-weight: 600;\n    font-size: 2rem;\n"]))),Nn=function(){var n=Object(I.b)(),e=Object(I.c)((function(n){return n.task}));function t(e,t){t.toString().length<4?n(e(+(t+"9"))):n(e(9))}function r(e,t){t.toString().length>1?n(e(+t.toString().substring(0,t.toString().length-1))):n(e(9999))}function c(e,t){n(e(t>5?1:t<1?5:t))}return Object(_.jsxs)(q,{direction:"column",justify:"center",align:"center",padding:"1rem",children:[Object(_.jsx)(P,{}),Object(_.jsx)(K,{children:"Settings"}),Object(_.jsxs)(q,{direction:"column",children:[Object(_.jsx)(Q,{align:"left",children:"Select the maximum bit depth of the numbers for various arithmetic operations."}),Object(_.jsxs)(q,{justify:"space-between",align:"center",margin:"1rem 0 0 0",children:[Object(_.jsx)(X,{children:"Addition"}),Object(_.jsxs)(q,{width:"auto",children:[Object(_.jsx)(G,{onClick:function(){return t(Ln,e.addLenght)},children:"+"}),Object(_.jsx)(Dn,{children:e.addLenght.toString().length}),Object(_.jsx)(G,{onClick:function(){return r(Ln,e.addLenght)},children:"\u2013"})]})]}),Object(_.jsxs)(q,{justify:"space-between",align:"center",margin:"1rem 0 0 0",children:[Object(_.jsx)(X,{children:"Subtract"}),Object(_.jsxs)(q,{width:"auto",children:[Object(_.jsx)(G,{onClick:function(){return t(In,e.subLenght)},children:"+"}),Object(_.jsx)(Dn,{children:e.subLenght.toString().length}),Object(_.jsx)(G,{onClick:function(){return r(In,e.subLenght)},children:"\u2013"})]})]}),Object(_.jsxs)(q,{justify:"space-between",align:"center",margin:"1rem 0 0 0",children:[Object(_.jsx)(X,{children:"Multiply"}),Object(_.jsxs)(q,{width:"auto",children:[Object(_.jsx)(G,{onClick:function(){return t(Tn,e.mulLenght)},children:"+"}),Object(_.jsx)(Dn,{children:e.mulLenght.toString().length}),Object(_.jsx)(G,{onClick:function(){return r(Tn,e.mulLenght)},children:"\u2013"})]})]}),Object(_.jsxs)(q,{justify:"space-between",align:"center",margin:"1rem 0 0 0",children:[Object(_.jsx)(X,{children:"Division"}),Object(_.jsxs)(q,{width:"auto",children:[Object(_.jsx)(G,{onClick:function(){return t(Sn,e.divLenght)},children:"+"}),Object(_.jsx)(Dn,{children:e.divLenght.toString().length}),Object(_.jsx)(G,{onClick:function(){return r(Sn,e.divLenght)},children:"\u2013"})]})]}),Object(_.jsx)(Q,{marginTop:"2rem",align:"left",children:"Select the maximum round time."}),Object(_.jsxs)(q,{justify:"space-between",align:"center",margin:"1rem 0 0 0",children:[Object(_.jsx)(X,{children:"Time"}),Object(_.jsxs)(q,{width:"auto",children:[Object(_.jsx)(G,{onClick:function(){return c(zn,e.roundTime+1)},children:"+"}),Object(_.jsxs)(Dn,{children:[e.roundTime,"m"]}),Object(_.jsx)(G,{onClick:function(){return c(zn,e.roundTime-1)},children:"\u2013"})]})]})]})]})},En=function(){return Object(_.jsxs)(q,{direction:"column",justify:"center",align:"center",padding:"2rem 1rem",children:[Object(_.jsx)(P,{}),Object(_.jsx)(K,{fsize:"1.5rem",children:"Useful tips"}),Object(_.jsxs)(q,{direction:"column",padding:"1rem 0",children:[Object(_.jsx)(X,{align:"left",children:"# Adding numbers"}),Object(_.jsx)(Q,{align:"left",children:Object(_.jsx)("p",{dangerouslySetInnerHTML:{__html:"\n                    Example: 2465 + 289 = ?\n                    <br><br>\n                    The algorithm of actions:\n                    <br><br>\n                    1. We decompose all the numbers into digits: we add units with units, tens with tens, thousands with thousands.<br>\n                    2. 2000+0=2000 (there are no thousands in 289) <br>\n                    3. 400+200=600<br>\n                    4. 60+80=140<br>\n                    5. 5+9=14<br>\n                    6. Add all the resulting numbers <br> 2000+600+140+14=2754\n                    <br><br>\n                    The answer is ready, the calculations are carried out in a fast and simple way\n                    "}})})]}),Object(_.jsxs)(q,{direction:"column",padding:"1rem 0",children:[Object(_.jsx)(X,{align:"left",children:"# Subtracting numbers"}),Object(_.jsx)(Q,{align:"left",children:Object(_.jsx)("p",{dangerouslySetInnerHTML:{__html:"\n                    Example: 567-341=?\n                    <br><br>\n                    The algorithm of actions:\n                    <br><br>\n                    1. Divide the number into pieces (digits)<br>\n                    2. 500-300=200<br>\n                    3. 60-40=20<br>\n                    4. 7-1=6<br>\n                    5. Find the amount 200+20+6=226\n                    "}})})]}),Object(_.jsxs)(q,{direction:"column",padding:"1rem 0",children:[Object(_.jsx)(X,{align:"left",children:"# Multiplying numbers"}),Object(_.jsx)(Q,{align:"left",children:Object(_.jsx)("p",{dangerouslySetInnerHTML:{__html:"\n                    Example: 37x56\n                    <br><br>\n                    The algorithm of actions:\n                    <br><br>\n                    1. 37 multiply by 50, then with the 37th we multiply by 6.<br>\n                    2. 37x5= 30x5+7x5=150+35=185. <br>\n                    We add 0 to the answer, since the multiplication occurred by tens, not ones. <br>\n                    We get that 37x50=1850<br>\n                    3. 37x6=30x6+7x6=180+42=222.<br>\n                    4. The final stage: we add 200, 20 and 2. 4 to 1850.\n                    <br><br>\n                    Result: 2072\n                    "}})})]}),Object(_.jsxs)(q,{direction:"column",padding:"1rem 0",children:[Object(_.jsx)(X,{align:"left",children:"# Division numbers"}),Object(_.jsx)(Q,{align:"left",children:Object(_.jsx)("p",{dangerouslySetInnerHTML:{__html:"\n                    Example: 1584 / 3\n                    <br><br>\n                    The algorithm of actions:\n                    <br><br>\n                    1. We are looking for the occurrence of the digit 3 in the number 1584 without a remainder\n                    <br>\n                    2. The nearest round number that is divisible by 3 is 1500\n                    <br>\n                    3. We decompose 1584 into 1500 and 84<br>\n                    1500:3=500<br>\n                    84:3=60:3+24:3=28<br>\n                    4. 500+28=528, which is the answer.\n                    "}})})]})]})},_n=C.c.div(vn||(vn=Object(y.a)(["\n    display: flex;\n    justify-content: center;\n    max-width: 425px;\n    margin: 0 auto;\n    min-height: 100vh;\n    color: ",";\n"])),(function(n){return n.theme.font.dark})),Un=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(_n,{children:Object(_.jsxs)(L.d,{children:[Object(_.jsx)(L.b,{path:"/MindMath/menu",children:Object(_.jsx)(un,{})}),Object(_.jsx)(L.b,{path:"/MindMath/modes",children:Object(_.jsx)(An,{})}),Object(_.jsx)(L.b,{path:"/MindMath/game",children:Object(_.jsx)(ln,{})}),Object(_.jsx)(L.b,{path:"/MindMath/settings",children:Object(_.jsx)(Nn,{})}),Object(_.jsx)(L.b,{path:"/MindMath/about",children:Object(_.jsx)($,{})}),Object(_.jsx)(L.b,{path:"/MindMath/tips",children:Object(_.jsx)(En,{})}),Object(_.jsx)(L.a,{to:"/MindMath/menu"})]})}),Object(_.jsx)("div",{className:"area",children:Object(_.jsxs)("ul",{className:"circles",children:[Object(_.jsx)("li",{}),Object(_.jsx)("li",{}),Object(_.jsx)("li",{}),Object(_.jsx)("li",{}),Object(_.jsx)("li",{}),Object(_.jsx)("li",{}),Object(_.jsx)("li",{}),Object(_.jsx)("li",{}),Object(_.jsx)("li",{}),Object(_.jsx)("li",{})]})})]})},Hn=t(17),Bn=t(28),Fn=Object(Hn.combineReducers)({answer:N,task:Cn}),Rn=Object(Hn.createStore)(Fn,Object(Bn.composeWithDevTools)()),Gn=(t(40),Object(C.b)(Mn||(Mn=Object(y.a)(["\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Azeret Mono', monospace;\n  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n  sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; */\n\n  ::-webkit-scrollbar {\n    width: 10px;\n  }\n  ::-webkit-scrollbar-track {\n    background: #0e151c;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: #0fa36a;\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: #13c581;\n  }\n}\n\nbody {\n  background-color: #1c1c1c;\n}\n"]))));v.a.render(Object(_.jsx)(I.a,{store:Rn,children:Object(_.jsx)(C.a,{theme:{colors:{dark:"#1c1c1c",grey:"#2e2e2e",light:"#fff",accent:"#0fa36a"},font:{dark:"#fff",light:"#000"}},children:Object(_.jsxs)(M.a,{children:[Object(_.jsx)(Gn,{}),Object(_.jsx)(Un,{})]})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d706fef2.chunk.js.map