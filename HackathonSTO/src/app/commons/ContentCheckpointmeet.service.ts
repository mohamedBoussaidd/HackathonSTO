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
                selecte : ["vrai", "Faux"],
                reponses :['non Mars est plus eloigner du soleil que la terre'],
                idValide : 1

            },
            {
                numero:2,
                question : "La planète Mars est plus grosse que la Terre",
                selecte : ["vrai", "Faux"],
                reponses :['la planete Mars est 10 fois plus petit que la terre sa superficie est de 1000 km'],
                idValide : 1

            },

            {
                numero:3,
                question : "Quelle est la température moyenne à la surface de Mars ?",
                selecte : ["-63°C", "-13°C", "-3°C"],
                reponses :['la temperature moyen sur mars avoisine les -63°C'],
                idValide : 0

            },

            {
                numero:4,
                question : "Une année sur Mars dure",
                selecte : ["365 jours", "687 jours", "932 jours"],
                reponses :['le nombre de jour sur Mars est de 687 jours'],
                idValide : 1

            },
            {
                numero:5,
                question : "L'atmosphère de Mars est constituée principalement de quoi ?",
                selecte : ["azote", "oxygène", "de dioxyde de carbone"],
                reponses :[" L'atmosphère de Mars est constituée principalement de dioxyde de carbone "],
                idValide : 2

            },
            
            )
        
    }
    ngOnInit(): void {

            }

    getQuestion() :any []{
        // si -1, je genere un chiffre entre 0 et la taille -1 du tableau 
        // je renvoi la question correspondante
        return this.questionReponses
        // si on me donne un chiffre, je renvoi la question qui a ce numéro.

    }
}