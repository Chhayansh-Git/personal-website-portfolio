---
title: "NEP Cutter"
excerpt: "A high-performance video splitting utility designed to handle 6GB+ files with automated batch processing."
collection: portfolio
---

**Summary:** A robust native Android utility built to safely and quickly split massive video files directly on mobile hardware.

*   **Problem:** Standard mobile video editors crash, corrupt data, or freeze the UI when attempting to parse, split, or batch-process incredibly large (6GB+) video files.
*   **Solution:** Built a high-performance application utilizing FFmpeg for the heavy lifting, executed entirely within background services to prevent UI blocking. Integrated secure user authentication and a subscription-based model.
*   **Tech Stack:** Kotlin, Jetpack Compose, FFmpeg, Android Background Services, Firebase.
*   **Outcome:** Achieved highly stable batch processing of massive video files directly on mobile devices without memory leaks or UI thread freezing.

### Processing Architecture

```mermaid
flowchart TD
    A["🎬 User Selects Video\n(6GB+ file)"] --> B["Jetpack Compose UI\n(File Picker)"]
    B --> C["Split Configuration\n(Duration / Segment Count)"]
    C --> D["Launch Background\nForegroundService"]
    
    D --> E["FFmpeg Process\n(Native C Library)"]
    
    subgraph "FFmpeg Pipeline"
        E --> F["Probe: Get Duration\n& Codec Info"]
        F --> G["Calculate Split\nPoints (timestamps)"]
        G --> H["Batch Loop:\nffmpeg -ss -t -c copy"]
        H --> I["Segment 1"]
        H --> J["Segment 2"]
        H --> K["Segment N..."]
    end
    
    subgraph "Service Layer"
        L["Progress Notification\n(ForegroundService)"]
        M["Error Handler\n(Retry / Skip)"]
        N["Memory Monitor\n(Prevent OOM)"]
    end
    
    D --> L
    D --> M
    D --> N
    
    I --> O["📁 Output Directory"]
    J --> O
    K --> O
    
    subgraph "Auth & Monetization"
        P["Firebase Auth"]
        Q["Subscription Check\n(Free Tier Limits)"]
    end
    
    B --> Q
    Q -->|Premium| C
    Q -->|Free| R["Limited to 3 Splits"]
    R --> C
```

*   **What I learned:** Gained crucial experience integrating native C-libraries (FFmpeg) into Android, handling long-running background tasks reliably, and implementing functional mobile monetization architectures.