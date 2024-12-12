import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  dropdown: string | null = null;

  toggleDropdown(menu: string) {
    this.dropdown = this.dropdown === menu ? null : menu;
  }

  isCollapsed = false;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  jobs = [
    {
      title: 'Java Developer',
      location: 'New York, NY, US',
      company: 'Celest LLC',
      type: 'Full Time',
      reference: 'CLLC000003',
      image: 'https://daas-prog-test.s3.amazonaws.com/default-logo.png',
      salary:'usd 3000-6000 Monthly'
    },
    {
      title: 'Angular Developer',
      location: 'San Francisco, CA, US',
      company: 'TechCorp',
      type: 'Part Time',
      reference: 'TC000567',
      image: 'https://dsaas-qa-new.s3.amazonaws.com/enterprises/2006c40e-ab19-11ef-9607-0263f75a377b/profile/picture_file_9068.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241212T101915Z&X-Amz-SignedHeaders=host&X-Amz-Expires=18000&X-Amz-Credential=AKIA4FUFBS4NLPC4Z4DC%2F20241212%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=421ee89c0f4e5d1ce917a2ef040fb56474895ced6b8eaf8e93b34b03bbde6098',
            salary:'usd 3000-6000 Monthly'

    },
    {
      title: 'Backend Engineer',
      location: 'Austin, TX, US',
      company: 'InnoWorks',
      type: 'Remote',
      reference: 'IW2024',
      image: 'https://dsaas-qa-new.s3.amazonaws.com/enterprises/2006c40e-ab19-11ef-9607-0263f75a377b/profile/picture_file_9068.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241212T101915Z&X-Amz-SignedHeaders=host&X-Amz-Expires=18000&X-Amz-Credential=AKIA4FUFBS4NLPC4Z4DC%2F20241212%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=421ee89c0f4e5d1ce917a2ef040fb56474895ced6b8eaf8e93b34b03bbde6098',
      salary:'usd 3000-6000 Monthly'

    },
    
    
  
  ];

}
