var star = {name:"xiaolizi"，
age:18，
major:"actor",
sayhi:function(){
	console.log("你们好，我的粉丝！")};

}
console.log(star.name);
console.log(star.age);


for(var i in star) {console.log(i + "=" + star[i]);}
function (argument)