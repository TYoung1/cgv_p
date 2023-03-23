
// 상단 광고 닫기 버튼
let closebtn = document.getElementById("close");
closebtn.addEventListener('click',function(){
    document.getElementById("ad").style.display="none";
})

// 위로가기 버튼
let topbtn = document.getElementById("gotop");
topbtn.addEventListener('click',function(){
    window.scrollTo({top:0,behavior:"smooth"});
})

window.onscroll = ()=>window.scrollY > 500 ? topbtn.style.opacity=1 : topbtn.style.opacity=0;
let nav2 = document.getElementById("nav2");
window.onscroll = ()=>window.scrollY > 200 ? nav2.style.display="block" : nav2.style.display="none";