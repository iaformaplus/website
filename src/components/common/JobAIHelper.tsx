import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Briefcase, ArrowRight, Lightbulb, GraduationCap } from 'lucide-react';
import Button from './Button';

// Job data with descriptions and recommended AI trainings
const jobsData = {
  "aide-soignant": {
    title: "Aide-soignant(e)",
    description: "Vous accompagnez et assistez les patients dans leur vie quotidienne et leurs soins",
    aiHelp: "L'IA peut vous aider à optimiser le suivi des patients, automatiser la documentation médicale et prédire les besoins en soins",
    trainings: ["Utiliser ChatGPT au travail", "IA & gestion administrative", "IA pour indépendants"]
  },
  "infirmier": {
    title: "Infirmier / Infirmière",
    description: "Vous prodiguez des soins et assurez le suivi médical des patients",
    aiHelp: "L'IA peut faciliter la gestion des dossiers patients, l'organisation des soins et la veille médicale",
    trainings: ["Utiliser ChatGPT au travail", "IA & gestion administrative", "Power BI & IA"]
  },
  "professeur": {
    title: "Professeur des écoles",
    description: "Vous enseignez et accompagnez les élèves dans leur apprentissage",
    aiHelp: "L'IA peut vous aider à créer du matériel pédagogique, personnaliser l'apprentissage et automatiser les tâches administratives",
    trainings: ["Utiliser ChatGPT au travail", "Midjourney + Canva AI pour le visuel", "IA & gestion administrative"]
  },
  "vendeur": {
    title: "Vendeur(se)",
    description: "Vous conseillez les clients et réalisez des ventes en magasin",
    aiHelp: "L'IA peut optimiser la gestion des stocks, personnaliser les recommandations clients et automatiser le suivi des ventes",
    trainings: ["Utiliser ChatGPT au travail", "IA & marketing digital", "IA & SEO / réseaux sociaux"]
  },
  "agent-immobilier": {
    title: "Agent immobilier",
    description: "Vous accompagnez les clients dans leurs projets immobiliers",
    aiHelp: "L'IA peut automatiser la recherche de biens, la création d'annonces et le suivi client",
    trainings: ["Utiliser ChatGPT au travail", "Midjourney + Canva AI pour le visuel", "IA & marketing digital"]
  },
  "secretaire": {
    title: "Secrétaire",
    description: "Vous gérez l'administratif et organisez la vie de l'entreprise",
    aiHelp: "L'IA peut automatiser la gestion documentaire, la prise de rendez-vous et la correspondance",
    trainings: ["Utiliser ChatGPT au travail", "Automatiser son business avec Make + Zapier + GPT", "IA & gestion administrative"]
  },
  "graphiste": {
    title: "Graphiste",
    description: "Vous créez des designs et supports visuels pour vos clients",
    aiHelp: "L'IA peut accélérer la création visuelle, générer des variations et automatiser les tâches répétitives",
    trainings: ["Midjourney + Canva AI pour le visuel", "IA & marketing digital", "Automatiser son business avec Make + Zapier + GPT"]
  },
  "developpeur": {
    title: "Développeur web",
    description: "Vous concevez et développez des applications web",
    aiHelp: "L'IA peut accélérer le codage, détecter les bugs et générer de la documentation",
    trainings: ["Utiliser ChatGPT au travail", "Data science avec Python", "Créer un chatbot (Dialogflow)"]
  },
  "artisan": {
    title: "Artisan",
    description: "Vous réalisez des travaux et prestations techniques",
    aiHelp: "L'IA peut optimiser la gestion des devis, la planification des interventions et le suivi client",
    trainings: ["Utiliser ChatGPT au travail", "IA pour indépendants", "Automatiser son business avec Make + Zapier + GPT"]
  },
  "marketing": {
    title: "Chef de projet marketing",
    description: "Vous élaborez et pilotez les stratégies marketing",
    aiHelp: "L'IA peut automatiser les campagnes, analyser les données et optimiser les contenus",
    trainings: ["IA & marketing digital", "IA & SEO / réseaux sociaux", "Power BI & IA"]
  }
};

const JobAIHelper: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  // Filter jobs based on search term
  const filteredJobs = Object.entries(jobsData).filter(([key, job]) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comment l'IA peut vous aider dans votre métier ?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Sélectionnez votre profession pour découvrir comment l'intelligence artificielle 
            peut transformer votre quotidien et quelles formations sont les plus adaptées.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Recherchez votre métier..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-lg border focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Job Grid */}
        {!selectedJob && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {filteredJobs.map(([key, job]) => (
              <button
                key={key}
                onClick={() => setSelectedJob(key)}
                className="p-6 bg-gray-50 rounded-xl text-left hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase size={20} className="text-primary" />
                  <h3 className="font-semibold">{job.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{job.description}</p>
              </button>
            ))}
          </div>
        )}

        {/* Selected Job Details */}
        {selectedJob && jobsData[selectedJob] && (
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedJob(null)}
              className="text-primary font-medium mb-6 hover:underline"
            >
              ← Retour à la liste des métiers
            </button>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-white p-4 rounded-xl">
                  <Briefcase size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{jobsData[selectedJob].title}</h3>
                  <p className="text-gray-600">{jobsData[selectedJob].description}</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb size={24} className="text-primary" />
                    <h4 className="text-lg font-semibold">Ce que l'IA peut faire pour vous</h4>
                  </div>
                  <p className="text-gray-600 pl-9">{jobsData[selectedJob].aiHelp}</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap size={24} className="text-primary" />
                    <h4 className="text-lg font-semibold">Formations recommandées</h4>
                  </div>
                  <div className="grid gap-4 pl-9">
                    {jobsData[selectedJob].trainings.map((training, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-xl border hover:border-primary transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <h5 className="font-semibold group-hover:text-primary transition-colors">
                            {training}
                          </h5>
                          <Link
                            to={`/formations/${training.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-primary hover:underline flex items-center gap-1"
                          >
                            Découvrir <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <Button
                  to="/contact"
                  variant="primary"
                  fullWidth
                  size="lg"
                >
                  Je veux me former à l'IA
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobAIHelper;