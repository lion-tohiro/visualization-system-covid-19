
var myChart3 = echarts.init(document.getElementById('hotpoint'));
var colorList = [
    '#0f3057', '#222831', '#30475e', '#f05454', '#00587a',
    '#ffcb8e', '#ee6f57', '#5c6e91', '#d8b9c3', '#99a8b2',
    '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#c7b198',
    '#206a5d', '#4ea397', '#3cb371', '#b8860b', '#5e6f64'
    ];
    var test=[
        ['广东', 478],['清零', 154], ['加油', 409], ['输入', 318], ['境外', 300], ['无症状', 293], ['黑龙江', 251], ['湖北', 240], ['开学', 211], ['中国', 173], ['疫情', 157], ['本土', 152], ['武汉', 141], ['新增', 140], ['严防', 138], ['感染者', 133], ['隔离', 116], ['希望', 114], ['广州', 96], ['美国', 86], ['结束', 77], ['回来', 77], ['感染', 68],  ['全国', 67], ['确诊', 66], ['检测', 63],  ['江苏', 62], ['防护', 61],  ['可怕', 56],  ['病毒', 54], ['做', 52],  ['越来越', 50], ['入境', 49], ['高校', 47], ['上海', 47], ['国家', 46], ['口罩', 46], ['国外', 42], ['国内', 42]
    ]
    function pushData(i) {
        name1=test[i][0];
        value1 = test[i][1];
        return {
            name: name1,
            value: value1,
            symbolSize:value1/6+30,
            draggable: true,
            itemStyle: {
                normal: {
                    
                    color:colorList[i%10]
                }
            }
            
        };
    }
    var data=[];
    for (var i = 0; i < 25; i++) {
        data.push(pushData(i));
    }
option3 = {
    // 图表标题
    backgroundColor: '#fff',
    tooltip: {},
   
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 100,
            edgeLength: 10
        },
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        data: data
    }]
}

myChart3.setOption(option3);