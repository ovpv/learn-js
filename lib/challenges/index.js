export default class Challenges{
    init(){
        this.longestWord('M@#!#!#@y name@$@#$@ i@#@!#!s Oduvathody Vishnuprasad Venugopal'); 
        this.firstFactorial(10);
        this.revString("Vishnu prasad venugopal")
    }
    /* The longest word method will accept any string and will remove all special characters from it. it will only accept Aa-Zz and 1-0 and then process the string to find the longest word in it */
    longestWord(str){
        let largest = "";
        let newstr = str.replace(/[^a-zA-Z0-9 ]/g,"");
        newstr = newstr.split(" ");
        newstr.map((singleStr,index)=>{
            if(singleStr.length > largest.length){
                largest = singleStr;
            }
        })
        return largest;
    }
    firstFactorial(num){
        let factorial  = 1;
        for(let i=1; i<=num; i+=1){
            factorial = factorial*i;
        }
        console.info(factorial);
        return factorial;
    }
    revString(str){
        let strArr = str.split("");
        let newArr=[];
        for(let i=strArr.length; i>=0; i-=1){
            newArr.push(strArr[i]);
        }
        newArr.splice(0,1);
        newArr = newArr.toString();
        newArr = newArr.replace(/,/g,"");
        return newArr;
    }
}