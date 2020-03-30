export class Task {
    private _active:boolean;
    
    constructor(private _name:string){
      this._active = true;
    }
    
    get name():string{
      return this._name;
    }
    
    get active():boolean{
      return this._active;
    }
    
    deactive():void{
      this._active = false;
    }
  }