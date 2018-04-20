window.onload = function () {
    // 标签页

        // 东区侧边栏tab切换
        var eastPublicTabList = document.getElementById("eastPublicTabList").getElementsByTagName("span");
        var eastContainerWrap = document.getElementById("eastContainerWrap").getElementsByTagName("section");
        tab(eastPublicTabList,eastContainerWrap);
        // 东区展项控制tab切换
        var eastCtrlTabTitWrap = document.getElementById("eastCtrlTabTitWrap").getElementsByTagName("span");
        var eastCtrlWrap = document.getElementById("eastCtrlWrap").getElementsByTagName("section");
        tabCtrl(eastCtrlTabTitWrap,eastCtrlWrap);

    // 播放器

        /*// 西区序厅 序厅影片
        var movie01 = document.getElementById("movie01").getElementsByTagName("span");
        playCtrl(movie01);*/

    // 开关

        var btnActive = "btnActive";
        var largeAct = "lightClick";
        //东区 灯光预设
        var eastBtn01 = document.getElementById("eastBtn01").getElementsByTagName("span");
        btnAct(eastBtn01,largeAct);
        //东区 设备控制
        var eastBtn02 = document.getElementById("eastBtn02").getElementsByTagName("span");
        btnAct(eastBtn02,btnActive);
        //东区设备控制 设备控制
        var eastBtn03 = document.getElementById("eastBtn03").getElementsByTagName("span");
        btnAct(eastBtn03,btnActive);
        //东区设备控制 影院入口
        var eastBtn04 = document.getElementById("eastBtn04").getElementsByTagName("span");
        btnAct(eastBtn04,btnActive);
        //东区设备控制 影院出口
        var eastBtn05 = document.getElementById("eastBtn05").getElementsByTagName("span");
        btnAct(eastBtn05,btnActive);
        //东区设备控制 社会责任出口
        var eastBtn6 = document.getElementById("eastBtn06").getElementsByTagName("span");
        btnAct(eastBtn6,btnActive);
        //东区序厅 东区入口
        var eastBtn07 = document.getElementById("eastBtn07").getElementsByTagName("span");
        btnAct(eastBtn07,btnActive);
        //东区序厅 射灯
        var eastBtn08 = document.getElementById("eastBtn08").getElementsByTagName("span");
        btnAct(eastBtn08,btnActive);
        //东区序厅 筒灯
        var eastBtn09 = document.getElementById("eastBtn09").getElementsByTagName("span");
        btnAct(eastBtn09,btnActive);
        //东区序厅 影院入口
        var eastBtn10 = document.getElementById("eastBtn10").getElementsByTagName("span");
        btnAct(eastBtn10,btnActive);

};