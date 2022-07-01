import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})

export class ServerComponent{
    serverID :number = 10;
    serverStatus: string ="Offline";
    
    getServerStatus(){
        if(this.serverID == 10){
            this.serverStatus = "Online";
            this.serverID = 15;
        }
        else{
            this.serverStatus="Offline";
        }
        return this.serverStatus;
    }
}