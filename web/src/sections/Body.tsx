export function Body (): JSX.Element {
  return (
    <main className="w-full my-12 flex items-center justify-center px-6">
      <div className="flex items-center justify-center flex-col gap-8 max-w-5xl w-full">
        <div className="bg-zinc-800 w-full flex items-start justify-center px-10 py-10 rounded-md">
          <p className="text-zinc-400 self-start w-full">Experimente enviar um feedback de um bug na aplicação 🐛</p>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 w-full gap-8 md:grid-cols-1 md:grid-rows-1">
          <div className="bg-zinc-800 h-80 w-80 rounded-md md:w-full" />
          <div className="bg-zinc-800 h-80 w-80 rounded-md md:w-full" />
          <div className="bg-zinc-800 h-80 w-80 rounded-md md:w-full" />
          <div className="bg-zinc-800 h-80 w-80 rounded-md md:w-full" />
          <div className="bg-zinc-800 h-80 w-80 rounded-md md:w-full" />
          <div className="bg-zinc-800 h-80 w-80 rounded-md md:w-full" />
        </div>
      </div>
    </main>
  )
}