function fibonacci(num) {
// your code here
	 let sum=0,n1=0,n2=0;
    for(let i=3;i<=num;i++){
       sum=n1+n2;
       n1=n2;
       n2=sum;
    }
    return sum;
}

module.exports = fibonacci;
