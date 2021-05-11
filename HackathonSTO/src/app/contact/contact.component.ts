import { Component, OnInit } from "@angular/core";
import { User } from "../model/user.model";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  imageLogoTeam = "../../assets/img/teamU.png";

  //Adresse
  nom: string = "Wild Code School";
  adress: any = { street: "17 rue Delandine", city: "69002 Lyon" };
  telephoneNumber: string = "06 40 95 24 24";

  //Images des social médias

  user:User = new User();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    window.alert("Votre message a bien été envoyé!");
  }
}
