let inp1; 
let inp2
let dis
let inputField = document.getElementById("fname");
let inputField2 = document.getElementById("lname");
inputField.addEventListener("input", function() {
        inp1 = Number(inputField.value); 
        console.log(inp1);
    });
inputField2.addEventListener("input", function() {
        inp2 = Number(inputField2.value); 
        console.log(inp2);
    });

let result = document.querySelector('.res')

let add1 = document.querySelector('.add')
const substract = document.querySelector('.sub')
const multiply = document.querySelector('.mult')
const divide = document.querySelector('.div')
const clear = document.querySelector('.clr')
const gcd = document.querySelector('.gcd')
add1.addEventListener('click',()=>
{ 
    if(inp1>100 || inp2 >100)
        {
            document.getElementById("rs").style.width = "500px"
            document.getElementById("rs").style.marginLeft = "400px"


            dis = Number(inp1 + inp2)
            result.innerHTML = dis;
        }
        else{
            dis = Number(inp1 + inp2)
            result.innerHTML = dis;
        }
})
substract.addEventListener('click',()=>
    { 
        if(inp1>100 || inp2 >100)
            {
                document.getElementById("rs").style.width = "500px"
                document.getElementById("rs").style.marginLeft = "400px"


                dis = Number(inp1 - inp2)
                result.innerHTML = dis;
            }
            else{
                dis = Number(inp1 - inp2)
                result.innerHTML = dis;
            }
    })

    multiply.addEventListener('click',()=>
        { 
            if(inp1>100 || inp2 >100)
            {
                document.getElementById("rs").style.width = "500px"
                document.getElementById("rs").style.marginLeft = "400px"


                dis = Number(inp1 * inp2)
                result.innerHTML = dis;
            }
            else{
                dis = Number(inp1 * inp2)
                result.innerHTML = dis;
            }
            
        }
    )
    
    divide.addEventListener('click',()=>
        { 
            if(inp1>100 || inp2 >100)
            {
                document.getElementById("rs").style.width = "500px"
                document.getElementById("rs").style.marginLeft = "400px"

            
                dis = Number(inp1 / inp2)
                let di = dis.toFixed(3)
                result.innerHTML = di;
            }
          
            else{
                dis = Number(inp1 / inp2)
                let di = dis.toFixed(3)
                result.innerHTML = di;
            }
            
        }
    )
    gcd.addEventListener('click',()=>
    {
        function gcd(a, b) {
            while (b !== 0) {
                let temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }
        let di = gcd(inp1,inp2);
        result.innerHTML = di;

    })
    clear.addEventListener('click',()=>
        { 
            
           inputField.value = '';
           inputField2.value = '';
           result.innerHTML = '';
            document.getElementById("rs").style.width = "200px"
             document.getElementById("rs").style.marginLeft = "550px"

        }
    )