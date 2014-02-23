var app = angular.module('main', ['ngTable']).
controller('DemoCtrl', function($scope) {

    $scope.users = [
            {name: "皇马3-0完胜埃尔切 贝尔上演完美世界波", age: 20140223 ,link:"http://sports.qq.com/a/20140223/000974.htm"},
            {name: "英超:范佩西鲁尼皆破门 曼联2:0客胜距前四8分", age: 20140223,link:"http://www.chinanews.com/ty/2014/02-23/5870740.shtml"},
            {name: "费根道出火箭裁布鲁尔原因 6尺4小钢炮让莫雷不舍", age: 20140223,link:"http://sports.sina.com.cn/nba/2014-02-23/11337036895.shtml"},
            {name: "巴黎宣布续约蒂亚戈-莫塔 尤文目标签约至2016年", age: 20140223,link:"http://sports.163.com/14/0223/16/9LPHHAFR00051C9U.html"},
            {name: "里约赛纳达尔救两赛点逆转 险胜同胞晋级决赛", age: 20140223,link:"http://sports.163.com/14/0223/10/9LOTMVSJ00051CDG.html"},
        	{name: "说好的交易又泡汤 美媒：纽约难留住安东尼了", age: 20140223,link:"http://sports.qq.com/a/20140221/010674.htm"},
            {name: "沃尔助内内暴扣绝杀 奇才94-93胜鹈鹕", age: 20140223,link:"http://china.nba.com/news/4/2014-02-23/1038/18885.html"},
            {name: "隆多：早已习惯交易流言满天飞 明年会重返全明星", age: 20140223,link:"http://sports.sina.com.cn/nba/2014-02-20/01187030139.shtml"},
            {name: "德隆20+6生死时刻无球权? 若非他篮网队早已崩盘", age: 20140223,link:"http://sports.163.com/14/0223/14/9LPB71SQ00051CA1.html#p=9LP8UOOU4TM10005"},
            {name: "麦蒂：篮球的那一页已经过去 CBA客场旅行最糟糕", age: 20140223,link:"http://sports.sina.com.cn/cba/2014-02-23/19157037240.shtml"},
            {name: "前瞻:哈登有望带伤出战 火箭欲终结太阳三连胜", age: 20140223,link:"http://sports.163.com/14/0223/17/9LPLKE1S00051CA1.html"},
            {name: "穆大叔列最强5人忽略拉塞尔 大梦乔丹魔术师入选", age: 20140223,link:"http://sports.163.com/14/0223/16/9LPGV8PV00051CA1.html"},

        ];
})