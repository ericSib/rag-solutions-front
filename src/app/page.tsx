import ContactForm from '@/components/forms/ContactForm'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bienvenue sur RAG Solutions
        </h1>
        <p className="text-center mb-12">
          Solutions d'intelligence documentaire basées sur le RAG pour les entreprises
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
