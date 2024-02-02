
//<h1 id="karishma" class="js" name="dom" >Student</h1>

// 1 way  tag name


let byTagName=document.querySelector("h1")
console.log(byTagName)

document.querySelector('h1').addEventListener('click',function(){
    document.querySelector('h1').style.color="green"
    document.querySelector('h1').textContent="Minskole"
})

// 2. by using ID

//let byID=document.querySelector('#karishma')
//console.log(byID)

//3. by using class

//let byClass=document.querySelector('.js')
//console.log(byClass)

//4. by using atribute /common formula

//let byCF=document.querySelector("h1[name='dom']")
//console.log(byCF)



