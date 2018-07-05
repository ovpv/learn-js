import Console from './console';
// import ApplicationCache from './cache';
export default class Window{
    constructor(){
        this.popup = null;
    }
    init(){
        var console = new Console();
        // var cache = new ApplicationCache(); /* use of ApplicationCache is discouraged. use service workers instead */
        console.init();
        cache.init();
        /* Commenting the following inorder to avoid alert calls/popups on every reload */
        // this.alert();
        // this.open("https://www.facebook.com");
        // this.close();
        this.encodeDecode("hello world");
        // this.blur();
    }
    alert(){
        window.alert("Hello world");
        alert("another way to call alert");
    }
    open(url){
        let popup = window.open(url,"","height=200px width=200px");
        this.popup = popup;
    }
    close(){
        setTimeout(()=>{
            //window.closed will return a boolean
            if(this.popup && !this.popup.closed){
                this.popup.close();
            }
        },5000);
    }
    encodeDecode(string){
        const encoded = this.btoa(string);
        console.log(encoded);
        let decoded;
        setTimeout(()=>{
            decoded = this.atob(encoded);
            console.log(decoded);
        },3000)

    }
    blur(){
        //cannot figure out why this method is not worrking.
        this.popup.blur();
    }
    //atob method is used to decode the base64 encoded string
    atob(string){
        const atobstr = window.atob(string);
        return atobstr;
    }
    //btoa method is used to base 64 encode the given string
    btoa(string){
        const btoastr = window.btoa(string);
        return btoastr;
    }
}