/*
encapsulation restricts direct access to some of an object's components. 
*/

class BankAccount
{
    private balance:number;

    constructor(balance:number)
    {
        this.balance=balance;
    }

    getBalance() : number
    {
        return this.balance;
    }

    deposit(amount:number)
    {
        this.balance+=amount;
        console.log(`Deposited: ${amount}`);
        console.log(`Current balance: ${this.balance}`);
    }

    withdraw(amount:number)
    {
       if(amount<=this.balance)
       {
           this.balance-=amount;
           console.log(`Withdrawn: ${amount}`);
           console.log(`Current balance: ${this.balance}`);
       }
         else
         {
              console.log('Insufficient balance');
              console.log(`Current balance: ${this.balance}`);
         }
    }
}

let account = new BankAccount(1000);
console.log(`Initial balance: ${account.getBalance()}`);
account.withdraw(1200);
account.deposit(500);
account.withdraw(1200);

//lets try to access the balance property directly
console.log(account.balance); //errror: Property 'balance' is private and only accessible within class 'BankAccount'.


