import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  form: FormGroup;
  error: any;
  userId: number = 1;
  uploadResponse = { status: '', message: '', filePath: '' };
  constructor(private formBuilder: FormBuilder, private uploadService: UploadService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      avatar: ['']
    });
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('avatar').value);

    this.uploadService.upload(formData, this.userId).subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
    );
  }

}
