'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, FileText, Scissors, Image, User } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleDropdownToggle = (dropdownId: string) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId)
  }

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-rose-900">Converzaur</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-9">
              {/* Desktop Dropdown Menus */}
              {/* <DropdownNavLink
                href="/pdf-tools"
                icon={<FileText className="w-4 h-4 mr-2" />}
                text="PDF Tools"
                items={[
                  { href: "/pdf-tools", text: "All PDF Tools" },
                  { href: "/convert-pdf", text: "Convert PDF" },
                  { href: "/merge-pdf", text: "Merge PDF" },
                  { href: "/split-pdf", text: "Split PDF" }
                ]}
                isOpen={openDropdown === "pdf"}
                onToggle={() => handleDropdownToggle("pdf")}
              />
              <DropdownNavLink
                href="/clip-audio"
                icon={<Scissors className="w-4 h-4 mr-2" />}
                text="Audio Tools"
                items={[
                  { href: "/clip-audio", text: "Clip Audio" },
                  { href: "/convert-audio", text: "Convert Audio" },
                  { href: "/merge-audio", text: "Merge Audio" }
                ]}
                isOpen={openDropdown === "audio"}
                onToggle={() => handleDropdownToggle("audio")}
              />
              <DropdownNavLink
                href="/resize-images"
                icon={<Image className="w-4 h-4 mr-2" />}
                text="Image Tools"
                items={[
                  { href: "/resize-images", text: "Resize Images" },
                  { href: "/crop-images", text: "Crop Images" },
                  { href: "/convert-images", text: "Convert Images" }
                ]}
                isOpen={openDropdown === "images"}
                onToggle={() => handleDropdownToggle("images")}
              /> */}

              <Link href='/pdf-tools' className="flex items-center"><FileText className="w-4 h-4 mr-2" /> PDF Tools</Link>
              <Link href='/audio-tools' className="flex items-center"><Scissors className="w-4 h-4 mr-2" /> Audio Tools</Link>
              <Link href='/image-tools' className="flex items-center"><Image className="w-4 h-4 mr-2" /> Image Tools</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Account
            </Button>
          </div>


          {/* Mobile Menu Button with Sheet */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <span className="sr-only">Open main menu</span>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-6 space-y-12">
                <div className="space-y-12">
                  <SheetClose asChild>
                    <Link href='/pdf-tools'>
                    <Button variant="ghost" size="lg" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      PDF Tools
                    </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href='/audio-tools'>
                    <Button variant="ghost" size="lg" className="w-full justify-start">
                      <Scissors className="w-4 h-4 mr-2" />
                      Audio Tools
                    </Button>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href='/image-tools'>
                    <Button variant="ghost" size="lg" className="w-full justify-start">
                      <Image className="w-4 h-4 mr-2" />
                      Image Tools
                    </Button>
                    </Link>
                  </SheetClose>
                  <Button variant="outline" size="sm" className="w-full bg-primary text-primary-foreground">
                    <User className="w-4 h-4 mr-2" />
                    Account
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

// DropdownNavLink Component for Desktop View
// function DropdownNavLink({
//   href,
//   icon,
//   text,
//   items,
//   isOpen,
//   onToggle,
// }: {
//   href: string
//   icon: JSX.Element
//   text: string
//   items: { href: string; text: string }[]
//   isOpen: boolean
//   onToggle: () => void
// }) {
//   return (
//     <DropdownMenu open={isOpen} onOpenChange={onToggle}>
//       <DropdownMenuTrigger asChild>
//         <Link
//           href={href}
//           className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
//         >
//           <span className="flex items-center">
//             {icon}
//             {text}
//           </span>
//         </Link>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent>
//         {items.map((item) => (
//           <DropdownMenuItem key={item.href} asChild>
//             <Link href={item.href} className="flex items-center px-4 py-2 text-sm hover:bg-gray-100">
//               {item.text}
//             </Link>
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
