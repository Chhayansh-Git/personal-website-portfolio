---
title: "Annai — Voice RAG Portfolio Assistant"
excerpt: "A conversational AI with 3D VRM avatar, multi-lingual voice synthesis, and RAG-powered knowledge retrieval over my portfolio.<br/>`Gemini` `Pinecone` `Three.js` `ElevenLabs`"
collection: portfolio
---

**Summary:** A production-grade Retrieval-Augmented Generation assistant deployed as an interactive 3D widget across the entire portfolio — answering questions about Chhayansh's work in natural voice.

*   **Problem:** Static portfolios fail to engage visitors or convey the depth of engineering work. Recruiters skim pages without understanding the technical nuance behind each project.
*   **Solution:** Engineered a full-stack RAG pipeline: a custom ETL script chunks and embeds portfolio knowledge into Pinecone using Google's embedding API. A Vercel serverless function retrieves relevant context, generates conversational responses via Gemini, and synthesizes speech through a multi-tier TTS fallback (ElevenLabs → Google Cloud TTS). The frontend renders a 3D VRM avatar (Annai) using Three.js with skeletal animation synced to audio playback.
*   **Tech Stack:** Gemini 2.5 Flash, Pinecone, Google Embeddings API, ElevenLabs TTS, Three.js, @pixiv/three-vrm, Vercel Serverless.
*   **Outcome:** Visitors can ask questions in English or Hindi and receive voiced, contextually accurate answers with source citations — directly from a 3D character sitting on the chat panel.

### RAG Pipeline Architecture

```mermaid
flowchart TD
    A["📝 knowledge.txt\n(Portfolio Data)"] --> B["ETL Script\n(Node.js)"]
    B --> C["Text Chunking\n(800 chars, 100 overlap)"]
    C --> D["Google Embedding API\n(text-embedding-004)"]
    D --> E["Pinecone Vector DB\n(768-dim index)"]
    
    F["👤 User Query\n(Text or Voice)"] --> G["Vercel Serverless\n(/api/chat)"]
    G --> H["Embed Query\n(gemini-embedding-001)"]
    H --> I["Pinecone Retrieval\n(Top-3 Chunks)"]
    I --> J["Gemini 2.5 Flash\n(RAG Generation)"]
    
    J --> K["Text Response"]
    K --> L{"TTS Synthesis"}
    L -->|Primary| M["ElevenLabs\n(eleven_multilingual_v2)"]
    L -->|Fallback| N["Google Cloud TTS\n(Neural2 Voices)"]
    
    M --> O["Base64 Audio"]
    N --> O
    
    O --> P["Frontend Widget"]
    K --> P
    P --> Q["3D VRM Avatar\n(Annai 案内)"]
    P --> R["HTML5 Audio\nPlayback"]
    Q --> S["Skeletal Animation\nSync with Speech"]
```

*   **What I learned:** Mastered end-to-end RAG system design — from ETL vectorization through serverless retrieval to real-time 3D avatar rendering and multi-provider TTS fallback engineering.
