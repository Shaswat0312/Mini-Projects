const btn = document.querySelector('.ADD')


 const clearBtn = document.createElement("button");
      clearBtn.innerText = "CLEAR ALL";
      clearBtn.classList.add("clear-all");
      document.querySelector('.main').appendChild(clearBtn);  
      const clearAll = document.querySelector(".clear-all");


      clearBtn.style.backgroundColor = "#ff0000ff";  // warm orange
    clearBtn.style.color = "white";
clearBtn.style.padding = "10px 20px";
clearBtn.style.marginTop = "20px";
clearBtn.style.borderRadius = "8px";
clearBtn.style.cursor = "pointer";
clearBtn.style.fontWeight = "bold";
clearBtn.style.boxShadow = "0 4px 6px rgba(0,0,0,0.2)";
clearBtn.style.transition = "all 0.3s ease";


      
      clearAll.addEventListener("click", () => {
          const taskList = document.querySelector(".task");  
          taskList.innerHTML = ""; 
    
})



btn.addEventListener('click',(e) => {
    e.preventDefault()


    const inputbar = document.querySelector('.input')
    const input = document.querySelector('.input').value.trim()
    if(input!==''){
        const del = document.createElement("button");
        del.innerHTML = "DONE";
        del.style.backgroundColor = "#00ff1aff"
        del.style.color = "#000000ff"
        del.style.marginRight ="-15rem"
        const divlist = document.createElement("span")
        const task = document.createElement("li")
divlist.textContent = input;
task.appendChild(divlist);

         document.querySelector('.task').appendChild(task);
         del.style.marginLeft = "10px"
         task.appendChild(del)
        inputbar.value = ' '
        del.addEventListener('click',(e) => {
           divlist.style.textDecoration = 'line-through';
           e.preventDefault()
        })
        const clear =document.createElement("button");
        clear.innerHTML = "DELETE"
        clear.style.marginLeft ="20px"
       task.appendChild(clear)
        clear.addEventListener('click',() =>{
          task.remove();
          clear.remove();
        })

         
    
    }
    

});


    