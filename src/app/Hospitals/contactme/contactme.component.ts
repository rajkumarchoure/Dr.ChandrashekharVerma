import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  constructor(private fb: FormBuilder) {

    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [''],
      });
    }

  ngOnInit(): void {
  }
 

  @HostListener('input') oninput() {

  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }

 onSubmit() {
    // this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
    //   alert('Your message has been sent.');
    //   this.contactForm.reset();
    //   this.disabledSubmitButton = true;
    // }, error => {
    //   console.log('Error', error);
    // });
  }

}
