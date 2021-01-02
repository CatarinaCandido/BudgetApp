
class Expense{

    constructor(date, type, description, values) {
        this.date = date
        this.type = type
        this.description = description
        this.values = values
    }

    validate(){

        for (let i in this){
         return (this[i] === '' || this[i] == null || this[i] === undefined )
        }
    }
}

class DAO{

    constructor() {
        let id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id',0)
        }
    }
    save(expense){
        let ids = localStorage.getItem('id');
        ids++
        localStorage.setItem('id',ids)
        localStorage.setItem(ids,JSON.stringify(expense))
    }

    search(){

        let id = localStorage.getItem('id')
        let expenses = Array()

        for (let i = 0; i <= id; i++) {
            let expense = JSON.parse(localStorage.getItem(i))
            expenses.push(expense)
        }
        return expenses
    }
}


function addCost(){

    let date = document.getElementById('date').value
    let type = document.getElementById('type').value
    let description = document.getElementById('description').value
    let values = document.getElementById('values').value + ' €'

    let expense = new Expense(date, type, description, values)
    let Dao = new DAO()

    if(expense.validate() === true){
        $('#errorMessage').modal('show')
    }else if(expense.validate() === false){
        $('#successMessage').modal('show')
        Dao.save(expense)
    }
}

function cleanForm(){
    document.getElementById('date').value = ''
    document.getElementById('type').value = ''
    document.getElementById('description').value = ''
    document.getElementById('values').value = ''
}

function displayExpenses(){

    let Dao = new DAO()
    let expenses = Dao.search()

    var table = document.getElementById('tableExpenses')

    expenses.forEach(function(){

        for (let i = 1; i <= expenses.length; i++) {
            var row = table.insertRow();
            row.insertCell().innerHTML = expenses[i].date
            row.insertCell().innerHTML = expenses[i].type
            row.insertCell().innerHTML = expenses[i].description
            row.insertCell().innerHTML = expenses[i].values
        }
    })
}

