
//Compile time polymorphism/ static polymorphism/ method overloading

class PaymentGateway
{
    processPayment(amount:number):string;
    processPayment(cardNumber:string , expiary:string):string;

    processPayment(checkWhetherAmountOrCardNumber: number | string, expiary?:string):string{
        if(typeof checkWhetherAmountOrCardNumber==='number')
        {
            return `Current amount is $${checkWhetherAmountOrCardNumber}`
        }
        else if(typeof checkWhetherAmountOrCardNumber==='string' && expiary)
        {
            return `Card number: ${checkWhetherAmountOrCardNumber} - Expired date: ${expiary}`
        }
        throw new Error('Invalid card');
    }
}

let gateway= new PaymentGateway();

console.log(gateway.processPayment('3252461346236','12-12-32'));
console.log(gateway.processPayment(100));



//Run time polymorphism/ dynamic polymorphism/ method overriding

class PaymentMethod{
    processPayment(amount:number):string
    {
        return `Processed payment ${amount} via default method`;
    }
}

//credit card 
class CreditCard extends PaymentMethod
{
    processPayment(amount: number): string {
        return `Processed payment ${amount} via credit card`;
    }
}

//bkash 
class Bkash extends PaymentMethod
{
    processPayment(amount: number): string {
        return `Processed payment ${amount} via Bkash`;
    }
}

//crypto 
class CryptoCurrency extends PaymentMethod
{
    processPayment(amount: number): string {
        return `Processed payment ${amount} via crypto`
    }
}

//function to process payment dynamically
function processPayment(paymentMethod:PaymentMethod, amount:number)
{
    console.log(paymentMethod.processPayment(amount));
}

let payments: PaymentMethod[] = [new CreditCard(), new Bkash(), new CryptoCurrency()];

payments.forEach(paymentMethod => {
    processPayment(paymentMethod, 100);
});





  



