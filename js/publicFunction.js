
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
                console.log(classArr+"a");
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
// 音量增加
function addVol(volControl,volNum) {
    volNum ++;
    if (volNum>10){
        volNum = 10;
    }
    adjustVol(volNum,volControl);
}
// 音量减小
function downVol(volControl,volNum) {
    volNum --;
    if (volNum<0){
        volNum = 0;
    }
    adjustVol(volNum,volControl);
}
// 音量调节表
function adjustVol(volNum,volControl) {
    for(var j=0;j<10;j++){
        volControl[j].setAttribute("class","");
    }
    for (var i=0;i<volNum;i++){
        volControl[i].classList.add("volAct");
    }
}