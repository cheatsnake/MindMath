(this["webpackJsonpmath-trainer-pro"]=this["webpackJsonpmath-trainer-pro"]||[]).push([[0],{39:function(n,e,t){"use strict";t.r(e);var r,i,o,c,a,s,l,d,u,b,h,j,m,g,f=t(5),O=t(1),p=t(16),x=t.n(p),y=t(3),w=t(15),k=t(6),v=t(8),L=t(2),I={answer:""},C="ADD",S="DEL",T="CLS",M=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case C:return n.answer.length<8?Object(L.a)(Object(L.a)({},n),{},{answer:n.answer+e.payload}):Object(L.a)(Object(L.a)({},n),{},{answer:n.answer});case S:return Object(L.a)(Object(L.a)({},n),{},{answer:n.answer.substring(0,n.answer.length-1)});case T:return Object(L.a)(Object(L.a)({},n),{},{answer:""});default:return n}},A=function(){return{type:T}},z=t(0),D=y.c.button(r||(r=Object(f.a)(["\n    cursor: pointer;\n    border: none;\n    border-radius: 0.2rem;\n    transition: 0.4s all;\n    background-color: ",";\n    color: ",";\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.font.dark})),N=Object(y.c)(w.b)(i||(i=Object(f.a)(["\n    cursor: pointer;\n    border: none;\n    border-radius: 0.2rem;\n    transition: 0.5s all;\n    background-color: ",";\n    color: ",";\n    width: 100%;\n    margin-top: 1rem;\n    padding: 1rem 2rem;\n    font-size: 1.2rem;\n    font-weight: 400;\n    text-align: center;\n    text-decoration: none;\n    &:hover {\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.font.dark}),(function(n){return n.theme.colors.accent})),_=Object(y.c)(w.b)(o||(o=Object(f.a)(["\n    cursor: pointer;\n    border: none;\n    border-radius: 0.2rem;\n    transition: 0.4s all;\n    background-color: ",";\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    text-decoration: none;\n    justify-content: center;\n    align-items: center;\n    font-weight: 400;\n    font-size: 0.7rem;\n    margin-top: 1rem;\n    min-width: 45%;\n    padding: 1rem;\n    ion-icon {\n        font-size: 2rem;\n        margin-bottom: 0.5rem;\n    }\n    &:hover {\n        background-color: ",";\n        font-weight: 400;\n    }\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.font.dark}),(function(n){return n.theme.colors.accent})),H=Object(y.c)(w.b)(c||(c=Object(f.a)(["\n    cursor: pointer;\n    border: none;\n    opacity: 0.7;\n    border-radius: 0.2rem;\n    transition: 0.5s all;\n    color: ",";\n    position: absolute;\n    top: 1rem;\n    left: 1rem;\n    background-color: inherit;\n    width: 50px;\n    height: 50px;\n    ion-icon {\n        transition: 0.5s all;\n        font-size: 2rem;\n        &:hover {\n            color: ",";\n        }\n    }\n    &:hover {\n        opacity: 1;\n    }\n"])),(function(n){return n.theme.font.dark}),(function(n){return n.theme.colors.accent})),U=Object(y.c)(D)(a||(a=Object(f.a)(["\n    border-radius: 0;\n    font-size: 2rem;\n    font-weight: 300;\n    background-color: ",";\n    ion-icon {\n        font-size: 2rem;\n    }\n    &:hover {\n        background-color: ",";\n    }\n    &:focus {\n        outline: none;\n    }\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.accent})),B=Object(y.c)(D)(s||(s=Object(f.a)(["\n    padding: 0.1rem 0.8rem 0.3rem 0.8rem;\n    font-size: 2rem;\n    &:hover {\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.colors.accent})),E=y.c.a(l||(l=Object(f.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-weight: 600;\n    border-radius: 0.2rem;\n    transition: 0.4s all;\n    color: ",";\n    padding: 0.4rem 1rem 0.5rem 1rem;\n    font-size: 1rem;\n    background-color: transparent;\n    border: 2px solid ",";\n    text-decoration: none;\n    ion-icon {\n        margin-left: 0.5rem;\n        font-size: 1.6rem;\n    }\n    &:hover {\n        background-color: ",";\n        color: ",";\n    }\n"])),(function(n){return n.theme.font.dark}),(function(n){return n.theme.font.dark}),(function(n){return n.theme.font.dark}),(function(n){return n.theme.font.light})),F=function(){var n=Object(v.b)();return Object(z.jsx)(H,{onClick:function(){return n(A())},to:"/menu",children:Object(z.jsx)("ion-icon",{name:"arrow-back-outline"})})},R=y.c.div(d||(d=Object(f.a)(["\n    width: ",";\n    height: ",";\n    display: flex;\n    flex-wrap: ",";\n    flex-direction: ",";\n    align-items: ",";\n    justify-content: ",";\n    margin: ",";\n    padding: ",";\n    border-bottom: ",";\n"])),(function(n){return n.width||"100%"}),(function(n){return n.height||"auto"}),(function(n){return n.wrap||"nowrap"}),(function(n){return n.direction||"row"}),(function(n){return n.align||"stretch"}),(function(n){return n.justify||"stretch"}),(function(n){return n.margin||0}),(function(n){return n.padding||0}),(function(n){return n.borderBottom||0})),G=function(n){return Object(z.jsx)(R,Object(L.a)({},n))},V=y.c.h1(u||(u=Object(f.a)(["\n    font-weight: 700;\n    font-size: ",";\n    color: ",";\n"])),(function(n){return n.fsize||"2rem"}),(function(n){return n.theme.colors.accent})),W=y.c.div(b||(b=Object(f.a)(["\n    line-height: 1.4rem;\n    font-weight: 300;\n    margin-top: 1rem;\n    text-align: ",";\n"])),(function(n){return n.align||"center"})),P=y.c.h2(h||(h=Object(f.a)(["\n    text-align: ",";\n    font-size: 1.2rem;\n    font-weight: 500;\n"])),(function(n){return n.align||"right"})),J=y.c.a(j||(j=Object(f.a)(["\n    margin-top: 2rem;\n    opacity: 0.7;\n    font-size: 0.7rem;\n    font-weight: 300;\n    text-decoration: none;\n    color: ",";\n    transition: 0.3s all;\n    &:hover {\n        opacity: 1;\n    }\n"])),(function(n){return n.theme.font.dark})),Y=function(){return Object(z.jsxs)(G,{direction:"column",heigth:"100%",justify:"center",align:"center",padding:"2rem 1rem 1rem 1rem",children:[Object(z.jsx)(F,{}),Object(z.jsx)("h1",{children:"Mind Math"}),Object(z.jsx)(P,{children:"version 1.0.0 public"}),Object(z.jsx)(W,{align:"left",children:"Mind Math is a open source web application for training oral counting. The application has 5 main modes: a mode with addition of numbers, subtraction, multiplication, division and a random mode combining the previous 4. You can independently configure the maximum number of digits for each mode."}),Object(z.jsx)(W,{align:"left",children:"I also tried to collect some tips on improving the oral account found on the Internet. I hope the application will be useful to you and you will not only pass the time, but also train your brain."}),Object(z.jsx)(W,{align:"left",children:"In the future, I plan to add various modes for speed and perhaps some company mode with a gradual complication of the difficulty level."}),Object(z.jsxs)(G,{direction:"column",justify:"center",align:"center",padding:"2rem 0 0 0",children:[Object(z.jsxs)(E,{target:"_blank",href:"https://github.com/cheatsnake/MindMath",children:["View on GitHub ",Object(z.jsx)("ion-icon",{name:"logo-github"})]}),Object(z.jsxs)(J,{target:"_blank",href:"https://cheatsnake.github.io/",children:["Made by ",Object(z.jsx)("b",{children:"Yury"})]})]})]})},q=t(26),K=y.c.div(m||(m=Object(f.a)(["\n    font-size: 2.7rem;\n    font-weight: 400;\n"]))),Q=y.c.input(g||(g=Object(f.a)(["\n    width: 90%;\n    color: ",";\n    text-align: center;\n    background-color: transparent;\n    border: none;\n    font-size: 3.2rem;\n    &:focus {\n        outline: none;\n    }\n"])),(function(n){return n.theme.colors.accent})),X=function(n){var e=Object(v.b)(),t=Object(v.c)((function(n){return n.answer.answer})),r=Object(v.c)((function(n){return n.task.task})),i=Object(v.c)((function(n){return n.task.mode})),o=["ADDITION","SUBSTRACTION","MULTIPLICATION","DIVISION"];function c(n){e({type:C,payload:n})}var a=function(){e(i?{type:i}:{type:o[Math.floor(Math.random()*o.length)]})};return Object(O.useEffect)((function(){return a()}),[]),Object(z.jsxs)(G,{direction:"column",children:[Object(z.jsx)(F,{}),Object(z.jsxs)(G,{direction:"column",justify:"center",align:"center",height:"100%",children:[Object(z.jsxs)(K,{children:[r.first," ","*"===r.operation?"\xd7":r.operation," ",r.second]}),Object(z.jsx)(K,{children:"?"}),Object(z.jsx)(Q,{type:"number",maxLength:"8",value:t,readOnly:!0})]}),Object(z.jsxs)(q.a,{columns:3,rows:"repeat(4, 13vh)",gap:"0",children:[Object(z.jsx)(U,{onClick:function(){return c("1")},children:"1"}),Object(z.jsx)(U,{onClick:function(){return c("2")},children:"2"}),Object(z.jsx)(U,{onClick:function(){return c("3")},children:"3"}),Object(z.jsx)(U,{onClick:function(){return c("4")},children:"4"}),Object(z.jsx)(U,{onClick:function(){return c("5")},children:"5"}),Object(z.jsx)(U,{onClick:function(){return c("6")},children:"6"}),Object(z.jsx)(U,{onClick:function(){return c("7")},children:"7"}),Object(z.jsx)(U,{onClick:function(){return c("8")},children:"8"}),Object(z.jsx)(U,{onClick:function(){return c("9")},children:"9"}),Object(z.jsx)(U,{onClick:function(){e({type:S})},children:Object(z.jsx)("ion-icon",{name:"backspace-outline"})}),Object(z.jsx)(U,{onClick:function(){return c("0")},children:"0"}),Object(z.jsx)(U,{onClick:function(){var n;switch(r.operation){case"+":n=r.first+r.second;break;case"-":n=r.first-r.second;break;case"*":n=r.first*r.second;break;case"/":n=r.first/r.second}n===+t&&(a(),e(A()))},children:Object(z.jsx)("ion-icon",{name:"checkmark-outline"})})]})]})},Z=function(){return Object(z.jsxs)(G,{direction:"column",justify:"center",align:"center",padding:"1rem",children:[Object(z.jsx)(V,{children:"Mind Math"}),Object(z.jsxs)(G,{direction:"column",margin:"1rem",justify:"center",align:"center",children:[Object(z.jsx)(N,{to:"/modes",children:"Start game"}),Object(z.jsx)(N,{to:"/tips",children:"Useful tips"}),Object(z.jsx)(N,{to:"/settings",children:"Settings"}),Object(z.jsx)(N,{to:"/about",children:"About"})]})]})},$={task:{first:"",second:"",operation:""},addLenght:99,subLenght:99,mulLenght:99,divLenght:99,mode:""},nn="ADDITION",en="SUBSTRACTION",tn="MULTIPLICATION",rn="DIVISION",on="MODE",cn="CHANGE_BIT",an="CHANGE_SUB",sn="CHANGE_MUL",ln="CHANGE_DIV";function dn(n){return Math.round(Math.random()*n)}var un,bn,hn,jn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case nn:var t=dn(n.addLenght),r=dn(n.addLenght),i="+";return Object(L.a)(Object(L.a)({},n),{},{task:{first:t,second:r,operation:i}});case en:var o=dn(n.subLenght),c=dn(n.subLenght),a="-";return o<c?Object(L.a)(Object(L.a)({},n),{},{task:{first:c,second:o,operation:a}}):Object(L.a)(Object(L.a)({},n),{},{task:{first:o,second:c,operation:a}});case tn:var s=dn(n.mulLenght),l=dn(n.mulLenght),d="*";return Object(L.a)(Object(L.a)({},n),{},{task:{first:s,second:l,operation:d}});case rn:for(var u=dn(n.divLenght),b=dn(n.divLenght);u%b!==0||b<1;b=dn(n.divLenght/2));var h="/";return Object(L.a)(Object(L.a)({},n),{},{task:{first:u,second:b,operation:h}});case on:return Object(L.a)(Object(L.a)({},n),{},{mode:e.payload});case cn:return Object(L.a)(Object(L.a)({},n),{},{addLenght:e.payload});case an:return Object(L.a)(Object(L.a)({},n),{},{subLenght:e.payload});case sn:return Object(L.a)(Object(L.a)({},n),{},{mulLenght:e.payload});case ln:return Object(L.a)(Object(L.a)({},n),{},{divLenght:e.payload});default:return n}},mn=function(n){return{type:cn,payload:n}},gn=function(n){return{type:an,payload:n}},fn=function(n){return{type:sn,payload:n}},On=function(n){return{type:ln,payload:n}},pn=function(){var n=Object(v.b)();function e(e){n({type:on,payload:e})}return Object(z.jsxs)(G,{direction:"column",justify:"center",align:"center",padding:"1rem",children:[Object(z.jsx)(F,{}),Object(z.jsx)(V,{fsize:"1.5rem",children:"Choose game mode"}),Object(z.jsxs)(G,{justify:"space-around",margin:"1rem 0 0 0",wrap:"wrap",children:[Object(z.jsxs)(_,{onClick:function(){return e("ADDITION")},to:"/game",children:[Object(z.jsx)("ion-icon",{name:"add-outline"}),"Addition"]}),Object(z.jsxs)(_,{onClick:function(){return e("SUBSTRACTION")},to:"/game",children:[Object(z.jsx)("ion-icon",{name:"remove-outline"}),"Subtraction"]}),Object(z.jsxs)(_,{onClick:function(){return e("MULTIPLICATION")},to:"/game",children:[Object(z.jsx)("ion-icon",{name:"close-outline"}),"Multiplication"]}),Object(z.jsxs)(_,{onClick:function(){return e("DIVISION")},to:"/game",children:[Object(z.jsx)("ion-icon",{name:"pause-outline"}),"Division"]}),Object(z.jsxs)(_,{onClick:function(){return e(null)},to:"/game",children:[Object(z.jsx)("ion-icon",{name:"cube-outline"}),"Random"]})]})]})},xn=y.c.div(un||(un=Object(f.a)(["\n    padding: 0 1rem;\n    font-weight: 600;\n    font-size: 2rem;\n"]))),yn=function(){var n=Object(v.b)(),e=Object(v.c)((function(n){return n.task}));function t(e,t){t.toString().length<4?n(e(+(t+"9"))):n(e(9))}function r(e,t){console.log(t),t.toString().length>1?n(e(+t.toString().substring(0,t.toString().length-1))):n(e(9999))}return Object(z.jsxs)(G,{direction:"column",justify:"center",align:"center",padding:"1rem",children:[Object(z.jsx)(F,{}),Object(z.jsx)(V,{children:"Settings"}),Object(z.jsxs)(G,{direction:"column",children:[Object(z.jsx)(W,{children:"Select the maximum bit depth of the numbers for various arithmetic operations."}),Object(z.jsxs)(G,{justify:"space-between",align:"center",margin:"2rem 0 0 0",children:[Object(z.jsx)(P,{children:"Addition"}),Object(z.jsxs)(G,{width:"auto",children:[Object(z.jsx)(B,{onClick:function(){return t(mn,e.addLenght)},children:"+"}),Object(z.jsx)(xn,{children:e.addLenght.toString().length}),Object(z.jsx)(B,{onClick:function(){return r(mn,e.addLenght)},children:"\u2013"})]})]}),Object(z.jsxs)(G,{justify:"space-between",align:"center",margin:"1rem 0 0 0",children:[Object(z.jsx)(P,{children:"Subtract"}),Object(z.jsxs)(G,{width:"auto",children:[Object(z.jsx)(B,{onClick:function(){return t(gn,e.subLenght)},children:"+"}),Object(z.jsx)(xn,{children:e.subLenght.toString().length}),Object(z.jsx)(B,{onClick:function(){return r(gn,e.subLenght)},children:"\u2013"})]})]}),Object(z.jsxs)(G,{justify:"space-between",align:"center",margin:"1rem 0 0 0",children:[Object(z.jsx)(P,{children:"Multiply"}),Object(z.jsxs)(G,{width:"auto",children:[Object(z.jsx)(B,{onClick:function(){return t(fn,e.mulLenght)},children:"+"}),Object(z.jsx)(xn,{children:e.mulLenght.toString().length}),Object(z.jsx)(B,{onClick:function(){return r(fn,e.mulLenght)},children:"\u2013"})]})]}),Object(z.jsxs)(G,{justify:"space-between",align:"center",margin:"1rem 0 0 0",children:[Object(z.jsx)(P,{children:"Division"}),Object(z.jsxs)(G,{width:"auto",children:[Object(z.jsx)(B,{onClick:function(){return t(On,e.divLenght)},children:"+"}),Object(z.jsx)(xn,{children:e.divLenght.toString().length}),Object(z.jsx)(B,{onClick:function(){return r(On,e.divLenght)},children:"\u2013"})]})]})]})]})},wn=function(){return Object(z.jsxs)(G,{direction:"column",justify:"center",align:"center",padding:"2rem 1rem",children:[Object(z.jsx)(F,{}),Object(z.jsx)(V,{fsize:"1.5rem",children:"Useful tips"}),Object(z.jsx)(W,{align:"left",children:"Here you will find some really effective tips on the web on how to improve your oral score."}),Object(z.jsxs)(G,{direction:"column",padding:"1rem 0",children:[Object(z.jsx)(P,{align:"left",children:"# Adding numbers"}),Object(z.jsx)(W,{align:"left",children:Object(z.jsx)("p",{dangerouslySetInnerHTML:{__html:"\n                    To learn how to add large numbers in your mind, you need to be able to accurately add numbers up to 10. Ultimately, any complex task is reduced to performing a few trivial actions.\n                    <br><br>\n                    For example, we add the numbers 8 and 6.\n                    To get 10 from 8, 2 is missing.<br>\n                    Then we will have to add 4=6-2 to 10.<br>\n                    As a result, we get: 8+6=(8+2)+4=10+4=14<br>\n                    The main trick with adding large numbers is to break them into bit parts, and then add these parts together.\n                    <br><br>\n                    Let's say we need to add two numbers: 356 and 728.\n                    The number 356 can be represented as 300+50+6.<br>\n                    Similarly, 728 will have the form 700+20+8.<br>\n                    Now we add up: 356+728=(300+700)+(50+20)+(8+6)=1000+70+14=1084\n                    "}})})]}),Object(z.jsxs)(G,{direction:"column",padding:"1rem 0",children:[Object(z.jsx)(P,{align:"left",children:"# Subtracting numbers"}),Object(z.jsx)(W,{align:"left",children:Object(z.jsx)("p",{dangerouslySetInnerHTML:{__html:'\n                    Subtracting numbers will also be easy. But unlike addition, where each number is divided into bit parts, when subtracting, only the number that we subtract needs to be "split".\n                    <br><br>\n                    For example, how many will be 528-321?<br>\n                    We divide the number 321 into bit parts and get:<br>\n                    321=300+20+1.\n                    Now we count:<br>\n                    528-300-20-1=228-20-1=208-1=207\n                    '}})})]}),Object(z.jsxs)(G,{direction:"column",padding:"1rem 0",children:[Object(z.jsx)(P,{align:"left",children:"# Multiplying multi-digit numbers by single-digit ones"}),Object(z.jsx)(W,{align:"left",children:Object(z.jsx)("p",{dangerouslySetInnerHTML:{__html:"\n                    First, practice multiplying multi-digit numbers by single-digit ones. \n                    <br>\n                    Let's multiply 528 by 6.<br>\n                    Divide the number 528 into digits and go from the highest to the lowest.<br>\n                    First we multiply, and then we add the results.<br>\n                    528 = 500+20+8 528*6 =<br>\n                    = 500*6+20*6+8*6 =<br>\n                    = 3000+120+48 = 3168\n                    "}})})]}),Object(z.jsxs)(G,{direction:"column",padding:"1rem 0",children:[Object(z.jsx)(P,{align:"left",children:"# Multiplying two-digit numbers"}),Object(z.jsx)(W,{align:"left",children:Object(z.jsx)("p",{dangerouslySetInnerHTML:{__html:"\n                    There is nothing complicated here either, only the load on short-term memory is a little more.\n                    Multiply 28 and 32. <br>\n                    To do this, we will reduce the entire operation to multiplication by single-digit numbers. <br><br>\n                    Let's imagine 32 as 30+2 <br>\n                    28*32 = 28*30+28*2 = 20*30+8*30+20*2+8*2 = 600+240+40+16 = 896<br>\n                    Another example. Multiply 79 by 57.<br>\n                    This means that you need to take the number \" 79 \" 57 times.<br>\n                    Let's break the entire operation into stages.<br>\n                    First, we multiply 79 by 50, and then-79 by 7.<br>\n                    79*50 = (70+9)*50 = 3500+450 = 3950<br>\n                    79*7 = (70+9)*7 = 490+63 = 553 3950+553 = 4503\n                    "}})})]}),Object(z.jsxs)(G,{direction:"column",padding:"1rem 0",children:[Object(z.jsx)(P,{align:"left",children:"# Division by a two-digit number"}),Object(z.jsx)(W,{align:"left",children:Object(z.jsx)("p",{dangerouslySetInnerHTML:{__html:"\n                    When dividing by a two-digit number, you need to use the rule of the last digit of the result when multiplying two numbers.\n                    <br><br>\n                    For example, multiply 1325 by 656. According to the rule, the last digit in the resulting number will be 0, since 5*6=30. Indeed, 1325*656=869200.\n                    <br><br>\n                    Now, armed with this valuable information, let's consider division by a two-digit number. How much is 4424:56?\n                    <br><br>\n                    Initially, we will use the \"fitting\" method and find the limits in which the result lies. We need to find a number that, when multiplied by 56, will give 4424. Intuitively, let's try the number 80.\n                    <br><br>\n                    56*80=4480\n                    <br><br>\n                    This means that the desired number is less than 80 and clearly more than 70. Let's determine its last digit. Its product by 6 should end with the number 4. According to the multiplication table, the results 4 and 9 are suitable for us. It is logical to assume that the result of division can be either the number 74 or 79. Checking it out:\n                    <br><br>\n                    This means that the desired number is less than 80 and clearly more than 70. Let's determine its last digit. Its product by 6 should end with the number 4. According to the multiplication table, the results 4 and 9 are suitable for us.\n                    It is logical to assume that the result of division can be either the number 74 or 79.<br>\n                    Check: 79*56=4424<br>\n                    Done, the solution has been found!\n                    If the number 79 did not fit, the second option would definitely be correct.\n                    "}})})]})]})},kn=y.c.div(bn||(bn=Object(f.a)(["\n    display: flex;\n    justify-content: center;\n    max-width: 425px;\n    margin: 0 auto;\n    min-height: 100vh;\n    background-color: ",";\n    color: ",";\n"])),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.font.dark})),vn=function(){return Object(z.jsx)(w.a,{children:Object(z.jsx)(kn,{children:Object(z.jsxs)(k.d,{children:[Object(z.jsx)(k.b,{path:"/menu",children:Object(z.jsx)(Z,{})}),Object(z.jsx)(k.b,{path:"/modes",children:Object(z.jsx)(pn,{})}),Object(z.jsx)(k.b,{path:"/game",children:Object(z.jsx)(X,{})}),Object(z.jsx)(k.b,{path:"/settings",children:Object(z.jsx)(yn,{})}),Object(z.jsx)(k.b,{path:"/about",children:Object(z.jsx)(Y,{})}),Object(z.jsx)(k.b,{path:"/tips",children:Object(z.jsx)(wn,{})}),Object(z.jsx)(k.a,{to:"/menu"})]})})})},Ln=t(17),In=t(27),Cn=Object(Ln.combineReducers)({answer:M,task:jn}),Sn=Object(Ln.createStore)(Cn,Object(In.composeWithDevTools)()),Tn=Object(y.b)(hn||(hn=Object(f.a)(["\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Azeret Mono', monospace;\n  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n  sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; */\n\n  ::-webkit-scrollbar {\n    width: 10px;\n  }\n  ::-webkit-scrollbar-track {\n    background: #0e151c;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: #0fa36a;\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: #13c581;\n  }\n}\n\nbody {\n  background-color: #1c1c1c;\n}\n"])));x.a.render(Object(z.jsx)(v.a,{store:Sn,children:Object(z.jsxs)(y.a,{theme:{colors:{dark:"#1c1c1c",grey:"#2e2e2e",light:"#fff",accent:"#0fa36a"},font:{dark:"#fff",light:"#000"}},children:[Object(z.jsx)(Tn,{}),Object(z.jsx)(vn,{})]})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.79d50d25.chunk.js.map