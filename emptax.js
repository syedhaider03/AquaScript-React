var employee=function(name,salary){
this.name=name;
this.salary=salary;
}

employee.prototype.incomeTax=function(){
    if (this.salary<21){
        tax=(this.salary*5)/100
        return tax
    }
    if (this.salary>20&&this.salary<31 ){
        tax=(this.salary*10)/100
        return tax
    }
    if (this.salary>30){
        tax=(this.salary*15)/100
        return tax
    }
    


}
var ali=new employee("ali",15)
var ahmed=new employee("ahmed",25)
var khizar=new employee("khizar",35)
ali.incomeTax()
ahmed.incomeTax()
khizar.incomeTax()