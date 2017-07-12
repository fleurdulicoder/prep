var myArr = [{
	num: 5,
	str: 'apple',
}, {
	num: 7,
	str: 'cabbage'
}, {
	num: 1,
	str: 'banana'
}];


myArr.sort(function(val1, val2) {
	if (val1.num > val2.num) {
		return -1;
	} else {
		return 1;
	}
});