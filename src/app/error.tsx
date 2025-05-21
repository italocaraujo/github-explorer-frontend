'use client'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold text-red-600">Algo deu errado!</h2>
      <p className="my-2">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Tentar novamente
      </button>
    </div>
  )
}
