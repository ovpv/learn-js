export default class ArrayClass{
    constructor(){
        this.array = ["vishnuprasad","venugopal"];
    }
    init(){
        this.length();
        this.proto();
    }
    length(){
        console.info(this.array.length);
    }
    proto(){
        if(!Array.prototype.first){
            Array.prototype.first = ()=>{
                return this.array[0];
            }
        }
        if(!Array.prototype.last){
            Array.prototype.last = ()=>{
                const length = this.array.length;
                return this.array[length-1];
            }
        }
        console.info(this.array.first());
        console.info(this.array.last());
    }
}