import Link from "next/link"

export default function page() {
  return (
    <div className="w-full">
      <header className="text-black py-6 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center">Audio Tools</h1>
        </div>
      </header>
      <main className="py-12 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Audio Converter */}
          <ToolCard
            title="Audio Converter"
            description="Convert audio files to various formats effortlessly."
            icon={<AudioConvertIcon className="h-6 w-6" />}
            link="/audio-converter"
          />
          {/* Audio Editor */}
          <ToolCard
            title="Audio Editor"
            description="Edit and enhance your audio files with ease."
            icon={<AudioEditIcon className="h-6 w-6" />}
            link="/audio-editor"
          />
          {/* Audio Compressor */}
          <ToolCard
            title="Audio Compressor"
            description="Reduce the file size of your audio files."
            icon={<AudioCompressIcon className="h-6 w-6" />}
            link="/audio-compressor"
          />
          {/* Audio Merger */}
          <ToolCard
            title="Audio Merger"
            description="Combine multiple audio files into one."
            icon={<AudioMergeIcon className="h-6 w-6" />}
            link="/audio-merger"
          />
        </div>
      </main>
    </div>
  )
}

// Reuse the ToolCard component
function ToolCard({ title, description, icon, link }: { title: string, description: string, icon: any, link: string}) {
  return (
    <div className="bg-background rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-primary text-primary-foreground rounded-full p-3">
            {icon}
          </div>
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="border-t border-muted p-4 text-right">
        <Link href={link} className="text-primary font-medium" prefetch={false}>
          Learn More
        </Link>
      </div>
    </div>
  )
}

// Define your icons here (placeholders for the example)
function AudioConvertIcon(props: any) {
  return <svg {...props} /* SVG Code */ />;
}
function AudioEditIcon(props: any) {
  return <svg {...props} /* SVG Code */ />;
}
function AudioCompressIcon(props: any) {
  return <svg {...props} /* SVG Code */ />;
}
function AudioMergeIcon(props: any) {
  return <svg {...props} /* SVG Code */ />;
}
