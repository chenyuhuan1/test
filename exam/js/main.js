var timer;
function getList1() {
	ajax({
		url: app.url1,
		type: 'get',
		dataType: 'json',
		data: {
      uid: app.uid,
      id: 124,
		},
		success: function (res1) {
			var res = JSON.parse(res1);
			console.log(res);
			app.list = res.list;
			
		},
		error: function () {
			console.log("state请求错误");
		}
	});
	ajax({
		url: app.url2,
		type: 'get',
		dataType: 'json',
		data: {
		},
		success: function (res1) {
			var res = JSON.parse(res1);
			console.log(res);
			app.first = res;
			app.time = res.time;
			clearInterval(timer);
			timer = setInterval(function () {
				app.time = app.time + 1000;
			},1000);
		},
		error: function () {
			console.log("state请求错误");
		}
	});
}

function getList2() {
	ajax({
		url: app.url1,
		type: 'get',
		dataType: 'json',
		data: {
      uid: app.uid,
      id: 125,
		},
		success: function (res1) {
			var res = JSON.parse(res1);
			console.log(res);
			app.list = res.list;
		},
		error: function () {
			console.log("state请求错误");
		}
	});
}