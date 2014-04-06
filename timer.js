

function myTimer()
{
var d = new Date();
var t = d.toLocaleTimeString();
document.getElementById("clock").innerHTML=t;
}

function getFunc17 () {
    var form = document.createElement('form');
    form.setAttribute('method', 'get');
    form.setAttribute('action', 'http://192.168.0.9:8000/GPIO/17/function');
    form.style.display = 'hidden';
    document.body.appendChild(form)
    form.submit();
}


function postFunc17 () {
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'http://192.168.0.9:8000/GPIO/17/function/OUT');
    form.style.display = 'hidden';
    document.body.appendChild(form)
    form.submit();
}

function getValue17 () {
    var form = document.createElement('form');
    form.setAttribute('method', 'get');
    form.setAttribute('action', 'http://192.168.0.9:8000/GPIO/17/value');
    form.style.display = 'hidden';
    document.body.appendChild(form)
    form.submit();
}


function postValue17 () {
	var xmlhttp;
	xmlhttpr=new XMLHttpRequest();
	xmlhttpr.open("POST","http://192.168.0.9:8000/GPIO/17/value/1",true);
	xmlhttpr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttpr.send();
}


function postValue170 () {
	var xmlhttp;
	xmlhttp=new XMLHttpRequest();
	xmlhttp.open("POST","http://192.168.0.9:8000/GPIO/17/value/0",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send();
}

	

function read17(){
	{
		var xmlhttp;
		xmlhttp=new XMLHttpRequest();
	}
	xmlhttp.onreadystatechange=function(){
	  if (xmlhttp.readyState==4 && xmlhttp.status==200){
		document.getElementById("Status").innerHTML=xmlhttp.responseText;
		}
	}
xmlhttp.open("GET","http://192.168.0.9:8000/GPIO/17/value",true);
xmlhttp.send();
}

function showConfig(){	  
	jQuery('#configDiv').children().show();
	jQuery('#hltDiv').children().hide();
	jQuery('#mltDiv').children().hide();
	jQuery('#bkDiv').children().hide();
};	

function showHLT(){
	jQuery('#configDiv').children().hide();
	jQuery('#hltDiv').children().show();
	jQuery('#mltDiv').children().hide();
	jQuery('#bkDiv').children().hide();
};	

function showMLT(){
	jQuery('#configDiv').children().hide();
	jQuery('#hltDiv').children().hide();
	jQuery('#mltDiv').children().show();
	jQuery('#bkDiv').children().hide();
};	
	
function showBK(){
	jQuery('#configDiv').children().hide();
	jQuery('#hltDiv').children().hide();
	jQuery('#mltDiv').children().hide();
	jQuery('#bkDiv').children().show();
  };	


$(document).ready(function(){
	var read17Update = setInterval(function(){read17()},1000);
	var myVar = setInterval(function(){myTimer()},1000);

	$(function() {

		var d1 = [];
		for (var i = 0; i < 14; i += 0.5) {
			d1.push([i, Math.sin(i)]);
		}

		var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];

		// A null signifies separate line segments

		var d3 = [[0, 12], [7, 12], null, [7, 2.5], [12, 2.5]];

		$.plot("#flot", [ d1, d2, d3 ]);

		// Add the Flot version string to the footer

		$("#footer").prepend("Flot " + $.plot.version + " &ndash; " + " jQuery version " + $.fn.jquery);
	});

	$(function(){
	    GetData();

    dataset = [
        { label: "CPU", data: data, color: "#00FF00" }
    ];

    $.plot($("#flot-placeholder1"), dataset, options);

    function update() {
        GetData();

        $.plot($("#flot-placeholder1"), dataset, options)
        setTimeout(update, updateInterval);
    }

    update();
	});
	
	});