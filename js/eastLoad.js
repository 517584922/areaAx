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
        // 品质生活内部tab切换
        var crowLive = document.getElementById("crowLive").getElementsByTagName("span");
        var crowLiveContainer = document.getElementById("crowLiveWrap").getElementsByTagName("li");
        tabCtrl(crowLive,crowLiveContainer);
        // 社会责任内部tab切换
        var socialLive = document.getElementById("socialLive").getElementsByTagName("span");
        var crowSocialWrap = document.getElementById("crowSocialWrap").getElementsByTagName("li");
        tabCtrl(socialLive,crowSocialWrap);

    // 播放器

        // 东区品质生活产业链 品质生活影片
        var eastMove01 = document.getElementById("eastMove01").getElementsByTagName("span");
        playCtrl(eastMove01);
        // 家庭服务与健康平台 视频影片
        var eastMove02 = document.getElementById("eastMove02").getElementsByTagName("span");
        playCtrl(eastMove02);
        // 社会责任 环境责任
        var eastMove03 = document.getElementById("eastMove03").getElementsByTagName("span");
        playCtrl(eastMove03);
        // 社会责任 拉动就业
        var eastMove04 = document.getElementById("eastMove04").getElementsByTagName("span");
        playCtrl(eastMove04);
        // 社会责任 慈善事业
        var eastMove05 = document.getElementById("eastMove05").getElementsByTagName("span");
        playCtrl(eastMove05);

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
        //东区品质生活产业链 影院模式 灯光
        var eastBtn11 = document.getElementById("eastBtn11").getElementsByTagName("span");
        btnAct(eastBtn11,btnActive);
        //东区品质生活产业链 影院模式 影院出口
        var eastBtn12 = document.getElementById("eastBtn12").getElementsByTagName("span");
        btnAct(eastBtn12,btnActive);
        //东区品质生活产业链 会议模式 筒灯
        var eastBtn13 = document.getElementById("eastBtn13").getElementsByTagName("span");
        btnAct(eastBtn13,btnActive);
        //东区品质生活产业链 会议模式 影院出口
        var eastBtn14 = document.getElementById("eastBtn14").getElementsByTagName("span");
        btnAct(eastBtn14,btnActive);
        //东区品质生活产业链 电脑主机
        var eastBtn15 = document.getElementById("eastBtn15").getElementsByTagName("span");
        btnAct(eastBtn15,btnActive);
        //东区品质生活产业链 筒灯
        var eastBtn16 = document.getElementById("eastBtn16").getElementsByTagName("span");
        btnAct(eastBtn16,btnActive);
        //东区品质生活产业链 造型灯
        var eastBtn17 = document.getElementById("eastBtn17").getElementsByTagName("span");
        btnAct(eastBtn17,btnActive);
        //东区品质生活产业链 前射灯
        var eastBtn18 = document.getElementById("eastBtn18").getElementsByTagName("span");
        btnAct(eastBtn18,btnActive);
        //东区品质生活产业链 后射灯
        var eastBtn19 = document.getElementById("eastBtn19").getElementsByTagName("span");
        btnAct(eastBtn19,btnActive);
        //东区家庭服务与健康平台 弧屏
        var eastBtn20 = document.getElementById("eastBtn20").getElementsByTagName("span");
        btnAct(eastBtn20,btnActive);
        //东区家庭服务与健康平台 左侧柱屏幕
        var eastBtn21 = document.getElementById("eastBtn21").getElementsByTagName("span");
        btnAct(eastBtn21,btnActive);
        //东区家庭服务与健康平台 右侧柱屏幕
        var eastBtn22 = document.getElementById("eastBtn22").getElementsByTagName("span");
        btnAct(eastBtn22,btnActive);
        //智慧企业 灯光
        var eastBtn23 = document.getElementById("eastBtn23").getElementsByTagName("span");
        btnAct(eastBtn23,btnActive);
        //智慧企业 电脑1
        var eastBtn24 = document.getElementById("eastBtn24").getElementsByTagName("span");
        btnAct(eastBtn24,btnActive);
        //智慧企业 电脑2
        var eastBtn25 = document.getElementById("eastBtn25").getElementsByTagName("span");
        btnAct(eastBtn25,btnActive);
        //智慧企业 电视1
        var eastBtn26 = document.getElementById("eastBtn26").getElementsByTagName("span");
        btnAct(eastBtn26,btnActive);
        //智慧企业 电视2
        var eastBtn27 = document.getElementById("eastBtn27").getElementsByTagName("span");
        btnAct(eastBtn27,btnActive);
        //社会责任 环境责任 射灯
        var eastBtn28 = document.getElementById("eastBtn28").getElementsByTagName("span");
        btnAct(eastBtn28,btnActive);
        //社会责任 环境责任 社会责任出口
        var eastBtn29 = document.getElementById("eastBtn29").getElementsByTagName("span");
        btnAct(eastBtn29,btnActive);
        //社会责任 环境责任 东区出口
        var eastBtn30 = document.getElementById("eastBtn30").getElementsByTagName("span");
        btnAct(eastBtn30,btnActive);
        //社会责任 慈善事业
        var eastBtn31 = document.getElementById("eastBtn31").getElementsByTagName("span");
        btnAct(eastBtn31,btnActive);
        //社会责任 拉动就业
        var eastBtn32 = document.getElementById("eastBtn32").getElementsByTagName("span");
        btnAct(eastBtn32,btnActive);
        //社会责任 环境责任
        var eastBtn33 = document.getElementById("eastBtn33").getElementsByTagName("span");
        btnAct(eastBtn33,btnActive);

    // 音量调节

        // 讲解系统
        var eastVolCtrl01 = document.getElementById("eastVolCtrl01").getElementsByTagName("a");
        var eastVolLine01 = document.getElementById("eastVolLine01").getElementsByTagName("span");
        var eastVol01 = new volCtrl(5);
        vol(eastVolCtrl01,eastVolLine01,eastVol01,eastVol01.num);
        // 品质生活影片
        var eastVolCtrl02 = document.getElementById("eastVolCtrl02").getElementsByTagName("a");
        var eastVolLine02 = document.getElementById("eastVolLine02").getElementsByTagName("span");
        var eastVol02 = new volCtrl(5);
        vol(eastVolCtrl02,eastVolLine02,eastVol02,eastVol02.num);
        // 音量控制
        var eastVolCtrl03 = document.getElementById("eastVolCtrl03").getElementsByTagName("a");
        var eastVolLine03 = document.getElementById("eastVolLine03").getElementsByTagName("span");
        var eastVol03 = new volCtrl(5);
        vol(eastVolCtrl03,eastVolLine03,eastVol03,eastVol03.num);
        // 视频影片
        var eastVolCtrl04 = document.getElementById("eastVolCtrl04").getElementsByTagName("a");
        var eastVolLine04 = document.getElementById("eastVolLine04").getElementsByTagName("span");
        var eastVol04 = new volCtrl(5);
        vol(eastVolCtrl04,eastVolLine04,eastVol04,eastVol04.num);
        // 环境责任
        var eastVolCtrl05 = document.getElementById("eastVolCtrl05").getElementsByTagName("a");
        var eastVolLine05 = document.getElementById("eastVolLine05").getElementsByTagName("span");
        var eastVol05 = new volCtrl(5);
        vol(eastVolCtrl05,eastVolLine05,eastVol05,eastVol05.num);
        // 拉动就业
        var eastVolCtrl06 = document.getElementById("eastVolCtrl06").getElementsByTagName("a");
        var eastVolLine06 = document.getElementById("eastVolLine06").getElementsByTagName("span");
        var eastVol06 = new volCtrl(5);
        vol(eastVolCtrl06,eastVolLine06,eastVol06,eastVol06.num);
        // 慈善事业
        var eastVolCtrl07 = document.getElementById("eastVolCtrl07").getElementsByTagName("a");
        var eastVolLine07 = document.getElementById("eastVolLine07").getElementsByTagName("span");
        var eastVol07 = new volCtrl(5);
        vol(eastVolCtrl07,eastVolLine07,eastVol07,eastVol07.num);

};