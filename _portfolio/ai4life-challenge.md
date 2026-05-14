---
title: "AI4Life Grand Challenge — Global Rank 2"
excerpt: "Self-supervised 3D Noise2Void denoising for live-cell calcium imaging. **Global Rank 2** out of international competitors.<br/>`PyTorch` `3D N2V` `Docker` `SciPy`"
collection: portfolio
---

**Summary:** A competitive research pipeline achieving **Global Rank 2** in the AI4Life International Grand Challenge — denoising high-resolution biological calcium imaging without any clean ground truth data.

*   **Problem:** High-resolution biological calcium imaging suffers from severe noise, and acquiring clean "ground truth" data for supervised machine learning is practically impossible in this domain.
*   **Solution:** Built a self-supervised Noise2Void (N2V) model utilizing PyTorch for denoising high-resolution 3D calcium imaging data. The model extracts clean signals while strictly preserving the spatial and temporal integrity of the biological data. Evaluated efficacy using stSNR, PSNR, and SI-PSNR metrics.
*   **Tech Stack:** Python, PyTorch, 3D Noise2Void, Docker, NumPy, SciPy.
*   **Outcome:** Successfully containerized the final pipeline via Docker for deployment and evaluation on the Grand Challenge platform. Achieved **Global Rank 2** by ensuring robust generalization across unseen datasets.

### Denoising Pipeline Architecture

```mermaid
flowchart TD
    A["📥 Raw 3D TIFF Stack\n(Noisy Calcium Imaging)"] --> B["Preprocessing\n(Normalization + Patching)"]
    
    B --> C["3D Noise2Void\n(Self-Supervised)"]
    
    subgraph "N2V Training Loop (PyTorch)"
        C --> D["Blind-Spot Masking\n(Random Pixel Exclusion)"]
        D --> E["3D UNet Encoder-Decoder"]
        E --> F["Loss: MSE on\nMasked Pixels Only"]
        F -->|"Backprop"| E
    end
    
    E --> G["Denoised 3D Volume"]
    
    G --> H["Evaluation Metrics"]
    
    subgraph "Quality Assessment"
        H --> I["stSNR\n(Spatio-temporal SNR)"]
        H --> J["PSNR\n(Peak Signal-to-Noise)"]
        H --> K["SI-PSNR\n(Scale-Invariant)"]
    end
    
    G --> L["Docker Container\n(Reproducible Pipeline)"]
    L --> M["🏆 Grand Challenge\nSubmission Platform"]
    M --> N["Global Rank 2"]
```

*   **What I learned:** Acquired advanced skills in handling massive 3D scientific datasets, tuning self-supervised machine learning models without ground truth labels, and strictly adhering to competitive research deployment standards using Docker.
