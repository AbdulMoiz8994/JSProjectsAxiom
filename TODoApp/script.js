// get the elements
let DivContent=document.getElementsByClassName('addTask')

console.log(DivContent[0]);

function deleteItem(e){
    e.target.parentElement.remove()
}  
function AddInput(){
    let Input=document.getElementsByClassName('form-control');
        console.log(Input[0].value);
    //  make the ul and li 
    if(Input[0].value != 0){
        let createli=document.createElement('li');
        createli.className="LIItem"
        let addData=document.createTextNode(Input[0].value)
        createli.appendChild(addData)
    
    //    make the delete button add the icon from fontawsome and apend in li
        
       let createButton=document.createElement('button')  
       createButton.className="btn btn-danger fas fa-trash-alt delete_button";
        createli.appendChild(createButton)
        console.log(createli); 
    //  create edit Button
        const editButton=document.createElement("button")
        editButton.className="btn fas fa-pencil-alt button edit_button"
        createli.appendChild(editButton)
        DivContent[0].appendChild(createli)
        
        editButton.addEventListener('click',editItem)
        createButton.addEventListener('click',deleteItem)
        Input[0].value="";
    }else{
        alert("Please write the task")
    }

}
function editItem(e){
//    console.log(e.target.parentElement.firstChild.nodeValue);
   let updateValue=prompt('Update Task',e.target.parentElement.firstChild.nodeValue)
   e.target.parentElement.firstChild.nodeValue=updateValue;
}
function deleteAll(){
    DivContent[0].innerHTML=""
}
