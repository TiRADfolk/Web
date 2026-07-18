# Web
Web pour VERCEL
# T-RAD - Site Officiel du Groupe de Bal Traditionnel

Ce projet est le site web complet, moderne et administrable du groupe de musique traditionnelle **T-RAD** (prononcé "Ti-RAD"). Développé avec **Next.js 14+ (App Router)** et **Tailwind CSS**, il est conçu pour être déployé instantanément et fonctionner gratuitement sur **Vercel** grâce à une architecture statique ultra-optimisée.

---

## 🎨 Identité Visuelle & Design
Le site utilise une charte graphique chaleureuse inspirée des parquets de bals folks et des ambiances de Fest-Noz :
* **Couleurs principales :** Bordeaux (`bg-red-900`/`bg-red-950`), Ocre/Ambre (`bg-amber-600`/`text-amber-400`) et Crème (`bg-stone-50`).
* **Typographie :** Combinaison d'une police Serif élégante pour les titres traditionnels et d'une police moderne pour les textes courants.
* **Responsive :** Parfaitement optimisé pour l'affichage sur smartphone (menu hamburger) et ordinateur.

---

## 📂 Structure des Pages Créées

1. **Accueil (`/`) :** Section d'introduction percutante, présentation express du collectif et mise en avant des prochaines dates majeures (fond d'écran configurable).
2. **Présentation (`/presentation`) :** Récit des origines du groupe et fiches descriptives des musiciens (trombinoscope avec rôles, descriptions et photos).
3. **Agenda (`/agenda`) :** Système de cartes moderne affichant les concerts par ordre chronologique avec un filtrage interactif par mois exécuté côté client, liens de billetterie et badges (Public/Privé, Gratuit).
4. **Contact (`/`) :** Pavé de contact direct intégré avec liens mail interactifs et liens vers les réseaux sociaux officiels.

---

## 🚀 Guide de Déploiement Direct sur Vercel

Le projet ayant été entièrement configuré depuis l'interface web de GitHub, son déploiement ne nécessite aucune ligne de commande :

1. Connectez-vous sur [Vercel](https://vercel.com) à l'aide de votre compte **GitHub**.
2. Cliquez sur le bouton **Add New...** puis sélectionnez **Project**.
3. Repérez votre dépôt GitHub et cliquez sur **Import**.
4. Laissez les configurations par défaut et cliquez sur **Deploy**.

Le site est en ligne !

---

## 🔄 Mise à jour du contenu (Guide d'administration)

Pour éviter de toucher au code structurel des pages et conserver une consommation de ressources à 0 % sur Vercel, toutes les informations du groupe sont centralisées dans un seul et unique fichier.

### 1. Modifier les textes, l'agenda et le Trombinoscope
Ouvrez le fichier **`src/data.ts`** sur votre éditeur (ou directement sur GitHub avec l'icône **Crayon**) :
* **Sauts de ligne :** Pour les descriptions et l'histoire du groupe, utilisez les backticks (\` \` \`) pour passer à la ligne librement avec la touche *Entrée*.
* **Ajouter un concert :** Copiez un bloc dans le tableau `PROCHAINES_DATES`, modifiez les textes et attribuez-lui un `id` unique (`"1"`, `"2"`, `"3"`...).
* **Activer/Désactiver le fond d'écran :** Dans le bloc `design`, laissez `heroBackgroundImage: ""` vide pour afficher un dégradé uni ultra-léger, ou insérez le lien d'une image pour l'afficher en fond d'écran.

### 2. Intégrer des Photos (Trombinoscope)
* **Méthode Locale (Recommandée) :** Passez vos photos sur **Squoosh.app** (largeur max 400px, format `.webp`). Déposez le fichier dans le dossier `public/images/` sur GitHub, puis écrivez le chemin dans `data.ts` (ex: `photoUrl: "/images/luc.webp"`).
* **Méthode Google Drive :** Configurez le partage de votre fichier Drive en "Public". Copiez le lien et convertissez-le avec un outil en ligne comme *unidownloader.com/google-drive-direct-link-generator*. Collez le lien direct obtenu dans `data.ts`.

### 3. Diffuser les modifications en ligne
Pour économiser vos quotas, le site utilise un système de déploiement manuel :
1. Faites vos modifications et envoyez uniquement le fichier de données sur GitHub (`git add src/data.ts`, `git commit`, `git push`).
2. Connectez-vous sur votre tableau de bord **Vercel**, puis allez dans l'onglet **Deployments**.
3. Sur la **toute première ligne** de la liste (votre dernier envoi), cliquez sur les **trois petits points `...`** tout à droite.
4. Sélectionnez **Redeploy** et validez. 

En moins de 60 secondes, la pastille passe au vert et vos modifications sont visibles par le public !
