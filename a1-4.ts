import * as promptSync from 'prompt-sync'
const prompt = promptSync()

function Chkprime(No1 : number) : any
{
    let Cnt : number = 0
    let Count : number = 0
    for(Cnt = 1; Cnt <= No1; Cnt++)
    {
        if(No1 % Cnt == 0)
        {
            ++Count
        }
    }
    if(Count == 2)
    {
        return true;
    }
    else
    {
        return false
    }
}

const no = prompt('Enter the number : ')
const prime = parseInt(no)
Chkprime(prime)
var ret : boolean = false
ret = Chkprime(prime)
if(ret == true)
{
    console.log("It is prime number"+ret)
}
else
{
    console.log("It is not a prime number"+ret)
}
