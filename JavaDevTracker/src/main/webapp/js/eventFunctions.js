window.addEventListener('load', function(e) {
	console.log('document loader');
	init();
});

function init() {
	document.getElementsByName('allDevs')[0].addEventListener('click', function(e) {
		e.preventDefault();
		getAllDevs();
			});
	console.log('in init()');
	document.createDevForm.submit.addEventListener('click', createDev);
}

function createDev(e){
  e.preventDefault();

  let xhr = new XMLHttpRequest();
  xhr.open("POST", 'api/developers');

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 ){
    if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
          let data = JSON.parse(xhr.responseText);
            getAllDevs();
        }
        else {
          console.error("POST request failed.");
				  console.error(xhr.status + ': ' + xhr.responseText);
        }
      }
};
	let dev = {
		name : document.createDevForm.name.value,
		active : document.createDevForm.active.value,
		caffeination : document.createDevForm.caffeination.value,
		anxiety : document.createDevForm.anxiety.value,
		productivity : document.createDevForm.productivity.value
	};
	xhr.send(JSON.stringify(dev));
}

function deleteDev(devId){
	
	
	let xhr = new XMLHttpRequest();
	xhr.open("DELETE", 'api/developers/' + devId, true);
	
	xhr.setRequestHeader("Content-type", "application/json");
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status == 200 || xhr.status == 201){
				getAllDevs();
			console.log('deleted');
			}else{
				console.error("DELETE request failed.");
					console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	
	xhr.send(JSON.stringify());
}

function getDev(devId) {
 
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'api/developers/' + devId);
  
  xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){
		if(xhr.status == 200){
			let dev = JSON.parse(xhr.responseText);
			console.log(dev);
			displayDev(dev);
		}else{
			console.log('Dev not found.')
		}
	}
};
  
  xhr.send();
}


function getAllDevs() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/developers', true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200) {
				let devs = JSON.parse(xhr.responseText);
				console.log(devs);
				displayAllDevs(devs);
			} else {
				console.log('Dev not found.')
			}
		}
	};
	xhr.send();
}


function displayAllDevs(devs) {
	let allDevDiv = document.getElementById('showDevs');
	allDevDiv.textContent = '';
		let table = document.createElement('table');
		table.id = 'devTable';
		table.border = 1;
		table.cellPadding = 10;
		let thead = document.createElement('thead');
		let tr = document.createElement('tr');
		
		for(d in devs[0]){
			if(d === 'name'){
				let th = document.createElement('th');
				th.textContent = d;
				tr.appendChild(th);
				}
		}
		
		let tbody = document.createElement('tbody');
		devs.forEach(function(item){
			let row = document.createElement('tr');
			row.addEventListener('click', function(e){
				displayDev(item);
			});
		let name = document.createElement('td');
		name.textContent = item.name;
		row.appendChild(name);
		tbody.appendChild(row);
		})
		thead.appendChild(tr);
		table.appendChild(thead);
		table.appendChild(tbody);
		allDevDiv.appendChild(table);
		
		let amountOfDevs = devs.length;
		let h1 = document.createElement('h1');
		h1.textContent = 'The number of Devs ' + amountOfDevs;
		allDevDiv.appendChild(h1);
}

function displayDev(dev){
	let dataDiv = document.getElementById('showDev');
	dataDiv.textContent = '';
	let h1 = document.createElement('h1');
	h1.textContent = dev.name;
	dataDiv.appendChild(h1);
	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);
	let active = document.createElement('li');
	let caffeination = document.createElement('li');
	let anxiety = document.createElement('li');
	let productivity = document.createElement('li');
	
	active.textContent = dev.active;
	caffeination.textContent = dev.caffeination;
	anxiety.textContent = dev.anxiety;
	productivity.textContent = dev.productivity;
	
	ul.appendChild(active); 
	ul.appendChild(caffeination); 
	ul.appendChild(anxiety); 
	ul.appendChild(productivity); 
	
	let deleteButton = document.createElement('button');
	dataDiv.appendChild(deleteButton);
	deleteButton.textContent = 'Delete';
	deleteButton.addEventListener('click', function(e){
		dataDiv.remove();
		deleteDev(dev.id);
	});
	
	let updateButton = document.createElement('button');
	dataDiv.appendChild(updateButton);
	updateButton.textContent = 'Update';
	updateButton.addEventListener('click', function(e){
		let form = document.createElement('form');
		dataDiv.appendChild(form);
		
		let inputName = document.createElement('input');
		input.value = 'Name';		
		form.appendChild(inputName);
		
		let inputActive = document.createElement('input');
		input.value = dev.active;		
		form.appendChild(inputActive);
		
		let inputCaffeination = document.createElement('input');
		input.value = dev.caffeination;		
		form.appendChild(inputCaffeination);
		
		let inputAnxiety = document.createElement('input');
		input.value = dev.anxiety;		
		form.appendChild(inputAnxiety);
		
		let inputProductivity = document.createElement('input');
		input.value = dev.productivity;		
		form.appendChild(inputProductivity);
	});
	
	
	
 }




