window.onload = function () {
    // 标签页

        // 西区侧边栏tab切换
        var westSide = document.getElementById("WestPublicTabList").getElementsByTagName("span");
        var westContainerWrap = document.getElementById("westContainerWrap").getElementsByTagName("section");
        tab(westSide,westContainerWrap);
        // 西区展项控制tab切换
        var elCtrlTabTitWrap = document.getElementById("elCtrlTabTitWrap").getElementsByTagName("span");
        var westCtrlWrap = document.getElementById("westCtrlWrap").getElementsByTagName("section");
        tabCtrl(elCtrlTabTitWrap,westCtrlWrap);
        // 清洁能源tab切换
        var clearList = document.getElementById("clearList").getElementsByTagName("span");
        var clearWrap = document.getElementById("clearWrap").getElementsByTagName("li");
        tabCtrl(clearList,clearWrap);
        // 清洁能源灯光控制tab切换
        var clearMoreList = document.getElementById("clearMoreList").getElementsByTagName("span");
        var clearMoreWrap = document.getElementById("clearMoreWrap").getElementsByTagName("li");
        tabCtrl(clearMoreList,clearMoreWrap);

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
        // 清洁能源产业链 下游综述影片
            var movie07 = document.getElementById("movie07").getElementsByTagName("span");
            playCtrl(movie07);
        // 清洁能源产业链 中游综述影片
            var movie08 = document.getElementById("movie08").getElementsByTagName("span");
            playCtrl(movie08);
        // 清洁能源产业链 上游综述影片
            var movie09 = document.getElementById("movie09").getElementsByTagName("span");
            playCtrl(movie09);
        // 清洁能源产业链 优势技术
            var movie10 = document.getElementById("movie10").getElementsByTagName("span");
            playCtrl(movie10);
        // 清洁能源产业链 智慧建造
            var movie11 = document.getElementById("movie11").getElementsByTagName("span");
            playCtrl(movie11);
        // 清洁能源产业链 智慧生产
            var movie12 = document.getElementById("movie12").getElementsByTagName("span");
            playCtrl(movie12);
        // 清洁能源产业链 总结影片播放
            var movie13 = document.getElementById("movie13").getElementsByTagName("span");
            playCtrl(movie13);

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
         var doubleBtn33 = document.getElementById("doubleBtn33").getElementsByTagName("span");
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
         btnAct(doubleBtn38,btnActive);
        // 西区清洁能源 设备控制 下游触摸屏
        var doubleBtn38 = document.getElementById("doubleBtn39").getElementsByTagName("span");
        btnAct(doubleBtn38,btnActive);
        // 西区清洁能源 设备控制 中游触摸屏
        var doubleBtn38 = document.getElementById("doubleBtn40").getElementsByTagName("span");
        btnAct(doubleBtn38,btnActive);
        // 西区清洁能源 设备控制 上游触摸屏
        var doubleBtn38 = document.getElementById("doubleBtn41").getElementsByTagName("span");
        btnAct(doubleBtn38,btnActive);
        // 西区清洁能源 设备控制 LED屏
        var doubleBtn38 = document.getElementById("doubleBtn42").getElementsByTagName("span");
        btnAct(doubleBtn38,btnActive);
        // 西区清洁能源 设备控制 渲染控制机
        var doubleBtn38 = document.getElementById("doubleBtn43").getElementsByTagName("span");
        btnAct(doubleBtn38,btnActive);
        // 西区清洁能源 设备控制 渲染机1
        var doubleBtn38 = document.getElementById("doubleBtn44").getElementsByTagName("span");
        btnAct(doubleBtn38,btnActive);
        // 西区清洁能源 设备控制 渲染机2
        var doubleBtn38 = document.getElementById("doubleBtn45").getElementsByTagName("span");
        btnAct(doubleBtn38,btnActive);
        // 西区清洁能源 设备控制 渲染机3
        var doubleBtn38 = document.getElementById("doubleBtn46").getElementsByTagName("span");
        btnAct(doubleBtn38,btnActive);

    // 音量调节

        // 讲解系统
        var westVolCtrl01 = document.getElementById("westVolCtrl01").getElementsByTagName("a");
        var westVolLine01 = document.getElementById("westVolLine01").getElementsByTagName("span");
        var westVol01 = new volCtrl(5);
        vol(westVolCtrl01,westVolLine01,westVol01,westVol01.num);
        // 序厅影片
        var westVolCtrl02 = document.getElementById("westVolCtrl02").getElementsByTagName("a");
        var westVolLine02 = document.getElementById("westVolLine02").getElementsByTagName("span");
        var westVol02 = new volCtrl(5);
        vol(westVolCtrl02,westVolLine02,westVol02,westVol02.num);
        // 下游综述影片
        var westVolCtrl04 = document.getElementById("westVolCtrl04").getElementsByTagName("a");
        var westVolLine04 = document.getElementById("westVolLine04").getElementsByTagName("span");
        var westVol04 = new volCtrl(5);
        vol(westVolCtrl04,westVolLine04,westVol04,westVol04.num);
        // 中游综述影片
        var westVolCtrl05 = document.getElementById("westVolCtrl05").getElementsByTagName("a");
        var westVolLine05 = document.getElementById("westVolLine05").getElementsByTagName("span");
        var westVol05 = new volCtrl(5);
        vol(westVolCtrl05,westVolLine05,westVol05,westVol05.num);
        // 上游综述影片
        var westVolCtrl06 = document.getElementById("westVolCtrl06").getElementsByTagName("a");
        var westVolLine06 = document.getElementById("westVolLine06").getElementsByTagName("span");
        var westVol06 = new volCtrl(5);
        vol(westVolCtrl06,westVolLine06,westVol06,westVol06.num);
        // 优势技术视频
        var westVolCtrl07 = document.getElementById("westVolCtrl07").getElementsByTagName("a");
        var westVolLine07 = document.getElementById("westVolLine07").getElementsByTagName("span");
        var westVol07 = new volCtrl(5);
        vol(westVolCtrl07,westVolLine07,westVol07,westVol07.num);
        // 智慧建造视频
         var westVolCtrl08 = document.getElementById("westVolCtrl08").getElementsByTagName("a");
         var westVolLine08 = document.getElementById("westVolLine08").getElementsByTagName("span");
         var westVol08 = new volCtrl(5);
         vol(westVolCtrl08,westVolLine08,westVol08,westVol08.num);
        // 智慧生产视频
        var westVolCtrl09 = document.getElementById("westVolCtrl09").getElementsByTagName("a");
        var westVolLine09 = document.getElementById("westVolLine09").getElementsByTagName("span");
        var westVol09 = new volCtrl(5);
        vol(westVolCtrl09,westVolLine09,westVol09,westVol09.num);
        // 总结影片播放
        var westVolCtrl10 = document.getElementById("westVolCtrl10").getElementsByTagName("a");
        var westVolLine10 = document.getElementById("westVolLine10").getElementsByTagName("span");
        var westVol10 = new volCtrl(5);
        vol(westVolCtrl10,westVolLine10,westVol10,westVol10.num);
        // 泛能装备
        var westVolCtrl11 = document.getElementById("westVolCtrl11").getElementsByTagName("a");
        var westVolLine11 = document.getElementById("westVolLine11").getElementsByTagName("span");
        var westVol11 = new volCtrl(5);
        vol(westVolCtrl11,westVolLine11,westVol11,westVol11.num);
        // 泛能网影片
        var westVolCtrl12 = document.getElementById("westVolCtrl12").getElementsByTagName("a");
        var westVolLine12 = document.getElementById("westVolLine12").getElementsByTagName("span");
        var westVol12 = new volCtrl(5);
        vol(westVolCtrl12,westVolLine12,westVol12,westVol12.num);
        // 前沿技术
        var westVolCtrl13 = document.getElementById("westVolCtrl13").getElementsByTagName("a");
        var westVolLine13 = document.getElementById("westVolLine13").getElementsByTagName("span");
        var westVol13 = new volCtrl(5);
        vol(westVolCtrl13,westVolLine13,westVol13,westVol13.num);
        // 环境治理
        var westVolCtrl14 = document.getElementById("westVolCtrl14").getElementsByTagName("a");
        var westVolLine14 = document.getElementById("westVolLine14").getElementsByTagName("span");
        var westVol14 = new volCtrl(5);
        vol(westVolCtrl14,westVolLine14,westVol14,westVol14.num);
        // 企业文化
        var westVolCtrl15 = document.getElementById("westVolCtrl15").getElementsByTagName("a");
        var westVolLine15 = document.getElementById("westVolLine15").getElementsByTagName("span");
        var westVol15 = new volCtrl(5);
        vol(westVolCtrl15,westVolLine15,westVol15,westVol15.num);



};


