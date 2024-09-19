import Hero from "@/components/Hero"
import KeyBoards from "@/components/KeyBoards"
import Script from "next/script"

export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "KeyboardOS",
    "url": "https://keyboardos.com/",
  }

  return (
    <div className="min-h-screen">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />

      <div className='w-full flex flex-col items-center justify-center my-20'>
        <h2>All Keyboards</h2>
        <div id='tools' className="w-full">
          <KeyBoards pathname={''} />
        </div>
      </div>


    </div>
  )
}
