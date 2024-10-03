import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gavel } from 'lucide-react';

const welcomePhrases = [
  { text: "Welcome to Kanun Kranti AI", lang: "English" },
  { text: "कानून क्रांति AI में आपका स्वागत है", lang: "Hindi" },
  { text: "कानून क्रांती AIमध्ये आपले स्वागत आहे", lang: "Marathi" },
  { text: "কানুন ক্রান্তিতে আপনাকে স্বাগতম", lang: "Bengali" },
  { text: "કાનૂન ક્રાંતિમાં આપનું સ્વાગત છે", lang: "Gujarati" },
  { text: "ਕਾਨੂਨ ਕ੍ਰਾਂਤੀ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ", lang: "Punjabi" },
  { text: "కానూన్ క్రాంతిలో మీకు స్వాగతం", lang: "Telugu" },
  { text: "ಕಾನೂನ್ ಕ್ರಾಂತಿಗೆ ನಿಮ್ಮ ಸ್ವಾಗತ", lang: "Kannada" },
  { text: "കാനൂൺ ക്രാന്തിയിലേക്ക് സ്വാഗതം", lang: "Malayalam" },
  { text: "கனூன் கிராந்திக்கு உங்களை வரவேற்கிறோம்", lang: "Tamil" },
  { text: "कानून क्रांति में आपका स्वागत है", lang: "Nepali" },
  { text: "କାନୁନ୍ କ୍ରାନ୍ତିକୁ ଆପଣଙ୍କୁ ସ୍ଵାଗତ", lang: "Odia" },
  { text: "कानून क्रांति में आपले स्वागत आहे", lang: "Sanskrit" }
];

const subtitles = [
  { text: "Unlock intelligent search of Commercial Court cases with our generative AI.", lang: "English" },
  { text: "हमारे जेनरेटिव AI के साथ वाणिज्यिक न्यायालय मामलों की बुद्धिमान खोज को अनलॉक करें।", lang: "Hindi" },
  { text: "आमच्या जनरेटिव AI सह वाणिज्यिक न्यायालय प्रकरणांचा बुद्धिमान शोध अनलॉक करा.", lang: "Marathi" },
  { text: "আমাদের জেনারেটিভ AI সহ বাণিজ্যিক আদালতের মামলার বুদ্ধিমান অনুসন্ধান আনলক করুন।", lang: "Bengali" },
  { text: "અમારા જનરેટિવ AI સાથે વાણિજ્યિક કોર્ટના કેસોની બુદ્ધિશાળી શોધને અનલૉક કરો.", lang: "Gujarati" },
  { text: "ਸਾਡੇ ਜਨਰੇਟਿਵ AI ਨਾਲ ਵਪਾਰਕ ਅਦਾਲਤ ਦੇ ਮਾਮਲਿਆਂ ਦੀ ਬੁੱਧੀਮਾਨ ਖੋਜ ਨੂੰ ਅਨਲੌਕ ਕਰੋ।", lang: "Punjabi" },
  { text: "మా జెనరేటివ్ AI తో వాణిజ్య కోర్టు కేసుల తెలివైన శోధనను అన్‌లాక్ చేయండి.", lang: "Telugu" },
  { text: "ನಮ್ಮ ಜನರೇಟಿವ್ AI ಯೊಂದಿಗೆ ವಾಣಿಜ್ಯ ನ್ಯಾಯಾಲಯದ ಪ್ರಕರಣಗಳ ಬುದ್ಧಿವಂತ ಹುಡುಕಾಟವನ್ನು ಅನ್‌ಲಾಕ್ ಮಾಡಿ.", lang: "Kannada" },
  { text: "ഞങ്ങളുടെ ജനറേറ്റീവ് AI ഉപയോഗിച്ച് വാണിജ്യ കോടതി കേസുകളുടെ ബുദ്ധിപരമായ തിരയൽ അൺലോക്ക് ചെയ്യുക.", lang: "Malayalam" },
  { text: "எங்கள் உருவாக்க AI மூலம் வணிக நீதிமன்ற வழக்குகளின் அறிவார்ந்த தேடலை திறக்கவும்.", lang: "Tamil" },
  { text: "हाम्रो जेनेरेटिभ AI सँग वाणिज्य अदालतका मुद्दाहरूको बुद्धिमान खोजलाई अनलक गर्नुहोस्।", lang: "Nepali" },
  { text: "ଆମର ଜେନେରେଟିଭ୍ AI ସହିତ ବାଣିଜ୍ୟିକ କୋର୍ଟ ମାମଲାଗୁଡ଼ିକର ବୁଦ୍ଧିମାନ ସନ୍ଧାନକୁ ଅନଲକ୍ କରନ୍ତୁ |", lang: "Odia" },
  { text: "अस्माकं जनरेटिव AI साहाय्येन वाणिज्यिकन्यायालयप्रकरणानां बुद्धिमत्तायुक्तं अन्वेषणं विमुञ्चतु।", lang: "Sanskrit" }
];

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSubIndex, setCurrentSubIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % welcomePhrases.length);
      setCurrentSubIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const currentPhrase = welcomePhrases[currentIndex];
  const currentSubtitle = subtitles[currentSubIndex];
  const isEven = currentIndex % 2 === 0;

  return (
    <div className="w-full flex flex-col items-center py-3 overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-4 mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: isEven ? '100%' : '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: isEven ? '-100%' : '100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <h1 className="text-3xl md:text-4xl font-semibold text-center">
              {currentPhrase.text}
            </h1>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSubIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <p className="text-sm text-muted-foreground text-center max-w-md">
              {currentSubtitle.text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* New section for the query heading with animated gavel icon */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
        className="w-full max-w-md text-center flex items-center justify-center space-x-2"
      >
        <h2 className="text-xl font-semibold">
          Get answers to all your commercial court queries below
        </h2>
        <motion.div
          initial={{ rotate: -45 }}
          animate={{ rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1
          }}
        >
          <Gavel className="w-10 h-10" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Header;