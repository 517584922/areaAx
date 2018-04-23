
// 侧边栏tab切换
function tab (tabList,tabContainer) {
    for (var i=0;i<tabList.length;i++){
        tabList[i].index = i;
        tabList[i].onclick = function () {
            // tab标题效果切换
            var classArr = this.className.split(" ")[0];
            var addClass = classArr.substring(0,classArr.length)+"a";
            for (var j=0;j<tabList.length;j++){
                var e = j+1;
                var changeClass = classArr.substring(0,classArr.length-1)+e+"a";
                tabList[j].classList.remove(changeClass);
                tabContainer[j].style.display = "none";
            }
            this.classList.add(addClass);

            // tab内容切换
            tabContainer[this.index].style.display = "block";
        };
    }
}

//功能区tab切换
function tabCtrl (tabList,tabContainer) {
    for (var i=0;i<tabList.length;i++){
        tabList[i].index = i;
        tabList[i].onclick = function () {
            // tab标题效果切换
            var classArr = this.className.split(" ")[0];
            var addClass = classArr.substring(0,classArr.length)+"a";
            for (var j=0;j<tabList.length;j++){
                tabList[j].classList.remove(classArr+"a");
                tabContainer[j].style.display = "none";
            }
            this.classList.add(addClass);

            // tab内容切换
            tabContainer[this.index].style.display = "block";
        };
    }
}

//播放器控制
function playCtrl (tabList) {
    for (var i=0;i<tabList.length;i++){
        tabList[i].index = i;
        tabList[i].onclick = function () {
            // tab标题效果切换
            var classArr = this.className.split(" ")[1];
            var addClass = classArr.substring(0,classArr.length)+"a";
            for (var j=0;j<tabList.length;j++){
                var e = j+1;
                var changeClass = classArr.substring(0,classArr.length-1)+e+"a";
                tabList[j].classList.remove(changeClass);
            }
            this.classList.add(addClass);
        };
    }
}
// 更多页tab切换
var moreCtrl = false;
function moreTab(tabTit,tabWrap1,tabWrap2) {
    moreCtrl =! moreCtrl;
    if (moreCtrl==true){
        tabTit.setAttribute("class","moreA");
        tabWrap1.style.display = "none";
        tabWrap2.style.display = "block";
    }else{
        tabTit.setAttribute("class","more");
        tabWrap1.style.display = "block";
        tabWrap2.style.display = "none";
    }
}
// 按钮激活
function btnAct(btn,act) {
    for (var i=0;i<btn.length;i++){
        btn[i].index = i;
        btn[i].onclick = function () {
            for (var j=0;j<btn.length;j++){
                btn[j].classList.remove(act);
                this.classList.add(act)
            }
        }
    }
}
// 清洁能源产业链上中下游切换
function clearChange(u) {
    var down = "clearDown";
    var mid = "clearMid";
    var top = "clearTop";
    var downId = document.getElementById("clearDown");
    var midId = document.getElementById("clearMid");
    var topId = document.getElementById("clearTop");
    if (u.id==down){
        downId.style.display = "none";
        midId.style.display = "block";
    }else if(u.id==mid){
        midId.style.display = "none";
        topId.style.display = "block";
    }else if(u.id==top){
        topId.style.display = "none";
        downId.style.display = "block";
    }else if (u=="reset"){
        midId.style.display = "none";
        topId.style.display = "none";
        downId.style.display = "block";
    }
}
// 上下页跳转
function page(u) {
    if (u=="nextPage"){
        document.getElementById("westClearPage1").style.display = "none";
        document.getElementById("westClearPage2").style.display = "block";
    }else{
        document.getElementById("westClearPage1").style.display = "block";
        document.getElementById("westClearPage2").style.display = "none";
    }
}

// 音量控制器
function volCtrl(num) {this.num = num;}
function vol(eastVolCtrl01,eastVolLine,obj,vol) {
    for(var u=0;u<5;u++){
        eastVolLine[u].classList.add("volAct");
    }
    for (var i=0;i<eastVolCtrl01.length;i++){
        eastVolCtrl01[i].index = i;
        eastVolCtrl01[i].onclick = function () {
            if (this.innerHTML == "+"){
                vol++;
            }else if (this.innerHTML == "-"){
                vol--;
            }
            if (vol>=10){
                vol = 10;
            }else if (vol<=0){
                vol = 0;
            }
            obj.num = vol;
            for(var j=0;j<10;j++){
                eastVolLine[j].setAttribute("class","");
            }
            for (var e=0;e<obj.num;e++){
                eastVolLine[e].classList.add("volAct");
            }
        };
    }
}




