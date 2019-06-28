let form = document.querySelector("form");

class Employee{
    constructor(name,age,profile,salary){
        this.name=name;
        this.age=age;
        this.profile=profile;
        this.salary=salary;
    }

    addTable(){
        let newRow=document.createElement("tr");

        let nameColumn=document.createElement("td");
        let ageColumn=document.createElement("td");
        let profileColumn=document.createElement("td");
        let salaryColumn=document.createElement("td");

        let nameT=document.createTextNode(this.name);
        let ageT=document.createTextNode(this.age);
        let profileT=document.createTextNode(this.profile);
        let salaryT=document.createTextNode(this.salary);

        nameColumn.appendChild(nameT);
        ageColumn.appendChild(ageT);
        profileColumn.appendChild(profileT);
        salaryColumn.appendChild(salaryT);

        newRow.appendChild(nameColumn);
        newRow.appendChild(ageColumn);
        newRow.appendChild(profileColumn);
        newRow.appendChild(salaryColumn);

        newRow.classList.add("row");
        newRow.classList.add("subRow");

        let tableVar=document.querySelector('#myTable')
        tableVar.appendChild(newRow);

    }

}
let newRecord1=new Employee('Prerna',19,'Web Developer',99000);
newRecord1.addTable();
let newRecord2=new Employee('Sanjana',19,'Web Developer',99000);
newRecord2.addTable();
let newRecord4=new Employee('Dad',19,'Web Developer',99000);
newRecord4.addTable();
let newRecord5=new Employee('Mom',19,'Web Developer',99000);
newRecord5.addTable();

function createNewRecord(){
    let name = form.children[0].value;
    if(name == ''){
        alert('Tera naam ni hai kya??!!');
        return;
    }

    try{
        let age = parseInt(form.children[1].value);

        let defaultRecord=new Employee(
            name,
            age,
            form.children[2].value,
            form.children[3].value,);
        defaultRecord.addTable();
    }catch(ex){
        console.log("Error aa gya");
    }
}

let buttonVar=document.querySelector('#button1');
buttonVar.addEventListener('click',function(){
   createNewRecord();
});
