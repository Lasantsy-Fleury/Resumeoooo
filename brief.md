# Brief Projet : Résuméoooo

## 📌 Titre du projet
**Résuméoooo** – Assistant intelligent de synthèse de documents

## 🎯 Objectif
Créer une plateforme web permettant à un utilisateur de :
- Déposer un document (PDF, TXT, URL d'article)
- Obtenir automatiquement un résumé (combinant ML classique et LLM)
- Interagir avec un chatbot contextuel pour poser des questions sur le contenu du document
- Le tout via une landing page moderne et intuitive

## 👥 Public cible
- Étudiants devant synthétiser des cours/recherches
- Professionnels traitant de nombreux rapports
- Curieux de la ML/LLM souhaitant expérimenter

## 🧠 Stack technique

| Composant | Technologie |
|-----------|-------------|
| Frontend | React + Tailwind CSS |
| Backend | FastAPI (Python) |
| ML classique | scikit-learn, sumy (TextRank), NLTK |
| LLM | Ollama (Mistral 7B) ou API OpenAI |
| Chatbot | Contexte conversationnel + LLM |
| Base de données | SQLite (sessions & historique) |
| Déploiement | Docker / Hugging Face Spaces |

## 🔧 Fonctionnalités principales

### 1. Landing page
- Présentation du projet et cas d'usage
- Démonstration interactive
- Interface d'upload de fichier
- Zone d'affichage du résumé
- Interface de chat

### 2. Traitement documentaire
- Extraction de texte depuis PDF / TXT / URL
- Nettoyage et prétraitement du texte
- Sauvegarde du contexte pour le chatbot

### 3. Résumé automatique (double approche)
- **ML classique** : résumé extractif (TextRank / TF-IDF) – rapide et explicable
- **LLM** : résumé abstractif (narratif, reformulation) – plus naturel

### 4. Chatbot contextuel
- Maintien de l'historique de conversation
- Réponse aux questions basées UNIQUEMENT sur le document fourni
- Gestion des réponses "hors sujet" (refus poli)

## 📁 Structure des endpoints API (prévisionnelle)

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| POST | `/upload` | Upload fichier + génération des résumés |
| POST | `/chat` | Envoi message + récupération réponse LLM |
| GET | `/health` | Vérification état du service |
| GET | `/history/{session_id}` | Récupération historique chat |

## 🧩 Flux utilisateur typique

1. Utilisateur arrive sur la landing page
2. Lit la présentation et clique "Essayer"
3. Uploade un fichier (PDF de 2-3 pages)
4. Le système affiche :
   - Résumé extractif (ML classique) – 3-5 phrases
   - Résumé abstractif (LLM) – paragraphe narratif
   - Mots-clés extraits
5. L'utilisateur pose une question dans le chat
6. Le LLM répond en utilisant le contexte du document
7. La conversation continue, mémorisant le contexte

## 🔄 Extensions possibles (post-MVP)

- Authentification utilisateur
- Base vectorielle (RAG avec Chroma/FAISS)
- Export du résumé et du chat en PDF
- Support de documents plus longs (découpage)
- Génération automatique de QCM

## 📊 Critères de succès (MVP)

- [ ] Landing page responsive et fonctionnelle
- [ ] Upload et traitement de PDF < 5 pages
- [ ] Résumé extractif opérationnel
- [ ] Résumé LLM fonctionnel (local ou API)
- [ ] Chatbot répondant avec contexte
- [ ] API documentée (Swagger auto généré)
- [ ] Déploiement accessible en ligne

## 🗓️ Phases suggérées

| Phase | Durée estimée | Objectif |
|-------|---------------|----------|
| 1 | 2-3 jours | Setup backend + extraction texte PDF |
| 2 | 2-3 jours | Intégration résumé extractif (ML classique) |
| 3 | 2-3 jours | Intégration LLM (local ou API) |
| 4 | 2-3 jours | Développement chatbot avec contexte |
| 5 | 3-4 jours | Frontend (landing page + composants) |
| 6 | 1-2 jours | Déploiement & tests |

## 📝 Notes techniques importantes

- Le LLM local (Ollama) nécessite au moins 8 Go RAM
- Alternative API OpenAI plus simple mais payante
- La landing page doit être attractive pour démontrer la valeur
- Privilégier la simplicité du MVP avant d'ajouter des features

## 🔗 Liens utiles (ressources)

- FastAPI : https://fastapi.tiangolo.com/
- Sumy (résumé extractif) : https://github.com/miso-belica/sumy
- Ollama : https://ollama.ai/
- Tailwind CSS : https://tailwindcss.com/

---

*Document créé le : [DATE COURANTE]*
*Version : 1.0*