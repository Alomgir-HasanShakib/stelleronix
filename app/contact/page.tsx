import Header from "@/components/header"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="pt-16">
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}
