import * as promptSync from 'prompt-sync'
const prompt = promptSync()

function Fibonacci(No1 : number) : any
{
    var t1 : number =0, t2=1, t3
    t3 = t1+t2
    let iCnt : number = 0
    for(iCnt=3; iCnt<=No1; iCnt++)
    {
        console.log("\t"+t3)
        t1 = t2;
        t2 = t3;
        t3 = t1+t2;
    }
}

const no = prompt('Enter the number : ')
console.log("Fibonacci Series is :\t")
const num = parseFloat(no)
Fibonacci(num)
