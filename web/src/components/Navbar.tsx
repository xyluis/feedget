export function Navbar (): JSX.Element {
  return (
    <div className="bg-zinc-800 h-20 flex items-center justify-center w-full px-6">
      <div className="flex items-center justify-end w-full max-w-5xl sm:justify-between">
        <div className="hidden w-40 rounded-md bg-zinc-700 py-5 md:flex"/>

        <div className="hidden items-center justify-between gap-6 md:flex">
          <div className="w-28 bg-zinc-700 rounded-lg h-3 py-3" />
          <div className="w-28 bg-zinc-700 rounded-lg h-3 py-3" />
          <div className="w-28 bg-zinc-700 rounded-lg h-3 py-3" />
          <div className="w-28 bg-zinc-700 rounded-lg h-3 py-3" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="w-8 bg-zinc-700 rounded-md h-8 py-3" />
          <div className="w-8 bg-zinc-700 rounded-md h-8 py-3" />

          <div className="w-11 bg-zinc-700 rounded-full h-11 py-3" />
        </div>
      </div>
    </div>
  )
}