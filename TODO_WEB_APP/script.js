// get the dom parent element
let allContent=document.getElementsByClassName('container')
console.log(allContent);
let addButton=document.getElementsByClassName('button')
console.log(addButton);
 let div=document.getElementsByClassName('divLi')
 console.log(div);
 let inputblock=document.getElementById('name') 
 console.log(inputblock);
  // let liList=document.getElementsByClassName('li')
  // console.log(liList[0]);
function deleteItem(e){
     e.target.parentElement.remove()
}


function addItem() {
   let inputValue=document.getElementById('name').value 
   if(inputValue.trim() != 0){
    console.log(inputValue);
    const LiItem=document.createElement("li") //<li></li>
    LiItem.className="li" //<li class="li"></li>
    const liText=document.createTextNode(inputValue)
    LiItem.appendChild(liText)
    console.log(LiItem);
 
 // create delete button
      const deleteButton=document.createElement('button');
      const buttonText=document.createTextNode('Delete');
      deleteButton.appendChild(buttonText)
      LiItem.appendChild(deleteButton)
    
      const edit=document.createElement("button")
     const editText=document.createTextNode('edit');
      edit.id="edits"
      edit.appendChild(editText)
      LiItem.appendChild(edit)
      edit.setAttribute("onclick",`editFunc(this)`)
       console.log(edit);  
    const UlItem=document.createElement("ul")
    UlItem.id="ul_data"
    UlItem.appendChild(LiItem)
      div[0].appendChild(UlItem)
     deleteButton.addEventListener('click',deleteItem)
    inputblock.value=""
   }else{
     alert("Please write the task")
   }

}
addButton[0].addEventListener('click', addItem)

function editFunc(e){
  let val=  e.parentNode.firstChild.nodeValue
  let value=prompt("please write the task",val)
  console.log(e.parentNode.firstChild);
  e.parentNode.firstChild.nodeValue=value

}

function deleteAll(){
  div[0].innerHTML=""
}

