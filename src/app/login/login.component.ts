import { Component, OnInit, OnChanges } from "@angular/core";
import { HttpService } from "../Shared/http.service";
import { FormControl, Validators } from "@angular/forms";
import { DogComponent } from "../dummy/dog/dog.component";
import { CowComponent } from "../dummy/cow/cow.component";
import { CatComponent } from "../dummy/cat/cat.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  isSubmitted: boolean = false;
 
  image =
    "https://images.freeimages.com/images/large-previews/7bc/bald-eagle-1-1400106.jpg";
  name1;
  age;
  loading = false;
  buttionText = "Submit";



  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);
  cityFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);
  numberFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4),
    
  ]);

  dummyComponent = DogComponent;

  constructor(public http: HttpService) {}

  
  ngOnInit() {
    console.log(this.http.test);
    
  }


  onSubmit() {
    // Perform form submission logic here
    this.isSubmitted = true;
  }
 

 



  register() {
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      name: this.nameFormControl.value,
      email: "solmimohamed@gmail.com",
      city:this.cityFormControl.value,
      number:this.numberFormControl.value
    }
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );
  }
}
