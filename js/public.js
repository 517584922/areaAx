window.onload = function () {
    // 西区侧边栏tab切换
    var westSide = document.getElementById("WestPublicTabList").getElementsByTagName("span");
    var westContainerWrap = document.getElementById("westContainerWrap").getElementsByTagName("section");
    tab(westSide,westContainerWrap);

    // 西区侧边栏tab切换
    var a = document.getElementById("elCtrlTabTitWrap").getElementsByTagName("span");
    var b = document.getElementById("westCtrlWrap").getElementsByTagName("section");
    tabCtrl(a,b);

    // 西区灯光预设
    var largeBtn = document.getElementById("westLight").getElementsByTagName("span");
    var largeAct = "lightClick";
    btnAct(largeBtn,largeAct);
    // 西区全部设备控制
    var doubleBtn01 = document.getElementById("doubleBtn01").getElementsByTagName("span");
    var btnActive01 = "btnActive";
    btnAct(doubleBtn01,btnActive01);

};

//侧边栏tab切换
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


// 音量控制部分
    // 西区讲解音量
    var volNum1 = 5;
    var volControl1 = document.getElementById("adjustWrap").getElementsByTagName("span");
    adjustVol(volNum1,volControl1);
    // 西部序厅影片音量
    var volNum2 = 5;
    var volControl2 = document.getElementById("adjustWrap01").getElementsByTagName("span");
    adjustVol(volNum2,volControl2);
    // 西部物联时代泛能装备音量
    var volNum3 = 5;
    var volControl3 = document.getElementById("adjustWrap02").getElementsByTagName("span");
    adjustVol(volNum3,volControl3);
    // 西部泛能网平台影片音量
    var volNum4 = 5;
    var volControl4 = document.getElementById("adjustWrap03").getElementsByTagName("span");
    adjustVol(volNum4,volControl4);
    // 美丽生态前沿技术影片音量
    var volNum5 = 5;
    var volControl5 = document.getElementById("adjustWrap04").getElementsByTagName("span");
    adjustVol(volNum5,volControl5);
    // 美丽生态环境治理影片音量
    var volNum6 = 5;
    var volControl6 = document.getElementById("adjustWrap05").getElementsByTagName("span");
    adjustVol(volNum6,volControl6);

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
