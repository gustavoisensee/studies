const bankAccount = {
  balance: 1000,
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from the account. New balance: ${this.balance}`);
    } else {
      console.log('Insufficient funds');
    }
  }
};

const bankAccountProxy = new Proxy(bankAccount, {
  get(target, property) {
    console.log(`Accessed property: ${property}`);
    return target[property];
  }
});

const executeProxy = () => {
  console.log('\n### Proxy ################')
  console.log(bankAccountProxy.balance);
  bankAccountProxy.withdraw(500);
}

module.exports = {
  executeProxy
}
