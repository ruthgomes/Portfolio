import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com painel administrativo, gateway de pagamento integrado e sistema de gestão de estoque.',
      image: '🛒',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS']
    },
    {
      title: 'Sistema de Gestão Empresarial',
      description: 'ERP customizado para gestão de vendas, estoque, financeiro e relatórios analíticos em tempo real.',
      image: '📊',
      technologies: ['React', 'Python', 'Django', 'MongoDB', 'Docker']
    },
    {
      title: 'App de Delivery',
      description: 'Aplicativo mobile para delivery com rastreamento em tempo real, sistema de avaliações e pagamento integrado.',
      image: '🚚',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Google Maps API']
    },
    {
      title: 'Portal de Educação Online',
      description: 'Plataforma de cursos online com videoaulas, exercícios interativos, certificados e área do aluno.',
      image: '🎓',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Vimeo API', 'Stripe']
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard corporativo com visualização de dados em tempo real, relatórios customizados e integração com múltiplas APIs.',
      image: '📈',
      technologies: ['Angular', 'D3.js', 'Node.js', 'Redis', 'Elasticsearch']
    },
    {
      title: 'Sistema de Agendamento',
      description: 'Sistema completo de agendamento online com notificações, pagamento e integração com Google Calendar.',
      image: '📅',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Twilio']
    }
  ];
}
