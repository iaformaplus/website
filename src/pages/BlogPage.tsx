import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, User, MessageCircle, Heart, Share2, ArrowRight, Tag, Clock, Eye, ChevronDown, Send, ThumbsUp } from 'lucide-react';
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
  content: string;
  image: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  views: number;
  tags: string[];
  comments: Comment[];
}

// Données d'articles de blog IA
const blogArticles: Article[] = [
  {
    id: '1',
    title: 'ChatGPT-4 vs Claude 3 : Quel assistant IA choisir pour votre entreprise en 2025 ?',
    slug: 'chatgpt-4-vs-claude-3-comparatif-entreprise-2025',
    excerpt: 'Analyse comparative détaillée des deux leaders de l\'IA conversationnelle pour optimiser votre choix selon vos besoins métier.',
    content: 'Contenu complet de l\'article...',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Outils IA',
    author: 'Marie Dubois',
    publishDate: '2025-01-15',
    readTime: '8 min',
    views: 1247,
    tags: ['ChatGPT', 'Claude', 'Comparatif', 'Entreprise'],
    comments: [
      {
        id: 'c1',
        author: 'Thomas Martin',
        content: 'Excellente analyse ! Nous utilisons ChatGPT-4 depuis 6 mois et les résultats sont impressionnants pour la rédaction de nos contenus marketing.',
        date: '2025-01-16',
        likes: 12,
        replies: [
          {
            id: 'c1r1',
            author: 'Sophie Laurent',
            content: 'Intéressant ! Avez-vous testé Claude 3 pour comparer ? J\'hésite entre les deux.',
            date: '2025-01-16',
            likes: 3
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Comment l\'IA transforme le secteur de la santé : 5 cas d\'usage révolutionnaires',
    slug: 'ia-transforme-secteur-sante-cas-usage-revolutionnaires',
    excerpt: 'Découvrez comment l\'intelligence artificielle révolutionne les soins, le diagnostic et la gestion hospitalière avec des exemples concrets.',
    content: 'Contenu complet de l\'article...',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cas clients',
    author: 'Dr. Alexandre Rousseau',
    publishDate: '2025-01-12',
    readTime: '12 min',
    views: 2156,
    tags: ['Santé', 'Diagnostic', 'Innovation', 'Médecine'],
    comments: [
      {
        id: 'c2',
        author: 'Infirmière Claire',
        content: 'Très instructif ! Dans notre hôpital, nous commençons à utiliser l\'IA pour l\'analyse des radiographies. Les résultats sont prometteurs.',
        date: '2025-01-13',
        likes: 8
      }
    ]
  },
  {
    id: '3',
    title: 'RGPD et IA : Guide complet pour rester conforme en 2025',
    slug: 'rgpd-ia-guide-conformite-2025',
    excerpt: 'Tout ce que vous devez savoir sur la réglementation RGPD appliquée à l\'intelligence artificielle et aux données personnelles.',
    content: 'Contenu complet de l\'article...',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Réglementation',
    author: 'Maître Julie Moreau',
    publishDate: '2025-01-10',
    readTime: '15 min',
    views: 1834,
    tags: ['RGPD', 'Conformité', 'Juridique', 'Protection données'],
    comments: [
      {
        id: 'c3',
        author: 'DPO Expert',
        content: 'Article très complet ! Pourriez-vous faire un focus sur les algorithmes de recommandation ?',
        date: '2025-01-11',
        likes: 15
      }
    ]
  },
  {
    id: '4',
    title: 'Automatiser sa comptabilité avec l\'IA : ROI et retour d\'expérience',
    slug: 'automatiser-comptabilite-ia-roi-retour-experience',
    excerpt: 'Témoignage d\'un cabinet comptable qui a automatisé 70% de ses tâches grâce à l\'IA. Découvrez les outils et le ROI obtenu.',
    content: 'Contenu complet de l\'article...',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cas clients',
    author: 'Expert-comptable Pierre Durand',
    publishDate: '2025-01-08',
    readTime: '10 min',
    views: 1456,
    tags: ['Comptabilité', 'Automatisation', 'ROI', 'Témoignage'],
    comments: []
  },
  {
    id: '5',
    title: 'Les 10 outils IA indispensables pour les entrepreneurs en 2025',
    slug: 'outils-ia-indispensables-entrepreneurs-2025',
    excerpt: 'Sélection des meilleurs outils d\'intelligence artificielle pour booster votre productivité et développer votre business.',
    content: 'Contenu complet de l\'article...',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Outils IA',
    author: 'Entrepreneur IA Sarah Chen',
    publishDate: '2025-01-05',
    readTime: '6 min',
    views: 3247,
    tags: ['Outils', 'Productivité', 'Startup', 'Business'],
    comments: [
      {
        id: 'c5',
        author: 'Startup Founder',
        content: 'Super liste ! J\'utilise déjà 6 de ces outils. Notion AI est un game-changer pour l\'organisation.',
        date: '2025-01-06',
        likes: 22
      }
    ]
  },
  {
    id: '6',
    title: 'Formation IA en entreprise : Comment convaincre sa direction ?',
    slug: 'formation-ia-entreprise-convaincre-direction',
    excerpt: 'Stratégies et arguments pour obtenir un budget formation IA dans votre entreprise. Modèles de présentation inclus.',
    content: 'Contenu complet de l\'article...',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Formations',
    author: 'Consultant RH Michel Blanc',
    publishDate: '2025-01-03',
    readTime: '7 min',
    views: 987,
    tags: ['Formation', 'Management', 'Budget', 'Stratégie'],
    comments: []
  }
];

const categories = ['Toutes', 'Actualités IA', 'Outils IA', 'Cas clients', 'Formations', 'Réglementation'];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [newComment, setNewComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Filtrer les articles
  const filteredArticles = useMemo(() => {
    return blogArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'Toutes' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !commentAuthor.trim()) return;

    // Ici, vous ajouteriez la logique pour sauvegarder le commentaire
    console.log('Nouveau commentaire:', { author: commentAuthor, content: newComment });
    
    // Reset du formulaire
    setNewComment('');
    setCommentAuthor('');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-secondary text-white py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
              <MessageCircle size={28} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog IA Forma Plus
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              <strong>Bienvenue sur notre Blog IA</strong><br />
              Actualités, conseils, cas d'usage et débats autour de l'intelligence artificielle 
              dans tous les secteurs professionnels.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher un article, un outil, un cas d'usage..."
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
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
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

      {/* Articles Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          {currentArticles.length === 0 ? (
            <div className="text-center py-12">
              <MessageCircle size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Aucun article trouvé</h3>
              <p className="text-gray-600">
                Essayez de modifier vos critères de recherche ou explorez nos formations IA.
              </p>
              <Button to="/formations-ia" variant="primary" className="mt-4">
                Découvrir nos formations IA
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentArticles.map((article) => (
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
                        <div className="flex items-center">
                          <MessageCircle size={14} className="mr-1" />
                          {article.comments.length}
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>

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

                      {/* Author */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                            <User size={14} className="text-primary" />
                          </div>
                          <span className="text-sm text-gray-600">{article.author}</span>
                        </div>
                        <button
                          onClick={() => setSelectedArticle(article)}
                          className="text-primary hover:text-primary/80 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform"
                        >
                          Lire l'article
                          <ArrowRight size={14} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg transition-colors ${
                          currentPage === page
                            ? 'bg-primary text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedArticle(null)} />
            
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {selectedArticle.category}
                  </span>
                  <div className="text-sm text-gray-500">
                    {new Date(selectedArticle.publishDate).toLocaleDateString('fr-FR')} • {selectedArticle.readTime}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Image */}
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                {/* Title */}
                <h1 className="text-3xl font-bold mb-4">{selectedArticle.title}</h1>

                {/* Author */}
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <User size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{selectedArticle.author}</div>
                    <div className="text-sm text-gray-500">Expert IA</div>
                  </div>
                </div>

                {/* Content */}
                <div className="prose max-w-none mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {selectedArticle.excerpt}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedArticle.content || "Contenu complet de l'article à venir. Cet article sera bientôt enrichi avec du contenu détaillé, des exemples concrets et des conseils pratiques pour appliquer l'IA dans votre métier."}
                  </p>
                </div>

                {/* CTA Formation */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-2">Envie d'approfondir ce sujet ?</h3>
                  <p className="text-gray-600 mb-4">
                    Découvrez nos formations IA pour maîtriser ces outils et transformer votre façon de travailler.
                  </p>
                  <Button to="/formations-ia" variant="primary">
                    Je veux me former sur ce sujet
                  </Button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedArticle.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Comments Section */}
                <div className="border-t pt-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <MessageCircle size={24} className="mr-2 text-primary" />
                    Partagez vos idées sur l'IA
                  </h3>

                  {/* Comment Form */}
                  <form onSubmit={handleCommentSubmit} className="bg-gray-50 rounded-xl p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <input
                        type="text"
                        placeholder="Votre nom ou pseudo"
                        value={commentAuthor}
                        onChange={(e) => setCommentAuthor(e.target.value)}
                        className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                    <textarea
                      placeholder="Partagez votre expérience, vos questions ou vos idées sur l'IA..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary/50 mb-4"
                      required
                    />
                    <Button type="submit" variant="primary" rightIcon={<Send size={16} />}>
                      Publier mon commentaire
                    </Button>
                  </form>

                  {/* Comments List */}
                  <div className="space-y-6">
                    {selectedArticle.comments.map((comment) => (
                      <div key={comment.id} className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                              <User size={14} className="text-primary" />
                            </div>
                            <div>
                              <div className="font-medium">{comment.author}</div>
                              <div className="text-sm text-gray-500">
                                {new Date(comment.date).toLocaleDateString('fr-FR')}
                              </div>
                            </div>
                          </div>
                          <button className="flex items-center text-gray-500 hover:text-primary transition-colors">
                            <ThumbsUp size={14} className="mr-1" />
                            {comment.likes}
                          </button>
                        </div>
                        <p className="text-gray-700 mb-3">{comment.content}</p>
                        
                        {/* Replies */}
                        {comment.replies && comment.replies.length > 0 && (
                          <div className="ml-6 space-y-4 border-l-2 border-gray-100 pl-4">
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center">
                                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                                      <User size={10} className="text-primary" />
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
                                <p className="text-gray-700 text-sm">{reply.content}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {selectedArticle.comments.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        <MessageCircle size={48} className="mx-auto mb-4 opacity-50" />
                        <p>Soyez le premier à partager votre avis sur cet article !</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Restez à la pointe de l'IA
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Recevez chaque semaine notre sélection d'actualités IA, 
                d'outils et de conseils pratiques directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre email professionnel"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  S'abonner
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à passer à l'action ?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transformez ces connaissances en compétences concrètes avec nos formations 
              délivrant un certificat de réalisation en intelligence artificielle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/formations-ia" variant="primary" size="lg">
                Voir les formations IA
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Demander un devis
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;