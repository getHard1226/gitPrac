var nameFlg = false;
var pwdFlg = false;
var buttonFlg = false;

function name() {
	var userName = document.getElementById('userName').value;
	var userNameLen = userName.length;

	if (userNameLen > 0 ) {
		nameFlg = true;
	} else {
		nameFlg = false;
	}

	judge();
}

function pwd() {
	var userPwd = document.getElementById('pwd').value;
	var userPwdLen = userPwd.length;

	if (userPwdLen > 0 ) {
		pwdFlg = true;
	} else {
		pwdFlg = false;
	}

	judge();
}

function judge() {
	if (nameFlg && pwdFlg ) {
		buttonFlg = true;
	} else {
		buttonFlg = false;
	}

	if (buttonFlg) {
		document.getElementById('next').disabled = false;
	} else {
		document.getElementById('next').disabled = true;
	}
}
