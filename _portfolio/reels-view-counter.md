---
title: "Reels View Counter & Link Extractor"
excerpt: "A high-volume Meta Graph API utility for extracting and analyzing bulk Instagram Reel metrics."
collection: portfolio
---

**Summary:** An automated analytics tool designed to bypass manual data entry for large-scale social media campaigns.

*   **Problem:** Marketing and analytics teams face strict API rate limits and manual labor bottlenecks when trying to scrape metrics for hundreds of Instagram reels across multiple accounts simultaneously.
*   **Solution:** Engineered a Python application that ingests links via Google Sheets and intelligently manages Meta Graph API requests. It dynamically calculates sleep delays and adjusts pagination to extract exact view counts without triggering rate-limit bans.
*   **Tech Stack:** Python, Streamlit, Meta Graph API, Pandas.
*   **Outcome:** Streamlined the analytics pipeline, enabling the flawless extraction of hundreds of metrics in a single run, directly exportable for client reporting.

### Data Extraction Flow

```mermaid
flowchart TD
    A["📋 Google Sheets\n(Reel URLs Input)"] --> B["Streamlit Dashboard\n(Upload / Paste)"]
    B --> C["URL Parser\n(Extract Media IDs)"]
    
    C --> D["Request Queue\n(Batch Manager)"]
    
    D --> E{"Rate Limit\nCheck"}
    E -->|Under Limit| F["Meta Graph API\nGET /media/{id}\n?fields=views"]
    E -->|At Limit| G["⏱️ Dynamic Sleep\n(Backoff Calculator)"]
    G --> E
    
    F --> H{"Response\nStatus?"}
    H -->|200 OK| I["Parse View Count\n& Engagement Data"]
    H -->|429 Rate Limited| G
    H -->|Error| J["Error Logger\n(Retry Queue)"]
    J --> D
    
    I --> K["Pandas DataFrame\n(Aggregation)"]
    
    K --> L["📊 Streamlit\nResults Table"]
    K --> M["📥 CSV Export\n(Client Report)"]
    
    subgraph "Pagination Handler"
        N["Cursor-based\nPagination"]
        O["Next Page\nToken Check"]
    end
    
    F --> N
    N --> O
    O -->|More Pages| D
    O -->|Complete| K
```

*   **What I learned:** Mastered API rate-limit management, building robust error-handling for external network requests, and rapidly deploying internal UI tools using Streamlit.