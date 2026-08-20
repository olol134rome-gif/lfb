const defaultData={
title:"UKRNSTS I LFB",
hero:"Professional London Fire Brigade-inspired roleplay for Emergency Response: Liberty County.",
incidents:[
["Industrial estate fire — Barking","Fire at commercial property","125 firefighters-style community response • 12 Aug 2026"],
["Grass fire — Greenford","Outdoor fire","Perivale Park roleplay response • 12 Aug 2026"],
["Grass fire — Mitcham","Outdoor fire","Beddington Lane roleplay response • 10 Aug 2026"]
],
history:[
["12 Aug 2026","Major training exercise","A full-station training session covering attendance, command structure and communications."],
["06 Aug 2026","Community launch","UKRNSTS I LFB launched its new recruitment and incident-record system."],
["01 Aug 2026","First ER:LC session","Members completed the first organised London Fire Brigade roleplay session."]
],
apps:[
["Station Firefighter (SFF)","Open"],
["Firefighter","Closed"],
["Leading Firefighter","Closed"],
["Sub Officer","Closed"],
["Station Officer","Closed"],
["Station Commander","Closed"],
["Group Commander","Closed"],
["Assistant Commissioner","Closed"],
["Deputy Commissioner","Closed"],
["Commissioner","Closed"]
],
ranks:["Station Firefighter (SFF)","Firefighter","Leading Firefighter","Sub Officer","Station Officer","Station Commander","Group Commander","Assistant Commissioner","Deputy Commissioner","Commissioner"]
};
let data=JSON.parse(localStorage.getItem("ukrnstsData")||"null")||structuredClone(defaultData);
let user=JSON.parse(localStorage.getItem("demoRobloxUser")||"null");

function render(){
document.title=data.title+" — London Fire Service";
document.querySelector(".brand b").textContent=data.title;
document.querySelector(".hero-copy>p:not(.eyebrow)").textContent=data.hero;
document.querySelector("#incidentGrid").innerHTML=data.incidents.map(x=>`<article class="card"><span class="tag">${x[1]}</span><h3>${x[0]}</h3><p>${x[2]}</p></article>`).join("");
document.querySelector("#historyGrid").innerHTML=data.history.map(x=>`<article class="event"><time>${x[0]}</time><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("");
document.querySelector("#applicationGrid").innerHTML=data.apps.map((x,i)=>{let open=x[1]==="Open";return `<article class="app ${open?"":"closed"}"><span class="status ${open?"open":"closed-text"}">${x[1]}</span><h3>${x[0]}</h3><p>${open?"Applications are currently being accepted.":"Applications are currently closed."}</p>${open?`<button class="btn red" onclick="openApplication(${i})">Apply now</button>`:""}</article>`}).join("");
document.querySelector("#rankGrid").innerHTML=data.ranks.map((x,i)=>`<div class="rank"><b>${i+1}. ${x}</b><span>UKRNSTS I LFB operational rank</span></div>`).join("");
if(user){document.querySelector("#loginBtn").textContent=user.name;document.querySelector("#loginBtn").onclick=()=>alert("Signed in as "+user.name+" (demo profile).");}
}
function openModal(id){document.getElementById(id).classList.add("show")}function closeModal(id){document.getElementById(id).classList.remove("show")}
document.getElementById("loginBtn").onclick=()=>openModal("loginModal");
function demoLogin(){user={name:"ERLC_Player",id:"demo"};localStorage.setItem("demoRobloxUser",JSON.stringify(user));closeModal("loginModal");render()}
function openApplication(i){
if(!user){openModal("loginModal");return}
const name=data.apps[i][0];
document.getElementById("applicationForm").innerHTML=`<p class="eyebrow">UKRNSTS I LFB • APPLICATION</p><h2>${name}</h2><p>Complete every question carefully. This is a roleplay-community application, not an application to the real London Fire Brigade.</p>
<form onsubmit="submitApplication(event,'${name.replace(/'/g,"\\'")}')">
<label>Roblox username<input required value="${user.name}" readonly></label>
<label>Why do you want to join ${name}?<textarea required></textarea></label>
<label>What does good roleplay mean to you?<textarea required></textarea></label>
<label>Scenario 1 — You arrive first at a reported building fire. Other units are still en route. What would you do in the roleplay situation?<textarea required></textarea></label>
<label>Scenario 2 — A teammate ignores an instruction from the incident commander. How would you handle it professionally?<textarea required></textarea></label>
<label>Scenario 3 — You make a mistake during a training scenario. What would you do afterwards?<textarea required></textarea></label>
<label>Scenario 4 — Several players are talking over radio communications. How would you help keep communications clear?<textarea required></textarea></label>
<label>Availability and experience<textarea required></textarea></label>
<button class="btn red wide">Submit application</button></form>`;
openModal("applicationModal");
}
function submitApplication(e,name){e.preventDefault();alert("Application submitted for "+name+". In the production version, this should be sent to your database/Discord workflow.");closeModal("applicationModal")}
function openAdmin(){
document.getElementById("adminTitle").value=data.title;
document.getElementById("adminHero").value=data.hero;
document.getElementById("historyInput").value="";
document.getElementById("statusInput").value=data.apps.map(x=>x[0]+" | "+x[1]).join("\n");
openModal("adminModal");
}
function saveAdmin(){
data.title=document.getElementById("adminTitle").value||data.title;
data.hero=document.getElementById("adminHero").value||data.hero;
const h=document.getElementById("historyInput").value.trim();
if(h){const parts=h.split("|").map(x=>x.trim());if(parts.length>=3)data.history.unshift(parts.slice(0,3))}
const lines=document.getElementById("statusInput").value.split("\n").map(x=>x.trim()).filter(Boolean);
if(lines.length)data.apps=lines.map(x=>{let p=x.split("|").map(y=>y.trim());return[p[0],p[1]==="Open"?"Open":"Closed"]});
localStorage.setItem("ukrnstsData",JSON.stringify(data));closeModal("adminModal");render();alert("Saved in this browser.");
}
function resetAdmin(){localStorage.removeItem("ukrnstsData");data=structuredClone(defaultData);closeModal("adminModal");render()}
render();
