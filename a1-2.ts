import * as promptSync from 'prompt-sync'

function Area(no1 : number) : any
{
    var pi : number = 3.14
    let areaofcircle : number = 0
    areaofcircle = pi * no1 * no1
    return areaofcircle
}

const prompt = promptSync()

const no = prompt('Enter the area : ')
const area = parseFloat(no)
var ret : number = 0
ret = Area(area)
console.log("Area of Circle is : "+ret)
