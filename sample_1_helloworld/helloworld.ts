/**
 * @author zhoujiaxin
 * @version typescript V3.2.2
 */
function say(name:string) {
	return "Hello, " + name;
}

let user = "Jack";

document.body.innerHTML = say(user);