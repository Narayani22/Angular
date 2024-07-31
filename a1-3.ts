import * as promptSync from 'prompt-sync'
const prompt = promptSync()

function DisplayFactors(No1 : number)
{
    let Cnt : number = 0 
    console.log("Factors are :")
    for(Cnt = 1; Cnt < No1; Cnt++)
    {
        if((No1 % Cnt) == 0)
        {
            console.log("\t "+Cnt)
        }
    }
}
const no = prompt('Enter the number : ')
const factors = parseInt(no)
DisplayFactors(factors)
