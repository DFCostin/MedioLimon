import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  contactForm: FormGroup = new FormGroup({
    name : new FormControl('', Validators.required),
    phone : new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    affair : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
  });

  constructor(){};
  
  ngOnInit(): void {}

  onSubmit():void {
    if(this.contactForm.valid){
      console.log("aaaaaa");
    }else{
      Object.keys(this.contactForm.controls).forEach(field => {
        const control = this.contactForm.get(field);
        control?.markAsTouched({onlySelf: true });
      })
    }

  }

}
