---
title: "Ghost Whisper"
excerpt: "A native Android UI project emphasizing clean architecture and responsive design."
collection: portfolio
---

**Summary:** A focused implementation of modern Android UI patterns and reactive state management.

*   **Problem:** As codebases grow, UI state management often becomes tightly coupled with business logic, leading to UI lag and difficult-to-maintain code.
*   **Solution:** Implemented a strict MVVM architecture to decouple the UI from data processing, utilizing modern declarative UI frameworks to ensure a smooth, reactive user experience.
*   **Tech Stack:** Kotlin, Jetpack Compose, MVVM Architecture, Room Databases.
*   **Outcome:** Delivered a highly responsive, easily maintainable codebase that serves as a personal template for scalable native Android development.

### Architecture Pattern

```mermaid
flowchart TD
    subgraph "UI Layer (Jetpack Compose)"
        A["Composable Screens"]
        B["State Holders\n(remember / rememberSaveable)"]
    end
    
    subgraph "ViewModel Layer"
        C["GhostWhisperViewModel"]
        D["UI State\n(StateFlow<UiState>)"]
        E["Event Handler\n(Sealed Class Events)"]
    end
    
    subgraph "Domain Layer"
        F["Use Cases\n(Business Logic)"]
    end
    
    subgraph "Data Layer"
        G["Repository\n(Single Source of Truth)"]
        H["Room DAO\n(Local Database)"]
        I["Remote API\n(Optional)"]
    end
    
    A -->|"User Action"| E
    E --> C
    C --> F
    F --> G
    G --> H
    G --> I
    
    H -->|"Flow<List<Entity>>"| G
    G -->|"Flow<DomainModel>"| F
    F -->|"Result<T>"| C
    C -->|"Update"| D
    D -->|"collectAsState()"| A
    
    B --> A
```

*   **What I learned:** Refined my understanding of declarative UI paradigms with Jetpack Compose and ensuring unidirectional data flow in native Android environments.