"use client";

import { motion, AnimatePresence } from "framer-motion";
import QRCode from "react-qr-code";
import { XCircle, Copy } from "lucide-react";
import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  amount: number;
  clientName: string;
};

export default function PaymentModal({
  open,
  onClose,
  amount,
  clientName,
}: Props) {
  const [copied, setCopied] = useState(false);

  // 🔴 APNA UPI ID YAHA DAAL
  const upiId = "hitanshsharma6798@okaxis";

  // UPI LINK (auto ₹1500 fill)
  const upiLink = `upi://pay?pa=${upiId}&pn=HiTech&am=${amount}&cu=INR`;

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePaid = () => {
  const message = `Hi Hitansh, I have paid ₹${amount} for ${clientName}. Here is the payment screenshot. Please verify.`;

  const whatsappUrl = `https://wa.me/917018796714?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");

  onClose();
};

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start sm:items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
      className="relative bg-[#111] rounded-2xl p-6 w-full max-w-md text-center border border-white/10 my-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <XCircle />
            </button>

            {/* Title */}
            <h2 className="text-xl font-bold text-white mb-2">
              Pay for {clientName}
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Scan QR using any UPI app
            </p>

            {/* QR CODE */}
            <div className="bg-white p-4 rounded-xl inline-block mb-4">
              <QRCode value={upiLink} size={180} />
            </div>
            

            {/* Amount */}
            <div className="text-2xl font-bold text-green-400 mb-2">
              ₹{amount}
            </div>

            {/* UPI ID */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-3">
              <span>{upiId}</span>
              <button onClick={handleCopy}>
                <Copy size={16} />
              </button>
            </div>

            {copied && (
              <p className="text-green-400 text-xs mb-2">UPI ID Copied</p>
            )}

            {/* ACTION BUTTONS */}
            <div className="space-y-3 mt-4">
              <button
                onClick={handlePaid}
                className="w-full bg-green-500 text-black py-3 rounded-xl font-semibold hover:bg-green-400"
              >
                I Have Paid
              </button>

              <button
                onClick={onClose}
                className="w-full text-gray-400 text-sm hover:text-white"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}