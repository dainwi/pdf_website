'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  const [file, setFile] = useState<File | null>(null)
  const [compressedFile, setCompressedFile] = useState<Blob | null>(null)
  const [originalFileSize, setOriginalFileSize] = useState<number | null>(null)
  const [compressedFileSize, setCompressedFileSize] = useState<number | null>(null)

  // Mock compression process
  const compressFile = async (file: File) => {
    // Simulate compression by just reducing the file size in a mock way
    const compressedBlob = new Blob([file], { type: file.type })
    setCompressedFile(compressedBlob)
    setOriginalFileSize(file.size)
    setCompressedFileSize(file.size * 0.4) // Assume 40% compression ratio
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0] || null
    if (uploadedFile) {
      setFile(uploadedFile)
      compressFile(uploadedFile) // Start compressing the file
    }
  }

  const handleDownload = () => {
    if (compressedFile) {
      const link = document.createElement('a')
      link.href = URL.createObjectURL(compressedFile)
      link.download = 'compressed-file.pdf'
      link.click()
    }
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Compress your PDF files</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simply drag and drop your PDF file or click the button to select a file from your device. Our
                  compression algorithm will do the rest, providing you with a smaller file size without compromising
                  quality.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4 rounded-md border bg-background p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Original File Size</p>
                    <p className="text-sm font-medium">
                      {originalFileSize ? `${(originalFileSize / 1024 / 1024).toFixed(2)} MB` : 'N/A'}
                    </p>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">Compressed File Size</p>
                    <p className="text-sm font-medium">
                      {compressedFileSize ? `${(compressedFileSize / 1024 / 1024).toFixed(2)} MB` : 'N/A'}
                    </p>
                  </div>
                  <Button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    onClick={handleDownload}
                    disabled={!compressedFile}
                  >
                    Download Compressed PDF
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4 rounded-md border bg-background p-6 shadow-sm">
                  <div>
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <CloudUploadIcon className="h-8 w-8 text-muted-foreground" />
                      <p className="text-sm font-medium text-muted-foreground">
                        Drag and drop your PDF file here or click to select
                      </p>
                      <label htmlFor="file-upload" className="relative cursor-pointer mt-4">
                        <div className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium bg-primary text-primary-foreground rounded-md shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                          Choose File
                        </div>
                        <input
                          id="file-upload"
                          type="file"
                          accept="application/pdf"
                          onChange={handleFileUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                      </label>
                      {file && (
                        <p className="mt-2 text-sm text-muted-foreground">
                          Selected File: <strong>{file.name}</strong>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CloudUploadIcon(props: any) {
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
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  )
}
