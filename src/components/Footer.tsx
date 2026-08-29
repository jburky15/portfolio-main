function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Joseph Burkhart
        </p>

        <p>
          Built to be awesome!
        </p>
      </div>
    </footer>
  )
}

export default Footer