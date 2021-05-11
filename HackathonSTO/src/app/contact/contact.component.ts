import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
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
    Swal.fire({
      title:'Votre message a bien été envoyé!',
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    })
  }
}
