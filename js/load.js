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


