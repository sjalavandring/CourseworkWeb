let database = openDatabase('database' ,'1.0','database', 1024);
database.transaction(function(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS BOOKING (FIO, PHONE, MAIL, VISITORS, DATEIN, DATEOUT, TIME, BUDGET, COMMENT, CLEANING, INTERNET)');
});
function submiting (){
	if (validate()) {//Проверка правильности ввеленных данных в форме
		let values = new Array(0);
		let elems = document.getElementsByClassName('input');
		for (let key of elems) {
			if (key.hasAttribute('name')) {
				if (key.type == 'checkbox') {
					values.push(key.checked)
				} else 
				if (key.value == 0) {
					values.push('null'); //Проверка значений checkbox
				} else {
					values.push(key.value)
				}
			}	
		}
		database.transaction(function(tx) {
			tx.executeSql("INSERT INTO BOOKING (FIO, PHONE, MAIL, VISITORS, DATEIN, DATEOUT, TIME, BUDGET, COMMENT, CLEANING, INTERNET) VALUES(?,?,?,?,?,?,?,?,?,?,?)",[values[0], values[1], values[2], values[3], values[4], values[5], values[6] ,values[7], values[8], values[9], values[10]])
		});
	}

}

function validate() {
	let currentInputs = document.querySelector(`.slide-${slideIndex}`).querySelectorAll('.input');
	let checking = 1;
	Array.prototype.forEach.call(currentInputs, (val, count) => {
		if ((val.value == undefined && val.hasAttribute('required')) || (!new RegExp(val.pattern).test(val.value))) {
			val.classList.add('invalid')
			checking = 0	
		} else {
			val.classList.remove('invalid')
		}
	})
	return checking == 1 ? true : false;
}

function removeInvalid() {
	Array.prototype.forEach.call(document.getElementsByClassName('input'), (val) => {
		val.classList.remove('invalid');
	})
}

// function getting() {
// 	document.querySelector('.dataOuter').innerHTML = '<tr class="dataRow"><td>ID</td><td>ФИО</td><td>Телефон</td><td>Почта</td><td>Гостей</td><td>Заезд</td><td>Выезд</td><td>Время заезда</td><td>Бюджет</td><td>Комментарий</td><td>Уборка</td><td>Интернет</td></tr>'
// 	database.transaction((ex) => {
// 		ex.executeSql("SELECT rowid, FIO, PHONE, MAIL, VISITORS, DATEIN, DATEOUT, TIME, BUDGET, COMMENT, CLEANING, INTERNET FROM BOOKING", [], function(trans, result){
// 			document.querySelector('.dataOuter').classList.remove('inactive')
// 			for (let i = 0; i < result.rows.length; i++) {
// 				document.querySelector('.dataOuter').innerHTML += `<tr class="dataRow"> 
// 					<td>${result.rows.item(i).rowid}</td>
// 					<td>${result.rows.item(i).FIO}</td>
// 					<td>${result.rows.item(i).PHONE}</td>
// 					<td>${result.rows.item(i).MAIL}</td>
// 					<td>${result.rows.item(i).VISITORS}</td>
// 					<td>${result.rows.item(i).DATEIN}</td>
// 					<td>${result.rows.item(i).DATEOUT}</td>
// 					<td>${result.rows.item(i).TIME}</td> 
// 					<td>${result.rows.item(i).BUDGET}</td> 
// 					<td>${result.rows.item(i).COMMENT}</td> 
// 					<td>${result.rows.item(i).CLEANING}</td> 
// 					<td>${result.rows.item(i).INTERNET}</td>
// 				</tr>`    
// 			}
// 		},
// 		function(tx, error){
// 			alert(error.message);
// 		});
// 	})
// }
//Вывод бд на страницу
function droptable() {
	database.transaction((tx) => {
		tx.executeSql('drop table BOOKING')
	})
}