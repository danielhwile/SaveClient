(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{203:function(e,t){},205:function(e,t){},219:function(e,t){},221:function(e,t){},249:function(e,t){},251:function(e,t){},252:function(e,t){},257:function(e,t){},259:function(e,t){},265:function(e,t){},267:function(e,t){},286:function(e,t){},298:function(e,t){},301:function(e,t){},319:function(e,t,n){},320:function(e,t,n){},321:function(e,t,n){},322:function(e,t,n){},327:function(e,t,n){},328:function(e,t,n){},329:function(e,t,n){},330:function(e,t,n){},331:function(e,t,n){"use strict";n.r(t);var s,c,a,r,o,i,l=n(114),j=n(4),u=n(179),d=n.n(u),m=n(189),b=n(339),O=n(340),h=n(338),p=n(188),v=n(180),x=n.n(v),f=n(56),g=n(19),N=n(32),C=n(341),w=n(344),S=n(3),P=Object(C.a)(s||(s=Object(N.a)(["\n    mutation postUser($username: String!, $password: String!, $email: String) {\n        postUser(username: $username, password:$password,email:$email) {\n            username\n            jwt\n        }\n    } \n"]))),$=function(e){e.submit;var t=e.title,n=e.isRegister,s=(e.registerStatus,Object(j.useState)("")),c=Object(g.a)(s,2),a=c[0],r=c[1],o=Object(j.useState)(""),i=Object(g.a)(o,2),l=i[0],u=i[1],d=Object(j.useState)(""),m=Object(g.a)(d,2),b=m[0],O=m[1],h=function(e,t){t(e.target.value)},p=Object(w.a)(P,{onCompleted:function(e){localStorage.setItem("authToken",e.postUser.jwt),window.location.href="/SaveClient/"}}),v=Object(g.a)(p,1)[0];return Object(S.jsx)("form",{className:"accountForm",onSubmit:function(e){e.preventDefault();var t={username:a,password:l};n&&(t.email=b),v({variables:t})},children:Object(S.jsxs)("div",{className:"accountForm",children:[Object(S.jsxs)("h2",{children:[t,":"]}),Object(S.jsxs)("div",{className:"formItem",children:[Object(S.jsx)("label",{htmlFor:"Username",children:"Username:"}),Object(S.jsx)("input",{className:"formInput",type:"username",id:t+"Username",name:"Username",placeholder:"Enter Username",value:a,onChange:function(e){return h(e,r)},required:!0})]}),Object(S.jsxs)("div",{className:"formItem",children:[Object(S.jsx)("label",{htmlFor:"Password",children:"Password:"}),Object(S.jsx)("input",{className:"formInput",type:"password",id:t+"Password",name:"Password",placeholder:"Enter Password",value:l,onChange:function(e){return h(e,u)},required:!0})]}),n&&Object(S.jsxs)("div",{className:"formItem",children:[Object(S.jsx)("label",{htmlFor:"Email",children:"Email:"}),Object(S.jsx)("input",{className:"formInput",type:"email",id:"Email",name:"Email",placeholder:"Enter Email",value:b,onChange:function(e){return h(e,O)},required:!0})]}),Object(S.jsx)("input",{className:"accFormBtn",type:"submit",name:t,value:t})]})})},I=Object(j.createContext)(null),D=n(21),y=n(184),F=(n(319),function(){var e=Object(j.useContext)(I);return Object(S.jsxs)("header",{children:[Object(S.jsxs)("div",{className:"holder titleHolder",onClick:function(e){e.preventDefault(),window.location.href="/SaveClient/"},children:[Object(S.jsx)("div",{id:"logoText",children:Object(S.jsx)("p",{id:"h1LogoText",children:"SaveTree"})}),Object(S.jsx)("div",{className:"Icon",children:Object(S.jsx)(D.d,{})}),Object(S.jsx)("div",{className:"Icon Tree",children:Object(S.jsx)(D.e,{})}),Object(S.jsx)("p",{children:"v: 1.0.0"})]}),null!==e&&Object(S.jsxs)("div",{className:"holder userHolder",children:[Object(S.jsxs)("div",{className:"userProfileLink",onClick:function(t){t.preventDefault();var n="/SaveClient#/user/"+e.username;window.location.href=n},children:[Object(S.jsx)("h2",{children:Object(S.jsx)(D.f,{})}),Object(S.jsx)("h3",{children:e.username})]}),Object(S.jsx)("h1",{className:"logOut",onClick:function(e){localStorage.removeItem("authToken"),window.location.href="/SaveClient/"},children:Object(S.jsx)(y.a,{})})]})]})}),_=(n(320),function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(F,{}),Object(S.jsxs)("div",{className:"landingPage",children:[Object(S.jsx)("div",{className:"landingPageForm",children:Object(S.jsx)($,{isRegister:!1,title:"Login"})}),Object(S.jsx)("div",{className:"landingPageForm",children:Object(S.jsx)($,{isRegister:!0,title:"Register"})})]})]})}),k=n(16),T=n(342),A=(n(321),n(185)),E=n(0),H=function(e){var t=Date.now()-e,n=864e5,s=36e5;if(t>=n){var c=Math.floor(t/n);return"".concat(c,1==c?" day ago":" days ago")}if(t<=s)return"<1 Hour Ago";var a=Math.floor(t/s);return"".concat(a,1==a?" hour ago":" hours ago")},L=function(e){return new Date(parseInt(e)).toLocaleString("en-US",{timeZone:"America/New_York",dateStyle:"full",timeStyle:"long"})},U=(n(322),Object(C.a)(c||(c=Object(N.a)(["\n    mutation putVote($username: String!, $post_id: String!, $vote: Int!) {\n        putVote(username: $username, post_id:$post_id, vote:$vote) {\n            vote\n        }\n    } \n"])))),q=function(e){var t=e.postDetails,n=e.isCommentSection,s=Object(j.useState)(t.userVote.vote),c=Object(g.a)(s,2),a=c[0],r=c[1],o=Object(j.useState)(t.voteSum-t.userVote.vote),i=Object(g.a)(o,2),l=i[0],u=(i[1],Object(j.useContext)(I)),d=Object(w.a)(U),m=Object(g.a)(d,1)[0];return Object(S.jsxs)("div",{className:"postDiv",children:[Object(S.jsxs)("div",{className:"votesDiv",children:[Object(S.jsxs)("label",{class:"labelVote",children:[Object(S.jsx)("input",{type:"radio",className:"voteRadio voteRadioUp",name:"vote",value:a,checked:1==a,onChange:function(e){r(1),m({variables:{username:u.username,post_id:t._id,vote:1}})}}),Object(S.jsx)("h2",{className:1===a&&"colorUpVote",children:Object(S.jsx)(D.b,{})})]}),Object(S.jsx)("h3",{children:l+a})," ",Object(S.jsxs)("label",{class:"labelVote",children:[Object(S.jsx)("input",{type:"radio",className:"voteRadio",name:"vote",value:a,checked:-1==a,onChange:function(e){r(-1),m({variables:{username:u.username,post_id:t._id,vote:-1}})}}),Object(S.jsx)("h2",{className:-1===a&&"colorDownVote",children:Object(S.jsx)(D.a,{})})]})]}),Object(S.jsxs)("div",{className:"postContent",children:[Object(S.jsxs)("div",{className:"postHeaderandTitle",children:[Object(S.jsxs)("div",{className:"postHeader",children:[Object(S.jsxs)("p",{children:["Created by ",Object(S.jsx)("a",{className:"pointer",onClick:function(e){e.preventDefault();var n="/SaveClient#/user/"+t.creator;window.location.href=n},children:t.creator})]}),Object(S.jsx)("p",{title:L(t.createdAt),children:H(t.createdAt)})]}),Object(S.jsx)("h2",{className:"postTitle",children:t.title}),n&&Object(S.jsx)("p",{className:"postDescription",children:t.description})]}),Object(S.jsx)("div",{className:"postFooter",children:!n&&Object(S.jsxs)("h3",{className:"postComment",onClick:function(e){e.preventDefault();var n="/SaveClient#/post/"+t._id;window.location.href=n},children:[Object(S.jsx)(E.b.Provider,{value:{style:{verticalAlign:"middle"}},children:Object(S.jsx)(A.a,{})}),"Comments"]})})]})]})},V=n.p+"static/media/userPhoto0.4f22e5ba.svg",R=n.p+"static/media/userPhoto1.4c3a4164.svg",B=n.p+"static/media/userPhoto2.fb3ff68b.svg",z=n.p+"static/media/userPhoto3.5a0a1e74.svg",J=n.p+"static/media/userPhoto4.960cb3ff.svg",M=Object(C.a)(a||(a=Object(N.a)(["\n    query getPosts($username:String!,$creator:String) {\n        getPosts(creator:$creator) {\n            _id\n            title\n            description\n            creator\n            createdAt\n            voteSum\n            userVote(username:$username) {\n                vote\n            }\n        }\n    }\n"]))),Y=function(e){var t=Object(k.f)().id,n={username:Object(j.useContext)(I).username};t&&(n.creator=t);var s=Object(T.a)(M,{variables:n}),c=s.loading,a=s.error,r=s.data,o=0;t&&(o=function(e){console.log(e);var t=e%5;return console.log(t),t}(function(e){var t={a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,0:0};e=e.toLowerCase();for(var n=0,s=0;s<e.length;s++)t[e.charAt(s)]&&(n+=t[e.charAt(s)]);return n}(t)));var i=[V,R,B,z,J];return c?"Loading...":a?"Error! ".concat(a.message):Object(S.jsxs)("div",{className:t&&"userContainer",children:[Object(S.jsxs)("div",{className:"postList",children:[t&&Object(S.jsxs)("div",{className:"postListHeader userProfileHeader",children:[Object(S.jsx)(D.f,{className:"createIcon"}),Object(S.jsxs)("h4",{children:[t,"'s Profile"]})]}),!t&&Object(S.jsxs)("div",{className:"postListHeader",children:[Object(S.jsx)(D.f,{className:"createIcon"}),Object(S.jsx)("input",{className:"createPostInput",type:"text",placeHolder:"Create New Post",onFocus:function(e){e.preventDefault(),window.location.href="/SaveClient#/create"}}),Object(S.jsx)(D.c,{className:"createIcon"})]}),r.getPosts.map((function(e){return Object(S.jsx)(q,{postDetails:e})}))]}),t&&Object(S.jsxs)("div",{className:"userTile",children:[Object(S.jsx)("img",{src:i[o],alt:"Stock User Image lady waters flowers",className:"userPhoto",width:"300",height:"300"}),Object(S.jsxs)("h2",{children:[t,"'s Profile"]})]})]})},Z=(n(327),Object(C.a)(r||(r=Object(N.a)(["\n    mutation postPost($title: String!, $description: String!, $creator: String!) {\n        postPost(title: $title, description: $description,creator:$creator) {\n         _id\n        }\n    }\n"])))),G=function(){var e=Object(j.useState)(""),t=Object(g.a)(e,2),n=t[0],s=t[1],c=Object(j.useState)(""),a=Object(g.a)(c,2),r=a[0],o=a[1],i=Object(j.useContext)(I),l=function(e,t){t(e.target.value)},u=Object(w.a)(Z,{onCompleted:function(e){var t="/SaveClient#/post/"+e.postPost._id;window.location.href=t}}),d=Object(g.a)(u,1)[0];return Object(S.jsx)("div",{className:"container",children:Object(S.jsx)("form",{className:"form",id:"newIssueForm",onSubmit:function(e){e.preventDefault();var t={title:n,description:r,creator:i.username};d({variables:t})},children:Object(S.jsxs)("div",{className:"createDiv",children:[Object(S.jsx)("h2",{id:"formTitle",children:"Create Issue:"}),Object(S.jsx)("label",{className:"screenHiddenLabel",htmlFor:"postTitle",children:"Title*"}),Object(S.jsx)("input",{type:"text",name:"postTitle",className:"postTitle postInput",placeholder:"Enter Issue Title",value:n,onChange:function(e){return l(e,s)},required:!0}),Object(S.jsx)("label",{className:"screenHiddenLabel",htmlFor:"issueDescription",children:"Description*"}),Object(S.jsx)("textarea",{form:"newIssueForm",rows:"6",className:"descriptionInput postInput",name:"issueDescription",placeholder:"Enter Issue Description",value:r,onChange:function(e){return l(e,o)},required:!0}),Object(S.jsxs)("button",{className:"submit",form:"newIssueForm",type:"submit",children:["Create Issue ",Object(S.jsx)(D.c,{})]})]})})})},K=n(190),Q=(n(328),function(e){var t=e.commentDetails,n=Object(j.useContext)(I);return Object(S.jsxs)("div",{className:t.creator===n.username?"commentDiv opComment":"commentDiv",children:[Object(S.jsxs)("div",{className:"commentHeader",children:[Object(S.jsxs)("p",{children:["Created By ",Object(S.jsxs)("a",{className:"pointer",onClick:function(e){e.preventDefault();var n="/SaveClient#/user/"+t.creator;window.location.href=n},children:[t.creator,t.creator===n.username&&" (you!)"]})]}),Object(S.jsx)("p",{title:L(t.createdAt),children:H(t.createdAt)})]}),Object(S.jsx)("h3",{children:t.content})]})}),W=(n(329),Object(C.a)(o||(o=Object(N.a)(["\n    mutation postComment($post_id:String!,$creator:String!,$content:String!) {\n    postComment(post_id:$post_id,creator:$creator,content:$content) {\n        createdAt\n        content\n        creator\n    }\n}\n"])))),X=Object(C.a)(i||(i=Object(N.a)(["\n    query getPosts($username:String!,$_id:ID!) {\n        getPosts(_id:$_id) {\n            _id\n            title\n            description\n            creator\n            createdAt\n            voteSum\n            comments {\n              content\n              creator\n              createdAt\n            }\n            userVote(username:$username) {\n              vote\n            }\n        }\n    }\n"]))),ee=function(){var e=Object(j.useState)([]),t=Object(g.a)(e,2),n=t[0],s=t[1],c=Object(j.useState)(""),a=Object(g.a)(c,2),r=a[0],o=a[1],i=Object(k.f)().id,l=Object(j.useContext)(I),u={username:l.username,_id:i},d=Object(T.a)(X,{variables:u,onCompleted:function(e){s(e.getPosts[0].comments)}}),m=d.loading,b=d.error,O=d.data,h=Object(w.a)(W,{variables:{post_id:i,creator:l.username,content:r},onCompleted:function(e){s([e.postComment].concat(Object(K.a)(n)))}}),p=Object(g.a)(h,1)[0];return m?"Loading...":b?"Error! ".concat(b.message):Object(S.jsxs)("div",{className:"commentPageContainer",children:[Object(S.jsx)(q,{postDetails:O.getPosts[0],isCommentSection:!0})," ",Object(S.jsxs)("form",{className:"newCommentForm",id:"newCommentForm",onSubmit:function(e){e.preventDefault(),p(),o("")},children:[Object(S.jsx)("label",{className:"screenHiddenLabel",htmlFor:"newComment",children:"Description*"}),Object(S.jsx)("textarea",{form:"newCommentForm",rows:"6",className:"commentInput",name:"newComment",placeholder:"Create New Comment",value:r,onChange:function(e){return function(e,t){t(e.target.value)}(e,o)},required:!0}),Object(S.jsxs)("button",{className:"submit",form:"newCommentForm",type:"submit",children:["Post Comment",Object(S.jsx)(D.c,{})]})]}),Object(S.jsxs)("div",{className:"commentsContainer",children:[n.map((function(e){return Object(S.jsx)(Q,{className:"comment",commentDetails:e})}))," "]})]})};var te=function(){return Object(S.jsxs)(f.a,{children:[Object(S.jsx)(F,{}),Object(S.jsx)("div",{children:Object(S.jsxs)(k.c,{children:[Object(S.jsx)(k.a,{exact:!0,path:"/",children:Object(S.jsx)(Y,{})}),Object(S.jsx)(k.a,{exact:!0,path:"/create",children:Object(S.jsx)(G,{})}),Object(S.jsx)(k.a,{path:"/user/:id",children:Object(S.jsx)(Y,{})}),Object(S.jsx)(k.a,{path:"/post/:id",children:Object(S.jsx)(ee,{})})]})})]})},ne=(n(330),Object(m.a)({uri:"https://save-tree.herokuapp.com/api/graphql"})),se=localStorage.getItem("authToken"),ce=Object(p.a)((function(e,t){var n=t.headers;return{headers:Object(l.a)(Object(l.a)({},n),{},{authorization:se?"Bearer ".concat(se):""})}})),ae=null;se&&(ae={username:x.a.decode(se).username});var re=new b.a({link:ce.concat(ne),cache:new O.a});d.a.render(Object(S.jsx)(h.a,{client:re,children:Object(S.jsxs)(I.Provider,{value:ae||null,children:[" ",Object(S.jsxs)(f.a,{children:[se?Object(S.jsx)(te,{}):Object(S.jsx)(_,{})," "]})]})}),document.getElementById("root"))}},[[331,1,2]]]);
//# sourceMappingURL=main.da6c4ad9.chunk.js.map