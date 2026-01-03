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
    ux: [
      { name: 'User Research', level: 95 },
      { name: 'Wireframing', level: 98 },
      { name: 'Prototyping', level: 96 },
      { name: 'User Testing', level: 90 },
      { name: 'Information Architecture', level: 92 }
    ],
    ui: [
      { name: 'Visual Design', level: 97 },
      { name: 'Design Systems', level: 94 },
      { name: 'Typography', level: 96 },
      { name: 'Color Theory', level: 95 },
      { name: 'Interaction Design', level: 93 }
    ],
    tools: [
      { name: 'Figma', level: 98 },
      { name: 'Adobe XD', level: 92 },
      { name: 'Sketch', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'React/Angular', level: 88 }
    ]
  };
}
