
$(function(){
    
    //初始化echarts实例
    var myChart = echarts.init(document.getElementById('chinamap'));

    var colorList = [
        '#0f3057', '#222831', '#30475e', '#f05454', '#00587a',
        '#ffcb8e', '#ee6f57', '#5c6e91', '#d8b9c3', '#99a8b2',
        '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#c7b198',
        '#206a5d', '#4ea397', '#3cb371', '#b8860b', '#5e6f64'
        ];
        var test4=[
            ['广东', 478],['清零', 354], ['解封', 409], ['输入', 318], ['复工', 319],['境外', 300], ['无症状', 293], ['黑龙江', 251], ['湖北', 240], ['开学', 211], ['中国', 173], ['疫情', 157], ['本土', 152], ['武汉', 141], ['新增', 140], ['严防', 138], ['感染者', 133], ['隔离', 116], ['希望', 114], ['广州', 96], ['美国', 86], ['结束', 77], ['回来', 77], ['感染', 68],  ['全国', 67], ['确诊', 66], ['检测', 63],  ['江苏', 62], ['防护', 61],  ['可怕', 56]
        ]
        var test3=[
            ['输入', 440], ['境外', 337], ['🙏', 302],['严防', 186], ['中国', 285], ['湖北', 151], ['隔离', 347], ['入境', 133], ['疫情', 108], ['国内', 103], ['病例', 80], ['上海', 76], ['加油', 75], ['武汉', 173], ['新增', 172], ['确诊', 171], ['无症状', 70], ['开学', 370], ['回来', 69], ['北京', 168], ['希望', 62],  ['口号', 50], ['禁止', 49], ['上报', 48], ['中国籍', 248], ['不让', 47], ['国外', 46], ['喊', 45], ['感觉', 44], ['例', 44], ['国家', 44], ['国籍', 43], ['本土', 42], ['笑话', 42], ['地方', 41], ['遥遥无期', 41], ['没完没了', 38], ['全国', 38], ['太', 37], ['传染', 37], ['口罩', 36], ['机场', 35], ['回国', 35], ['广东', 35], ['感染', 34]

        ]
        var test2=[
            ['加油', 533], ['疫情', 498], ['希望', 357], ['红十字', 651], ['中国', 320],['🙏', 326], ['湖北', 258], ['武汉', 234], ['好消息', 213],  ['♥', 182], ['国家', 179], ['确诊', 175],  ['全国', 165], ['病例', 147], ['韩国', 139],  ['孝感', 130], ['越来越好', 125], ['数据', 116], ['外国人', 114], ['放松', 106], ['数字', 101], ['结束', 96], ['双黄连', 93], ['领导', 93], ['治愈', 93], ['人数', 92], ['终于', 90], ['物资', 90], ['医生', 88], ['口罩', 81], ['拐点', 79], ['黑龙江', 78], ['少', 77], ['永久', 75], ['辛苦', 75], ['工作', 73], ['输入', 71], ['昨天', 71], ['早日', 71], ['山东', 70]

        ]
        var test=[
            ['武汉', 720], ['一级响应', 603], ['加油', 589],  ['政府', 432],  ['🙏', 252],['❗', 377], ['医务人员', 376], ['疫情', 357], ['蝙蝠', 343], ['湖北', 339], ['启动', 288], ['口罩', 266], ['江西', 256], ['陕西', 255],  ['浙江', 242], ['全国', 236], ['安徽', 225], ['广西', 220], ['中国', 213], ['医院', 212], ['山东', 202], ['野味', 197], ['宣传', 193], ['确诊', 184], ['希望', 183], ['福建', 179], ['甘肃', 166], ['重庆', 165], ['求求', 162], ['感染', 159], ['禁止', 157], ['物资', 148], ['数据', 142], ['重视', 139], ['雇用', 120], ['国家', 116], ['医生', 116], ['四川', 111], ['医护人员', 108], ['关注', 101]

        ]
        var test5=[
            ['川普', 543], ['大国风范', 302], ['致敬', 435], ['复工', 309], ['默哀', 219], ['中国', 276], ['哈哈哈', 203], ['担当', 344], ['美国', 402], ['特朗普', 301], ['疫情', 493], ['糟糕', 76], ['同胞', 66], ['世界', 464], ['英雄', 463], ['加油', 360], ['病毒', 58], ['假药', 257],   ['莫斯科', 156], ['俄罗斯', 256], ['抗疫', 54], ['希望', 151], ['逝世', 48], ['烈士', 348], ['入境', 45], ['转发', 44], ['福奇', 144], ['检测', 44], ['控制', 44], ['Fake News', 169] ['免疫力', 138], ['女人', 38],  ['命运共同体', 238],  ['能力', 38], ['忠诚', 38], ['锁', 38], ['走', 36], ['家族', 34], ['本来', 34], ['请', 34], ['结束', 34], ['无耻', 33], ['深切', 30]
        ]
        var test6=[
            ['川普', 406], ['北京', 302],['新疆', 222],['新发地',247], ['致敬', 235],  ['1000万', 179], ['中国', 276],  ['反扑', 203], ['美国', 142], ['特朗普', 161], ['疫情', 293],['同胞', 166], ['世界', 164], ['疫苗', 163], ['加油', 60], ['加拿大', 58],  ['莫斯科', 56], ['俄罗斯', 56], ['抗疫', 54], ['希望', 51], ['逝世', 48], ['烈士', 48], ['入境', 45], ['转发', 44], ['福奇', 44], ['检测', 44], ['控制', 44], ['Fake News', 69] ['免疫力', 38], ['女人', 38],  ['命运', 38], ['共同体', 38], ['能力', 38], ['忠诚', 38], ['锁', 38], ['走', 36], ['家族', 34], ['本来', 34], ['请', 34], ['结束', 34], ['无耻', 33], ['深切', 30]

        ]
        function pushData(month,i) {
            if(month==1){
                name1=test[i][0];
                value1 = test[i][1];
            }
            if(month==2){
                name1=test2[i][0];
                value1 = test2[i][1];
            }
            if(month==3){
                name1=test3[i][0];
                value1 = test3[i][1];
            }
            if(month==4){
                name1=test4[i][0];
                value1 = test4[i][1];
            }
            if(month==5){
                name1=test5[i][0];
                value1 = test5[i][1];
            }
            if(month==6){
                name1=test6[i][0];
                value1 = test6[i][1];
            }
         
            return {
                name: name1,
                value: value1*1000,
                symbolSize:value1/6+25,
                draggable: true,
                itemStyle: {
                    normal: {
                        
                        color:colorList[i%10]
                    }
                }
                
            };
        }

    var data2021 = [
        {
        name: '北京',
        value: 38
        }, {
        name: '天津',
        value: 17
        }, {
        name: '上海',
        value: 98
        }, {
        name: '重庆',
        value: 0
        }, {
        name: '河北',
        value: 328
        }, {
        name: '河南',
        value: 7
        }, {
        name: '云南',
        value: 10
        }, {
        name: '辽宁',
        value: 58
        }, {
        name: '黑龙江',
        value: 25
        }, {
        name: '湖南',
        value: 1
        }, {
        name: '安徽',
        value: 0
        }, {
        name: '山东',
        value: 4
        }, {
        name: '新疆',
        value: 0
        }, {
        name: '江苏',
        value: 3
        }, {
        name: '浙江',
        value: 11
        }, {
        name: '江西',
        value: 0
        }, {
        name: '湖北',
        value: 0
        }, {
        name: '广西',
        value: 1
        }, {
        name: '甘肃',
        value: 0
        }, {
        name: '山西',
        value: 4
        }, {
        name: '内蒙古',
        value: 34
        }, {
        name: '陕西',
        value: 21
        }, {
        name: '吉林',
        value: 0
        }, {
        name: '福建',
        value: 29
        }, {
        name: '贵州',
        value: 0
        }, {
        name: '广东',
        value: 42
        }, {
        name: '青海',
        value: 0
        }, {
        name: '西藏',
        value: 0
        }, {
        name: '四川',
        value: 14
        }, {
        name: '宁夏',
        value: 0
        }, {
        name: '海南',
        value: 0
        }, {
        name: '台湾',
        value: 101
        }, {
        name: '香港',
        value: 659
        }, {
        name: '澳门',
        value: 0
        }
    ]
    var data1 = [
        {
        name: '北京',
        value: 49
        }, {
        name: '天津',
        value: 10
        }, {
        name: '上海',
        value: 38
        }, {
        name: '重庆',
        value: 75
        }, {
        name: '河北',
        value: 12
        }, {
        name: '河南',
        value: 82
        }, {
        name: '云南',
        value: 127
        }, {
        name: '辽宁',
        value: 87
        }, {
        name: '黑龙江',
        value: 364
        }, {
        name: '湖南',
        value: 69
        }, {
        name: '安徽',
        value: 60
        }, {
        name: '山东',
        value: 39
        }, {
        name: '新疆',
        value: 4
        }, {
        name: '江苏',
        value: 30
        }, {
        name: '浙江',
        value: 103
        }, {
        name: '江西',
        value: 36
        }, {
        name: '湖北',
        value: 958
        }, {
        name: '广西',
        value: 33
        }, {
        name: '甘肃',
        value: 7
        }, {
        name: '山西',
        value: 9
        }, {
        name: '内蒙古',
        value: 5
        }, {
        name: '陕西',
        value: 22
        }, {
        name: '吉林',
        value: 4
        }, {
        name: '福建',
        value: 29
        }, {
        name: '贵州',
        value: 5
        }, {
        name: '广东',
        value: 109
        }, {
        name: '青海',
        value: 1
        }, {
        name: '西藏',
        value: 1
        }, {
        name: '四川',
        value: 44
        }, {
        name: '宁夏',
        value: 4
        }, {
        name: '海南',
        value: 19
        }, {
        name: '台湾',
        value: 3
        }, {
        name: '香港',
        value: 5
        }, {
        name: '澳门',
        value: 2
        }
    ]
    var data2 = [
        {
        name: '北京',
        value: 271
        }, {
        name: '天津',
        value: 82
        }, {
        name: '上海',
        value: 203
        }, {
        name: '重庆',
        value: 355
        }, {
        name: '河北',
        value: 197
        }, {
        name: '河南',
        value: 821
        }, {
        name: '云南',
        value: 127
        }, {
        name: '辽宁',
        value: 87
        }, {
        name: '黑龙江',
        value: 364
        }, {
        name: '湖南',
        value: 571
        }, {
        name: '安徽',
        value: 724
        }, {
        name: '山东',
        value: 371
        }, {
        name: '新疆',
        value: 59
        }, {
        name: '江苏',
        value: 427
        }, {
        name: '浙江',
        value: 730
        }, {
        name: '江西',
        value: 685
        }, {
        name: '湖北',
        value: 49030
        }, {
        name: '广西',
        value: 189
        }, {
        name: '甘肃',
        value: 39
        }, {
        name: '山西',
        value: 82
        }, {
        name: '内蒙古',
        value: 63
        }, {
        name: '陕西',
        value: 179
        }, {
        name: '吉林',
        value: 60
        }, {
        name: '福建',
        value: 210
        }, {
        name: '贵州',
        value: 106
        }, {
        name: '广东',
        value: 878
        }, {
        name: '青海',
        value: 5
        }, {
        name: '西藏',
        value: 0
        }, {
        name: '四川',
        value: 351
        }, {
        name: '宁夏',
        value: 37
        }, {
        name: '海南',
        value: 119
        }, {
        name: '台湾',
        value: 16
        }, {
        name: '香港',
        value: 54
        }, {
        name: '澳门',
        value: 7
        }
    ]


    var data3 = [
        {
        name: '北京',
        value: 80
        }, {
        name: '天津',
        value: 0
        }, {
        name: '上海',
        value: 28
        }, {
        name: '重庆',
        value: 0
        }, {
        name: '河北',
        value: 2
        }, {
        name: '河南',
        value: 1
        }, {
        name: '云南',
        value: 1
        }, {
        name: '辽宁',
        value: 10
        }, {
        name: '黑龙江',
        value: 15
        }, {
        name: '湖南',
        value: 0
        }, {
        name: '安徽',
        value: 0
        }, {
        name: '山东',
        value: 10
        }, {
        name: '新疆',
        value: 0
        }, {
        name: '江苏',
        value: 0
        }, {
        name: '浙江',
        value: 17
        }, {
        name: '江西',
        value: 0
        }, {
        name: '湖北',
        value: 9605
        }, {
        name: '广西',
        value: 3
        }, {
        name: '甘肃',
        value: 40
        }, {
        name: '山西',
        value: 0
        }, {
        name: '内蒙古',
        value: 1
        }, {
        name: '陕西',
        value: 11
        }, {
        name: '吉林',
        value: 0
        }, {
        name: '福建',
        value: 0
        }, {
        name: '贵州',
        value: 1
        }, {
        name: '广东',
        value: 47
        }, {
        name: '青海',
        value: 0
        }, {
        name: '西藏',
        value: 0
        }, {
        name: '四川',
        value: 20
        }, {
        name: '宁夏',
        value: 2
        }, {
        name: '海南',
        value: 2
        }, {
        name: '台湾',
        value: 38
        }, {
        name: '香港',
        value: 61
        }, {
        name: '澳门',
        value: 1
        }
    ]

    var data4 = [
        {
        name: '北京',
        value: 82
        }, {
        name: '天津',
        value: 11
        }, {
        name: '上海',
        value: 136
        }, {
        name: '重庆',
        value: 3
        }, {
        name: '河北',
        value: 7
        }, {
        name: '河南',
        value: 0
        }, {
        name: '云南',
        value: 6
        }, {
        name: '辽宁',
        value: 5
        }, {
        name: '黑龙江',
        value: 377
        }, {
        name: '湖南',
        value: 1
        }, {
        name: '安徽',
        value: 1
        }, {
        name: '山东',
        value: 16
        }, {
        name: '新疆',
        value: 0
        }, {
        name: '江苏',
        value: 11
        }, {
        name: '浙江',
        value: 23
        }, {
        name: '江西',
        value: 0
        }, {
        name: '湖北',
        value: 146
        }, {
        name: '广西',
        value: 0
        }, {
        name: '甘肃',
        value: 1
        }, {
        name: '山西',
        value: 59
        }, {
        name: '内蒙古',
        value: 98
        }, {
        name: '陕西',
        value: 2
        }, {
        name: '吉林',
        value: 5
        }, {
        name: '福建',
        value: 19
        }, {
        name: '贵州',
        value: 1
        }, {
        name: '广东',
        value: 92
        }, {
        name: '青海',
        value: 0
        }, {
        name: '西藏',
        value: 0
        }, {
        name: '四川',
        value: 5
        }, {
        name: '宁夏',
        value: 0
        }, {
        name: '海南',
        value: 0
        }, {
        name: '台湾',
        value: 252
        }, {
        name: '香港',
        value: 553
        }, {
        name: '澳门',
        value: 29
        }
    ]

    var data5 = [
        {
        name: '北京',
        value: 5
        }, {
        name: '天津',
        value: 2
        }, {
        name: '上海',
        value: 15
        }, {
        name: '重庆',
        value: 0
        }, {
        name: '河北',
        value: 0
        }, {
        name: '河南',
        value: 0
        }, {
        name: '云南',
        value: 0
        }, {
        name: '辽宁',
        value: 3
        }, {
        name: '黑龙江',
        value: 0
        }, {
        name: '湖南',
        value: 0
        }, {
        name: '安徽',
        value: 0
        }, {
        name: '山东',
        value: 1
        }, {
        name: '新疆',
        value: 0
        }, {
        name: '江苏',
        value: 0
        }, {
        name: '浙江',
        value: 0
        }, {
        name: '江西',
        value: 0
        }, {
        name: '湖北',
        value: 7
        }, {
        name: '广西',
        value: 0
        }, {
        name: '甘肃',
        value: 0
        }, {
        name: '山西',
        value: 0
        }, {
        name: '内蒙古',
        value: 19
        }, {
        name: '陕西',
        value: 2
        }, {
        name: '吉林',
        value: 25
        }, {
        name: '福建',
        value: 0
        }, {
        name: '贵州',
        value: 0
        }, {
        name: '广东',
        value: 4
        }, {
        name: '青海',
        value: 0
        }, {
        name: '西藏',
        value: 0
        }, {
        name: '四川',
        value: 0
        }, {
        name: '宁夏',
        value: 0
        }, {
        name: '海南',
        value: 1
        }, {
        name: '台湾',
        value: 31
        }, {
        name: '香港',
        value: 25
        }, {
        name: '澳门',
        value: 0
        }
    ]

    var data6 = [
        {
        name: '北京',
        value: 159
        }, {
        name: '天津',
        value: 3
        }, {
        name: '上海',
        value: 22
        }, {
        name: '重庆',
        value: 3
        }, {
        name: '河北',
        value: 10
        }, {
        name: '河南',
        value: 0
        }, {
        name: '云南',
        value: 0
        }, {
        name: '辽宁',
        value: 3
        }, {
        name: '黑龙江',
        value: 0
        }, {
        name: '湖南',
        value: 0
        }, {
        name: '安徽',
        value: 0
        }, {
        name: '山东',
        value: 2
        }, {
        name: '新疆',
        value: 0
        }, {
        name: '江苏',
        value: 0
        }, {
        name: '浙江',
        value: 1
        }, {
        name: '江西',
        value: 0
        }, {
        name: '湖北',
        value: 0
        }, {
        name: '广西',
        value: 0
        }, {
        name: '甘肃',
        value: 11
        }, {
        name: '山西',
        value: 0
        }, {
        name: '内蒙古',
        value: 3
        }, {
        name: '陕西',
        value: 5
        }, {
        name: '吉林',
        value: 0
        }, {
        name: '福建',
        value: 5
        }, {
        name: '贵州',
        value: 0
        }, {
        name: '广东',
        value: 17
        }, {
        name: '青海',
        value: 0
        }, {
        name: '西藏',
        value: 0
        }, {
        name: '四川',
        value: 19
        }, {
        name: '宁夏',
        value: 0
        }, {
        name: '海南',
        value: 2
        }, {
        name: '台湾',
        value: 4
        }, {
        name: '香港',
        value: 45
        }, {
        name: '澳门',
        value: 0
        }
    ]

    var hot4=[];
    var hot1=[];
    var hot2=[];
    var hot3=[];
    var hot5=[];
    var hot6=[];
    for (var i = 0; i < 25; i++) {
        hot1.push(pushData(1,i));
        hot2.push(pushData(2,i));
        hot3.push(pushData(3,i));
        hot4.push(pushData(4,i));
        hot5.push(pushData(5,i));
        hot6.push(pushData(6,i));
    }

    // 指定图表的配置项和数据
    option1 = {
        baseOption:{
            timeline: {
                axisType: 'category',
                autoPlay: true,
                playInterval: 3000,
                // orient: 'vertical',
                // right: 15,
                //  height: 500,
                //  top:50,
                // width: 100,
                data: [
                    '2020-1','2020-2','2020-3','2020-4','2020-5',
                    
                    '2020-6',
                ],
                label: {
                    formatter : function(s) {
                        return s;
                    }
                }
            },
            tooltip: {
                trigger: 'item'
            },
            visualMap: {
                type: 'piecewise',
                pieces: [
                    // '#99a8b2','#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#c7b198
                { min: 450000, max: 800000, label: ' ', color: '#6c567b'},
                { min: 430000, max: 450000, label: ' ', color: '#99a8b2'},
                { min: 400000, max: 430000, label: ' ', color: '#A63E46'},
                { min: 300000, max: 400000, label: ' ', color: '#740000'},
                { min: 200000, max: 300000, label: ' ', color: '#5c6e91'},
                { min: 150000, max: 200000, label: ' ', color: '#996F83'},
                { min: 100000, max: 150000, label: ' ', color: '#30475e'},
                { min: 80000, max: 100000, label: ' ', color: '#222831'},
                { min: 50000, max: 80000, label: ' ', color: '#D4D6E5'},
                { min: 500, max: 50000, label: '大于等于500人', color: '#740000' },
                { min: 100, max: 499, label: '确诊100-499人', color: '#A63E46' },
                { min: 50, max: 99, label: '确诊50-99人', color: '#996F83' },
                { min: 10, max: 49, label: '确诊10-49人', color: '#798AA5' },
                { min: 1, max: 9, label: '确诊1-9人', color: '#D4D6E5' },
                ],
               
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                mark: { show: true },
                dataView: { show: false, readOnly: false },
                restore: { show: false },
                saveAsImage: { show: false }
                }
            },
            
            roamController: {
                show: true,
                left: 'right',
                mapTypeControl: {
                'china': true
                }
            },
            series:   [
                {
                name: '确诊数',
                type: 'map',
          
                mapType: 'china',
                roam: false,
                label: {
                    show: true,
                    color: 'rgb(249, 249, 249)'
                },
                layoutCenter: ['35%', '50%'],//距离左右，上下距离的百分比
                layoutSize:'90%',//map百分比大小

                itemStyle: {
                    normal:{
                        borderColor: '#2a507a',//区域边框颜色
                        borderWidth :1,
                     
                    },
                    emphasis:{
                        areaColor:'rgb(63,15,61,0.8)'
                    }
                },
                },
                {
                    title: {text: '2020年1月中国疫情热点图',itemGap: 10},
                    type: 'graph',
                    layout: 'force',
                    force: {
                        repulsion: 80,
                        edgeLength: 10
                    },
                    top: '25%',             // 图表距离容器顶部的距离
                    // right:'100%',
                    left:'62%',
                    roam: true,
                    moveOnMouseMove: false,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                  
                }
                
            ],
        },
        options:[
            {
                title: {text: '2020年1月中国疫情热点图',itemGap: 10},
                series: [
                    {data: data1},
                    {data:hot1}
                ]
            }, 
            {
                title: {text: '2020年2月中国疫情热点图',itemGap: 10},
                series: [
                    {data: data2},
                    {data:hot2}
                ]
            },        
            {
                title: {text: '2020年3月中国疫情热点图',itemGap: 10},
                series: [
                    {data: data3},
                    {data:hot3}
                ]
            },
            {
                title: {text: '2020年4月中国疫情热点图',itemGap: 10},
                series: [
                    {data: data4},
                    {data:hot4}
                ]
            },  
            {
                title: {text: '2020年5月中国疫情热点图',itemGap: 10},
                series: [
                    {data: data5},
                    {data:hot5}
                ]
            },
            {
                title: {text: '2020年6月中国疫情热点图',itemGap: 10},
                series: [
                    {data: data6},
                    {data:hot6}
                ]
            },

        ]

    };

    //使用指定的配置项和数据显示图表
    myChart.setOption(option1);
 							
});