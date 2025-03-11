import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CocheService } from 'src/app/service/coche.service';

@Component({
  selector: 'app-update-coche',
  templateUrl: './update-coche.component.html',
  styleUrls: ['./update-coche.component.sass']
})
export class UpdateCocheComponent {

  updateCocheForm!: FormGroup;
  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute: ActivatedRoute,
    private service: CocheService,
    private fb: FormBuilder, 
    private router:Router) {}

    ngOnInit() {
      this.updateCocheForm = this.fb.group({
        marca: [null, [Validators.required]],
        modelo: [null, [Validators.required]]
      })
      this.getCocheById();
    }

    getCocheById() {
      this.service.getCocheById(this.id).subscribe((res) => {
        console.log(res);
        this.updateCocheForm.patchValue(res);
      }) 
    }

    updateCoche() {
      this.service.updateCoche(this.id, this.updateCocheForm.value).subscribe((res) => {
        console.log(res);
        if (res.id != null) {
          this.router.navigateByUrl("");
        }
      })
    }
  

}
