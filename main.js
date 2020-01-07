var foodInput = document.getElementById("foods-input");
var btnAdd = document.getElementById("btn-add-foods");
var foodTable = document.getElementById("foods-table");
var url = "http://localhost:9081/foods"

//Bind Event
btnAdd.addEventListener('click',addItem);


//Declare Funciton
function addItem(){

};
function render(items){
    let content = items.map((item)=>{
        return '<tr><td> '+item.name+'</td></tr>';
    })
    foodTable.innerHTML = content.join(" ");
};


//Excuted function
axios.get(url).then((resnponse)=>{
    let data = resnponse.data;
    render(data);
})