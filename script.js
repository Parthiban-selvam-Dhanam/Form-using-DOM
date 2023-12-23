function label_create(ele_name,attr_name_1,attr_value_2,content){
    var ele = document.createElement(ele_name);
    ele.setAttribute(attr_name_1,attr_value_2);
    ele.innerHTML = content;
    return ele;
}

function break_create(){
var br = document.createElement("br");
return br;
}

function input_create(ele_name,attr_name_1,attr_value_1,id_val_1){
    var input = document.createElement(ele_name);
     input.setAttribute(attr_name_1,attr_value_1);
     input.id = id_val_1;
     return input;

}

var labe2 = label_create("label","for","firstname","Firstname");
var break_1 = break_create();
var Firstname = input_create("input","type","firstname","Firstname");
var break_2 = break_create();
document.body.append(labe2,break_1,Firstname,break_2);

var labe3 = label_create("label","for","middlename","Middlename");
var break_1 = break_create();
var Middlename = input_create("input","type","middlename","Middlename");
var break_2 = break_create();
document.body.append(labe3,break_1,Middlename,break_2);

var labe4 = label_create("label","for","lastname","Lastname");
var break_1 = break_create();
var Lastname = input_create("input","type","lastname","Lastname");
var break_2 = break_create();
document.body.append(labe4,break_1,Lastname,break_2);




var label = label_create("label","for","email","Email");
var break_1 = break_create();
var email = input_create("input","type","email","email");
var break_2 = break_create();
document.body.append(label,break_1,email,break_2);


var labe5 = label_create("label","for","password","password");
var break_1 = break_create();
var password = input_create("input","type","password","password");
var break_2 = break_create();
document.body.append(labe5,break_1,password,break_2);

var labe6 = label_create("label","for","Phonenumber","Phonenumber");
var break_1 = break_create();
var Phonenumber = input_create("input","type","Phonenumber","Phonenumber");
var break_2 = break_create();
document.body.append(labe6,break_1,Phonenumber,break_2);




