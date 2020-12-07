class Servicefee {
    constructor(fee, percent) {
        this.fee = fee;
        this.percent = percent;
    }

    // function for finding company's share

    calculatePercent() {
        let comMoney = (this.percent / 100) * this.fee;
        return comMoney;
    }
    


    // function for finding customer's final money

    payToCustomer() {
    let custMoney = this.fee - this.calculatePercent();
    return custMoney;
    }


    showDetails () {
    document.getElementById('customerMoney').innerHTML = this.payToCustomer();
    document.getElementById('customerPercent').innerHTML = this.calculatePercent();
    }


    actualFee = this.fee;
    }

    controller = () => {
    let actualFee = document.getElementById('payment').value;

    currentCharges = new Servicefee(actualFee, 1.6)
    currentCharges.showDetails();
}




// -----------------------------------------------------------------
// class Person {
//     constructor(age, height, skinC) {
//         this.age = age;
//         this.height = height;
//         this.skinC = skinC;
//     }
//     getDetails() {
//         return `my name is Ayo and i'm ${this.age} years old,`
//     }

//     howTall() {
//         return `Don't you know i'm `
//     }
// }
