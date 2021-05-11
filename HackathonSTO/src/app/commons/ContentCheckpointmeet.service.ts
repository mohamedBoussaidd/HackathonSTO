import { Injectable, OnInit } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ContentCkeckpointmeet implements OnInit{

    public questionReponses :any = [];

    constructor(){

        
    }
    ngOnInit(): void {

        this.questionReponses.push(
            {
                numero:1,
                question : "Mars est plus proche du Soleil que la Terre",
                reponses : ["vrai", "Faux"],
                idValide : 1

            },
            {
                numero:2,
                question : "La planète Mars est plus grosse que la Terre",
                reponses : ["vrai", "Faux"],
                idValide : 1

            },

            {
                numero:3,
                question : "Quelle est la température moyenne à la surface de Mars ?",
                reponses : ["-63°C", "-13°C", "-3°C"],
                idValide : 0

            },

            {
                numero:4,
                question : "Une année sur Mars dure",
                reponses : ["365 jours", "687 jours", "932 jours"],
                idValide : 1

            },
            {
                numero:5,
                question : "L'atmosphère de Mars est constituée principalement de quoi ?",
                reponses : ["azote", "oxygène", "de dioxyde de carbone"],
                idValide : 2

            },
            
            )    }
}