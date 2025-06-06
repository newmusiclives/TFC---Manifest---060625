import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

type FAQItem = {
  question: string
  answer: string
}

const FAQ = () => {
  const [activeArtistIndex, setActiveArtistIndex] = useState<number | null>(null)
  const [activeFanIndex, setActiveFanIndex] = useState<number | null>(null)

  const artistFAQs: FAQItem[] = [
    {
      question: "How do I join TrueFans CONNECT as a music artist?",
      answer: "To join as a music artist, click on the 'Join Now' button in the 'For Music Artists' section of our website. You'll need to create an account, complete your profile with your music information, and set up your payment details to receive donations."
    },
    {
      question: "What fees does TrueFans CONNECT charge?",
      answer: "TrueFans CONNECT takes a 20% platform fee from all donations. This covers payment processing, platform maintenance, customer support, and marketing efforts to help you reach new fans. You receive 80% of all donations directly."
    },
    {
      question: "How quickly will I receive my donations?",
      answer: "Donations are processed and transferred to your account on a monthly basis. Payments are typically made on the 1st of each month for the previous month's donations, provided you've reached the minimum payout threshold of $20."
    },
    {
      question: "What content should I provide to my supporters?",
      answer: "Successful artists on our platform typically share a mix of exclusive music (demos, unreleased tracks), behind-the-scenes content (studio sessions, creative process), personal updates, early access to tickets/merchandise, and direct communication with supporters. The more value you provide, the more likely fans are to continue supporting you."
    },
    {
      question: "Can I see who my supporters are?",
      answer: "Yes, you'll have access to a dashboard showing all your supporters, their donation amounts, and their contact information (if they've opted to share it). This allows you to communicate directly with your most dedicated fans."
    },
    {
      question: "How can I promote my TrueFans CONNECT profile?",
      answer: "We recommend sharing your profile link across all your social media channels, mentioning it during performances, including it in your email newsletters, and highlighting the exclusive content supporters receive. We also provide promotional tools in your dashboard to help you effectively communicate the benefits of supporting you directly."
    },
    {
      question: "Can I offer different tiers of support?",
      answer: "Currently, fans can choose their own donation amount, either as a one-time donation or a monthly subscription. We're working on implementing formal support tiers with different benefits in the near future."
    }
  ]

  const fanFAQs: FAQItem[] = [
    {
      question: "How do I start supporting an artist?",
      answer: "Simply create an account, find the artist you want to support on our Discover page, and choose either a one-time or monthly donation. You can support multiple artists with different amounts."
    },
    {
      question: "Can I cancel my monthly donation?",
      answer: "Yes, you can cancel or modify your donation amount at any time from your account settings. Changes will take effect on your next billing date."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit and debit cards, as well as PayPal. We're working on adding more payment options in the future."
    },
    {
      question: "How do I access exclusive content?",
      answer: "Once you're supporting an artist, you'll automatically get access to their supporter-only content through your dashboard. You'll also receive notifications when new exclusive content is available."
    },
    {
      question: "How do I know my donation is going to the music artist?",
      answer: "Transparency is important to us. You'll receive confirmation when your donation is processed, and 80% of your donation goes directly to the artist. The remaining 20% covers platform fees and payment processing."
    },
    {
      question: "Can I support an artist anonymously?",
      answer: "Yes, you can choose to keep your support anonymous. In your account settings, you can toggle whether you want the artist to see your name and contact information or remain anonymous."
    },
    {
      question: "What happens if an artist I support leaves the platform?",
      answer: "If an artist leaves the platform, your recurring donations to them will automatically be canceled. You'll receive a notification if this happens, and you won't be charged for any future payments to that artist."
    },
    {
      question: "Can I get a refund for my donation?",
      answer: "One-time donations are generally non-refundable as they go directly to supporting the artist. However, if you have concerns about your donation or believe there was an error, please contact our support team within 14 days of the donation."
    }
  ]

  const toggleArtistFAQ = (index: number) => {
    setActiveArtistIndex(activeArtistIndex === index ? null : index)
  }

  const toggleFanFAQ = (index: number) => {
    setActiveFanIndex(activeFanIndex === index ? null : index)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find answers to common questions about TrueFans CONNECT for both music artists and fans.
        </p>
      </div>

      {/* For Music Artists Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">For Music Artists</h2>
        <div className="space-y-4">
          {artistFAQs.map((faq, index) => (
            <div 
              key={`artist-faq-${index}`}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                onClick={() => toggleArtistFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {activeArtistIndex === index ? (
                  <FiChevronUp className="flex-shrink-0 ml-2 text-primary-600" />
                ) : (
                  <FiChevronDown className="flex-shrink-0 ml-2 text-gray-400" />
                )}
              </button>
              {activeArtistIndex === index && (
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* For Fans Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">For Fans</h2>
        <div className="space-y-4">
          {fanFAQs.map((faq, index) => (
            <div 
              key={`fan-faq-${index}`}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors text-left"
                onClick={() => toggleFanFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {activeFanIndex === index ? (
                  <FiChevronUp className="flex-shrink-0 ml-2 text-primary-600" />
                ) : (
                  <FiChevronDown className="flex-shrink-0 ml-2 text-gray-400" />
                )}
              </button>
              {activeFanIndex === index && (
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="text-gray-600 mb-6">
          If you couldn't find the answer to your question, feel free to reach out to our support team.
        </p>
        <a 
          href="mailto:support@truefansconnect.com" 
          className="btn btn-primary inline-block"
        >
          Contact Support
        </a>
      </div>
    </div>
  )
}

export default FAQ
