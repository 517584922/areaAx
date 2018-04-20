window.onload = function () {
    // 标签页

        // 西区侧边栏tab切换
        var westSide = document.getElementById("WestPublicTabList").getElementsByTagName("span");
        var westContainerWrap = document.getElementById("westContainerWrap").getElementsByTagName("section");
        tab(westSide,westContainerWrap);
        // 西区侧边栏tab切换
        var elCtrlTabTitWrap = document.getElementById("elCtrlTabTitWrap").getElementsByTagName("span");
        var westCtrlWrap = document.getElementById("westCtrlWrap").getElementsByTagName("section");
        tabCtrl(elCtrlTabTitWrap,westCtrlWrap);

    // 播放器

        // 西区序厅 序厅影片
            var movie01 = document.getElementById("movie01").getElementsByTagName("span");
            playCtrl(movie01);
        // 西区物联时代 泛能装备
            var movie02 = document.getElementById("movie02").getElementsByTagName("span");
            playCtrl(movie02);
        // 西区泛能网 泛能网影片
            var movie03 = document.getElementById("movie03").getElementsByTagName("span");
            playCtrl(movie03);
        // 西区美丽生态 前沿技术
            var movie04 = document.getElementById("movie04").getElementsByTagName("span");
            playCtrl(movie04);
        // 西区美丽生态 环境治理
            var movie05 = document.getElementById("movie05").getElementsByTagName("span");
            playCtrl(movie05);
        // 西区企业文化 企业文化
            var movie06 = document.getElementById("movie06").getElementsByTagName("span");
            playCtrl(movie06);

    // 开关

        // 西区灯光预设
            var btnActive = "btnActive";
            var largeBtn = document.getElementById("westLight").getElementsByTagName("span");
            var largeAct = "lightClick";
            btnAct(largeBtn,largeAct);
        // 西区 全部设备控制
            var doubleBtn01 = document.getElementById("doubleBtn01").getElementsByTagName("span");
            btnAct(doubleBtn01,btnActive);
        // 西区序厅 电动门
            var doubleBtn02 = document.getElementById("doubleBtn02").getElementsByTagName("span");
            btnAct(doubleBtn02,btnActive);
        // 西区发展历程 射灯
            var doubleBtn03 = document.getElementById("doubleBtn03").getElementsByTagName("span");
            btnAct(doubleBtn03,btnActive);
        // 西区发展 筒灯
            var doubleBtn04 = document.getElementById("doubleBtn04").getElementsByTagName("span");
            btnAct(doubleBtn04,btnActive);
        // 西区发展 造型灯
            var doubleBtn05 = document.getElementById("doubleBtn05").getElementsByTagName("span");
            btnAct(doubleBtn05,btnActive);
        // 西区发展历程 电脑
            var doubleBtn06 = document.getElementById("doubleBtn06").getElementsByTagName("span");
            btnAct(doubleBtn06,btnActive);
        // 西区发展历程 拼接屏
            var doubleBtn07 = document.getElementById("doubleBtn07").getElementsByTagName("span");
            btnAct(doubleBtn07,btnActive);
        // 西区物联时代 透明屏射灯
            var doubleBtn08 = document.getElementById("doubleBtn08").getElementsByTagName("span");
            btnAct(doubleBtn08,btnActive);
        // 西区物联时代 商用泛能机
            var doubleBtn09 = document.getElementById("doubleBtn09").getElementsByTagName("span");
            btnAct(doubleBtn09,btnActive);
        // 西区物联时代 智能燃气表
            var doubleBtn10 = document.getElementById("doubleBtn10").getElementsByTagName("span");
            btnAct(doubleBtn10,btnActive);
        // 西区物联时代 石墨烯材料
            var doubleBtn11 = document.getElementById("doubleBtn11").getElementsByTagName("span");
            btnAct(doubleBtn11,btnActive);
        // 西区物联时代 微型燃气轮机
            var doubleBtn12 = document.getElementById("doubleBtn12").getElementsByTagName("span");
            btnAct(doubleBtn12,btnActive);
        // 西区物联时代 电视控制泛能装备
            var doubleBtn13 = document.getElementById("doubleBtn13").getElementsByTagName("span");
            btnAct(doubleBtn13,btnActive);
        // 西区泛能 网筒灯
            var doubleBtn14 = document.getElementById("doubleBtn14").getElementsByTagName("span");
            btnAct(doubleBtn14,btnActive);
        // 西区泛能网 造型灯
            var doubleBtn15 = document.getElementById("doubleBtn15").getElementsByTagName("span");
            btnAct(doubleBtn15,btnActive);
        // 西区泛能网 前射灯
            var doubleBtn16 = document.getElementById("doubleBtn16").getElementsByTagName("span");
            btnAct(doubleBtn16,btnActive);
        // 西区泛能网 后射灯
            var doubleBtn17 = document.getElementById("doubleBtn17").getElementsByTagName("span");
            btnAct(doubleBtn17,btnActive);
        // 西区泛能网 LED弧屏
            var doubleBtn18 = document.getElementById("doubleBtn18").getElementsByTagName("span");
            btnAct(doubleBtn18,btnActive);
        // 西区泛能网 地坪
            var doubleBtn19 = document.getElementById("doubleBtn19").getElementsByTagName("span");
            btnAct(doubleBtn19,btnActive);
        // 西区泛能网 左柱
            var doubleBtn20 = document.getElementById("doubleBtn20").getElementsByTagName("span");
            btnAct(doubleBtn20,btnActive);
        // 西区泛能网 右柱
            var doubleBtn21 = document.getElementById("doubleBtn21").getElementsByTagName("span");
            btnAct(doubleBtn21,btnActive);
        // 西区泛能网 触摸屏
            var doubleBtn22 = document.getElementById("doubleBtn22").getElementsByTagName("span");
            btnAct(doubleBtn22,btnActive);
        // 西区美丽生态 射灯
            var doubleBtn23 = document.getElementById("doubleBtn23").getElementsByTagName("span");
            btnAct(doubleBtn23,btnActive);
        // 西区美丽生态前沿技术 雷达眼电脑
            var doubleBtn24 = document.getElementById("doubleBtn24").getElementsByTagName("span");
            btnAct(doubleBtn24,btnActive);
        // 西区美丽生态前沿技术 触摸屏电脑
            var doubleBtn25 = document.getElementById("doubleBtn25").getElementsByTagName("span");
            btnAct(doubleBtn25,btnActive);
        // 西区美丽生态前沿技术 投影
            var doubleBtn26 = document.getElementById("doubleBtn26").getElementsByTagName("span");
            btnAct(doubleBtn26,btnActive);
        // 西区美丽生态环境治理 雷达眼电脑
            var doubleBtn27 = document.getElementById("doubleBtn27").getElementsByTagName("span");
            btnAct(doubleBtn27,btnActive);
        // 西区美丽生态环境治理 触摸屏电脑
            var doubleBtn28 = document.getElementById("doubleBtn28").getElementsByTagName("span");
            btnAct(doubleBtn28,btnActive);
        // 西区美丽生态环境治理 投影
            var doubleBtn29 = document.getElementById("doubleBtn29").getElementsByTagName("span");
            btnAct(doubleBtn29,btnActive);
        // 西区企业文化 灯光
            var doubleBtn30 = document.getElementById("doubleBtn30").getElementsByTagName("span");
            btnAct(doubleBtn30,btnActive);
        // 西区企业文化 电动门
            var doubleBtn31 = document.getElementById("doubleBtn31").getElementsByTagName("span");
            btnAct(doubleBtn31,btnActive);
        // 西区企业文化 电视
            var doubleBtn32 = document.getElementById("doubleBtn32").getElementsByTagName("span");
            btnAct(doubleBtn32,btnActive);
// 西区清洁能源 下游射灯
    /*     var doubleBtn33 = document.getElementById("doubleBtn33").getElementsByTagName("span");
         btnAct(doubleBtn33,btnActive);
         // 西区清洁能源 中游射灯
         var doubleBtn34 = document.getElementById("doubleBtn34").getElementsByTagName("span");
         btnAct(doubleBtn34,btnActive);
         // 西区清洁能源 上游射灯
         var doubleBtn35 = document.getElementById("doubleBtn35").getElementsByTagName("span");
         btnAct(doubleBtn35,btnActive);
         // 西区清洁能源 下游筒灯
         var doubleBtn36 = document.getElementById("doubleBtn36").getElementsByTagName("span");
         btnAct(doubleBtn36,btnActive);
         // 西区清洁能源 中游筒灯
         var doubleBtn37 = document.getElementById("doubleBtn37").getElementsByTagName("span");
         btnAct(doubleBtn37,btnActive);
         // 西区清洁能源 上游筒灯
         var doubleBtn38 = document.getElementById("doubleBtn38").getElementsByTagName("span");
         btnAct(doubleBtn38,btnActive);*/
};

/*
    // 音量控制部分
        // 西区 讲解音量
        var volNum1 = 5;
        var volControl1 = document.getElementById("adjustWrap").getElementsByTagName("span");
        adjustVol(volNum1,volControl1);
        // 西区序厅 影片音量
        var volNum2 = 5;
        var volControl2 = document.getElementById("adjustWrap01").getElementsByTagName("span");
        adjustVol(volNum2,volControl2);
        // 西区物联时代 泛能装备音量
        var volNum3 = 5;
        var volControl3 = document.getElementById("adjustWrap02").getElementsByTagName("span");
        adjustVol(volNum3,volControl3);
        // 西区泛能网 平台影片音量
        var volNum4 = 5;
        var volControl4 = document.getElementById("adjustWrap03").getElementsByTagName("span");
        adjustVol(volNum4,volControl4);
        // 西区美丽生态 前沿技术影片音量
        var volNum5 = 5;
        var volControl5 = document.getElementById("adjustWrap04").getElementsByTagName("span");
        adjustVol(volNum5,volControl5);
        // 西区美丽生态 环境治理影片音量
        var volNum6 = 5;
        var volControl6 = document.getElementById("adjustWrap05").getElementsByTagName("span");
        adjustVol(volNum6,volControl6);*/
