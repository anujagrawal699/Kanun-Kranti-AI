import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const TextResultBox = ({ apiResponse, selectedLanguage }) => {
    const [text, setText] = useState('No response text available');
    const [translatedText, setTranslatedText] = useState('');
    const [isTranslating, setIsTranslating] = useState(false);
    const [translationError, setTranslationError] = useState(null);

    useEffect(() => {
        if (apiResponse && apiResponse.candidates && apiResponse.candidates.length > 0) {
            const candidate = apiResponse.candidates[0];
            if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
                setText(candidate.content.parts[0].text || 'Response text is empty');
            }
        }
    }, [apiResponse]);

    useEffect(() => {
        const translateText = async () => {
            if (selectedLanguage && selectedLanguage !== 'English' && text) {
                setIsTranslating(true);
                setTranslationError(null);
                try {
                    const response = await axios.post(
                        'https://cors-anywhere.herokuapp.com/https://libretranslate.de/translate',
                        {
                            q: text,
                            source: 'en',
                            target: getLanguageCode(selectedLanguage),
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Origin': 'http://localhost:3000'
                            },
                        }
                    );
                    setTranslatedText(response.data.translatedText);
                } catch (error) {
                    console.error('Translation error:', error);
                    setTranslationError('An error occurred during translation. Please try again.');
                } finally {
                    setIsTranslating(false);
                }
            } else {
                setTranslatedText('');
            }
        };

        translateText();
    }, [selectedLanguage, text]);

    const getLanguageCode = (language) => {
        const languageCodes = {
            'English': 'en',
            'Hindi': 'hi',
            'Marathi': 'mr',
            'Telugu': 'te',
            'Tamil': 'ta',
            'Kannada': 'kn',
        };
        return languageCodes[language] || 'en';
    };

    const displayText = translatedText || text;

    return (
        <div className="text-justify p-6 max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
            {isTranslating && (
                <div className="mb-4 text-blue-500">Translating to {selectedLanguage}...</div>
            )}
            {translationError && (
                <div className="mb-4 text-red-500">{translationError}</div>
            )}
            <div className="prose prose-sm max-w-none">
                <ReactMarkdown>{displayText}</ReactMarkdown>
            </div>
            {apiResponse && apiResponse.error && (
                <div className="text-red-500 mt-4">Error: {apiResponse.error}</div>
            )}
        </div>
    );
};

export default TextResultBox;