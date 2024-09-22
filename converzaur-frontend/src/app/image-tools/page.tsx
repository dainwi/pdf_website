import Link from "next/link"

export default function ImageToolsPage() {
  return (
    <div className="w-full">
      <header className="text-black py-6 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center">Image Tools</h1>
        </div>
      </header>
      <main className="py-12 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Image Resizer */}
          <ToolCard
            title="Image Resizer"
            description="Resize your images quickly and easily."
            icon={<ImageResizeIcon className="h-6 w-6" />}
            link="/image-resizer"
          />
          {/* Image Editor */}
          <ToolCard
            title="Image Editor"
            description="Edit and enhance your images with advanced tools."
            icon={<ImageEditIcon className="h-6 w-6" />}
            link="/image-editor"
          />
          {/* Image Converter */}
          <ToolCard
            title="Image Converter"
            description="Convert images to different formats effortlessly."
            icon={<ImageConvertIcon className="h-6 w-6" />}
            link="/image-converter"
          />
          {/* Image Compressor */}
          <ToolCard
            title="Image Compressor"
            description="Reduce the file size of your images."
            icon={<ImageCompressIcon className="h-6 w-6" />}
            link="/image-compressor"
          />
        </div>
      </main>
    </div>
  )
}

function ToolCard({ title, description, icon, link }) {
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
function ImageResizeIcon(props: any) {
  return <svg {...props} /* SVG Code */ />;
}
function ImageEditIcon(props: any) {
  return <svg {...props} /* SVG Code */ />;
}
function ImageConvertIcon(props: any) {
  return <svg {...props} /* SVG Code */ />;
}
function ImageCompressIcon(props: any) {
  return <svg {...props} /* SVG Code */ />;
}
