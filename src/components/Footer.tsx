export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-8 mt-12 border-t-4 border-amber-600">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
        <p className="text-stone-200 font-serif font-bold">T-RAD © {new Date().getFullYear()}</p>
        <p className="text-sm">Musique traditionnelle vivante & bals folks endiablés.</p>
        <div className="flex justify-center space-x-6 text-sm">
          <a href="/presentation" className="hover:underline">Le Groupe</a>
          <a href="/agenda" className="hover:underline">Agenda</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
