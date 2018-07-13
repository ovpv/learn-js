export default class Document{
    init(){
        this.body();
        this.charset();
        this.childCount();
        this.children();
        this.compat();
        this.contentType();
        this.currentScript();
        this.defaultView();
        // this.designMode();
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
    contentType(){
        const contentType = document.contentType;
        console.info(contentType);
    }
    currentScript(){
        const currScript = document.currentScript;
        console.info(currScript);
    }
    defaultView(){
        const defaultView = document.defaultView;
        console.dir(defaultView);
    }
    // designMode(){
    //     const iframe = document.getElementsByClassName('iframe');
    //     iframe.contentDocument.designMode = "on";
    //     const player = document.getElementById('player');

    // }
}