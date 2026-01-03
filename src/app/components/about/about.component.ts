import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills = {
    frontend: [
      { name: 'Angular', level: 95 },
      { name: 'React', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'TypeScript', level: 95 },
      { name: 'HTML/CSS/SCSS', level: 98 }
    ],
    backend: [
      { name: 'Node.js', level: 92 },
      { name: 'Python', level: 88 },
      { name: 'Java', level: 85 },
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 87 }
    ],
    tools: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 88 },
      { name: 'AWS', level: 85 },
      { name: 'CI/CD', level: 90 },
      { name: 'Agile/Scrum', level: 92 }
    ]
  };
}
