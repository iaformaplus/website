import React, { useState } from 'react';
import { Search, Calendar, User, MessageCircle, Heart, Share2, ArrowRight, Tag, Clock, Eye, ChevronDown, Send, ThumbsUp, Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

// Types pour les articles et commentaires
interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  likes: number;
  replies?: Comment[];
}

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  views: number;
  tags: string[];
  externalLink?: string;
}

interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  duration: string;
  views: string;
}

// Données d'articles d'actualité IA
const actualiteArticles: Article[] = [
  {
    id: '1',
    title: 'AT&T abandonne ChatGPT pour développer une IA open source interne',
    slug: 'att-abandonne-chatgpt-ia-open-source-interne',
    excerpt: 'Le géant des télécoms américain mise sur une solution IA propriétaire pour protéger ses données sensibles et réduire les coûts d\'abonnement aux services externes.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Actualités IA',
    author: 'Équipe IA Forma Plus',
    publishDate: '2025-01-20',
    readTime: '4 min',
    views: 1847,
    tags: ['AT&T', 'Open Source', 'Entreprise', 'Stratégie'],
    externalLink: 'https://www.businessinsider.com'
  },
  {
    id: '2',
    title: 'DeepSeek publie son modèle R1 : 3 millions de téléchargements en 48h',
    slug: 'deepseek-modele-r1-3-millions-telechargements',
    excerpt: 'La startup chinoise DeepSeek frappe fort avec son nouveau modèle R1, rivalisant avec GPT-4 tout en étant entièrement open source et gratuit pour les développeurs.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Innovation',
    author: 'Équipe IA Forma Plus',
    publishDate: '2025-01-18',
    readTime: '6 min',
    views: 2934,
    tags: ['DeepSeek', 'R1', 'Open Source', 'Chine'],
    externalLink: 'https://www.theverge.com'
  },
  {
    id: '3',
    title: 'Sarvam.ai démocratise l\'IA en Inde avec ses modèles open source',
    slug: 'sarvam-ai-democratise-ia-inde-modeles-open-source',
    excerpt: 'La startup indienne Sarvam.ai lance une série de modèles d\'IA spécialement conçus pour les langues et cultures locales, marquant une étape importante pour l\'IA inclusive.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Innovation',
    author: 'Équipe IA Forma Plus',
    publishDate: '2025-01-16',
    readTime: '5 min',
    views: 1523,
    tags: ['Sarvam.ai', 'Inde', 'Inclusion', 'Langues'],
    externalLink: 'https://techcrunch.com'
  },
  {
    id: '4',
    title: 'Open Source Initiative redéfinit les standards de l\'IA transparente',
    slug: 'open-source-initiative-standards-ia-transparente',
    excerpt: 'L\'OSI publie de nouvelles directives pour définir ce qu\'est vraiment une IA open source, établissant des critères stricts de transparence et d\'accessibilité.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Réglementation',
    author: 'Équipe IA Forma Plus',
    publishDate: '2025-01-14',
    readTime: '7 min',
    views: 1156,
    tags: ['OSI', 'Standards', 'Transparence', 'Open Source'],
    externalLink: 'https://www.wired.com'
  },
  {
    id: '5',
    title: 'Microsoft investit 80 milliards dans l\'infrastructure IA pour 2025',
    slug: 'microsoft-investit-80-milliards-infrastructure-ia-2025',
    excerpt: 'Le géant de Redmond annonce un investissement record pour développer ses centres de données IA et accélérer l\'adoption de Copilot dans les entreprises.',
    image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Business',
    author: 'Équipe IA Forma Plus',
    publishDate: '2025-01-12',
    readTime: '5 min',
    views: 2847,
    tags: ['Microsoft', 'Investissement', 'Infrastructure', 'Copilot'],
    externalLink: 'https://www.wsj.com'
  },
  {
    id: '6',
    title: 'L\'IA générative transforme le secteur de l\'éducation en France',
    slug: 'ia-generative-transforme-secteur-education-france',
    excerpt: 'Étude exclusive sur l\'adoption de l\'IA dans les établissements scolaires français : 67% des enseignants utilisent désormais des outils d\'IA pour préparer leurs cours.',
    image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Éducation',
    author: 'Équipe IA Forma Plus',
    publishDate: '2025-01-10',
    readTime: '8 min',
    views: 1789,
    tags: ['Éducation', 'France', 'Enseignants', 'Étude'],
    externalLink: 'https://www.lemonde.fr'
  }
];

