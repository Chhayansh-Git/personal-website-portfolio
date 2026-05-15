# Chhayansh Porwal | Engineering Portfolio

Welcome to the source code for my professional portfolio and engineering hub. This repository houses my case studies, project documentation, research papers, and technical blogs.

**Live Website:** [chhayanshporwal.github.io](https://chhayanshporwal.github.io/)

---

## 🎙️ Meet Annai: Voice-Enabled RAG Assistant

A central feature of this portfolio is **Annai (案内)**, a fully self-aware, intelligent conversational agent integrated directly into the website.

Annai was designed and engineered entirely from scratch to serve as my interactive virtual representative. Instead of browsing my website manually, visitors can simply speak to her, and she will answer questions about my background, skills, and projects using a highly optimized Retrieval-Augmented Generation (RAG) architecture.

### How Annai Works:
1. **3D Avatar Frontend:** Annai uses a glassmorphic chat widget and a 3D Anime VRM avatar. The avatar is powered by `Three.js` and `@pixiv/three-vrm`, featuring dynamic skeletal animations that synchronize with her speech.
2. **High-Precision Voice Engine:** Speech-to-text is handled directly in the browser via the native Web Speech API. Text-to-speech is powered by Google Cloud's Neural2 engine, delivering a professional, warm female voice.
3. **Serverless RAG Backend:** Annai's "brain" is hosted on a Vercel Serverless Node.js backend. Her knowledge base is populated via a custom Node.js ETL pipeline that chunks my portfolio data, embeds it via `gemini-embedding-001`, and stores it in a Pinecone Vector Database.
4. **Semantic Retrieval:** When asked a question, Annai performs a semantic similarity search across her vector space to pull the most relevant facts about my projects.
5. **Dynamic Generation:** She uses Google's `gemini-flash-latest` Large Language Model to formulate a natural response based strictly on the retrieved context, ensuring 0% hallucination.

*Note: Annai's backend source code is located in a separate repository: [voice-rag-backend](https://github.com/chhayanshporwal/voice-rag-backend).*

---

## Repository Structure

- `_portfolio/`: Detailed case studies of my core engineering projects.
- `_posts/`: Technical blog posts and research articles.
- `assets/`: 
  - `js/chat-widget.js`: The frontend engine driving Annai's 3D rendering and audio synchronization.
  - `models/`: Contains `Annai.vrm`, the 3D model file.
- `_scripts/voice-rag-etl/`: The custom data ingestion pipeline that builds Annai's Pinecone knowledge base.

## Technology Stack
- **Framework:** Jekyll (GitHub Pages)
- **Styling:** Custom SCSS & TailwindCSS Utilities
- **3D Graphics:** Three.js
- **Assistant Stack:** Web Speech API, Google Cloud Neural TTS, Pinecone DB, Gemini 1.5 Flash

## Local Development

To run this Jekyll website locally:

```bash
# 1. Install dependencies
bundle install

# 2. Run the Jekyll server
bundle exec jekyll serve -l -H localhost
```

The website will be available at `http://localhost:4000`.
