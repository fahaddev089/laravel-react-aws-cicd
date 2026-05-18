import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Container, GitBranch, CheckCircle2, ArrowRight } from "lucide-react";
import { Streamdown } from 'streamdown';

const sections = [
  {
    id: "overview",
    title: "Project Overview",
    content: `# CI/CD for Laravel with Docker & GitHub Actions

This comprehensive guide provides a complete setup for a Continuous Integration/Continuous Deployment (CI/CD) pipeline for a Laravel application using Docker for containerization and GitHub Actions for automation.

## Key Features
- **Multi-stage Docker builds** for optimized production images
- **Automated testing** on every push and pull request
- **Docker image building and pushing** to Docker Hub
- **Database migrations** and cache optimization
- **Queue workers and task scheduling** support`
  },
  {
    id: "structure",
    title: "Project Structure",
    content: `# Directory Organization

\`\`\`
my-laravel-app/
  ├── .github/
  │   └── workflows/
  │       └── main.yml
  ├── docker/
  │   ├── nginx/
  │   │   └── default.conf
  │   ├── php/
  │   │   ├── php-fpm.conf
  │   │   └── production.ini
  │   ├── supervisor/
  │   │   └── supervisord.conf
  │   └── entrypoint.sh
  ├── Dockerfile
  ├── docker-compose.yml
  ├── composer.json
  └── .env.example
\`\`\`

This structure ensures clear separation of concerns and makes the CI/CD pipeline easy to maintain and extend.`
  },
  {
    id: "docker",
    title: "Docker Configuration",
    content: `# Docker Setup

The Docker configuration includes:

## Multi-Stage Dockerfile
- **Stage 1**: Composer dependencies installation
- **Stage 2**: Frontend assets compilation with Node
- **Stage 3**: Production image with PHP-FPM, Nginx, and Supervisor

## Supporting Files
- **nginx/default.conf**: Web server configuration
- **php/production.ini**: PHP optimization settings
- **php/php-fpm.conf**: PHP-FPM pool configuration
- **supervisor/supervisord.conf**: Process management
- **entrypoint.sh**: Container startup script

## docker-compose.yml
Provides local development environment with:
- Laravel application container
- MySQL database
- Redis cache`
  },
  {
    id: "github-actions",
    title: "GitHub Actions Workflow",
    content: `# CI/CD Pipeline

The GitHub Actions workflow includes two main jobs:

## Job 1: Build and Test
- Checkout code
- Setup PHP environment
- Install Composer dependencies
- Run database migrations
- Execute PHPUnit tests

## Job 2: Build and Push Docker Image
- Depends on successful test completion
- Logs into Docker Hub
- Builds Docker image
- Pushes to Docker Hub registry

Triggered on:
- Push to main branch
- Pull requests to main branch`
  },
  {
    id: "setup",
    title: "Getting Started",
    content: `# Setup Instructions

## Step 1: Prepare Your Project
1. Clone or create your Laravel project
2. Ensure you have \`composer.json\` and \`.env.example\` files

## Step 2: Add Docker Files
Copy the following to your project root:
- \`Dockerfile\`
- \`docker-compose.yml\`
- \`docker/\` directory with all configuration files
- \`.github/workflows/main.yml\`

## Step 3: Configure GitHub Secrets
In your GitHub repository settings, add:
- \`DOCKER_USERNAME\`: Your Docker Hub username
- \`DOCKER_PASSWORD\`: Your Docker Hub access token

## Step 4: Update Configuration
Replace \`your-dockerhub-username\` in \`main.yml\` with your actual Docker Hub username.

## Step 5: Push to GitHub
Commit and push your code to the main branch to trigger the pipeline.`
  }
];

const features = [
  {
    icon: Container,
    title: "Docker Containerization",
    description: "Multi-stage builds for optimized production images"
  },
  {
    icon: GitBranch,
    title: "GitHub Actions",
    description: "Automated testing and deployment on every push"
  },
  {
    icon: Code2,
    title: "PHP-FPM & Nginx",
    description: "Production-ready web server configuration"
  },
  {
    icon: CheckCircle2,
    title: "Automated Testing",
    description: "Run tests automatically before deployment"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Laravel CI/CD Guide</h1>
              <p className="text-sm text-slate-600">Docker & GitHub Actions</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-16">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Complete CI/CD Pipeline for Laravel
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Learn how to set up a professional continuous integration and deployment pipeline for your Laravel applications using Docker containerization and GitHub Actions automation.
          </p>
          <div className="flex gap-4">
            <Button className="gap-2" size="lg">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg">
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container py-16">
        <h3 className="text-3xl font-bold text-slate-900 mb-12">Key Features</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
                <Icon className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="container py-16">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            {sections.map((section) => (
              <TabsTrigger key={section.id} value={section.id} className="text-xs md:text-sm">
                {section.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {sections.map((section) => (
            <TabsContent key={section.id} value={section.id} className="mt-6">
              <Card className="p-8 md:p-12">
                <div className="prose prose-sm md:prose-base max-w-none text-slate-900">
                  <Streamdown>{section.content}</Streamdown>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Quick Reference */}
      <section className="container py-16">
        <h3 className="text-3xl font-bold text-slate-900 mb-8">Quick Reference</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Container className="w-5 h-5 text-blue-600" />
              Docker Commands
            </h4>
            <code className="block bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`# Build image
docker build -t app:latest .

# Run with compose
docker-compose up -d

# View logs
docker-compose logs -f app`}
            </code>
          </Card>
          <Card className="p-6">
            <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-blue-600" />
              GitHub Secrets
            </h4>
            <code className="block bg-slate-900 text-slate-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`DOCKER_USERNAME
DOCKER_PASSWORD

Set in:
Settings → Secrets and
variables → Actions`}
            </code>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-16">
        <div className="container py-8">
          <p className="text-center text-slate-600 text-sm">
            Laravel CI/CD Guide • Built with Docker & GitHub Actions • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