// Données des vidéos pédagogiques
const videos: Video[] = [
  {
    id: '1',
    title: 'Introduction à l\'Intelligence Artificielle',
    description: 'Comprendre les bases de l\'IA en 15 minutes - Parfait pour débuter',
    youtubeId: 'ad79nYk2keg',
    duration: '15:32',
    views: '2.1M'
  },
  {
    id: '2',
    title: 'What Is AI? Crash Course Computer Science',
    description: 'Cours accéléré sur l\'IA par Crash Course - Explications claires et visuelles',
    youtubeId: 'a0_lo_GDcFw',
    duration: '12:47',
    views: '1.8M'
  },
  {
    id: '3',
    title: 'Machine Learning Explained by Google',
    description: 'Google explique le Machine Learning de manière accessible à tous',
    youtubeId: 'HcqpanDadyQ',
    duration: '8:23',
    views: '956K'
  }
];

// Commentaires de démonstration
const communityComments: Comment[] = [
  {
    id: 'comm1',
    author: 'Thomas Entrepreneur',
    content: 'Très intéressant de voir AT&T prendre cette direction ! Dans ma PME, on hésite encore entre ChatGPT et développer notre propre solution. Quelqu\'un a des retours d\'expérience ?',
    date: '2025-01-21',
    likes: 8,
    replies: [
      {
        id: 'comm1r1',
        author: 'Marie Tech',
        content: 'Nous avons fait le même choix qu\'AT&T l\'année dernière. Coût initial plus élevé mais ROI excellent sur 18 mois !',
        date: '2025-01-21',
        likes: 5
      }
    ]
  },
  {
    id: 'comm2',
    author: 'Sophie Formatrice',
    content: 'Excellente sélection d\'articles ! J\'utilise ces infos pour mes formations en entreprise. Vos stagiaires apprécient-ils ce type de veille ?',
    date: '2025-01-20',
    likes: 12
  },
  {
    id: 'comm3',
    author: 'Dev IA Passionné',
    content: 'DeepSeek R1 est vraiment impressionnant ! J\'ai testé sur plusieurs cas d\'usage et les performances rivalisent avec GPT-4. Révolution en cours 🚀',
    date: '2025-01-19',
    likes: 15
  }
];

