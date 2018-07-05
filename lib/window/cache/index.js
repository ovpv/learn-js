export default class ApplicationCache{
    constructor(){
        this.cache = window.applicationCache;
        this.cStatus = null;
    }
    init(){
        console.log(this.cache);
        this.cStatus = this.checkStatus(this.cache.status);
        console.log(this.cStatus);
    }
    checkStatus(status){
        switch (status) {
            case 0: // UNCACHED == 0
              console.log('no cache');
              return 'UNCACHED';
              break;
            case 1: // IDLE == 1
              this.cache.addEventListener('cached',(e)=>{
                console.log('do something while cache status is idle',e);
              })
              return 'IDLE';
              break;
            case 2: // CHECKING == 2
              this.cache.addEventListener('checking',(e)=>{
                console.log('do something while manifest is checking for new updates',e);
              })
              return 'CHECKING';
              break;
            case 3: // DOWNLOADING == 3
              this.cache.addEventListener('downloading',(e)=>{
                console.log('do something while new updated site data is being downloaded',e)
              })
              return 'DOWNLOADING';
              break;
            case 4:  // UPDATEREADY == 4
              this.cache.addEventListener('updateready',(e)=>{
                console.log('do something while new cachae is downloaded and ready to be put into dom',e)
                this.cache.swapCache();
              })
              return 'UPDATEREADY';
              break;
            case 5: // OBSOLETE == 5
              this.cache.addEventListener('obsolete',(e)=>{
                console.log('do something when cache goes obsolete',e)
              })
              return 'OBSOLETE';
              break;
            default:
              return 'UKNOWN CACHE STATUS';
              break;
          };
    }

}