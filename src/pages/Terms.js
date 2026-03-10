import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 mb-4 px-4 py-1 border border-[#FB923C]/50 bg-[#FB923C]/10">
              <FileText className="w-4 h-4 text-[#FB923C]" />
              <span className="text-[#FB923C] text-xs font-bold uppercase tracking-widest">Legal</span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900 mb-6"
              style={{ fontFamily: 'Barlow Condensed' }}
              data-testid="terms-title"
            >
              Terms & Conditions
            </h1>
            <p className="text-lg text-slate-600">
              Last Updated: March 2026
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-slate max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold uppercase text-slate-900 mb-4" style={{ fontFamily: 'Barlow Condensed' }}>
                1. Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Welcome to Shree Ganesh Fabrication. These Terms and Conditions govern your use of our services and website. By engaging our services or using our website, you agree to these terms in full.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold uppercase text-slate-900 mb-4" style={{ fontFamily: 'Barlow Condensed' }}>
                2. Our Services
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Shree Ganesh Fabrication provides metal fabrication, welding, cutting, and custom metalwork services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>TIG/MIG welding services</li>
                <li>CNC plasma cutting</li>
                <li>Custom metal fabrication</li>
                <li>Designer gates, railings, and grills</li>
                <li>Staircases and structural work</li>
                <li>Industrial and residential projects</li>
              </ul>
            </div>

            {/* Quotes and Pricing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold uppercase text-slate-900 mb-4" style={{ fontFamily: 'Barlow Condensed' }}>
                3. Quotes and Pricing
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                All quotes provided are estimates based on the information supplied by the client. Final pricing may vary based on:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Material costs and availability</li>
                <li>Project complexity and specifications</li>
                <li>Timeline requirements</li>
                <li>Site conditions and accessibility</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                Quotes are valid for 30 days from the date of issue unless otherwise stated.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold uppercase text-slate-900 mb-4" style={{ fontFamily: 'Barlow Condensed' }}>
                4. Payment Terms
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>50% advance payment required to commence work</li>
                <li>Balance 50% payment due upon project completion</li>
                <li>Payments can be made via bank transfer, cash, or cheque</li>
                <li>GST applicable as per government regulations</li>
              </ul>
            </div>

            {/* Project Timeline */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold uppercase text-slate-900 mb-4" style={{ fontFamily: 'Barlow Condensed' }}>
                5. Project Timeline
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We strive to complete all projects within the agreed timeline. However, delays may occur due to unforeseen circumstances such as material availability, weather conditions, or client-requested modifications. We will notify clients promptly of any potential delays.
              </p>
            </div>

            {/* Quality and Warranty */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold uppercase text-slate-900 mb-4" style={{ fontFamily: 'Barlow Condensed' }}>
                6. Quality and Warranty
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We guarantee the quality of our workmanship. All welding and fabrication work comes with:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>6-month warranty on workmanship defects</li>
                <li>Material warranties as per manufacturer specifications</li>
                <li>Warranty void if modifications are made without our approval</li>
              </ul>
            </div>

            {/* Client Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold uppercase text-slate-900 mb-4" style={{ fontFamily: 'Barlow Condensed' }}>
                7. Client Responsibilities
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Providing accurate measurements and specifications</li>
                <li>Ensuring site accessibility for installation</li>
                <li>Obtaining necessary permissions and approvals</li>
                <li>Making timely payments as per agreement</li>
                <li>Inspecting and approving work upon completion</li>
              </ul>
            </div>

            {/* Cancellation Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold uppercase text-slate-900 mb-4" style={{ fontFamily: 'Barlow Condensed' }}>
                8. Cancellation and Refunds
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Cancellation policy:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Cancellations before work commencement: 10% cancellation fee</li>
                <li>Cancellations after work has begun: charges based on work completed and materials purchased</li>
                <li>No refunds for completed work</li>
                <li>Custom orders are non-refundable once production has started</li>
              </ul>
            </div>

            {/* Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold uppercase text-slate-900 mb-4" style={{ fontFamily: 'Barlow Condensed' }}>
                9. Limitation of Liability
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Shree Ganesh Fabrication shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or products. Our liability is limited to the value of the contract for the specific project.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold uppercase text-slate-900 mb-4" style={{ fontFamily: 'Barlow Condensed' }}>
                10. Intellectual Property
              </h2>
              <p className="text-slate-600 leading-relaxed">
                All designs, drawings, and specifications created by Shree Ganesh Fabrication remain our intellectual property unless otherwise agreed in writing. Clients receive a license to use the completed work but not to reproduce or modify designs without permission.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold uppercase text-slate-900 mb-4" style={{ fontFamily: 'Barlow Condensed' }}>
                11. Dispute Resolution
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Any disputes arising from our services shall first be attempted to be resolved through mutual discussion. If unresolved, disputes shall be subject to the jurisdiction of Pune courts only.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12 p-8 bg-gray-50 border border-gray-200">
              <h2 className="text-2xl font-bold uppercase text-slate-900 mb-4" style={{ fontFamily: 'Barlow Condensed' }}>
                Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                For any questions regarding these Terms & Conditions, please contact us:
              </p>
              <div className="space-y-2 text-slate-600">
                <p><strong>Shree Ganesh Fabrication</strong></p>
                <p>Chaudhari Plot, Service Rd, Near Dodke Shoban Warje Malwadi</p>
                <p>Warje, Pune, Maharashtra 411058</p>
                <p>Phone: +91 92262 81112, +91 99709 49535</p>
                <p>Email: shreeganeshfabrication52@gmail.com</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
