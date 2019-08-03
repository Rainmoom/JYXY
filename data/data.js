var products = [
	{
		"img": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3464618996,877399674&fm=15&gp=0.jpg",
		"title": "猕猴桃",
		"price": "￥28.88",
		"tip": "HOT"
	},
	{
		"img": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=183812707,2982802556&fm=15&gp=0.jpg",
		"title": "水果2",
		"price": "￥16.99",
		"tip": "超甜"
	},
	{
		"img": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4270116792,2373548192&fm=26&gp=0.jpg",
		"title": "玉米",
		"price": "￥99.99",
		"tip": "推荐"
	},
	{
		"img": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2809245894,4249480497&fm=26&gp=0.jpg",
		"title": "蔬菜",
		"price": "￥8.99",
		"tip": "进口"
	},
	{
		"img": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3357117896,1879907153&fm=26&gp=0.jpg",
		"title": "苹果",
		"price": "￥12.99",
		"tip": "nike"
	},
	{
		"img": "https://img.alicdn.com/tfs/TB13FixCeuSBuNjy1XcXXcYjFXa-468-1236.jpg",
		"title": "好吃坚果",
		"price": "￥55.99",
		"tip": "吃货"
	},
	{
		"img": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1253884304,2771755403&fm=26&gp=0.jpg",
		"title": "南瓜",
		"price": "￥22.99",
		"tip": "热卖"
	}
];

var getArrRandomly = function (arr) {
	var len = arr.length;
	for (var i = 0; i < len; i++) {
		var randomIndex = Math.floor(Math.random() * (len - i));
		var itemAtIndex = arr[randomIndex];
		arr[randomIndex] = arr[i];
		arr[i] = itemAtIndex;
	}
	return arr;
}
module.exports  = {
	products : products,
	getArrRandomly : getArrRandomly
} 
