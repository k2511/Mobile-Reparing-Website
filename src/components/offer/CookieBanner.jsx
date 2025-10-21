import { useState, useEffect } from "react";

export default function CookieBanner({ trigger }) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent") && trigger) {
      setShowBanner(true);
    }
  }, [trigger]);

  const handleConsent = (choice) => {
    localStorage.setItem("cookieConsent", choice);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-11/12 max-w-lg bg-white shadow-lg p-4 rounded-2xl flex flex-col gap-3 text-sm z-[9999]">
      <p className="font-semibold">We value your privacy</p>
      <p>
        We use cookies to enhance your browsing experience, serve personalised ads or content, 
        and analyse our traffic. By clicking "Accept All", you consent to our use of cookies.{" "}
        <a href="/cookie-policy" className="text-blue-600 underline">Cookie Policy</a>
      </p>
      <div className="flex gap-2 justify-end">
        <button onClick={() => handleConsent("reject")} className="px-3 py-1 bg-gray-200 rounded-lg">Reject All</button>
        <button onClick={() => handleConsent("customise")} className="px-3 py-1 bg-yellow-300 rounded-lg">Customise</button>
        <button onClick={() => handleConsent("accept")} className="px-3 py-1 bg-green-500 text-white rounded-lg">Accept All</button>
      </div>
    </div>
  );
}
