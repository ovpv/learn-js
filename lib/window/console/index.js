export default class Console{
    init(){
        this.assert();
        this.count();
        this.debug();
        this.dir();
        this.dirXML();
        this.error();
        this.group();
        this.groupCollapsed();
        this.log();
        this.info();
        this.profile();
        this.table();
        this.time();
        this.timestamp();
        this.trace();
        this.warn();
        // this.exception(); /* deprecated */
        // this.clear();
    }
    assert(){
        const a = 2;
        const b = 3;
        console.assert(a===b,"a is not equal to b");
    }
    clear(){
        setTimeout(()=>{
            console.clear();
        },10000)
    }
    count(){
        const c = 5;
        for(var i = 0; i< c; i += 1){
            console.count('inside for loop');
        }
    }
    debug(){
        /* enable verbose in console */
        console.debug('hello world');
    }
    dir(){
        const a  = {
            console:{
                hello: ['world']
            }
        }
        console.dir(a);
    }
    dirXML(){
        console.dirxml(document);
    }
    error(){
        console.error("this is a sample error");
    }
    exception(){
        /* this wont work in chrome as it is deprecated */
        console.exception("this is another sample error");
    }
    group(){
        console.group('for loop');
        for(let i = 0; i<= 5; i += 1){
            console.group('if condition');
            if(i > 3){
                console.log('greater than 3');
            }else{
                console.assert(i > 3,'Smaller than 3');
            }
            console.groupEnd('if condition');
        }
        console.groupEnd('for loop');
    }
    groupCollapsed(){
        console.groupCollapsed('for loop');
        for(let i = 0; i<= 5; i += 1){
            console.groupCollapsed('if condition');
            if(i > 3){
                console.log('greater than 3');
            }else{
                console.assert(i > 3,'Smaller than 3');
            }
            console.groupEnd('if condition');
        }
        console.groupEnd('for loop');
    }
    log(){
        console.log("most commmonly used console method",console.log);
    }
    info(){
        /* wont be any different from console.log in chrome, but mozilla will show info icon before message */
        console.info("some important info");
    }
    profile(){
        console.profile('demo');
        function a(num){
            num += 1;
            return num;
        }
        a(2);
        console.profileEnd('demo');
    }
    table(){
        const obj = {
            a: [
                "hello",
                "world"
            ],
            b: {
                demo:['this','is','a','demo']
            }
        }
        console.table(obj);
    }
    time(){
        const a = ["hello","world"];
        console.time('for');
        for(let i = 0; i< a.length; i += 1){
            console.log(a[i]);
        }
        console.timeEnd('for');

        console.time('map');
        a.map((str,index)=>{
            console.log(str);
        });
        console.timeEnd('map');
    }
    timestamp(){
        /* still trying to figure out how this works */
        console.timeStamp('ts');
    }
    trace(){
        const a = ()=>{
            b();
        }
        const b = () =>{
            c();
        }
        const c = ()=>{
            console.assert(1===2,"not equal");
            console.trace('tracing the origin');
        }
        
        a();
    }
    warn(){
        console.warn("this is a warning!!");
    }
}