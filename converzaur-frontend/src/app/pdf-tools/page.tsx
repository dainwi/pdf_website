import Link from "next/link"

export default function page() {
  return (
    <div className="w-full">
      <header className="text-black py-6 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center">PDF Tools</h1>
        </div>
      </header>
      <main className="py-12 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-background rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3">
                  <FileIcon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">PDF Viewer</h2>
              </div>
              <p className="text-muted-foreground">View and navigate PDF documents with ease.</p>
            </div>
            <div className="border-t border-muted p-4 text-right">
              <Link href="#" className="text-primary font-medium" prefetch={false}>
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3">
                  <FilePenIcon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">PDF Editor</h2>
              </div>
              <p className="text-muted-foreground">Edit and annotate PDF documents with advanced tools.</p>
            </div>
            <div className="border-t border-muted p-4 text-right">
              <Link href="#" className="text-primary font-medium" prefetch={false}>
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3">
                  <FilePlusIcon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">PDF Converter</h2>
              </div>
              <p className="text-muted-foreground">Convert PDF documents to various formats with ease.</p>
            </div>
            <div className="border-t border-muted p-4 text-right">
              <Link href="#" className="text-primary font-medium" prefetch={false}>
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3">
                  <PrinterIcon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">PDF Compressor</h2>
              </div>
              <p className="text-muted-foreground">Reduce the file size of your PDF documents.</p>
            </div>
            <div className="border-t border-muted p-4 text-right">
              <Link href="/pdf-compressor" className="text-primary font-medium" prefetch={false}>
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3">
                  <PrinterIcon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">PDF Merger</h2>
              </div>
              <p className="text-muted-foreground">Combine multiple PDF documents into a single file.</p>
            </div>
            <div className="border-t border-muted p-4 text-right">
              <Link href="#" className="text-primary font-medium" prefetch={false}>
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3">
                  <SplitIcon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">PDF Splitter</h2>
              </div>
              <p className="text-muted-foreground">Split PDF documents into multiple files.</p>
            </div>
            <div className="border-t border-muted p-4 text-right">
              <Link href="#" className="text-primary font-medium" prefetch={false}>
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3">
                  <BookMarkedIcon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">PDF Watermarker</h2>
              </div>
              <p className="text-muted-foreground">Add watermarks to your PDF documents.</p>
            </div>
            <div className="border-t border-muted p-4 text-right">
              <Link href="#" className="text-primary font-medium" prefetch={false}>
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full p-3">
                  <BookLockIcon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">PDF Password</h2>
              </div>
              <p className="text-muted-foreground">Secure your PDF documents with passwords.</p>
            </div>
            <div className="border-t border-muted p-4 text-right">
              <Link href="#" className="text-primary font-medium" prefetch={false}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function BookLockIcon(props: any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" />
      <path d="M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20" />
      <rect width="8" height="5" x="12" y="6" rx="1" />
      <path d="M18 6V4a2 2 0 1 0-4 0v2" />
    </svg>
  )
}


function BookMarkedIcon(props: any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <polyline points="10 2 10 10 13 7 16 10 16 2" />
    </svg>
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


function FilePenIcon(props: any) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function FilePlusIcon(props: any) {
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
      <path d="M9 15h6" />
      <path d="M12 18v-6" />
    </svg>
  )
}


function PrinterIcon(props: any) {
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
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  )
}


function SplitIcon(props: any) {
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
      <path d="M16 3h5v5" />
      <path d="M8 3H3v5" />
      <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
      <path d="m15 9 6-6" />
    </svg>
  )
}
