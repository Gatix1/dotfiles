"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9209],{6382:(e,t,s)=>{s.d(t,{A:()=>f});var a=s(30758),r=s(69725),i=s(12783),n=s(88497),o=s(59996),c=s(32912),l=s(56975);const d="wedRUk4eiBo9n9vqXLhU",m="hMbtEskyvMbDiwq1EScA",u="HYVIJaYYiCTgSCHie70L",h="SPbe_Q1wtiZQCmo0QKUy",x="TRp4tgG7_cymGIXDevIP",g="tC1Y_nwyyly7cpIGqF5K",v="l93AfoV_qHnMQSQBB5GK",j="DgDBmSR2sbwji2UfqxIf",p="EkGb0ZzhswreSvpZoioY";var y=s(86070);const f=(0,a.memo)((e=>{const{uri:t,title:s,imageUrl:a,date:f,subTitle:N,firstParty:S,onClick:_}=e,b=f?(0,c.l4)(f):void 0;return(0,y.jsx)(o.N,{to:t,className:d,"data-testid":"concert-card",onClick:_,children:(0,y.jsxs)("div",{className:m,children:[(0,y.jsx)(l.b,{children:(0,y.jsx)("div",{role:"img",className:p,style:{backgroundImage:`url(${a})`},children:!a&&(0,y.jsx)(r.r,{role:"img",size:"xxlarge",semanticColor:"textSubdued"})})}),b&&(0,y.jsxs)("time",{className:u,dateTime:f,children:[(0,y.jsx)(i.E,{as:"div",variant:"bodySmall",children:(0,c.tj)(b)}),(0,y.jsx)(i.E,{as:"div",variant:"bodyMediumBold",children:(0,c.Py)(b)})]}),(0,y.jsxs)("div",{className:h,dir:"auto",children:[(0,y.jsx)(i.E,{as:"h2",variant:"bodyMedium",className:x,children:s}),(0,y.jsxs)("div",{className:g,children:[S&&(0,y.jsx)("span",{className:j,children:(0,y.jsx)(n.D,{size:"small"})}),(0,y.jsx)(i.E,{as:"span",className:v,variant:"bodySmall","data-testid":"location-name",semanticColor:"textSubdued",children:N})]})]})]})})}))},80377:(e,t,s)=>{s.d(t,{bU:()=>n,he:()=>i,nm:()=>r});var a=s(42534);const r=(e,t)=>{if(!e)return"/concerts";const s=t?.normalize().replaceAll(/\W+/g,"-");return s?`/concerts/location/${e}-${s}`:`/concerts/location/${e}`};const i=e=>e.ticketers.some((e=>"spotify"===e.partnerDisplayName.toLowerCase())),n=e=>(0,a.x)(e,{representation:"date"})},53287:(e,t,s)=>{s.d(t,{o:()=>o});var a=s(25639),r=s(40312),i=s(32045);const n=e=>{const[t,{username:s,concertUri:a}]=e.queryKey;return(async(e,t)=>{const s=await(0,i.aw)(r.n.getInstance(),e,t);return s.body?.found[0]})(s,a)},o=e=>{const t=["concertInCollection",e];return(0,a.I)({queryKey:t,queryFn:n,retry:!1,enabled:!!e.username})}},81788:(e,t,s)=>{s.r(t),s.d(t,{default:()=>It});var a=s(9183),r=s(12783),i=s(37677),n=s(61544),o=s(11808),c=s(38308),l=s(31685),d=s(53576),m=s(82442),u=s(74793),h=s(59116),x=s(21752),g=s(55194),v=s(83028),j=s(30758),p=s(33973),y=s(19643),f=s(68179),N=s(2408),S=s(59996),_=s(80377),b=s(7722),k=s(79303);const I="m8qhw073nx4vyHqaKQNk",C="ynP6muypg8KBMGNcHY5O",R="oDWtgFmvo78XypRSXSZE",w="XWKf1nJGSBaIxrSQhIft",E="nodWKfeO11pb9KDWwHMz",D="oFT4l9ImW_EmgL7n4Gpw";var M=s(86070);const T=(0,j.memo)((e=>{const{location:t,showTime:s,ageRestriction:a,htmlDescription:i,doorsOpenTime:n,spec:c}=e,l=(0,k.s)(),d=t.metroAreaLocation?(0,_.nm)(t.metroAreaLocation?.geonameId,t.metroAreaLocation?.fullName):null;return(0,M.jsxs)("div",{className:I,children:[i?.trim()&&(0,M.jsxs)("div",{className:C,children:[(0,M.jsx)(r.E,{as:"h3",variant:"titleSmall",className:R,children:o.Ru.get("artist.about")}),(0,M.jsx)(N.q,{html:i,onTimeStampClick:()=>{}})]}),(0,M.jsxs)("div",{className:C,children:[(0,M.jsx)(r.E,{as:"h3",variant:"titleSmall",className:R,children:o.Ru.get("tracklist.header.venue")}),(0,M.jsxs)("div",{className:D,children:[(0,M.jsx)(p.t,{className:w}),(0,M.jsxs)("div",{children:[(0,M.jsx)(r.E,{as:"h4",variant:"bodyMediumBold",className:E,children:t.name}),(0,M.jsx)(r.E,{as:"p",variant:"bodyMedium",children:(0,b.im)({...t,name:""})})]})]}),(0,M.jsxs)("div",{className:D,children:[(0,M.jsx)(y.p,{className:w}),(0,M.jsxs)("div",{children:[(0,M.jsxs)(r.E,{as:"h4",variant:"bodyMediumBold",className:E,children:[n&&o.Ru.get("concert.door_time",o.Ru.formatDate(n,{timeStyle:"short"})),n&&" • ",o.Ru.get("concert.show_time",o.Ru.formatDate(s,{timeStyle:"short"}))]}),a?.trim()&&(0,M.jsx)(r.E,{as:"p",variant:"bodyMedium",children:a})]})]}),d&&(0,M.jsxs)("div",{className:D,children:[(0,M.jsx)(f.T,{className:w}),(0,M.jsx)(S.N,{to:d,onClick:()=>(e=>{const t=c.concertLocationLinkFactory().hitUiNavigate({destination:e});l.logInteraction(t)})(d),children:(0,M.jsx)(r.E,{variant:"bodyMedium",semanticColor:"textSubdued",children:o.Ru.get("concert.see_more_events_in_location",t.metroAreaLocation?.fullName)})})]})]})]})}));var U=s(70675),B=s(80784),P=s(39796),A=s(66416),K=s(65183),L=s(91039),q=s(96264),F=s(95302),Z=s(6576);const V=j.memo((function({uri:e}){const{spec:t}=(0,Z.o)(e);return(0,M.jsx)(F.pZ,{value:"concert",children:(0,M.jsxs)(A.W,{children:[(0,M.jsx)(q.h,{children:(0,M.jsx)(K.m,{spec:t,uri:e,displayText:o.Ru.get("context-menu.copy-concert-link")})}),(0,M.jsx)(L.q,{spec:t,uri:e})]})})}));var z=s(41978),Y=s(49217),W=s(5162),H=s(6288),O=s(53129),Q=s(53287),X=s(73015),$=s(7939),G=s(40312),J=s(32045),ee=s(48905);const te="JRuVlk6wpKk6ok7zuW6l",se="YpfopxY2udneDY34uzRN",ae="KI_0F1jtTR5tWgl7gZ1E",re="gKtc3TdowDTXBaVESi1D",ie="V8TIr8yJq4tYZfPEzm12",ne="rWFRSaU8daVvtbWEjvp7",oe="VvL91cIRcCi1hJh0K845",ce="LdW0YNvo_Y77hgqhL4zY",le="cTkykhjfHxkEGKbxSxXw",de="MaK8gvvxEqNafaMwXWWM",me="XgeTnLs82tTjczDR6oKn",ue="P3fE7wn6Tqnibn3gljKV",he="b3qjYcKXwrvfkQkOLMhZ",xe="A8LG_5Dvp7IiXDtdR571",ge="O0PSSw8ttrMn9lzq_L16",ve="D_ffrfn62aOgZKOFfZVr",je="OH4mOZCual2ejIodzIkL",pe="se_ixDV6hBf7lve861oU",ye="YDAJHPP5lDmg71SdvJZC",fe="lKQxSRsi8KcoYx5D7mjh",Ne="LUMel_X4gQK0J1i6X0sC",Se="eIA_y6wnyKS7F4BkMraV",_e="CKbduoHBINBakBcguVzi",be="oCmeNmHdfNzMD6n4mSqw",ke="l6M4kfGer7xxBaIPco5p",Ie="r5hQwOq0RGo1ptvIthJ0",Ce="HRKlEfCQE6VjdRRg0NRf",Re="GWAqJBkan0flx0gBI92h",we="YDoK0ksaHmDfScvMhW4l",Ee="ATEdvw7q5RVFqV_7k5xm",De="UHICx5Pfx66QaNrl4qIZ",Me="G3mQO0982j3xeMZSBLbU",Te=(0,j.memo)((e=>{const{concertUri:t,entitySpec:s}=e,a=(0,j.useMemo)((()=>s.interestedButtonFactory()),[s]),r=(0,ee.t)(a),i=(0,k.s)(),{enqueueSnackbar:c}=(0,X.d)(),l=(0,z.d4)($.F6),{data:d,isLoading:m}=(0,Q.o)({username:l,concertUri:t}),[u,h]=(0,j.useState)(),x=void 0===u?d:u,g=(0,n.o_)(t);return(0,M.jsx)(O.Zp,{label:o.Ru.get("concerts_interested_tooltip"),placement:"top-end",children:(0,M.jsx)(Y.n,{ref:r,size:"small",iconLeading:x?W.i:H.u,className:Ne,"aria-checked":x,disabled:m,onClick:()=>{if(!m)if(x){const e=a.hitRemoveInterest();e&&i.logInteraction(e),h(!1),c(o.Ru.get("concerts_removed-from-your-saved-events")),(0,J.Jr)(G.n.getInstance(),g.id)}else{const e=a.hitAddInterest();e&&i.logInteraction(e),h(!0),c(o.Ru.get("concerts_added-to-your-saved-events")),(0,J.m9)(G.n.getInstance(),g.id)}},children:o.Ru.get("concerts_interested")})})}));var Ue=s(43830),Be=s(32912),Pe=s(45346),Ae=s(24172),Ke=s(57276),Le=s(79787);const qe=(0,j.memo)((e=>{const{concertUri:t,offer:s,position:a,spec:i,onRemindMe:n}=e,c=s.soldOut||(0,Be.m7)(s.endDateIsoString),l="Spotify"===s.providerName,d=(0,Be.PR)(s.startDateIsoString),m=d&&s.urlType===Le.I2.TicketPage?void 0:s.url,u=(0,k.s)(),h=(0,Pe.W)(),x=(0,j.useMemo)((()=>i.ticketProviderCellFactory({identifier:s.providerName,position:a,uri:s.url})),[i,s.providerName,a,s.url]),g=(0,ee.t)(x),v=(0,j.useMemo)((()=>{if(c)return(0,M.jsx)(r.E,{as:"p",variant:"bodyMediumBold",semanticColor:"textSubdued",className:Ie,children:o.Ru.get("concerts.soldout")});if(d){const e=s.startDateIsoString&&new Date(s.startDateIsoString);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(r.E,{as:"p",variant:"bodyMediumBold",semanticColor:"textPositive",className:be,children:o.Ru.get("concerts.tickets_on_sale_soon")}),e&&(0,M.jsx)(r.E,{as:"p",variant:"bodyMediumBold",semanticColor:"textPositive",className:Re,children:o.Ru.get("concerts.ticket_date_time",(0,Be.Y)(e),(0,Be.WB)(e))})]})}if(s.urlType===Le.I2.EventPage)return null;const e={"on-sale":o.Ru.get("concerts.on_sale"),presale:o.Ru.get("concerts.presale")};return(0,M.jsxs)(M.Fragment,{children:[e[s.saleType]&&(0,M.jsx)(r.E,{as:"p",variant:"bodyMediumBold",semanticColor:"textPositive",className:be,children:e[s.saleType]}),l&&s.minPrice&&(0,M.jsx)(r.E,{as:"p",variant:"bodyMediumBold",semanticColor:"textPositive",className:_e,children:o.Ru.get("concerts.ticket_price",s.minPrice)})]})}),[c,d,s.urlType,s.saleType,s.minPrice,s.startDateIsoString,l]),p=(0,j.useMemo)((()=>c?null:(d&&(Ue.$,o.Ru.get("concerts.remind_me")),s.urlType===Le.I2.EventPage?(0,M.jsx)(Ue.$,{className:Se,iconTrailing:Ae.p,size:"small",children:o.Ru.get("concerts.event.view")}):(0,M.jsx)(Ue.$,{className:Se,iconTrailing:Ae.p,size:"small",children:l?o.Ru.get("concert_buy_tickets"):o.Ru.get("concert_find_tickets")}))),[c,d,s.urlType,l,n]);return(0,M.jsxs)("a",{href:m,className:me,target:"_blank",ref:g,onClick:()=>{const e=x.hitNavigateToExternalUri({destination:s.url});e&&u.logInteraction(e),h({targetUri:t,intent:"find-concert",type:"click"})},children:[(0,M.jsx)("div",{className:ue,children:(0,M.jsx)(Ke._,{loading:"eager",src:s.providerImageUrl,height:"100%",width:"100%",className:he,children:(0,M.jsx)(f.T,{className:xe,size:"medium"})})}),(0,M.jsxs)("div",{className:ge,children:[(0,M.jsxs)("div",{dir:"auto",className:ke,children:[v,(0,M.jsx)(r.E,{as:"p",semanticColor:"textSubdued",children:s.providerName})]}),p]})]})})),Fe=(0,j.memo)((e=>{const{concertUri:t,offers:s,entitySpec:a}=e,i=(0,j.useMemo)((()=>a.ticketProviderListFactory()),[a]),n=(0,ee.t)(i),c=!!s.find((e=>e.urlType===Le.I2.TicketPage));return(0,M.jsxs)(M.Fragment,{children:[c&&(0,M.jsx)(r.E,{as:"h3",variant:"titleSmall",children:o.Ru.get("concert.header.tickets_available_on")}),(0,M.jsx)("div",{ref:n,className:le,children:s.map(((e,s)=>(0,M.jsx)(qe,{concertUri:t,offer:e,position:s,onRemindMe:()=>{},spec:i},e.url)))}),(0,M.jsx)(r.E,{as:"p",variant:"marginal",semanticColor:"textSubdued",className:de,children:o.Ru.get("events_page.disclaimer")})]})}));var Ze=s(81987),Ve=s(19159);const ze=e=>{const{locationName:t,latitude:s,longitude:a,onClick:i}=e,n=new URL("https://maps.google.com/");return n.searchParams.set("q",t),s&&a&&n.searchParams.set("ll",`${s},${a}`),(0,M.jsx)("a",{href:n.href,target:"_blank",onClick:()=>i?.(n.href),children:(0,M.jsx)(r.E,{as:"h3",variant:"titleSmall",children:t})})},Ye=(0,j.memo)((e=>{if((0,Ze.NC)(Ve.DKh)&&((t=e.venue)&&Object.keys(t.data).includes("uri"))){const t=e.venue.data.uri;return(0,M.jsx)(S.N,{to:t,onClick:()=>e.onClick?.(t),children:(0,M.jsx)(r.E,{as:"h3",variant:"titleSmall",children:e.locationName})})}var t;return(0,M.jsx)(ze,{...e})}));var We=s(63198);const He=(0,j.memo)((e=>{const{concert:t,entitySpec:s}=e,a=(0,k.s)(),i=(0,We.V)(),n=(0,Be.l4)(t.startDateIsoString);if((0,Be.m7)(t.startDateIsoString))return(0,M.jsxs)("div",{className:ce,children:[(0,M.jsx)(r.E,{as:"h3",variant:"titleSmall",children:o.Ru.get("concert_event_ended")}),(0,M.jsx)(r.E,{variant:"bodyMedium",children:(0,M.jsx)(S.N,{to:"spotify:concerts",children:o.Ru.get("concert_past_message")})})]});return(0,M.jsxs)("div",{className:ce,children:[(0,M.jsx)(r.E,{as:"h3",variant:"titleSmall",className:Ce,children:(0,M.jsx)(Ye,{venue:t.venue,locationName:(0,b.im)(t.location),latitude:t.location.coordinates?.latitude,longitude:t.location.coordinates?.longitude})}),(0,M.jsx)(r.E,{as:"h3",variant:"bodySmall",className:ye,children:[(0,Be.Y)(n),(0,Be.WB)(n)].join(" • ")}),(0,M.jsxs)("div",{className:te,children:[!i&&(0,M.jsx)(Te,{concertUri:t.uri,entitySpec:s}),(0,M.jsx)(B.w,{uri:t.uri,sharingInfo:null,interactionData:{intent:"share",type:"click"},onClick:()=>{const e=s.shareEventButtonFactory({uri:t.uri}).hitShare({entityToBeShared:t.uri,shareId:t.uri});e&&a.logInteraction(e)},className:we,ariaLabel:o.Ru.get("concerts_share_with_friends")}),(0,M.jsx)(P.b,{menu:(0,M.jsx)(V,{uri:t.uri}),onShow:()=>{const e=s.contextMenuButtonFactory().hitUiReveal();e&&a.logInteraction(e)},children:(0,M.jsx)(U.e,{size:"large"})})]}),(0,M.jsx)(Fe,{concertUri:t.uri,offers:t.offers.items,entitySpec:s})]})}));var Oe=s(47493),Qe=s(33779),Xe=s(57734),$e=s(56975);const Ge="Dry_NQGsDIHDZtrVXCkm",Je="afT9IeZ3a3xSlKP0pSJH",et="cBs7zoipfqjsCHbDjY_p",tt="wDz6TsRKNxwV4mlO1EMX",st="tICcDjrC0CkSMO2fZZNy",at="uZhL8I5r7TVs9mrdSchW",rt="B7ChxzxV0z17kJj9aZSD",it=(0,j.memo)((e=>{const{imageUri:t,name:s,uri:a,headliner:i,onClick:n}=e,c=(0,M.jsxs)(S.N,{to:a,className:Je,onClick:n,children:[t?(0,M.jsx)($e.b,{children:(0,M.jsx)("div",{"data-testid":"image-container",className:rt,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(${t})`}})}):null,(0,M.jsxs)("div",{className:et,children:[i&&(0,M.jsx)("div",{className:st,children:(0,M.jsx)(r.E,{as:"h4",variant:"bodySmallBold",className:at,children:o.Ru.get("concert.label.headliner")})}),(0,M.jsx)(r.E,{as:"h2",variant:"titleMedium",className:tt,children:s})]})]});return(0,M.jsx)("div",{className:Ge,children:c})})),nt=it;var ot=s(31322);const ct=(e,t)=>new Date(e.date.isoString).getTime()-new Date(t.date.isoString).getTime(),lt=({artist:e,spec:t})=>{const s=(0,k.s)(),a=e.goods.events.concerts.items.filter((e=>e.nearUser)).sort(ct).shift(),r=a&&(e=>{const t=o.Ru.formatDate((0,Be.l4)(e?.date.isoString),{day:"numeric",month:"short"});return e.venue.location?.name?`${t}, ${e.venue.location.name}`:t})(a),i=e.goods.events.userLocation?.name,n=`${e.uri}:concerts`;return(0,M.jsxs)("div",{className:De,children:[a&&i&&(0,M.jsxs)("div",{className:Me,children:[(0,M.jsx)(ot.Z,{children:o.Ru.get("concerts.next_concert_near_location_colon",i)}),(0,M.jsx)(S.N,{to:a.uri,onClick:()=>(e=>{const a=t.nextConcertNearUserLinkFactory({uri:e}).hitUiNavigate({destination:e});s.logInteraction(a)})(a.uri),children:(0,M.jsx)(ot.Z,{semanticColor:"textSubdued",children:r})})]}),(0,M.jsxs)("div",{className:Me,children:[(0,M.jsx)(ot.Z,{children:o.Ru.get("concerts.on_tour_colon")}),(0,M.jsx)(S.N,{to:n,onClick:()=>{const e=t.artistEventsLinkFactory({uri:n}).hitUiNavigate({destination:n});s.logInteraction(e)},children:(0,M.jsx)(ot.Z,{semanticColor:"textSubdued",children:o.Ru.get("concerts.view_all_upcoming_concerts_count",e.goods.events.concerts.totalCount)})})]})]})},dt=(0,j.memo)((e=>{const{artist:t,position:s,lineupSpec:a}=e,r=(0,j.useMemo)((()=>a.artistRowFactory({position:s,uri:t.uri})),[a,s,t.uri]),i=(0,k.s)(),n=t.relatedContent.featuringV2.items.flatMap((e=>{const{data:t}=e;return"Playlist"===t.__typename&&"artistsets"===t.format?[t]:[]})),c=t.discography.popularReleasesAlbums.items,l=t.visuals.avatarImage?.sources?.[0],d=(0,M.jsx)(nt,{uri:t.uri,name:t.profile.name,imageUri:l?.url,headliner:0===s,onClick:()=>{const e=r?.artistCardFactory().hitUiNavigate({destination:t.uri});e&&i.logInteraction(e)}},t.uri),m=n.map(((e,t)=>{const s="User"===e.ownerV2.data.__typename&&e.ownerV2.data.name||e.name;return(0,M.jsx)(Qe.B,{index:t,uri:e.uri,name:e.name,images:e.images.items[0]?.sources,description:e.description||"",authorName:s},e.uri)})),u=c.map(((e,t)=>{const s=e.artists.items.map((e=>({uri:e.uri,name:e.profile.name})));return(0,M.jsx)(Oe.a,{uri:e.uri,index:t,artists:s,images:e.coverArt?.sources||[],name:e.name,sharingInfo:e.sharingInfo},e.uri)}));return(0,M.jsxs)(F.pZ,{value:"headered-grid",index:s,children:[(0,M.jsx)(Xe.$,{title:0===s?o.Ru.get("concert.lineup"):"",total:2+m.length+u.length,seeAllUri:t.uri,seeAllLabel:o.Ru.get("view.see-all"),onClickShelfSeeAll:()=>{const e=r?.seeDiscographyLinkFactory().hitUiNavigate({destination:t.uri});e&&i.logInteraction(e)},showSeeAll:!0,alwaysShowSeeAll:!0,children:[d,null,...m,...u],className:Ee}),(0,M.jsx)(lt,{artist:t,spec:r})]},t.uri)})),mt=(0,j.memo)((e=>{const{artists:t,entitySpec:s}=e,a=(0,j.useMemo)((()=>s.lineupArtistsFactory()),[s]),r=(0,ee.t)(a);return(0,M.jsx)("div",{ref:r,className:ve,children:t.flatMap(((e,t)=>{if("Artist"!==e.data.__typename)return[];const s=e.data;return[(0,M.jsx)(dt,{artist:s,position:t,lineupSpec:a},s.uri)]}))})}));var ut=s(6382);const ht="r4YSqQ00n2_0i2tWtlPj",xt="yEpakiIFqVrPYCcY_UcX",gt="TIxb8ebn0Jes35eTIcCQ",vt=(0,j.memo)((e=>(0,M.jsxs)(S.N,{to:"spotify:concerts",className:ht,onClick:e.onClick,children:[(0,M.jsx)($e.b,{children:(0,M.jsx)("div",{className:gt,style:{backgroundImage:"linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(https://concerts.spotifycdn.com/ConcertHubCard.png)"}})}),(0,M.jsx)("div",{className:xt,children:(0,M.jsx)(r.E,{as:"h2",variant:"titleSmall",children:o.Ru.get("concerts_browse_more")})})]}))),jt=(0,j.memo)((e=>{const{concert:t,position:s,recommendedSpec:a}=e,r=(0,k.s)(),i=t.artists.items.flatMap((e=>"Artist"===e.data.__typename?[e.data]:[])),n=i.map((e=>e.profile.name)),o=(0,b.tI)(t.title,t.festival,n)?t.title:(0,b.Ac)(n),c=i[0]?.visuals.avatarImage?.sources[0];return(0,M.jsx)(ut.A,{uri:t.uri,title:o,date:t.startDateIsoString,subTitle:(0,b.im)(t.location),imageUrl:c?.url,firstParty:t.firstParty,onClick:()=>{const e=a?.concertCardFactory({position:s,uri:t.uri}).hitUiNavigate({destination:t.uri});e&&r.logInteraction(e)}})})),pt=(0,j.memo)((e=>{const{relatedConcerts:t,entitySpec:s}=e,a=(0,j.useMemo)((()=>s.recommendedConcertsFactory()),[s]),r=(0,k.s)(),i=(0,ee.t)(a),n=t.items.flatMap((e=>"ConcertV2"===e.data.__typename?[e.data]:[]));if(0===n.length)return null;return(0,M.jsx)("div",{ref:i,className:pe,"data-testid":"concert-recommendations",children:(0,M.jsx)(F.pZ,{value:"headered-grid",children:(0,M.jsxs)(Xe.$,{title:o.Ru.get("concert.similar_events"),total:t.totalCount,className:fe,showSeeAll:!0,alwaysShowSeeAll:!0,seeAllUri:"spotify:concerts",seeAllLabel:o.Ru.get("view.see-all"),withEncoreCards:!1,children:[(0,M.jsx)(vt,{onClick:()=>{const e=a?.browseCardFactory().hitUiNavigate({destination:"spotify:concerts"});e&&r.logInteraction(e)}},"browse"),n.map(((e,t)=>(0,M.jsx)(jt,{position:t,concert:e,recommendedSpec:a},e.uri)))]})})})}));var yt=s(15742),ft=s(8385);const Nt=new yt.l("concert","query","dce8702b279096ce9218ea6ea9351535728a53807c2e8e5b48527e216a664227",null);var St=s(12669),_t=s(16297),bt=s(72091);const kt=e=>{const{concert:t}=e,{spec:s}=(0,bt.r)(i.b,{data:{identifier:(0,n.o_)(t.uri)?.id,uri:t.uri}}),a=t.artists.items.flatMap((e=>"Artist"===e.data.__typename?[e.data]:[])),o=a[0].visuals.headerImage;(0,St.z)(o?.extractedColors?.colorDark.hex);const v=a.map((e=>e.profile.name)),j=(0,b.tI)(t.title,t.festival,v)?t.title:(0,b.re)(v),p=(0,Be.l4)(t.startDateIsoString);return(0,M.jsxs)("section",{className:ie,children:[(0,M.jsx)(l.Q,{children:(0,_t.K9)(t.title,t.location.city,t.location.name)}),(0,M.jsxs)(m.z,{backgroundImages:o?.sources,children:[(0,M.jsxs)(u.Y,{children:[(0,M.jsx)(d.Z,{children:(0,M.jsx)("div",{className:se,children:(0,M.jsx)(r.E,{as:"h3",variant:"titleSmall",className:ae,children:(0,Be.Fn)(p)})})}),(0,M.jsx)(g.mm,{className:ne,children:j})]}),(0,M.jsx)(h.h,{children:(0,M.jsx)("div",{className:je,children:(0,M.jsx)(x.X,{text:j})})})]}),(0,M.jsxs)("div",{className:re,children:[(0,M.jsx)(c.K,{backgroundColor:o?.extractedColors?.colorDark.hex}),(0,M.jsxs)("div",{className:oe,children:[(0,M.jsx)(He,{concert:t,entitySpec:s}),(0,M.jsx)(mt,{artists:t.artists.items,entitySpec:s}),(0,M.jsx)(T,{location:t.location,showTime:p,htmlDescription:t.htmlDescription,ageRestriction:t.ageRestriction,doorsOpenTime:t.doorsOpenTimeIsoString?(0,Be.l4)(t.doorsOpenTimeIsoString):null,spec:s}),(0,M.jsx)(pt,{relatedConcerts:t.relatedConcerts,entitySpec:s})]})]})]})},It=()=>{const{concertId:e}=(0,a.g)(),t=`spotify:concert:${e}`,{loading:s,error:r,data:i}=(n={uri:t},(0,ft.I)(Nt,n,c));var n,c;return s?(0,M.jsx)(v.A,{hasError:!1,errorMessage:""}):r||"ConcertV2"!==i?.concert.__typename?(0,M.jsx)(v.A,{hasError:!0,errorMessage:o.Ru.get("concert.error.concert_not_found_title")}):(0,M.jsx)(kt,{concert:i.concert})}}}]);
//# sourceMappingURL=xpui-routes-concert.js.map