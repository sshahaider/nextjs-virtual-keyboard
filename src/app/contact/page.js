import Script from "next/script"
import Form from "./Form"
import { publisher } from "../utails"


const meta = {
    title: "Contact - KeyboardOS",
    dec: "If you have any questions regarding our site or need help, you can contact us by filling out the form here.",
    link: "https://keyboardos.com/contact"
}

export function generateMetadata() {

    return {
        title: meta.title,
        description: meta.dec,
        keywords: 'Contact KeyboardOS',
        alternates: {
            canonical: meta.link,
        },
        openGraph: {
            title: meta.title,
            description: meta.dec,
            url: meta.link,
            locale: 'en-US',
            siteName: 'KeyboardOS',
            type: 'website',
        },
    }
}

export default function Contact() {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": meta.link,
        },
        "headline": "Contact",
        "description": meta.dec,
        "image": "",
        "publisher": publisher
    }


    return (
        <div className="min-h-screen flex flex-col md:flex-row items-start justify-center md:space-x-4 pt-12">
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="w-full md:w-[60%] h-full py-12">
                <h1>Contact Us</h1>
                <p>If you have any questions regarding our site or need help, please fill out the form here. We do our best to respond within 1 business day.</p>
            </div>
            <div className="w-full md:w-[40%] relative">
                <div className="hidden md:block -z-10 md:absolute blur-xl w-[250px] h-[250px] bg-main rounded-full -left-24 -top-5"></div>
                <Form />
            </div>

        </div>
    )
}