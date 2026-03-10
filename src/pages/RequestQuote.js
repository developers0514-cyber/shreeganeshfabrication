import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Upload, X } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const RequestQuote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project_type: '',
    material_type: '',
    dimensions: '',
    description: '',
  });

  const totalSteps = 3;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.project_type || !formData.material_type || !formData.dimensions) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/quotes`, formData);
      console.log('Quote submitted:', response.data);
      toast.success('Quote request submitted successfully!');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast.error('Failed to submit quote. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      project_type: '',
      material_type: '',
      dimensions: '',
      description: '',
    });
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-2xl text-center">
          <div className="bg-gray-50 border border-green-500/50 p-12">
            <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2
              className="text-4xl font-bold uppercase tracking-tight text-slate-900 mb-4"
              style={{ fontFamily: 'Barlow Condensed' }}
              data-testid="success-message"
            >
              Quote Request Received!
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Thank you for your interest. We'll review your requirements and get back to you within 24 hours.
            </p>
            <button
              onClick={resetForm}
              className="bg-[#FB923C] hover:bg-[#EA580C] text-slate-900 px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300 border border-#E67E22"
              data-testid="submit-another-button"
            >
              Submit Another Quote
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-1 border border-[#FB923C]/50 bg-[#FB923C]/10">
              <span className="text-[#FB923C] text-xs font-bold uppercase tracking-widest">Get Started</span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-slate-900 mb-6"
              style={{ fontFamily: 'Barlow Condensed' }}
              data-testid="quote-form-title"
            >
              Request a Quote
            </h1>
            <p className="text-lg text-slate-600">
              Tell us about your project and we'll provide a detailed quote within 24 hours
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mt-12">
            <div className="flex justify-between items-center max-w-2xl mx-auto">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 border-2 flex items-center justify-center font-bold transition-colors duration-300 ${
                        currentStep >= step
                          ? 'bg-[#FB923C] border-#E67E22 text-slate-900'
                          : 'bg-transparent border-gray-200 text-slate-600'
                      }`}
                      style={{ fontFamily: 'Barlow Condensed' }}
                    >
                      {step}
                    </div>
                    <div className={`text-xs mt-2 uppercase tracking-widest ${
                      currentStep >= step ? 'text-[#FB923C]' : 'text-slate-600'
                    }`}>
                      {step === 1 && 'Contact'}
                      {step === 2 && 'Project'}
                      {step === 3 && 'Details'}
                    </div>
                  </div>
                  {step < 3 && (
                    <div className={`h-0.5 flex-1 transition-colors duration-300 ${
                      currentStep > step ? 'bg-[#FB923C]' : 'bg-gray-50'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-3xl">
          <div className="bg-gray-50 border border-gray-200 p-8 md:p-12">
            {/* Step 1: Contact Information */}
            {currentStep === 1 && (
              <div data-testid="step-1">
                <h2
                  className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-slate-900 mb-8"
                  style={{ fontFamily: 'Barlow Condensed' }}
                >
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/50 border-b-2 border-gray-200 focus:border-[#FB923C] px-4 py-3 text-slate-900 placeholder:text-neutral-600 transition-colors focus:bg-white outline-none w-full"
                      placeholder="Enter your full name"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/50 border-b-2 border-gray-200 focus:border-[#FB923C] px-4 py-3 text-slate-900 placeholder:text-neutral-600 transition-colors focus:bg-white outline-none w-full"
                      placeholder="your.email@example.com"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/50 border-b-2 border-gray-200 focus:border-[#FB923C] px-4 py-3 text-slate-900 placeholder:text-neutral-600 transition-colors focus:bg-white outline-none w-full"
                      placeholder="+91 XXXXX XXXXX"
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-white/50 border-b-2 border-gray-200 focus:border-[#FB923C] px-4 py-3 text-slate-900 placeholder:text-neutral-600 transition-colors focus:bg-white outline-none w-full"
                      placeholder="Your company name"
                      data-testid="input-company"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <div data-testid="step-2">
                <h2
                  className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-slate-900 mb-8"
                  style={{ fontFamily: 'Barlow Condensed' }}
                >
                  Project Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Project Type *
                    </label>
                    <select
                      name="project_type"
                      value={formData.project_type}
                      onChange={handleInputChange}
                      className="bg-white/50 border-b-2 border-gray-200 focus:border-[#FB923C] px-4 py-3 text-slate-900 transition-colors focus:bg-white outline-none w-full"
                      data-testid="select-project-type"
                    >
                      <option value="">Select project type</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Residential">Residential</option>
                      <option value="Custom">Custom</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Material Type *
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['Steel', 'Aluminum', 'Stainless'].map((material) => (
                        <button
                          key={material}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, material_type: material }))}
                          className={`py-3 px-4 font-bold uppercase tracking-wider text-sm transition-all duration-300 ${
                            formData.material_type === material
                              ? 'bg-[#FB923C] text-slate-900 border border-#E67E22'
                              : 'bg-transparent border border-gray-200 text-slate-600 hover:border-[#FB923C] hover:text-[#FB923C]'
                          }`}
                          data-testid={`material-${material.toLowerCase()}`}
                        >
                          {material}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Dimensions *
                    </label>
                    <input
                      type="text"
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleInputChange}
                      className="bg-white/50 border-b-2 border-gray-200 focus:border-[#FB923C] px-4 py-3 text-slate-900 placeholder:text-neutral-600 transition-colors focus:bg-white outline-none w-full"
                      placeholder="e.g., 2000mm x 1000mm x 500mm"
                      data-testid="input-dimensions"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Additional Details */}
            {currentStep === 3 && (
              <div data-testid="step-3">
                <h2
                  className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-slate-900 mb-8"
                  style={{ fontFamily: 'Barlow Condensed' }}
                >
                  Additional Details
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Project Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={6}
                      className="bg-white/50 border-b-2 border-gray-200 focus:border-[#FB923C] px-4 py-3 text-slate-900 placeholder:text-neutral-600 transition-colors focus:bg-white outline-none w-full resize-none"
                      placeholder="Provide any additional details about your project requirements..."
                      data-testid="textarea-description"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">
                      Upload Blueprint (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-200 hover:border-[#FB923C]/50 transition-colors duration-300 p-8 text-center">
                      <Upload className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                      <p className="text-slate-600 text-sm mb-2">Drag and drop files here or click to browse</p>
                      <p className="text-slate-600 text-xs">Supported formats: PDF, DXF, DWG (Max 10MB)</p>
                      <input type="file" className="hidden" accept=".pdf,.dxf,.dwg" />
                    </div>
                  </div>
                </div>

                {/* Review Summary */}
                <div className="mt-8 p-6 bg-white/30 border border-gray-200">
                  <h3 className="text-lg font-bold uppercase text-[#FB923C] mb-4" style={{ fontFamily: 'Barlow Condensed' }}>
                    Review Your Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Name:</span>
                      <span className="text-slate-900">{formData.name || 'Not provided'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Email:</span>
                      <span className="text-slate-900">{formData.email || 'Not provided'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Project Type:</span>
                      <span className="text-slate-900">{formData.project_type || 'Not provided'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Material:</span>
                      <span className="text-slate-900">{formData.material_type || 'Not provided'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Dimensions:</span>
                      <span className="text-slate-900">{formData.dimensions || 'Not provided'}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`flex items-center space-x-2 px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 ${
                  currentStep === 1
                    ? 'opacity-50 cursor-not-allowed text-slate-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                data-testid="button-back"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </button>

              {currentStep < totalSteps ? (
                <button
                  onClick={handleNext}
                  className="flex items-center space-x-2 bg-[#FB923C] hover:bg-[#EA580C] text-slate-900 px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 border border-#E67E22"
                  data-testid="button-next"
                >
                  <span>Next</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center space-x-2 bg-[#FB923C] hover:bg-[#EA580C] text-slate-900 px-8 py-3 font-bold uppercase tracking-wider transition-all duration-300 border border-#E67E22 disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="button-submit"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Quote'}</span>
                  {!isSubmitting && <CheckCircle2 className="w-5 h-5" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;
