import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: '🎨',
      title: 'Desenvolvimento Frontend',
      description: 'Criação de interfaces modernas e responsivas com as melhores práticas de UX/UI.',
      features: [
        'React, Angular, Vue.js',
        'Design Responsivo',
        'Performance Otimizada',
        'Acessibilidade (WCAG)'
      ]
    },
    {
      icon: '⚙️',
      title: 'Desenvolvimento Backend',
      description: 'Construção de APIs robustas e escaláveis com arquiteturas bem definidas.',
      features: [
        'Node.js, Python, Java',
        'APIs RESTful e GraphQL',
        'Microservices',
        'Banco de Dados SQL/NoSQL'
      ]
    },
    {
      icon: '🚀',
      title: 'DevOps & Cloud',
      description: 'Implementação de CI/CD e infraestrutura em nuvem para máxima disponibilidade.',
      features: [
        'AWS, Azure, Google Cloud',
        'Docker & Kubernetes',
        'CI/CD Pipelines',
        'Monitoramento e Logs'
      ]
    },
    {
      icon: '🔧',
      title: 'Otimização de Sistemas',
      description: 'Análise e melhoria de performance de aplicações existentes.',
      features: [
        'Code Review',
        'Refatoração de Código',
        'Otimização de Banco de Dados',
        'Análise de Performance'
      ]
    },
    {
      icon: '📱',
      title: 'Desenvolvimento Mobile',
      description: 'Aplicativos nativos e híbridos para iOS e Android.',
      features: [
        'React Native',
        'Flutter',
        'Progressive Web Apps',
        'App Store Deployment'
      ]
    },
    {
      icon: '💡',
      title: 'Consultoria Técnica',
      description: 'Orientação estratégica sobre arquitetura e escolha de tecnologias.',
      features: [
        'Arquitetura de Software',
        'Code Review',
        'Mentoria de Equipes',
        'Planejamento Técnico'
      ]
    }
  ];
}
