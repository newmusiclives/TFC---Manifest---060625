import { useState } from 'react'
import { FiUsers, FiDollarSign, FiLink } from 'react-icons/fi'

const AffiliateProgram = () => {
  const [monthlyDonations, setMonthlyDonations] = useState<number>(1000)
  const [referredArtists, setReferredArtists] = useState<number>(5)
  const [secondTierArtists, setSecondTierArtists] = useState<number>(10)
  const [avgDonationPerArtist, setAvgDonationPerArtist] = useState<number>(500)

  // Calculate earnings
  const directEarnings = (referredArtists * avgDonationPerArtist * 0.025)
  const secondTierEarnings = (secondTierArtists * avgDonationPerArtist * 0.025)
  const totalEarnings = directEarnings + secondTierEarnings
  const totalAnnualEarnings = totalEarnings * 12

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Affiliate Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earn additional income by referring other music artists to TrueFans CONNECT.
            As a music artist on our platform, you're automatically enrolled in our affiliate program.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 md:p-12 shadow-sm mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiLink className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Refer Music Artists</h3>
              <p className="text-gray-600">
                Share your unique referral link with other music artists to invite them to join TrueFans CONNECT.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Your Network</h3>
              <p className="text-gray-600">
                Grow your network of referred artists. They can also refer others, creating a second tier of referrals for you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiDollarSign className="text-primary-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn Commissions</h3>
              <p className="text-gray-600">
                Earn 2.5% commission on all donations received by your direct referrals and 2.5% from their referrals too.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">How Our Affiliate Program Works</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Automatic Enrollment</h3>
                <p className="text-gray-600">
                  All music artists on TrueFans CONNECT are automatically enrolled in our affiliate program. 
                  You'll receive a unique referral link in your dashboard once you sign up.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Two-Tier Commission Structure</h3>
                <p className="text-gray-600">
                  <strong>Direct Referrals (Tier 1):</strong> Earn 2.5% commission on all donations received by music artists you directly refer to the platform.
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Indirect Referrals (Tier 2):</strong> Earn an additional 2.5% commission on all donations received by music artists referred by your direct referrals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Monthly Payments</h3>
                <p className="text-gray-600">
                  Commissions are calculated monthly and paid out with your regular earnings through our Manifest Financial API integration.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Transparent Tracking</h3>
                <p className="text-gray-600">
                  Track your referrals and earnings in real-time through your dashboard. See exactly how much you're earning from each referred artist.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">How Much Can You Earn?</h2>
            <p className="text-gray-600 mb-6 text-center">
              Use our calculator to estimate your potential affiliate earnings
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Monthly Donations ($)
                </label>
                <input
                  type="number"
                  value={monthlyDonations}
                  onChange={(e) => setMonthlyDonations(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Directly Referred Music Artists
                </label>
                <input
                  type="number"
                  value={referredArtists}
                  onChange={(e) => setReferredArtists(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Second-Tier Referred Music Artists
                </label>
                <input
                  type="number"
                  value={secondTierArtists}
                  onChange={(e) => setSecondTierArtists(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Average Monthly Donations per Referred Artist ($)
                </label>
                <input
                  type="number"
                  value={avgDonationPerArtist}
                  onChange={(e) => setAvgDonationPerArtist(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  min="0"
                />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Monthly Direct Referral Earnings:</span>
                  <span className="font-semibold">${directEarnings.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Monthly Second-Tier Earnings:</span>
                  <span className="font-semibold">${secondTierEarnings.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="text-gray-800 font-medium">Total Monthly Earnings:</span>
                  <span className="font-bold text-primary-600">${totalEarnings.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 mt-2 border-t border-gray-200">
                  <span className="text-gray-800 font-medium">Estimated Annual Earnings:</span>
                  <span className="font-bold text-primary-600">${totalAnnualEarnings.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 text-white rounded-3xl p-8 md:p-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join TrueFans CONNECT today as a music artist and automatically become part of our affiliate program.
          </p>
          <a href="/signup?type=musician" className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Join Now
          </a>
        </div>
      </section>
    </div>
  )
}

export default AffiliateProgram
