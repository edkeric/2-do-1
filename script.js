const input = document.querySelector('input');
		const btn = document.querySelector('.addTask > button');

		const plant = document.getElementById('plant')

		const plants = [
			{"name":"img1" , "src":"img/1.png"},
			{"name":"img2" , "src":"img/2.png"},
			{"name":"img3" , "src":"img/3.png"},
			{"name":"img4" , "src":"img/4.png"},
			{"name":"img5" , "src":"img/5.png"},
			{"name":"img6" , "src":"img/6.png"},
			{"name":"img7" , "src":"img/7.png"},
		]
		let imgIndex=1;

		function plantGrow(){
			plant.src = `img/${imgIndex}.png`;
			if(imgIndex < plants.length - 1){
			  imgIndex++;
			} else {
			  imgIndex = 1;
			}
		  }

		  function plantShrink(){
			  plant.src = `img/${imgIndex}.png`;
			  if(imgIndex > 1){
				imgIndex--;
			  } else {
				imgIndex = 1;
			  }
			}

		btn.addEventListener('click', function(e){
			addList();
			plantShrink();
		});
		input.addEventListener('keyup', function(e){
			(e.keyCode === 13 ? addList(e) : null);
		});

		function addList(e){
			const notCompleted = document.querySelector('.notCompleted');
			const Completed = document.querySelector('.Completed');

			var itemSpan = document.createElement('span')
			itemSpan.contentEditable = "true";
			const newLi = document.createElement('li');

			
			const checkBtn = document.createElement('button');
			const delBtn = document.createElement('button');
			

			checkBtn.innerHTML = '<i class="fas fa-check-square"></i>';
			delBtn.innerHTML = '<i class="fas fa-eraser"></i>';


			if(input.value !==''){
				itemSpan.textContent = input.value;
				input.value = '';
				notCompleted.appendChild(newLi);
				newLi.appendChild(itemSpan);
				newLi.appendChild(checkBtn);
				newLi.appendChild(delBtn);
			}


			checkBtn.addEventListener('click', function(){
				const parent = this.parentNode;
				parent.remove();
				Completed.appendChild(parent);
				checkBtn.style.display = 'none';
				itemSpan.contentEditable = "false";;
				plantGrow();
			
			});

			delBtn.addEventListener('click', function(){
				const parent = this.parentNode;
				parent.remove();
			});
		}
