import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CocheService } from 'src/app/service/coche.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-coche',
  templateUrl: './post-coche.component.html',
  styleUrls: ['./post-coche.component.sass']
})
export class PostCocheComponent {

  postCocheForm!: FormGroup;

constructor(private cocheService: CocheService, 
  private fb:FormBuilder,
  private router: Router) { }

ngOnInit(){

this.postCocheForm = this.fb.group({

  marca : [null, [Validators.required]],
  modelo : [null, [Validators.required]]
})
}

postCoche() {
  console.log(this.postCocheForm.value);
  this.cocheService.postCoche(this.postCocheForm.value).subscribe((res) => {
    console.log(res);
    this.router.navigateByUrl("");
  })

}

}
