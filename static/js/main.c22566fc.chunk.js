(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{37:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(29),i=n.n(c),r=n(8),o=n(2),l=(n(37),n(1));var j=function(){return Object(l.jsx)("span",{className:"about__container",children:"About this page: I built it because I love movies."})},u=n(17),m=n.n(u),d=n(30),b=n(11),p=n(12),v=n(14),h=n(13),O=n(31),x=n.n(O);var g=function(e){var t=e.id,n=e.year,a=e.title,s=e.summary,c=e.poster,i=e.genres;return Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)(r.b,{to:{pathname:"movie/".concat(t),state:{year:n,title:a,summary:s,poster:c,genres:i}},children:Object(l.jsx)("img",{src:c,alt:a,title:a})}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:a}),Object(l.jsx)("h5",{className:"movie__year",children:n}),Object(l.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(l.jsx)("li",{className:"genre__genre",children:e},t)}))})]}),Object(l.jsx)("p",{className:"movie__summary",children:s.length>180?s.slice(0,180)+"...":s})]})},y=(n(63),function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var n,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading"})}):Object(l.jsx)("div",{className:"movies",children:n.map((function(e){return Object(l.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component)),_=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/"),console.log(t.state)}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component);var f=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(r.b,{to:"/",children:"Home"}),Object(l.jsx)(r.b,{to:"/about",children:"About"})]})};var N=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(f,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(l.jsx)(o.a,{path:"/about",component:j}),Object(l.jsx)(o.a,{path:"/movie/:id",component:_})]})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.c22566fc.chunk.js.map