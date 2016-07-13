//javascript code
window.onload = function(){}

//All Checked
function check_all(){
	var check_all = document.getElementsByName("all");
	var check_one = document.getElementsByName("one");
	if(check_all[0].checked){
		for(var i=0; i<check_one.length; i++){
			check_one[i].checked=true;
		}
	}else{
		for(var i=0; i<check_one.length; i++){
			check_one[i].checked=false;
		}
	}
}

//Child All Checked TO All Checked
function check_one()
{
	var check_all = document.getElementById("all");
	var check_one = document.getElementsByName("one");
	for(var j=0; j<check_one.length; j++){
		if(!check_one[j].checked){
			check_all.checked = false;
		}else{
			check_all.checked = true;
		}
	}
}

//Reversed Checked
function re_check() {
    var check_all = document.getElementById("all");
    var check_one = document.getElementsByName("one");
    var bAll = false;
    for (var j = 0; j < check_one.length; j++) {
        if (check_one[j].checked) {
            check_one[j].checked = false;
            bAll = true;
        }
        else {
            check_one[j].checked = true;
        }
    }
    if (bAll) {
        check_all.checked = false;
    } else {
        check_all.checked = true;
    }
}

//Init Whether As Child All Checked
function check_one() {
    var check_all = document.getElementById("all");
    var check_one = document.getElementsByName("one");
    var bAll = false;
    for (var j = 0; j < check_one.length; j++) {
        if (!check_one[j].checked)
            bAll = true;
    }
    if (bAll) {
        check_all.checked = false;
    } else {
        check_all.checked = true;
    }
}
