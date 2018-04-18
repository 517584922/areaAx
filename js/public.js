window.onload = function () {
    // 西区侧边栏tab切换
    var westSide = document.getElementById("WestPublicTabList").getElementsByTagName("span");
    // var westSide = document.getElementById("WestPublicTabList").getElementsByTagName("span");
    tab(westSide);

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
function tab (tabList) {
    for (var i=0;i<tabList.length;i++){
        tabList[i].index = i;
        tabList[i].onclick = function () {
            var classArr = this.className.split(" ")[0];
            var changeClass = classArr.substring(0,classArr.length-1)+"2";
            for (var j=0;j<tabList.length;j++){
                tabList[j].classList.remove(changeClass);
            }
        }
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
var volNum = 5;
// 西区讲解音量
var volControl1 = document.getElementById("adjustWrap").getElementsByTagName("span");
adjustVol(volNum,volControl1);

// 音量增加
function addVol(volControl) {
    volNum ++;
    if (volNum>10){
        volNum = 10;
    }
    adjustVol(volNum,volControl);
}
// 音量减小
function downVol(volControl) {
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
