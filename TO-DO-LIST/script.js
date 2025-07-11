const btn = document.querySelector('.ADD')
btn.addEventListener('click',(e) => {
    e.preventDefault()

    const inputbar = document.querySelector('.input')
    const input = document.querySelector('.input').value.trim()
    if(input!==''){
        const del = document.createElement("button");
        del.innerHTML = "DONE";
        const divlist = document.createElement("span")
        const task = document.createElement("li")
       const cut = task.appendChild(divlist)
         const taskitem = document.createTextNode(input);
         cut.appendChild(taskitem);  
         document.querySelector('.task').appendChild(task);
         del.style.marginLeft = "10px"
         task.appendChild(del)
        inputbar.value = ' '
        del.addEventListener('click',(e) => {
           divlist.style.textDecoration = 'line-through';
           e.preventDefault()
        })
    }
  
})