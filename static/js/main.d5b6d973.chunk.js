(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{203:function(e,t){},205:function(e,t){},219:function(e,t){},221:function(e,t){},249:function(e,t){},251:function(e,t){},252:function(e,t){},257:function(e,t){},259:function(e,t){},265:function(e,t){},267:function(e,t){},286:function(e,t){},298:function(e,t){},301:function(e,t){},319:function(e,t,n){},320:function(e,t,n){},321:function(e,t,n){},322:function(e,t,n){},327:function(e,t,n){},328:function(e,t,n){},329:function(e,t,n){},330:function(e,t,n){},331:function(e,t,n){"use strict";n.r(t);var s,c,a,r,i,o,l,j,d=n(115),u=n(4),m=n(180),b=n.n(m),O=n(189),h=n(339),p=n(340),v=n(338),x=n(188),f=n(181),g=n.n(f),N=n(56),C=n(13),w=n(23),S=n(341),$=n(344),P=n(2),I=Object(S.a)(s||(s=Object(w.a)(["\n    mutation postUser($username: String!, $password: String!, $email: String) {\n        postUser(username: $username, password:$password,email:$email) {\n            username\n            jwt\n        }\n    } \n"]))),_=function(e){e.submit;var t=e.title,n=e.isRegister,s=(e.registerStatus,Object(u.useState)("")),c=Object(C.a)(s,2),a=c[0],r=c[1],i=Object(u.useState)(""),o=Object(C.a)(i,2),l=o[0],j=o[1],d=Object(u.useState)(""),m=Object(C.a)(d,2),b=m[0],O=m[1],h=function(e,t){t(e.target.value)},p=Object($.a)(I,{onCompleted:function(e){localStorage.setItem("authToken",e.postUser.jwt),window.location.href="/SaveClient/"}}),v=Object(C.a)(p,1)[0];return Object(P.jsx)("form",{className:"accountForm",onSubmit:function(e){e.preventDefault();var t={username:a,password:l};n&&(t.email=b),v({variables:t})},children:Object(P.jsxs)("div",{className:"accountForm",children:[Object(P.jsxs)("h2",{children:[t,":"]}),Object(P.jsxs)("div",{className:"formItem",children:[Object(P.jsx)("label",{htmlFor:"Username",children:"Username:"}),Object(P.jsx)("input",{className:"formInput",type:"username",id:t+"Username",name:"Username",placeholder:"Enter Username",value:a,onChange:function(e){return h(e,r)},required:!0})]}),Object(P.jsxs)("div",{className:"formItem",children:[Object(P.jsx)("label",{htmlFor:"Password",children:"Password:"}),Object(P.jsx)("input",{className:"formInput",type:"password",id:t+"Password",name:"Password",placeholder:"Enter Password",value:l,onChange:function(e){return h(e,j)},required:!0})]}),n&&Object(P.jsxs)("div",{className:"formItem",children:[Object(P.jsx)("label",{htmlFor:"Email",children:"Email:"}),Object(P.jsx)("input",{className:"formInput",type:"email",id:"Email",name:"Email",placeholder:"Enter Email",value:b,onChange:function(e){return h(e,O)},required:!0})]}),Object(P.jsx)("input",{className:"accFormBtn",type:"submit",name:t,value:t})]})})},D=Object(u.createContext)(null),k=n(21),y=n(185),F=(n(319),function(){var e=Object(u.useContext)(D);return Object(P.jsxs)("header",{children:[Object(P.jsxs)("div",{className:"holder titleHolder",onClick:function(e){e.preventDefault(),window.location.href="/SaveClient/"},children:[Object(P.jsx)("div",{id:"logoText",children:Object(P.jsx)("p",{id:"h1LogoText",children:"SaveTree"})}),Object(P.jsx)("div",{className:"Icon",children:Object(P.jsx)(k.d,{})}),Object(P.jsx)("div",{className:"Icon Tree",children:Object(P.jsx)(k.e,{})}),Object(P.jsx)("p",{children:"v: 1.0.2"})]}),null!==e&&Object(P.jsxs)("div",{className:"holder userHolder",children:[Object(P.jsxs)("div",{className:"userProfileLink",onClick:function(t){t.preventDefault();var n="/SaveClient#/user/"+e.username;window.location.href=n},children:[Object(P.jsx)("h2",{children:Object(P.jsx)(k.f,{})}),Object(P.jsx)("h3",{children:e.username})]}),Object(P.jsx)("h1",{className:"logOut",onClick:function(e){localStorage.removeItem("authToken"),window.location.href="/SaveClient/"},children:Object(P.jsx)(y.a,{})})]})]})}),T=(n(320),function(){return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(F,{}),Object(P.jsxs)("div",{className:"landingPage",children:[Object(P.jsx)("div",{className:"landingPageForm",children:Object(P.jsx)(_,{isRegister:!1,title:"Login"})}),Object(P.jsx)("div",{className:"landingPageForm",children:Object(P.jsx)(_,{isRegister:!0,title:"Register"})})]})]})}),E=n(17),A=n(342),H=(n(321),n(83)),L=n(0),q=function(e){var t=Date.now()-e,n=864e5,s=36e5;if(t>=n){var c=Math.floor(t/n);return"".concat(c,1==c?" day ago":" days ago")}if(t<=s)return"<1 Hour Ago";var a=Math.floor(t/s);return"".concat(a,1==a?" hour ago":" hours ago")},U=function(e){return new Date(parseInt(e)).toLocaleString("en-US",{timeZone:"America/New_York",dateStyle:"full",timeStyle:"long"})},V=(n(322),Object(S.a)(c||(c=Object(w.a)(["\n    mutation putVote($username: String!, $post_id: String!, $vote: Int!) {\n        putVote(username: $username, post_id:$post_id, vote:$vote) {\n            vote\n        }\n    } \n"])))),B=Object(S.a)(a||(a=Object(w.a)(["\n    mutation deletePost($post_id: String!) {\n        deletePost(_id: $post_id) {\n            response\n        }\n    }\n"]))),R=Object(S.a)(r||(r=Object(w.a)(["\n    mutation putPost($title: String!, $description: String!, $post_id: String!) {\n        putPost(title: $title, description: $description,_id:$post_id) {\n         _id\n        }\n    }\n"]))),z=function(e){var t=e.postDetails,n=e.isCommentSection,s=Object(u.useState)(t.userVote.vote),c=Object(C.a)(s,2),a=c[0],r=c[1],i=Object(u.useState)(t.voteSum-t.userVote.vote),o=Object(C.a)(i,2),l=o[0],j=(o[1],Object(u.useState)(!1)),d=Object(C.a)(j,2),m=d[0],b=d[1],O=Object(u.useState)(t.title),h=Object(C.a)(O,2),p=h[0],v=h[1],x=Object(u.useState)(t.description),f=Object(C.a)(x,2),g=f[0],N=f[1],w=Object(u.useState)(t.title),S=Object(C.a)(w,2),I=S[0],_=S[1],y=Object(u.useState)(t.description),F=Object(C.a)(y,2),T=F[0],E=F[1],A=function(e,t){t(e.target.value)},z=Object(u.useContext)(D),J=Object($.a)(V),M=Object(C.a)(J,1)[0],Y=Object($.a)(R),Z=Object(C.a)(Y,1)[0],G=Object($.a)(B,{onCompleted:function(e){window.location.href="#"}}),K=Object(C.a)(G,1)[0];return Object(P.jsxs)("div",{className:"postDiv",children:[Object(P.jsxs)("div",{className:"votesDiv",children:[Object(P.jsxs)("label",{className:"labelVote",children:[Object(P.jsx)("input",{type:"radio",className:"voteRadio voteRadioUp",name:"vote",value:a,checked:1==a,onClick:function(e){1!=a?(r(1),M({variables:{username:z.username,post_id:t._id,vote:1}})):1==a&&(r(0),M({variables:{username:z.username,post_id:t._id,vote:0}}))}}),Object(P.jsx)("h2",{className:1===a?"colorUpVote":void 0,children:Object(P.jsx)(k.b,{})})]}),Object(P.jsx)("h3",{children:l+a})," ",Object(P.jsxs)("label",{class:"labelVote",children:[Object(P.jsx)("input",{type:"radio",className:"voteRadio",name:"vote",value:a,checked:-1==a,onClick:function(e){-1!=a?(r(-1),M({variables:{username:z.username,post_id:t._id,vote:-1}})):-1==a&&(r(0),M({variables:{username:z.username,post_id:t._id,vote:0}}),e.target.checked=!1)}}),Object(P.jsx)("h2",{className:-1===a?"colorDownVote":void 0,children:Object(P.jsx)(k.a,{})})]})]}),Object(P.jsxs)("div",{className:"postContent",children:[Object(P.jsxs)("div",{className:"postHeaderandTitle",children:[Object(P.jsxs)("div",{className:"postHeader",children:[Object(P.jsxs)("p",{children:["Created by ",Object(P.jsx)("a",{className:"pointer",onClick:function(e){e.preventDefault();var n="/SaveClient#/user/"+t.creator;window.location.href=n},children:t.creator})]}),Object(P.jsx)("p",{title:U(t.createdAt),children:q(t.createdAt)})]}),m?Object(P.jsx)("input",{value:p,className:"editTitle postTitle",onChange:function(e){return A(e,v)},required:!0}):Object(P.jsx)("h2",{className:"postTitle",children:I}),n&&Object(P.jsxs)(P.Fragment,{children:[" ",m?Object(P.jsx)("textarea",{form:"newIssueForm",rows:"6",className:"descriptionInput postInput",value:g,onChange:function(e){return A(e,N)},required:!0}):Object(P.jsx)("p",{className:"postDescription",children:T})]})]}),Object(P.jsxs)("div",{className:"postFooter",children:[!n&&Object(P.jsxs)("h3",{className:"postComment",onClick:function(e){e.preventDefault();var n="/SaveClient#/post/"+t._id;window.location.href=n},children:[Object(P.jsx)(L.b.Provider,{value:{style:{verticalAlign:"middle"}},children:Object(P.jsx)(H.b,{})}),"Comments"]}),(z.username==t.creator||"admin"==z.username)&&Object(P.jsxs)("div",{className:"editDeleteHolder",children:[n&&Object(P.jsx)("div",{className:"editBtn",onClick:function(e){return b(!m)},children:m?Object(P.jsx)("h5",{className:"editIcon",children:"Cancel Edits"}):Object(P.jsx)(H.a,{className:"editIcon"})}),Object(P.jsx)("div",{className:"deleteBtn",onClick:function(e){window.confirm("Are you sure you'd like to delete this post?")&&(K({variables:{post_id:t._id}}),window.location.href="/SaveClient/")},children:Object(P.jsx)(H.c,{className:"trashIcon"})})]}),m&&Object(P.jsx)("div",{className:"editBtn",onClick:function(e){Z({variables:{post_id:t._id,title:p,description:g}}),b(!1),_(p),E(g)},children:Object(P.jsx)("h3",{children:"Submit Edits"})})]})]})]})},J=n.p+"static/media/userPhoto0.4f22e5ba.svg",M=n.p+"static/media/userPhoto1.4c3a4164.svg",Y=n.p+"static/media/userPhoto2.fb3ff68b.svg",Z=n.p+"static/media/userPhoto3.5a0a1e74.svg",G=n.p+"static/media/userPhoto4.960cb3ff.svg",K=Object(S.a)(i||(i=Object(w.a)(["\n    query getPosts($username:String!,$creator:String) {\n        getPosts(creator:$creator) {\n            _id\n            title\n            description\n            creator\n            createdAt\n            voteSum\n            userVote(username:$username) {\n                vote\n            }\n        }\n    }\n"]))),Q=function(e){var t=Object(E.f)().id,n={username:Object(u.useContext)(D).username};t&&(n.creator=t);var s=Object(A.a)(K,{variables:n}),c=s.loading,a=s.error,r=s.data,i=0;t&&(i=function(e){console.log(e);var t=e%5;return console.log(t),t}(function(e){var t={a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,0:0};e=e.toLowerCase();for(var n=0,s=0;s<e.length;s++)t[e.charAt(s)]&&(n+=t[e.charAt(s)]);return n}(t)));var o=[J,M,Y,Z,G];return c?"Loading...":a?"Error! ".concat(a.message):Object(P.jsxs)("div",{className:t&&"userContainer",children:[Object(P.jsxs)("div",{className:"postList",children:[t&&Object(P.jsxs)("div",{className:"postListHeader userProfileHeader",children:[Object(P.jsx)(k.f,{className:"createIcon"}),Object(P.jsxs)("h4",{children:[t,"'s Profile"]})]}),!t&&Object(P.jsxs)("div",{className:"postListHeader",children:[Object(P.jsx)(k.f,{className:"createIcon"}),Object(P.jsx)("input",{className:"createPostInput",type:"text",placeHolder:"Create New Post",onFocus:function(e){e.preventDefault(),window.location.href="/SaveClient#/create"}}),Object(P.jsx)(k.c,{className:"createIcon"})]}),r.getPosts.map((function(e){return Object(P.jsx)(z,{postDetails:e})}))]}),t&&Object(P.jsxs)("div",{className:"userTile",children:[Object(P.jsx)("img",{src:o[i],alt:"Stock User Image lady waters flowers",className:"userPhoto",width:"300",height:"300"}),Object(P.jsxs)("h2",{children:[t,"'s Profile"]})]})]})},W=(n(327),Object(S.a)(o||(o=Object(w.a)(["\n    mutation postPost($title: String!, $description: String!, $creator: String!) {\n        postPost(title: $title, description: $description,creator:$creator) {\n         _id\n        }\n    }\n"])))),X=function(){var e=Object(u.useState)(""),t=Object(C.a)(e,2),n=t[0],s=t[1],c=Object(u.useState)(""),a=Object(C.a)(c,2),r=a[0],i=a[1],o=Object(u.useContext)(D),l=function(e,t){t(e.target.value)},j=Object($.a)(W,{onCompleted:function(e){var t="/SaveClient#/post/"+e.postPost._id;window.location.href=t}}),d=Object(C.a)(j,1)[0];return Object(P.jsx)("div",{className:"container",children:Object(P.jsx)("form",{className:"form",id:"newIssueForm",onSubmit:function(e){e.preventDefault();var t={title:n,description:r,creator:o.username};d({variables:t})},children:Object(P.jsxs)("div",{className:"createDiv",children:[Object(P.jsx)("h2",{id:"formTitle",children:"Create Issue:"}),Object(P.jsx)("label",{className:"screenHiddenLabel",htmlFor:"postTitle",children:"Title*"}),Object(P.jsx)("input",{type:"text",name:"postTitle",className:"postTitle postInput",placeholder:"Enter Issue Title",value:n,onChange:function(e){return l(e,s)},required:!0}),Object(P.jsx)("label",{className:"screenHiddenLabel",htmlFor:"issueDescription",children:"Description*"}),Object(P.jsx)("textarea",{form:"newIssueForm",rows:"6",className:"descriptionInput postInput",name:"issueDescription",placeholder:"Enter Issue Description",value:r,onChange:function(e){return l(e,i)},required:!0}),Object(P.jsxs)("button",{className:"submit",form:"newIssueForm",type:"submit",children:["Create Issue ",Object(P.jsx)(k.c,{})]})]})})})},ee=n(190),te=(n(328),function(e){var t=e.commentDetails,n=Object(u.useContext)(D);return Object(P.jsxs)("div",{className:t.creator===n.username?"commentDiv opComment":"commentDiv",children:[Object(P.jsxs)("div",{className:"commentHeader",children:[Object(P.jsxs)("p",{children:["Created By ",Object(P.jsxs)("a",{className:"pointer",onClick:function(e){e.preventDefault();var n="/SaveClient#/user/"+t.creator;window.location.href=n},children:[t.creator,t.creator===n.username&&" (you!)"]})]}),Object(P.jsx)("p",{title:U(t.createdAt),children:q(t.createdAt)})]}),Object(P.jsx)("h3",{children:t.content})]})}),ne=(n(329),Object(S.a)(l||(l=Object(w.a)(["\n    mutation postComment($post_id:String!,$creator:String!,$content:String!) {\n    postComment(post_id:$post_id,creator:$creator,content:$content) {\n        createdAt\n        content\n        creator\n    }\n}\n"])))),se=Object(S.a)(j||(j=Object(w.a)(["\n    query getPosts($username:String!,$_id:ID!) {\n        getPosts(_id:$_id) {\n            _id\n            title\n            description\n            creator\n            createdAt\n            voteSum\n            comments {\n              content\n              creator\n              createdAt\n            }\n            userVote(username:$username) {\n              vote\n            }\n        }\n    }\n"]))),ce=function(){var e=Object(u.useState)([]),t=Object(C.a)(e,2),n=t[0],s=t[1],c=Object(u.useState)(""),a=Object(C.a)(c,2),r=a[0],i=a[1],o=Object(E.f)().id,l=Object(u.useContext)(D),j={username:l.username,_id:o},d=Object(A.a)(se,{variables:j,onCompleted:function(e){s(e.getPosts[0].comments)}}),m=d.loading,b=d.error,O=d.data,h=Object($.a)(ne,{variables:{post_id:o,creator:l.username,content:r},onCompleted:function(e){s([e.postComment].concat(Object(ee.a)(n)))}}),p=Object(C.a)(h,1)[0];return m?"Loading...":b?"Error! ".concat(b.message):Object(P.jsxs)("div",{className:"commentPageContainer",children:[Object(P.jsx)(z,{postDetails:O.getPosts[0],isCommentSection:!0})," ",Object(P.jsxs)("form",{className:"newCommentForm",id:"newCommentForm",onSubmit:function(e){e.preventDefault(),p(),i("")},children:[Object(P.jsx)("label",{className:"screenHiddenLabel",htmlFor:"newComment",children:"Description*"}),Object(P.jsx)("textarea",{form:"newCommentForm",rows:"6",className:"commentInput",name:"newComment",placeholder:"Create New Comment",value:r,onChange:function(e){return function(e,t){t(e.target.value)}(e,i)},required:!0}),Object(P.jsxs)("button",{className:"submit",form:"newCommentForm",type:"submit",children:["Post Comment",Object(P.jsx)(k.c,{})]})]}),Object(P.jsxs)("div",{className:"commentsContainer",children:[n.map((function(e){return Object(P.jsx)(te,{className:"comment",commentDetails:e})}))," "]})]})};var ae=function(){return Object(P.jsxs)(N.a,{children:[Object(P.jsx)(F,{}),Object(P.jsx)("div",{children:Object(P.jsxs)(E.c,{children:[Object(P.jsx)(E.a,{exact:!0,path:"/",children:Object(P.jsx)(Q,{})}),Object(P.jsx)(E.a,{exact:!0,path:"/create",children:Object(P.jsx)(X,{})}),Object(P.jsx)(E.a,{path:"/user/:id",children:Object(P.jsx)(Q,{})}),Object(P.jsx)(E.a,{path:"/post/:id",children:Object(P.jsx)(ce,{})})]})})]})},re=(n(330),Object(O.a)({uri:"https://save-tree.herokuapp.com/api/graphql"})),ie=localStorage.getItem("authToken"),oe=Object(x.a)((function(e,t){var n=t.headers;return{headers:Object(d.a)(Object(d.a)({},n),{},{authorization:ie?"Bearer ".concat(ie):""})}})),le=null;ie&&(le={username:g.a.decode(ie).username});var je=new h.a({link:oe.concat(re),cache:new p.a});b.a.render(Object(P.jsx)(v.a,{client:je,children:Object(P.jsxs)(D.Provider,{value:le||null,children:[" ",Object(P.jsxs)(N.a,{children:[ie?Object(P.jsx)(ae,{}):Object(P.jsx)(T,{})," "]})]})}),document.getElementById("root"))}},[[331,1,2]]]);
//# sourceMappingURL=main.d5b6d973.chunk.js.map