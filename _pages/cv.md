---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

You can also [download my full CV as a PDF](/Chhayansh%20Porwal-CV.pdf).

Education
======
* **B.Tech in Computer Science Engineering**, Rajasthan Technical University (RTU), Kota — 2023–2027
  * CGPA: 8.81

Work Experience
======
* **Software Engineering Intern — Syon Technologies**
  * Developed the core ML matching engine for the Teacher Recruitment System using SentenceTransformers and FastAPI.
  * Engineered a semantic embedding microservice for automated resume screening and profile coaching.
  * Integrated the ML service with a Next.js and Node.js/Prisma backend via REST APIs and Redis.

* **Computer Vision Developer Intern — Fotographiya (iStart-incubated)**
  * Built an AI-powered image culling backend using Python/FastAPI for a premium wedding photography startup.
  * Developed a rapid evaluation pipeline using YOLOv8n, MediaPipe FaceMesh, and CLIP ViT-L/14.
  * Clustered near-duplicate burst shots via L2 distance on CLIP embeddings and integrated FaceNet/MTCNN for VIP recognition.

Technical Skills
======
* **Programming:** Python, Kotlin, JavaScript/TypeScript, C++
* **Web & APIs:** Node.js, FastAPI, Next.js, Prisma, HTML, CSS
* **AI & ML:** YOLOv8, PyTorch, CLIP, MediaPipe, SentenceTransformers, 3D Noise2Void
* **Tools & Infra:** Git, Docker, MongoDB, Redis, PostgreSQL, Firebase

Achievements
======
* 🏆 **Global Rank 2** — AI4Life International Grand Challenge
* 🎯 **Top 8% Nationwide** — AlgoUniversity Tech Fellowship (ATF 2025)
* 📊 **CGPA: 8.81** — RTU, Kota

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Portfolio
======
  <ul>{% for post in site.portfolio reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
