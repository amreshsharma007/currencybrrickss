# currencybricks-website

This repository contains:

- `frontend/`: React (CRA + Craco) static site
- `backend/`: FastAPI service (not hosted on GitHub Pages)

## GitHub Pages Deployment (Frontend Only)

This project is configured for project-site hosting at:

- `https://amreshsharma007.github.io/currencybrrickss/`

Deployment is done via GitHub Actions, not by publishing the `docs/` folder.

### One-time GitHub repository setting

In GitHub repository settings:

1. Go to **Settings -> Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

If you previously used `main /docs`, disable that by switching source to GitHub Actions.

### Workflow behavior

- Trigger: pushes to `main` that change `frontend/**` or workflow files
- Build location: `frontend/`
- Output artifact: `frontend/build`
- Deploy target: GitHub Pages environment

### Local production build check

Run from repository root:

```bash
cd frontend
corepack enable
yarn install --frozen-lockfile
yarn build
```

If successful, production output is created in `frontend/build/`.

### Notes

- `backend/` is intentionally excluded from GitHub Pages deployment.
- `docs/` can still be used for documentation content, but it is no longer the site publishing source.
