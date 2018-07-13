export default class Document{
    init(){
        this.body();
        this.charset();
        this.childCount();
        this.children();
        this.compat();
    }
    body(){
        const body = document.body;
        console.info(body);
    }
    charset(){
        const charset = document.characterSet;
        console.info(charset);
    }
    childCount(){
        const body = document.childElementCount;
        console.info(body);
    }
    children(){
        const children = document.children;
        console.dir(children);
    }
    compat(){
        const compat = document.compatMode;
        console.info(compat);
    }
}