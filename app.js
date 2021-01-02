class Expense{

    constructor(year, month, day, type, description, values) {
        this.year = year
        this.month = month
        this.day = day
        this.type = type
        this.description = description
        this.values = values
    }

    validate(){

        for (let i in this){
         return (this[i] === '')
        }
    }
}

class Dao{

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
}


function addCost(){

    let year =document.getElementById('year').value
    let month = document.getElementById('month').value
    let day = document.getElementById('day').value
    let type = document.getElementById('type').value
    let description = document.getElementById('description').value
    let values = document.getElementById('values').value

    let expense = new Expense(year, month, day, type, description, values)
    let dao = new Dao()

    expense.validate()? alert('Errado') : alert('Correto')
    dao.save(expense)

}

