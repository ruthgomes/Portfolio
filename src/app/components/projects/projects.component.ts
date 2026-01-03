import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  projectImage: string;
  category: string;
  features: string[];
  technologies: string[];
  link?: string;
  figmaLink: string;
  designProcess: DesignStep[];
  challenge: string;
  solution: string;
  results: string;
}

interface DesignStep {
  number: number;
  text: string;
}

interface MiniProject {
  title: string;
  description: string;
  icon: string;
  tags: string[];
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
      title: 'Plataforma de Educação Online',
      description: 'Design completo de uma plataforma de cursos online com foco em engajamento e retenção de alunos.',
      projectImage: '🎓',
      category: 'SaaS Platform',
      features: [
        'Dashboard personalizado para alunos',
        'Player de vídeo com anotações',
        'Sistema de gamificação e conquistas',
        'Comunidade interativa entre alunos'
      ],
      technologies: ['Figma', 'React', 'TypeScript', 'Styled Components', 'GraphQL'],
      link: 'https://exemplo.com',
      figmaLink: 'https://figma.com/design',
      designProcess: [
        { number: 1, text: 'Pesquisa com usuários e análise de concorrência' },
        { number: 2, text: 'User journeys e wireframes de baixa fidelidade' },
        { number: 3, text: 'Design system completo e protótipos interativos' },
        { number: 4, text: 'Testes de usabilidade e refinamento final' }
      ],
      challenge: 'Baixa taxa de conclusão de cursos e alto índice de abandono',
      solution: 'Implementação de sistema de gamificação e progresso visual',
      results: 'Aumento de 45% na retenção de alunos e 60% nas taxas de conclusão'
    },
    {
      title: 'App de Saúde Mental',
      description: 'Aplicativo móvel para acompanhamento de saúde mental com diário de humor e exercícios terapêuticos.',
      projectImage: '🧠',
      category: 'Mobile App',
      features: [
        'Diário de humor com visualizações',
        'Exercícios guiados de mindfulness',
        'Tracker de hábitos saudáveis',
        'Relatórios semanais e mensais'
      ],
      technologies: ['Figma', 'React Native', 'Firebase', 'Chart.js', 'Push Notifications'],
      figmaLink: 'https://figma.com/design',
      designProcess: [
        { number: 1, text: 'Entrevistas com especialistas em saúde mental' },
        { number: 2, text: 'Mapa de empatia e personas detalhadas' },
        { number: 3, text: 'Design de micro-interações calmantes' },
        { number: 4, text: 'Testes A/B de cores e tipografia' }
      ],
      challenge: 'Criar uma experiência acolhedora sem parecer clínica ou fria',
      solution: 'Paleta de cores suaves e micro-interações que criam conexão emocional',
      results: 'Nota 4.8/5 na App Store e 90% de retenção mensal de usuários'
    },
    {
      title: 'Marketplace de Produtos Artesanais',
      description: 'Plataforma E-commerce para artesãos venderem seus produtos com foco em storytelling.',
      projectImage: '🛍️',
      category: 'E-commerce',
      features: [
        'Perfil personalizado do artesão com história',
        'Sistema de avaliações e reviews',
        'Chat integrado entre comprador e vendedor',
        'Dashboard de analytics para vendedores'
      ],
      technologies: ['Figma', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: 'https://exemplo.com',
      figmaLink: 'https://figma.com/design',
      designProcess: [
        { number: 1, text: 'Workshops com artesãos para entender necessidades' },
        { number: 2, text: 'Arquitetura da informação complexa de categorias' },
        { number: 3, text: 'Design focado em fotografia de produtos' },
        { number: 4, text: 'Otimização para dispositivos móveis' }
      ],
      challenge: 'Diversidade de produtos e necessidade de destacar a história por trás de cada item',
      solution: 'Layout que prioriza fotografia e storytelling do artesão',
      results: 'Aumento de 300% nas vendas no primeiro trimestre após o redesign'
    },
    {
      title: 'Sistema de Gestão de Projetos',
      description: 'Ferramenta corporativa para gestão ágil de projetos com múltiplas equipes.',
      projectImage: '📋',
      category: 'B2B Software',
      features: [
        'Quadro Kanban com arrastar e soltar',
        'Timeline visual de projetos',
        'Integração com ferramentas populares',
        'Relatórios automáticos de progresso'
      ],
      technologies: ['Figma', 'Vue.js', 'Python', 'MongoDB', 'WebSockets'],
      figmaLink: 'https://figma.com/design',
      designProcess: [
        { number: 1, text: 'Shadowing de equipes de desenvolvimento' },
        { number: 2, text: 'Análise de fluxos de trabalho existentes' },
        { number: 3, text: 'Design de componentes reutilizáveis complexos' },
        { number: 4, text: 'Testes com usuários reais em ambiente de trabalho' }
      ],
      challenge: 'Complexidade de informações sem sobrecarregar a interface',
      solution: 'Design modular com modo foco e informações contextuais',
      results: 'Redução de 40% no tempo de gestão de projetos e aumento da produtividade'
    }
  ];

  miniProjects: MiniProject[] = [
    {
      title: 'Redesign de App Bancário',
      description: 'Modernização da interface de um aplicativo bancário tradicional',
      icon: '🏦',
      tags: ['UI Design', 'Mobile', 'Fintech']
    },
    {
      title: 'Landing Page SaaS',
      description: 'Design e desenvolvimento de landing page de alta conversão',
      icon: '🚀',
      tags: ['Web Design', 'Conversion', 'Marketing']
    },
    {
      title: 'Sistema de Design',
      description: 'Criação de design system para empresa de tecnologia',
      icon: '🎨',
      tags: ['Design Systems', 'Documentação', 'UI Kit']
    },
    {
      title: 'Dashboard Analytics',
      description: 'Visualização de dados complexos para tomada de decisão',
      icon: '📊',
      tags: ['Data Viz', 'Dashboard', 'B2B']
    }
  ];
}
