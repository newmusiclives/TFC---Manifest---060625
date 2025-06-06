import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCheck, FiHelpCircle, FiDollarSign, FiClock, FiLink, FiPercent } from 'react-icons/fi'

const Pricing = () => {
  const [showTooltip, setShowTooltip] = useState<string | null>(null)

  const toggleTooltip = (id: string) => {
    if (showTooltip === id) {
      setShowTooltip(null)
    } else {
      setShowTooltip(id)
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          TrueFans CONNECT is designed to be fair and straightforward. Musicians keep 80% of every donation, with next-day payouts.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-16 bg-gray-50 rounded-3xl mb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple process that puts more money in musicians' pockets, faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Sign Up Free</h3>
              <p className="text-gray-600">
                Musicians sign up for TrueFans CONNECT at no cost. No monthly fees, ever.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiLink size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Share Your Link</h3>
              <p className="text-gray-600">
                Share your unique donation link at shows, on your website, and via social media.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiDollarSign size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Fans Donate</h3>
              <p className="text-gray-600">
                Fans click your link and make one-time or recurring donations to support your music.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiClock size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">4. Get Paid Fast</h3>
              <p className="text-gray-600">
                Receive 80% of every donation directly to your account by the next business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Split Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6">80/20 Revenue Split</h2>
              <p className="text-xl text-gray-600 mb-8">
                We believe in fair compensation for musicians. That's why we offer one of the most competitive revenue splits in the industry.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-4">
                    <FiPercent className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">80% to Musicians</h4>
                    <p className="text-gray-600">
                      You keep 80% of every donation made through your link. No tiers, no complicated rules.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mt-1 mr-4">
                    <FiClock className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Next-Day Payouts</h4>
                    <p className="text-gray-600">
                      Receive your earnings by the next business day. No more waiting for monthly payouts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-4">
                    <FiDollarSign className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">No Hidden Fees</h4>
                    <p className="text-gray-600">
                      We cover payment processing costs. The 80/20 split is all-inclusive with no additional fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Donation Breakdown</h3>
                  
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Fan Donation</span>
                      <span className="font-bold">$100.00</span>
                    </div>
                    <div className="h-4 w-full bg-gray-100 rounded-full">
                      <div className="h-4 bg-primary-600 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">To Musician</span>
                        <span className="font-bold text-green-600">$80.00</span>
                      </div>
                      <div className="h-4 w-full bg-gray-100 rounded-full">
                        <div className="h-4 bg-green-500 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">80% of donation</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Platform Fee</span>
                        <span className="font-bold text-gray-600">$20.00</span>
                      </div>
                      <div className="h-4 w-full bg-gray-100 rounded-full">
                        <div className="h-4 bg-gray-400 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">20% of donation</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-semibold mb-3">What our 20% covers:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FiCheck className="text-green-600 mt-1 mr-2" />
                        <span className="text-gray-600">Payment processing fees</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-green-600 mt-1 mr-2" />
                        <span className="text-gray-600">Platform development and maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-green-600 mt-1 mr-2" />
                        <span className="text-gray-600">Building new tools for musicians</span>
                      </li>
                      <li className="flex items-start">
                        <FiCheck className="text-green-600 mt-1 mr-2" />
                        <span className="text-gray-600">Customer support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-12 md:py-16 bg-gray-50 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Flexible Donation Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fans can choose how they want to support you. All donations are processed instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FiDollarSign size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">One-Time Donations</h3>
              <p className="text-gray-600 mb-4">
                Perfect for fans who want to show their appreciation after a great show or new release.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2" />
                  <span>No minimum amount</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2" />
                  <span>Processed immediately</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2" />
                  <span>Paid out next business day</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FiDollarSign size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Monthly Support</h3>
              <p className="text-gray-600 mb-4">
                For dedicated fans who want to provide regular support to their favorite musicians.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2" />
                  <span>Recurring monthly donations</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2" />
                  <span>Cancel anytime</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2" />
                  <span>Predictable income for artists</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="bg-pink-100 text-pink-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FiDollarSign size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Amounts</h3>
              <p className="text-gray-600 mb-4">
                Fans can donate any amount they choose, from small tips to substantial support.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2" />
                  <span>Suggested donation tiers</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2" />
                  <span>Custom amount option</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mt-1 mr-2" />
                  <span>Same 80/20 split regardless of amount</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How We Compare</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how TrueFans CONNECT stacks up against other platforms for musicians.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-md">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-4 px-6 text-left text-gray-500 font-medium">Feature</th>
                <th className="py-4 px-6 text-center text-gray-500 font-medium">TrueFans CONNECT</th>
                <th className="py-4 px-6 text-center text-gray-500 font-medium">Other Platforms</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-4 px-6 text-gray-800 font-medium">Revenue Share</td>
                <td className="py-4 px-6 text-center text-green-600 font-bold">80%</td>
                <td className="py-4 px-6 text-center text-gray-600">55-70%</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-800 font-medium">Payout Speed</td>
                <td className="py-4 px-6 text-center text-green-600 font-bold">Next Business Day</td>
                <td className="py-4 px-6 text-center text-gray-600">Weekly or Monthly</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-800 font-medium">Monthly Fee</td>
                <td className="py-4 px-6 text-center text-green-600 font-bold">$0</td>
                <td className="py-4 px-6 text-center text-gray-600">$5-20</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-800 font-medium">Payment Processing Fees</td>
                <td className="py-4 px-6 text-center text-green-600 font-bold">Included</td>
                <td className="py-4 px-6 text-center text-gray-600">Additional 2-3%</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-800 font-medium">Donation Link</td>
                <td className="py-4 px-6 text-center text-green-600 font-bold">Customizable</td>
                <td className="py-4 px-6 text-center text-gray-600">Limited Options</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-800 font-medium">Minimum Payout</td>
                <td className="py-4 px-6 text-center text-green-600 font-bold">$10</td>
                <td className="py-4 px-6 text-center text-gray-600">$25-50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our donation system? Find answers below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">How quickly do I get paid?</h3>
            <p className="text-gray-600">
              Donations are processed immediately, and 80% of the amount is transferred to your connected bank account by the next business day.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">Are there any hidden fees?</h3>
            <p className="text-gray-600">
              No hidden fees. Musicians receive 80% of all donations, and we take a 20% platform fee. We cover all payment processing and payout fees within that 20%.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">Is there a minimum donation amount?</h3>
            <p className="text-gray-600">
              There's no minimum donation amount. Fans can donate as little or as much as they want. We do have a $10 minimum for payouts to your bank account.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">How do I share my donation link?</h3>
            <p className="text-gray-600">
              Your unique donation link can be shared anywhere - on your social media profiles, website, in your email newsletter, or displayed at live shows. We provide QR codes that can be printed for physical display.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">What payment methods can fans use?</h3>
            <p className="text-gray-600">
              Fans can donate using all major credit and debit cards, Apple Pay, Google Pay, and PayPal. We're constantly adding more payment options to make it easy for fans to support you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary-600 text-white rounded-3xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of musicians already receiving direct support from their fans. Sign up is free and takes less than 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/join-as-musician" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Join as a Musician
            </Link>
            <Link to="/signup" className="btn bg-secondary-600 hover:bg-secondary-700 text-white">
              Support a Musician
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
