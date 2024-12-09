import  { useState } from "react";
import { X, Instagram, Send, Youtube } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import PropTypes from "prop-types";

const ReferralPopup = ({ isOpen, onClose }) => {
  const [emailInputs, setEmailInputs] = useState([""]);
  const [shareStatus, setShareStatus] = useState({
    instagram: false,
    whatsapp: false,
    youtube: false,
  });

  // Handle email input changes
  const handleEmailChange = (index, value) => {
    const newEmails = [...emailInputs];
    newEmails[index] = value;
    setEmailInputs(newEmails);
  };

  // Handle share button actions
  const handleShare = (platform) => {
    setShareStatus((prev) => ({
      ...prev,
      [platform]: true,
    }));
  };

  // Calculate total rewards based on valid emails and shares
  const getTotalRewards = () => {
    const validEmails = emailInputs.filter((email) => email.includes("@"))
      .length;
    const socialShares = Object.values(shareStatus).filter(Boolean).length;
    return validEmails + socialShares;
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <AlertDialogHeader>
          <div className="flex justify-between items-center">
            <AlertDialogTitle className="text-2xl font-bold text-gray-800">
              Get Free Tests! 🎁
            </AlertDialogTitle>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </AlertDialogHeader>
        <div className="space-y-6 py-4">
          {/* Invite Friends Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-700">
              Invite 3 Friends
            </h3>
            {emailInputs.map((email, index) => (
              <input
                key={index}
                type="email"
                placeholder={`Friend ${index + 1}'s email`}
                value={email}
                onChange={(e) => handleEmailChange(index, e.target.value)}
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            ))}
          </div>

          {/* Share & Follow Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-700">
              Share & Follow
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <button
                onClick={() => handleShare("instagram")}
                className={`flex items-center gap-3 p-3 rounded-lg shadow-sm ${
                  shareStatus.instagram
                    ? "bg-purple-100 text-purple-600 border border-purple-200"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Instagram className="h-6 w-6 text-red-400" />
                <span>
                  {shareStatus.instagram
                    ? "Shared on Instagram!"
                    : "Share on Instagram"}
                </span>
              </button>

              <button
                onClick={() => handleShare("whatsapp")}
                className={`flex items-center gap-3 p-3 rounded-lg shadow-sm ${
                  shareStatus.whatsapp
                    ? "bg-green-100 text-green-600 border border-green-200"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Send className="h-6 w-6 text-green-400" />
                <span>
                  {shareStatus.whatsapp
                    ? "Shared on WhatsApp!"
                    : "Share on WhatsApp"}
                </span>
              </button>

              <button
                onClick={() => handleShare("youtube")}
                className={`flex items-center gap-3 p-3 rounded-lg shadow-sm ${
                  shareStatus.youtube
                    ? "bg-red-100 text-red-600 border border-red-200"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Youtube className="h-6 w-6 text-red-400" />
                <span>
                  {shareStatus.youtube
                    ? "Subscribed to YouTube!"
                    : "Subscribe on YouTube"}
                </span>
              </button>
            </div>
          </div>

          {/* Rewards Section */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-blue-600">
              Your Rewards
            </h3>
            <p className="text-blue-600 text-sm">
              You&rsquo;ve earned{" "}
              <span className="font-bold">
                {getTotalRewards()} free{" "}
                {getTotalRewards() === 1 ? "test" : "tests"}!
              </span>
            </p>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
ReferralPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose:PropTypes.bool.isRequired 
};
export default ReferralPopup;