const categories = ['Toutes', 'Actualités IA', 'Innovation', 'Business', 'Réglementation', 'Éducation'];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

  // Filtrer les articles
  const filteredArticles = actualiteArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'Toutes' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !commentAuthor.trim()) return;

    setIsSubmittingComment(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      console.log('Nouveau commentaire:', { author: commentAuthor, content: newComment });
      setNewComment('');
      setCommentAuthor('');
      setIsSubmittingComment(false);
    }, 1000);
  };

  return (
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-secondary text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Actualité IA
            </h1>
            
            {/* Introduction */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
              <h2 className="text-xl font-semibold mb-3">Bienvenue dans l'actualité IA</h2>
              <p className="text-gray-200 leading-relaxed">
                Retrouvez ici les dernières tendances, innovations, vidéos et discussions 
                autour de l'intelligence artificielle appliquée au monde professionnel.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher dans l'actualité IA..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="sticky top-0 z-30 bg-white border-b shadow-sm">
        <div className="container py-4">
          <div className="flex flex-wrap items-center gap-4 justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === category 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="text-sm text-gray-500">
              {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} trouvé{filteredArticles.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Articles récents */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">📰 Articles récents</h2>
            <div className="text-sm text-gray-500">
              Mis à jour quotidiennement
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article 
                key={article.id} 
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs flex items-center">
                      <Eye size={12} className="mr-1" />
                      {article.views}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(article.publishDate).toLocaleDateString('fr-FR')}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                        <User size={14} className="text-primary" />
                      </div>
                      <span className="text-sm text-gray-600">{article.author}</span>
                    </div>
                    {article.externalLink ? (
                      <a
                        href={article.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform"
                      >
                        Lire l'article
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    ) : (
                      <button className="text-primary hover:text-primary/80 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                        Lire l'article
                        <ArrowRight size={14} className="ml-1" />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <MessageCircle size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Aucun article trouvé</h3>
              <p className="text-gray-600">
                Essayez de modifier vos critères de recherche ou explorez nos formations IA.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Vidéos pédagogiques */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">▶️ Vidéos pédagogiques sur l'IA</h2>
            <div className="text-sm text-gray-500">
              Sélection YouTube
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                {/* Video Thumbnail */}
                <div className="relative">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <img 
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Play size={24} className="text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye size={14} className="mr-1" />
                      {video.views} vues
                    </div>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
                    >
                      <Play size={14} className="mr-1" />
                      Regarder
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Espace de discussion communautaire */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                  <MessageCircle size={32} className="mr-3 text-primary" />
                  💬 Partagez vos idées sur l'IA
                </h2>
                <p className="text-gray-600 max-w-2xl">
                  Échangez avec la communauté IA Forma Plus : posez vos questions, 
                  partagez vos expériences et découvrez les retours d'autres professionnels.
                </p>
              </div>
            </div>

            {/* Formulaire de commentaire */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Rejoignez la discussion</h3>
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Votre nom ou pseudo"
                    value={commentAuthor}
                    onChange={(e) => setCommentAuthor(e.target.value)}
                    className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/50"
                    required
                  />
                  <div className="flex items-center text-sm text-gray-500">
                    <User size={16} className="mr-2" />
                    Votre identité restera confidentielle
                  </div>
                </div>
                <textarea
                  placeholder="Partagez votre expérience avec l'IA, posez une question, donnez votre avis..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/50"
                  required
                />
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    💡 Conseil : Mentionnez votre secteur d'activité pour des réponses plus pertinentes
                  </div>
                  <Button 
                    type="submit" 
                    variant="primary" 
                    rightIcon={<Send size={16} />}
                    isLoading={isSubmittingComment}
                  >
                    Publier
                  </Button>
                </div>
              </form>
            </div>

            {/* Discussions existantes */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Discussions récentes</h3>
              
              {communityComments.map((comment) => (
                <div key={comment.id} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <User size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">{comment.author}</div>
                        <div className="text-sm text-gray-500">
                          {new Date(comment.date).toLocaleDateString('fr-FR')} à {new Date(comment.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                    <button className="flex items-center text-gray-500 hover:text-primary transition-colors">
                      <ThumbsUp size={16} className="mr-1" />
                      {comment.likes}
                    </button>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{comment.content}</p>
                  
                  {/* Réponses */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="ml-6 space-y-4 border-l-2 border-gray-100 pl-6">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mr-2">
                                <User size={14} className="text-white" />
                              </div>
                              <div>
                                <div className="font-medium text-sm">{reply.author}</div>
                                <div className="text-xs text-gray-500">
                                  {new Date(reply.date).toLocaleDateString('fr-FR')}
                                </div>
                              </div>
                            </div>
                            <button className="flex items-center text-gray-500 hover:text-primary transition-colors text-sm">
                              <ThumbsUp size={12} className="mr-1" />
                              {reply.likes}
                            </button>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">{reply.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      💬 Répondre à ce commentaire
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Formation IA */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                🎓 Passez de la théorie à la pratique
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Ces actualités vous inspirent ? Transformez cette veille en compétences concrètes 
                avec nos formations IA certifiées Qualiopi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/formations-ia"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#1877F2] hover:bg-[#166fe5] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  🧠 Voir nos formations IA
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#1877F2] hover:bg-[#166fe5] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  💬 Parler à un expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">📧 Restez informé de l'actualité IA</h2>
            <p className="text-gray-600 mb-8">
              Recevez chaque semaine notre sélection d'actualités IA, 
              d'outils et de conseils pratiques directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Votre email professionnel"
                className="flex-1 max-w-md px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/50"
              />
              <Button variant="primary">
                S'abonner gratuitement
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              🔒 Pas de spam, désinscription en 1 clic
            </p>
          </div>
        </div>
      </section>
  );
};

export default BlogPage;