# scarab-styleguide
**Generate living styleguides from [scarab-carapace](https://github.com/watchtowerdigital/scarab-carapace) config**

## Demo
View a demo styleguide, generated from the default `scarab-carapace` config:  
**[http://scarab-styleguide.surge.sh/](http://scarab-styleguide.surge.sh/)**

## Quickstart
1. **Clone project from Github:**
```bash
git clone https://github.com/watchtowerdigital/scarab-styleguide.git my-styleguide
```

2. **Install dependencies:**
```
cd my-styleguide && npm install
```

3. **Place your project's `scarab.config.json` file in the root styleguide folder.**

4. **Serve styleguide at `http://localhost:8080`, with proxy at port `3000`:**
```
npm run dev
```

5. **To build styleguide for production, run:**
```
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
