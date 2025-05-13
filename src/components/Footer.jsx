import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 text-sm px-4 py-8">
      {/* Disclaimer Text */}
      <div className="max-w-5xl mx-auto space-y-4">
        <p>
          No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuers threshold.
          
        </p>
        <p>
          No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply. Representative example: A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00.
          
        </p>
        <p>
            Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card
        </p>
      </div>

      <hr className="my-6 border-gray-600" />

      {/* Footer Links */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div>
          <h3 className="font-semibold text-white mb-2">Shop & Learn</h3>
          <ul className="space-y-1">
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>AirPods</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Account</h3>
          <ul className="space-y-1">
            <li>Manage Your Account</li>
            <li>Sign In</li>
            <li>Create Account</li>
            <li>Order History</li>
            <li>Billing Information</li>
            <li>Payment Methods</li>
            <li>Subscriptions</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-2">Apple Store</h3>
          <ul className="space-y-1">
            <li>Apple Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Apple Watch</li>
            <li>AirPods</li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-600" />

      {/* Copyright */}
      <p className="text-center text-gray-400 text-xs">
        Copyright © 2025 Apple Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
