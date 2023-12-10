function fibonacci(num) {
// your code here
	if (num==1) return 0;
	if (num==2) return 1;
	 let sum=0,n1=0,n2=1;
    for(let i=3;i<=num;i++){
       sum=n1+n2;
       n1=n2;
       n2=sum;
    }
    return sum;
}

module.exports = fibonacci;
