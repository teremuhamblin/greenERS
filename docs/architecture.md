# 🏗️ Architecture
- — greenERS

greenERS repose sur une architecture *Next.js* moderne (**App Router**) pensée pour être :
- simple,
- évolutive,
- modulaire,
- orientée Green Tech.

---

### 📁 Structure générale
```text
greenERS/
 ├── app/
 │   ├── page.js
 │   ├── green-growth/
 │   ├── green-ecology/
 │   ├── green-tech/
 │   ├── about/
 │   ├── contact/
 │   ├── api/
 │   │   └── projects/route.js
 ├── components/
 │   ├── Navbar.jsx
 │   ├── Footer.jsx
 │   ├── Card.jsx
 │   ├── Section.jsx
 ├── lib/
 │   ├── utils.js
 ├── public/
 ├── styles/
 ├── docs/
 ├── next.config.js
 └── package.json
````

---

### 🔌 API
- L’API est basée sur les routes *Next.js (app/api/...)*.
- Exemple : */api/projects*  
→ renvoie une liste de projets Green Tech.

---

### 🎨 UI Components
Les composants sont regroupés dans */components* :
```markdown
- Navbar
- Footer
- Card
- Section
- Button (optionnel)
```

---

### 🧱 Modules
```markdown
- lib/utils.js → helpers
- docs/ → documentation interne
- styles/ → styles globaux
```

---

🛠️ CI/CD
Les workflows GitHub Actions sont dans *.github/workflows/*.

---

### 🔮 Extensibilité
- Ajout de pages
- Ajout d’API
- Intégration Supabase
- Dashboard analytics
- Auth NextAuth

---
