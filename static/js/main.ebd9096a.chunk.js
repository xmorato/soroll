(this["webpackJsonpdashboard-mui"]=this["webpackJsonpdashboard-mui"]||[]).push([[0],{227:function(e,t,n){e.exports={Icona:"Mapa_Icona__2wpkZ"}},245:function(e,t,n){e.exports=n(267)},250:function(e,t,n){},267:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(20),o=n.n(l),i=(n(250),n(105)),c=n(95),s=n(69),u=n(34),d=n(35),m=n.n(d),p=n(236),f=n(80),E=n(283),g=n(284),b=n(225),_=n.n(b),h=n(224),x=n.n(h),C=n(81);function v(){var e=Object(f.a)(["\n  width: 90vw;\n  margin: 2px 0 0;\n  padding: 0;\n  position: absolute;\n  list-style: none;\n  background-color: #fff;\n  overflow: auto;\n  max-height: 250px;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  z-index: 1;\n\n  & li {\n    padding: 5px 12px;\n    display: flex;\n\n    & span {\n      flex-grow: 1;\n    }\n\n    & svg {\n      color: transparent;\n    }\n  }\n\n  & li[aria-selected='true'] {\n    background-color: #fafafa;\n    font-weight: 600;\n\n    & svg {\n      color: #1890ff;\n    }\n  }\n\n  & li[data-focus='true'] {\n    background-color: #e6f7ff;\n    cursor: pointer;\n\n    & svg {\n      color: #000;\n    }\n  }\n"]);return v=function(){return e},e}function w(){var e=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  height: 24px;\n  margin: 2px;\n  line-height: 22px;\n  background-color: #fafafa;\n  border: 1px solid #e8e8e8;\n  border-radius: 2px;\n  box-sizing: content-box;\n  padding: 0 4px 0 10px;\n  outline: 0;\n  overflow: hidden;\n\n  &:focus {\n    border-color: #40a9ff;\n    background-color: #e6f7ff;\n  }\n\n  & span {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  & svg {\n    font-size: 12px;\n    cursor: pointer;\n    padding: 4px;\n  }\n"]);return w=function(){return e},e}function y(){var e=Object(f.a)(["\n  width: 90vw;\n  border: 1px solid #d9d9d9;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 1px;\n  display: flex;\n  flex-wrap: wrap;\n\n  &:hover {\n    border-color: #40a9ff;\n  }\n\n  &.focused {\n    border-color: #40a9ff;\n    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n  }\n\n  & input {\n    font-size: 14px;\n    height: 30px;\n    box-sizing: border-box;\n    padding: 4px 6px;\n    width: 0;\n    min-width: 30px;\n    flex-grow: 1;\n    border: 0;\n    margin: 0;\n    outline: 0;\n  }\n"]);return y=function(){return e},e}function O(){var e=Object(f.a)(["\n  padding: 0 0 4px;\n  line-height: 1.5;\n  display: block;\n"]);return O=function(){return e},e}var j=Object(C.a)("label")(O()),S=Object(C.a)("div")(y()),k=Object(C.a)((function(e){var t=e.label,n=e.onDelete,a=Object(p.a)(e,["label","onDelete"]);return r.a.createElement("div",a,r.a.createElement("span",null,t),r.a.createElement(x.a,{onClick:n}))}))(w()),D=Object(C.a)("ul")(v());function I(e){var t=e.setSelected,n=Object(E.a)({id:"customized-hook-demo",defaultValue:[],multiple:!0,options:e.incidences,getOptionSelected:function(e,t){return e.title===t.title},getOptionLabel:function(e){return e.title}}),l=n.getRootProps,o=n.getInputLabelProps,i=n.getInputProps,c=n.getTagProps,s=n.getListboxProps,u=n.getOptionProps,d=n.groupedOptions,m=n.value,p=n.focused,f=n.setAnchorEl;return Object(a.useEffect)((function(){t(m)}),[m,t]),r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement("div",l(),r.a.createElement(j,o(),e.label),r.a.createElement(S,{ref:f,className:p?"focused":""},m.map((function(e,t){return r.a.createElement(k,Object.assign({label:e.title},c({index:t})))})),r.a.createElement("input",i()))),d.length>0?r.a.createElement(D,s(),d.map((function(e,t){return r.a.createElement("li",u({option:e,index:t}),r.a.createElement("span",null,e.title),r.a.createElement(_.a,{fontSize:"small"}))}))):null))}var F=n(107),N=(n(255),n(285)),z=n(227),L=n.n(z),R=n(228),A=n.n(R),P=function(e){var t=Object(a.useState)({width:"100vh",height:"60vh",position:"",longitude:1.975731,latitude:41.266965,zoom:15}),n=Object(u.a)(t,2),l=n[0],o=n[1],i=Object(a.useState)(null),c=Object(u.a)(i,2),s=c[0],d=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.c,Object.assign({},l,{mapboxApiAccessToken:"pk.eyJ1IjoieGF2aW90cCIsImEiOiJja2F5Mnlnd3EwYzF1MzR1bG56czNnNnY4In0.LzCEft2g_0N9kuHVBgi8cA",mapStyle:"mapbox://styles/mapbox/dark-v10",onViewportChange:function(e){o(e)}}),e.dades.map((function(e,t){return r.a.createElement(F.a,{key:t,latitude:e.coord.lat,longitude:e.coord.lon},r.a.createElement(N.a,{onClick:function(t){t.preventDefault(),d(e)}},r.a.createElement(A.a,{className:L.a.Icona,fontSize:"large"})))})),s?r.a.createElement(F.b,{latitude:s.coord.lat,longitude:s.coord.lon,closeButton:!0,onClose:function(){d(null)}},r.a.createElement("div",null,r.a.createElement("h2",null,s.tipus," - ",s.data.toDateString("es-ES")," "),r.a.createElement("h3",null,s.carrer),r.a.createElement("div",null,s.comentari),r.a.createElement("p",null,s.coord.lat," - ",s.coord.lon))):null))},M=function(e,t){var n=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(null),o=Object(u.a)(l,2),i=o[0],c=o[1],s=Object(a.useState)(!1),d=Object(u.a)(s,2),m=d[0],p=d[1];return Object(a.useEffect)((function(){p(!0),fetch("https://spreadsheets.google.com/feeds/list/".concat("1J397_lR00rFSGxef9nFUMVwTXFPIf0FDes9xb7_-K7M","/od6/public/basic?alt=json")).then((function(e){return e.json()})).then((function(e){r(function(e){return e.map((function(e){return e.content.$t}))}(e.feed.entry)),p(!1)})).catch((function(e){c(e),p(!1)}))}),[]),{dadesFromGoogle:n,error:i,loading:m}}(),r=n.dadesFromGoogle,l=n.error,o=n.loading,c=function(e,t,n){var a=e.map((function(e){return e.split(",")})).map((function(e){var t=e[2].split(":"),n=e[3].split(":"),a=e[5].split(":"),r=e[6].split(":"),l=e[8].split(":"),o=e[0].split(":");return o=new Date(o[1].trimLeft()),Object(s.a)(Object(s.a)({},{coord:{lat:0,lon:0}}),{},{coord:{lat:parseFloat(t[1]),lon:parseFloat(n[1])},tipus:r[1].trimLeft(),carrer:a[1],data:o,comentari:l[1]})}));return{tipusIncidencies:function(e){if(e){var t=[];return e.forEach((function(e){t.push(e.tipus)})),Object(i.a)(new Set(t)).map((function(e){return{title:e}})).sort()}return[]}(a),incidencies:a}}(r);return{tipusIncidencies:c.tipusIncidencies,incidencies:c.incidencies,error:l,loading:o}},B=n(134),H=n(286),V=n(83),T=n.n(V),q=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:T.a.Error__Container},r.a.createElement("div",{className:T.a.Error__Header},"Oooops! sembla que hi ha hagut algun problema"),r.a.createElement("div",{className:T.a.Error__Recomendation},r.a.createElement("ul",null,r.a.createElement("li",null,"Verifica que tinguis conexi\xf3 a internet"),r.a.createElement("li",null,"Pot ser que el full de c\xe0lcul estigui sent editat/inconsistent aquest moment"),r.a.createElement("li",null,"Si pasada una estonael problema persisteix avisa als adminsitradors"))),r.a.createElement("div",{className:T.a.Error__ErrorMessage},"Error obtingut: ",e.err.message)))},G=n(287),J=n(229),K=function(e){return r.a.createElement(J.a,Object.assign({speed:2,width:400,height:460,viewBox:"0 0 400 460",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},e),r.a.createElement("rect",{x:"14",y:"-11",rx:"2",ry:"2",width:"134",height:"24"}),r.a.createElement("rect",{x:"62",y:"52",rx:"2",ry:"2",width:"255",height:"18"}),r.a.createElement("rect",{x:"0",y:"83",rx:"2",ry:"2",width:"400",height:"361"}),r.a.createElement("rect",{x:"13",y:"18",rx:"2",ry:"2",width:"335",height:"24"}))};K.metadata={name:"xmorato",github:"xmorato",description:"Sorolls"};var Q=K,W=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{display:"flex",style:{width:"-webkit-fill-available",justifyContent:"center"}},r.a.createElement(H.a,{color:"textPrimary"}," Ruidos en Castelldefels Playa ")),r.a.createElement(B.a,{display:"flex",style:{width:"-webkit-fill-available",justifyContent:"center"}},r.a.createElement(G.a,null)),r.a.createElement(B.a,{display:"flex",style:{width:"-webkit-fill-available",justifyContent:"center"}},r.a.createElement(H.a,{color:"textPrimary"},"  ",e.text," ")),r.a.createElement(B.a,{display:"flex",style:{width:"-webkit-fill-available",justifyContent:"center"}},r.a.createElement(Q,null)))},Y=n(230),U=n.n(Y),X=n(288),Z=n(289),$=n(231),ee=n.n($),te=(n(258),function(e){var t=e.incidencies,n=function(e,t){return"https://www.google.es/maps?q=".concat(e,",").concat(t)};return r.a.createElement(r.a.Fragment,null,t.sort((function(e,t){return t.data.getTime()-e.data.getTime()})).map((function(e,t){return r.a.createElement("div",{className:m.a.Card,key:t},r.a.createElement(X.a,null,r.a.createElement(Z.a,null,r.a.createElement("div",{className:m.a.Card__Header},r.a.createElement(H.a,{variant:"h6"},e.data.toLocaleDateString()),r.a.createElement(H.a,{variant:"h6",color:"primary"},e.tipus)),r.a.createElement(H.a,null,"Carrer: ",e.carrer),r.a.createElement(H.a,null,"Comentari:",e.comentari),r.a.createElement("div",{className:m.a.Card__CompassContainer,onClick:function(){return t=e.coord.lat,a=e.coord.lon,void window.open(n(t,a));var t,a}},r.a.createElement("div",{className:m.a.Card__Compass},r.a.createElement(ee.a,{fontSize:"small"}),r.a.createElement(H.a,{color:"primary",fontSize:"small"},"Lat: ",e.coord.lat," - ","Lon: ",e.coord.lon)),r.a.createElement("div",{className:m.a.Card__QRCode})))))})))}),ne=n(234),ae=n.n(ne),re=n(235),le=n.n(re),oe=function(e){var t=e.dateRange;return 0!==Object.entries(t).length&&r.a.createElement("div",{className:m.a.ShowDateRangeFilter},r.a.createElement(H.a,null," Filtre actiu: "," "," "),r.a.createElement(H.a,{color:"error"}," ",t.startDate.toLocaleDateString()),r.a.createElement(H.a,null," "," - "," "),r.a.createElement(H.a,{color:"error"}," ",t.endDate.toLocaleDateString()))},ie=n(292),ce=n(232),se=function(e){var t=r.a.useState(!0),n=Object(u.a)(t,2),a=n[0],l=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.DateRangePicker,{open:!0,toggle:function(){l(!a)},closeOnClickOutside:!1,onChange:function(t){!function(t){e.onChangeDate(t)}(t)}}))},ue=function(e){var t=e.showCalendar,n=e.handleClose,a=e.onChangeDateOnCalendar;return t?r.a.createElement(ie.a,{open:t,onClose:n,elevation:20,anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"}},r.a.createElement(H.a,{align:"center"}," ","Selecciona dues dates o un rang a la columna de la dreta - ESC per sortir"),r.a.createElement(se,{onChangeDate:a})):null};var de=function(){for(var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)({}),d=Object(u.a)(o,2),p=d[0],f=d[1],E=M(n,p),g=E.tipusIncidencies,b=E.incidencies,_=E.error,h=E.loading,x=Object(a.useState)(!1),C=Object(u.a)(x,2),v=C[0],w=C[1],y=function(e){w((function(e){return!e}))},O=function(e,t,n){return t.filter((function(t){return e&&0===Object.entries(e).length?n.some((function(e){return e.title===t.tipus})):n.some((function(n){return n.title===t.tipus&&t.data>=e.startDate&&t.data<=e.endDate}))}))}(p,b,n),j=b.reduce((function(e,t){return Object(s.a)(Object(s.a)({},e),{},Object(c.a)({},t.tipus,(e[t.tipus]||0)+1))}),{}),S=Object.keys(j),k=[],D=0;D<S.length;D++)k=[].concat(Object(i.a)(k),[[S[D],j[S[D]]]]);return r.a.createElement(r.a.Fragment,null,!_&&!h&&r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:m.a.SearchBarContainer},r.a.createElement(I,{selected:n,setSelected:l,label:"Selecciona el(s) tipus de incid\xe8ncies",incidences:g})),r.a.createElement(B.a,{id:"buttons",display:"flex",style:{width:"-webkit-fill-available",justifyContent:"center",marginTop:"10px"}},r.a.createElement(N.a,{color:"primary",onClick:y},r.a.createElement(ae.a,null)," Filtrar per Dates"),0!==Object.entries(p).length&&r.a.createElement(N.a,{color:"secondary",onClick:function(){f({})}}," ",r.a.createElement(le.a,null)," Esborrar filtre")),r.a.createElement(B.a,{display:"flex",style:{width:"-webkit-fill-available",justifyContent:"center"}},r.a.createElement(H.a,{color:"textPrimary",variant:"h6",gutterBottom:!0}," ","Incid\xe8ncies:"," ",r.a.createElement(U.a,{start:0,end:O.length,duration:1.25}))),r.a.createElement(oe,{dateRange:p}),r.a.createElement("div",{className:m.a.MapContainer},r.a.createElement(P,{dades:O})),r.a.createElement(ue,{handleClose:function(){y()},onChangeDateOnCalendar:function(e){f((function(t){return e})),w(!1)},showCalendar:v}),0!==O.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:m.a.IncidencesList__title},r.a.createElement(H.a,{style:{fontSize:"1.2rem"}}," ","Incid\xe8ncies de m\xe9s a menys recents")),r.a.createElement("div",{className:m.a.IncidencesList},r.a.createElement(te,{incidencies:O}))):null),!!_&&r.a.createElement(q,{err:_}),!!h&&r.a.createElement(W,{text:"Carregant dades"}),r.a.createElement(B.a,{display:"flex",style:{width:"-webkit-fill-available",justifyContent:"center"}},r.a.createElement(H.a,{style:{fontSize:"0.8rem"}}," ","REC-PL: Ruidos en Castelldefels Playa, fem un millor barri"," ")))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root"))},35:function(e,t,n){e.exports={cardsContainer:"App_cardsContainer__2PKmS",Card:"App_Card__1lafX",SearchBarContainer:"App_SearchBarContainer__2uhy_",MapContainer:"App_MapContainer__1sfMH",ShowDateRangeFilter:"App_ShowDateRangeFilter__1Yau-",IncidencesList:"App_IncidencesList__bi5Ng",IncidencesList__title:"App_IncidencesList__title__3k00w",Card__Header:"App_Card__Header__2NKMD",Card__CompassContainer:"App_Card__CompassContainer__2aWCu",Card__Compass:"App_Card__Compass__37264",Card__QRCode:"App_Card__QRCode__1izA2"}},83:function(e,t,n){e.exports={Error__Container:"Error_Error__Container__2kg8_",Error__Header:"Error_Error__Header__2I6hc",Error__ErrorMessage:"Error_Error__ErrorMessage__3V9WD",Error__Recomentadion:"Error_Error__Recomentadion__1iyVU"}}},[[245,1,2]]]);
//# sourceMappingURL=main.ebd9096a.chunk.js.map