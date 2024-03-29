const num1Element = document.getElementById('num1') as HTMLInputElement
const num2Element = document.getElementById('num2')as HTMLInputElement
const buttonelement = document.querySelector('button')!

const numResults: Array<number> = []; //You can define array in this way. 
const textResults: string[]= [];  //And You can define array in this way also 

type NumOrString = number | string;

function add(num1: NumOrString, num2: NumOrString)
{
    if(typeof num1 === 'number' && typeof num2 === 'number')
    {
        return num1+num2;
    }
    else if(typeof num1 === 'string' && typeof num2 === 'string')
    {
        return num1+ ' ' +num2;
    } 
    return +num1 + +num2;
}

type Result = {val: number; timestamp: Date};
interface ResultObj{  //You can use this ResultObj also insted of Result
    val: number; 
    timestamp: Date
}

function printResult(resultObj: Result){
    console.log(resultObj.val)
}

buttonelement.addEventListener('click', () =>
{
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add (+num1, +num2)
    numResults.push(result as number);

    const stringresult = add (num1, num2)
    textResults.push(stringresult as string)

    // console.log(result)
    // console.log(stringresult)
    printResult({val: result as number, timestamp: new Date()});
    console.log(numResults, textResults);


})

const myPromise = new Promise<string>((resolve, reject) =>{
    setTimeout(() => {
        resolve('It worked');
    }, 1000);
});

myPromise.then((result) => {
    console.log(result.split('w'));
})