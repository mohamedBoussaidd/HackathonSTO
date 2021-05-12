import { Injectable, OnInit } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ContentCkeckpointmeet implements OnInit{

    public questionReponses :any = [];

    constructor(){
        this.questionReponses.push(
            {
                numero:1,
                question : "Mars est plus proche du Soleil que la Terre",
                reponses : ["vrai", "Faux"],
                idValide : "1"

            },
            {
                numero:2,
                question : "La planète Mars est plus grosse que la Terre",
                reponses : ["vrai", "Faux"],
                idValide : "1"

            },

            {
                numero:3,
                question : "Quelle est la température moyenne à la surface de Mars ?",
                reponses : ["-63°C", "-13°C", "-3°C"],
                idValide : "0"

            },

            {
                numero:4,
                question : "Une année sur Mars dure",
                reponses : ["365 jours", "687 jours", "932 jours"],
                idValide : "1"

            },
            {
                numero:5,
                question : "L'atmosphère de Mars est constituée principalement de quoi ?",
                reponses : ["azote", "oxygène", "de dioxyde de carbone"],
                idValide : "2"

            },
            
            )
        
    }
    ngOnInit(): void {

            }

    getQuestion() :any []{
        // si -1, je genere un chiffre entre 0 et la taille -1 du tableau 
        // je renvoi la question correspondante
        console.log(this.questionReponses)
        return this.questionReponses
        // si on me donne un chiffre, je renvoi la question qui a ce numéro.

    }
}