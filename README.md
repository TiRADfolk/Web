# Web
Web pour VERCEL
# T-RAD - Site Officiel du Groupe de Bal Traditionnel

Ce projet est le site web complet, moderne et administrable du groupe de musique traditionnelle **T-RAD** (prononcé "Ti-RAD"). Développé avec **Next.js 14+ (App Router)**, **Tailwind CSS** et **Supabase**, il est conçu pour être déployé instantanément sur **Vercel**.

---

## 🎨 Identité Visuelle & Design
Le site utilise une charte graphique chaleureuse inspirée des parquets de bals folks et des ambiances de Fest-Noz :
* **Couleurs principales :** Bordeaux (`bg-red-900`/`bg-red-950`), Ocre/Ambre (`bg-amber-600`/`text-amber-400`) et Crème (`bg-stone-50`).
* **Typographie :** Combinaison d'une police Serif élégante pour les titres traditionnels et d'une police moderne pour les textes courants.
* **Responsive :** Parfaitement optimisé pour l'affichage sur smartphone (menu hamburger) et ordinateur.

---

## 📂 Structure des Pages Créées

1. **Accueil (`/`) :** Section d'introduction percutante, présentation express du collectif et mise en avant des deux prochaines dates majeures.
2. **Présentation (`/presentation`) :** Récit des origines du groupe et fiches descriptives des musiciens (instruments et biographie).
3. **Agenda (`/agenda`) :** Système de cartes moderne affichant les concerts par ordre chronologique avec un filtrage interactif par mois, liens de billetterie et événements Facebook.
4. **Médias (`/media`) :** Interface à onglets dynamique permettant de naviguer facilement entre les vidéos live, les extraits audio (lecteur) et les galeries photos.
5. **Contact (`/contact`) :** Formulaire de réservation de date et de contact avec un design épuré, accompagné des coordonnées du collectif.
6. **Connexion (`/login`) :** Page sécurisée dédiée à l'équipe interne pour s'authentifier.
7. **Espace Message (`src/components/ChatRoom.tsx`) :** Module de discussion interne simplifié et direct, débarrassé des fonctionnalités superflues.

---

## 🚀 Guide de Déploiement Direct sur Vercel

Le projet ayant été entièrement configuré depuis l'interface web de GitHub, son déploiement ne nécessite aucune ligne de commande :

1. Connectez-vous sur [Vercel](https://vercel.com) à l'aide de votre compte **GitHub**.
2. Cliquez sur le bouton **Add New...** puis sélectionnez **Project**.
3. Repérez votre dépôt `t-rad-site` (ou le nom donné à votre repository) et cliquez sur **Import**.
4. Déroulez l'onglet **Environment Variables** (Variables d'environnement) et ajoutez vos clés de liaison Supabase récupérées sur votre tableau de bord Supabase (*Settings > API*) :
   * **Nom :** `NEXT_PUBLIC_SUPABASE_URL` | **Valeur :** `https://votre-id-projet.supabase.co`
   * **Nom :** `NEXT_PUBLIC_SUPABASE_ANON_KEY` | **Valeur :** `votre-cle-publique-anonyme`
5. Cliquez sur **Deploy**.

Le site est en ligne !

---

## 🔄 Mise à jour du contenu
Toutes les modifications futures de l'interface ou des textes statiques peuvent se faire directement en modifiant les fichiers `.tsx` cibles sur GitHub à l'aide de l'icône **Crayon**. À chaque validation de modification (*Commit*), Vercel reconstruit et met à jour le site public automatiquement en moins de 6
