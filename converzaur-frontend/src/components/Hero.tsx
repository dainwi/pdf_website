import Link from "next/link"

export default function Hero() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-8 lg:space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Simplify your digital tasks
              </h1>
              <p className="text-muted-foreground md:text-xl lg:text-lg">
                Convert, clip, and resize with ease. Our powerful tools make your digital life a breeze.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="rounded-lg bg-card p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <FileIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-semibold">PDF Conversion</h3>
                </div>
                <p className="text-muted-foreground">Convert any document to PDF with a single click.</p>
                <div className="mt-4">
                  <Link
                    href="/pdf-tools"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Try PDF Tools
                  </Link>
                </div>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <ScissorsIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-semibold">Audio Clipping</h3>
                </div>
                <p className="text-muted-foreground">Trim and extract audio clips from any file.</p>
                <div className="mt-4">
                  <Link
                    href="/audio-tools"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Try Audio Tools
                  </Link>
                </div>
              </div>
              <div className="rounded-lg bg-card p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <ImageIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-semibold">Image Resizing</h3>
                </div>
                <p className="text-muted-foreground">Resize and optimize your images with ease.</p>
                <div className="mt-4">
                  <Link
                    href="/image-tools"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Try Image Tools
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function FileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function ImageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function ScissorsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  )
}
