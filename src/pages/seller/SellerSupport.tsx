import { useState } from "react";
import SellerNavbar from "../../components/seller/SellerNavbar";
import SellerSidebar from "../../components/seller/SellerSidebar";
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  ChevronRight,
} from "lucide-react";

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Chat Support",
    description: "Get instant help from our support team",
    action: "Start Chat",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with a support representative",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email with your query",
    action: "Send Email",
  },
  {
    icon: FileText,
    title: "Help Center",
    description: "Browse through our documentation",
    action: "View Docs",
  },
];

export default function SellerSupport() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <SellerNavbar onMenuClick={() => setIsSidebarOpen(true)} />
      <SellerSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <HelpCircle className="text-green-500" />
            Help & Support
          </h1>
          <p className="text-gray-600 mt-1">Get help with your store</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-8">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              How can we help you?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {supportOptions.map((option) => (
                <button
                  key={option.title}
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors group"
                >
                  <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-green-50">
                    <option.icon
                      size={24}
                      className="text-gray-600 group-hover:text-green-500"
                    />
                  </div>
                  <div className="flex-1 text-left ml-4">
                    <h3 className="font-medium text-gray-800">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {option.description}
                    </p>
                  </div>
                  <ChevronRight
                    size={20}
                    className="text-gray-400 group-hover:text-green-500"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Common Questions
            </h2>
            <div className="space-y-4">
              {[
                "How to process refunds?",
                "Setting up payment methods",
                "Managing inventory",
                "Shipping settings",
                "Tax configuration",
              ].map((topic) => (
                <button
                  key={topic}
                  className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-green-500 transition-colors"
                >
                  <span className="font-medium text-gray-800">{topic}</span>
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
