---
title: "Project Koma"
excerpt: "A Human-in-the-Loop AI platform designed to transform classic literature into dynamic manga panels."
collection: portfolio
---

**Summary:** An ambitious pipeline bridging traditional storytelling and digital engineering by automating manga production from text descriptions.

*   **Problem:** Converting text to manga requires complex spatial understanding, narrative pacing, and layout design that standard, fully-automated generative AI completely fails to grasp.
*   **Solution:** Engineered a pipeline utilizing NLP for script parsing, machine learning for dynamic panel layout prediction (koma-wari), and auto-annotation to guide visual generation. Crucially, it relies on a "Human-In-The-Loop" architecture, allowing artists to intervene and refine the AI's outputs at any stage.
*   **Tech Stack:** Python, Machine Learning, NLP, Auto-Annotation Tools.
*   **Outcome:** Created a semi-automated system that exponentially speeds up the drafting process while retaining human creative control over the final visual narrative.

### HITL Pipeline Architecture

```mermaid
flowchart TD
    A["📖 Source Novel\n(Hindi Text)"] --> B["NLP Script Parser\n(Gemini Flash)"]
    B --> C["Scene Breakdown\n(Dialogue + Action + Setting)"]
    
    C --> D["Panel Layout Predictor\n(Koma-wari ML Model)"]
    D --> E["Predicted Layout\n(Grid Configuration)"]
    
    E --> F{"🧑‍🎨 Human Review\n(Supervisor Dashboard)"}
    F -->|Approve| G["Visual Generation\n(SDXL + LoRA)"]
    F -->|Modify| H["Manual Layout\nAdjustment"]
    H --> G
    F -->|Reject| D
    
    G --> I["Generated Panels\n(Raw Output)"]
    I --> J{"🧑‍🎨 Human Review\n(Expression/Quality)"}
    J -->|Approve| K["Final Composition"]
    J -->|Regenerate| G
    J -->|Manual Edit| L["Artist Touch-up"]
    L --> K
    
    subgraph "Training Pipeline"
        M["Manga Dataset\n(Licensed)"] --> N["Auto-Annotator"]
        N --> O["Layout LoRA\nTraining"]
        N --> P["Expression LoRA\nTraining"]
    end
    
    subgraph "Data Provenance"
        Q["Decision Log\n(PostgreSQL)"]
        R["Version History"]
    end
    
    F --> Q
    J --> Q
    K --> R
    
    K --> S["📚 Final Manga\nChapter Output"]
```

*   **What I learned:** Mastered the integration of "Human-In-The-Loop" software architectures, balancing automated AI generation with necessary manual adjustments, and translating artistic concepts into code.