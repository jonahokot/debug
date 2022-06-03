//function tax (){ }
 //from 0 - 350000 (0% tax)   sal = y, 
//from 350001 - 1000000 (5%)   0.05 * y = tax
//from 1000001 - 3000000 (10%)  0.1 * y = tax
//above 3000001 (15%) 0.01 * y = tax
//netPay = sal - tax

let tax; 
let netPay;
function taxation(salary){
    if (salary >= 350001 && salary <= 1000000) {
        tax = salary * 0.05 ;
        netPay = salary - tax ;
        console.log(tax);
        console.log(netPay);
    }
}
taxation(350002)