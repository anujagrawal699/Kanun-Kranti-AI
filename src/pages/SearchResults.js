import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaSearch, FaSortAmountDown, FaBookOpen, FaBalanceScale } from 'react-icons/fa';
import { ChevronDown, List, Grid, BookOpen, Scale, Gavel, Info, Download, Share2, ArrowLeft, Menu, Filter, AlertCircle } from 'lucide-react';
import Card from './components/Card';
import FilterBar from './components/FilterBar';
import TextResultBox from './components/TextResultBox';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const cardData = [
    {
        "id": 1,
        "title": "Bharat Aluminium Co. v. Kaiser Aluminium Technical Services, Inc.",
        "description": "A landmark case where the Supreme Court held that the courts in India had jurisdiction over foreign arbitration awards, emphasizing the importance of the arbitration process and the parties' autonomy in choosing their dispute resolution methods.",
        "date": "2012",
        "caseno": "Civil Appeal Nos. 7013-7014 of 2004",
        "casename": "Bharat Aluminium Co. v. Kaiser Aluminium Technical Services, Inc.",
        "court": "Supreme Court of India",
        "casestatus": "Disposed off",
        "judge": "Justice R.V. Raveendran and Justice A.K. Patnaik",
        "sect": "Section 2(1)(e) of the Arbitration and Conciliation Act, 1996",
        "facts": "The case involved a dispute between an Indian company and a foreign entity regarding the interpretation of arbitration clauses in their contract. The Indian courts initially refused to recognize the jurisdiction of foreign arbitration.",
        "petition": "The Indian company filed appeals against the orders of the lower courts, seeking enforcement of the arbitration clause.",
        "legalissues": "Whether the Indian courts had jurisdiction to intervene in a foreign arbitration process.",
        "keylegalques": "Whether the arbitration agreement was valid and enforceable under Indian law.",
        "plaintiffarguments": "The plaintiff argued that the arbitration clause in the contract was binding and should be enforced, as it reflected the parties' intent to resolve disputes through arbitration.",
        "defendantarguments": "The defendant contended that the arbitration clause was not enforceable in India and that the courts had jurisdiction over the dispute.",
        "courtsreasoning": "The Supreme Court held that the arbitration agreement was valid and that Indian courts should respect the parties' choice of arbitration, highlighting the need for effective dispute resolution mechanisms.",
        "decision": "The Supreme Court ruled in favor of the plaintiff, affirming the validity of the arbitration agreement.",
        "conclusion": "The Court emphasized the importance of arbitration as a means of dispute resolution and established that Indian courts should not interfere in foreign arbitration proceedings.",
        "casesummary": "This case set a precedent for the enforcement of arbitration agreements in India, affirming the jurisdiction of Indian courts over foreign arbitration awards and upholding the principles of party autonomy."
    },
    {
        "id": 2,
        "title": "Indian Oil Corporation Ltd. v. Amritsar Gas Service",
        "description": "This case dealt with the principles of contract law and the interpretation of contractual obligations, highlighting the importance of adherence to agreed terms and the consequences of breach.",
        "date": "2009",
        "caseno": "Civil Appeal No. 4255 of 2007",
        "casename": "Indian Oil Corporation Ltd. v. Amritsar Gas Service",
        "court": "Supreme Court of India",
        "casestatus": "Disposed off",
        "judge": "Justice S.B. Sinha and Justice A.K. Ganguly",
        "sect": "Contract Act, 1872",
        "facts": "The case revolved around a contract for the supply of gas, where the distributor claimed that the Indian Oil Corporation failed to honor the terms of the contract.",
        "petition": "The distributor sought enforcement of the contract and claimed damages for loss of business due to non-supply.",
        "legalissues": "Whether the Indian Oil Corporation breached the contract and if the distributor was entitled to damages.",
        "keylegalques": "Was there a valid contract in place, and did the Indian Oil Corporation fulfill its contractual obligations?",
        "plaintiffarguments": "The distributor argued that they had suffered significant financial losses due to the Corporation's failure to supply gas as per the contract terms.",
        "defendantarguments": "The Corporation contended that there were valid reasons for the non-supply and that the distributor's claims were exaggerated.",
        "courtsreasoning": "The Court found that the Indian Oil Corporation had indeed breached the contract, leading to financial losses for the distributor.",
        "decision": "The Supreme Court ruled in favor of the distributor, awarding damages for breach of contract.",
        "conclusion": "The ruling reinforced the principles of contract law and emphasized the importance of honoring contractual obligations.",
        "casesummary": "This case highlighted the consequences of breaching contractual obligations in commercial agreements, affirming the rights of parties to seek damages for non-performance."
    },
    {
        "id": 3,
        "title": "Chatterjee Petroleum Ltd. v. A.P. State Financial Corporation",
        "description": "A significant case involving the principles of corporate governance, where the court examined the fiduciary duties of directors in the context of financial transactions.",
        "date": "2006",
        "caseno": "Civil Appeal No. 2189 of 2005",
        "casename": "Chatterjee Petroleum Ltd. v. A.P. State Financial Corporation",
        "court": "Supreme Court of India",
        "casestatus": "Disposed off",
        "judge": "Justice S.B. Sinha and Justice A.K. Ganguly",
        "sect": "Companies Act, 1956",
        "facts": "The case involved a dispute regarding the financial dealings of a company and the alleged misappropriation of funds by its directors.",
        "petition": "The financial corporation sought recovery of dues from the company, citing mismanagement by the directors.",
        "legalissues": "Whether the directors of the company acted in the best interests of the company and its shareholders.",
        "keylegalques": "Did the directors breach their fiduciary duties by mismanaging company funds?",
        "plaintiffarguments": "The financial corporation argued that the directors failed to act responsibly and misused company resources.",
        "defendantarguments": "The directors contended that their actions were within the scope of their authority and beneficial to the company.",
        "courtsreasoning": "The Supreme Court emphasized the importance of fiduciary duties and held the directors accountable for their actions.",
        "decision": "The Court ruled in favor of the financial corporation, ordering the directors to compensate for their mismanagement.",
        "conclusion": "This case underscored the responsibilities of directors in corporate governance and the need for accountability in financial transactions.",
        "casesummary": "This ruling highlighted the fiduciary responsibilities of company directors and the implications of financial mismanagement on stakeholders."
    },
    {
        "id": 4,
        "title": "M/s. Adani Power Ltd. v. Gujarat Electricity Regulatory Commission",
        "description": "In this case, the Supreme Court addressed regulatory issues in the electricity sector, focusing on the determination of tariffs and the need for transparency in regulatory practices.",
        "date": "2017",
        "caseno": "Civil Appeal No. 1564 of 2015",
        "casename": "M/s. Adani Power Ltd. v. Gujarat Electricity Regulatory Commission",
        "court": "Supreme Court of India",
        "casestatus": "Disposed off",
        "judge": "Justice Dipak Misra and Justice A.M. Khanwilkar",
        "sect": "Electricity Act, 2003",
        "facts": "The case involved a dispute regarding the tariffs set by the Gujarat Electricity Regulatory Commission for power generation.",
        "petition": "Adani Power challenged the tariffs imposed, arguing they were unreasonably low and detrimental to business viability.",
        "legalissues": "Whether the regulatory authority's tariff determination was fair and transparent.",
        "keylegalques": "Did the Gujarat Electricity Regulatory Commission adhere to the principles of transparency and fairness in setting tariffs?",
        "plaintiffarguments": "Adani Power argued that the tariffs were insufficient to cover operational costs, threatening the sustainability of their operations.",
        "defendantarguments": "The Commission contended that the tariffs were set based on regulatory guidelines and aimed to protect consumers.",
        "courtsreasoning": "The Court held that transparency in tariff-setting was essential to ensure fair competition and protect stakeholder interests.",
        "decision": "The Supreme Court ruled in favor of Adani Power, ordering a review of the tariffs.",
        "conclusion": "This case emphasized the significance of transparency in regulatory practices within the electricity sector.",
        "casesummary": "The ruling reinforced the need for fair and transparent regulatory frameworks in the electricity industry to balance the interests of producers and consumers."
    },
    {
        id: 5,
        title: 'United India Insurance Co. Ltd. v. B. Suresh ',
        description: 'In this case, the Madras High Court dismissed a review petition filed by an insurance company against a claimant who was awarded compensation for an accident.The court found that the insurance company had failed to provide sufficient evidence to substantiate their allegations of fraud.',
        date: '2015',
        caseno : "C.R.P(NPD)Nos.199 to 203 of 2006 & C.M.P.Nos.1573 to 1577 of 2006",
        casename: "M/S.United India Insurance Company Ltd vs Balakrishnan Suresh",
        date: "(24 July, 2015)",
        court : "Madras High Court",
        casestatus: " Disposed off",
        judge: "Ms.Justice P.T.ASHA",
        sect: "Article 227 of the Constitution of India",
        facts: "The accident involved a Premier Padmini Car, initially claimed to be a Maruti Car.\nThe insurance company (petitioner) alleged that the Padmini Car was insured with New India Insurance Company.\nThe claimant (respondent) argued that the vehicle details were correctly provided in the FIR and a separate claim for car damage was filed.\nThe Insurance Company filed a review petition alleging fraud by the claimant after the initial award was passed.",
        petition: "The Insurance Company filed Civil Revision Petitions (C.R.P) under Article 227 of the Constitution of India to challenge the order passed by the Motor Accidents Claims Tribunal (MACT).\nThe review petition aimed to overturn the award passed by the MACT in favor of the claimant.",
        legalissues: "Whether the Insurance Company successfully established fraud by the claimant.\nWhether the Insurance Company had grounds to seek a review of the award.",
        keylegalques: "Whether the Insurance Company's allegations of fraud were substantiated and sufficient to warrant a review of the original award.",
        plaintiffarguments: "The Insurance Company argued that the claimant had deliberately misrepresented the vehicle involved in the accident.\nThey claimed to have discovered the fraud after the initial award was passed.\nThey presented evidence indicating the claimant's involvement in multiple fraudulent claims.",
        defendantarguments: "The claimant argued that the vehicle details were correctly provided in the FIR.\nThey stated that they had filed separate claims for the damage caused to their car.\nThey contended that the Insurance Company had failed to prove fraud during the initial trial.",
        courtsreasoning: "The Court noted the Insurance Company's inability to provide evidence for their allegations of fraud despite lodging a complaint against the claimant.\nThe Court considered the fact that the review petition was filed only after the execution petition was filed, suggesting a delay tactic.\nThe Court found the Insurance Company's allegations of fraud unsubstantiated.",
        decision: "The Court dismissed the Civil Revision Petitions filed by the Insurance Company.\nThe Court refused to interfere with the MACT's decision on the grounds of lack of evidence for fraud allegations.",
        conclusion: "The Court concluded that the Insurance Company failed to establish the fraud allegations against the claimant.\nThe Court upheld the MACT's award in favor of the claimant, dismissing the review petition.",
        casesummary: "This case involved an insurance company (United India Insurance) challenging an award passed by the Motor Accidents Claims Tribunal (MACT) in favor of a claimant. The insurance company alleged fraud by the claimant, claiming that they misrepresented the vehicle involved in the accident. However, the court dismissed the insurance company's petition, finding no evidence to support the allegations of fraud. The court upheld the MACT's original award, ruling in favor of the claimant."
    },
    {
        id: 6,
        title: 'National Insurance Co. Ltd. v. Smt. Savita ',
        description: 'The Delhi High Court upheld an award in favor of a claimant against an insurance company, rejecting their allegations of fraud.The court emphasized that the burden of proof lies with the party making the allegations, and the insurance company had failed to meet this burden.',
        date: '(2018)',
        caseno: 'C.R.P.(MD)No.974 of 2017',
        casename: 'National Insurance Company Limited vs A.Savariammal',
        court: 'Madras High Court',
        casestatus: 'Disposed off (Revision Petition dismissed)',
        judge: "Hon'ble Mr. Justice C. Kumarappan",
        sect: 'Article 227 of the Constitution of India, Section 151 C.P.C., Section 64 VB of the Insurance Act, 1938',
        facts: "The claimants (A.Savariammal, her children, and mother) filed a Motor Accident Claims Petition (M.C.O.P.) for the death of Aurlanandhu. The accident involved a Mahindra Van, bearing Registration No. TN-45-C-4500, insured by the National Insurance Company Limited. The Tribunal awarded Rs. 3,17,000/- to the claimants, finding that the insurance company admitted coverage. After four years, the insurance company sought to recall the award, alleging fraud by the claimants regarding the insurance policy. The insurance company claimed they initially believed the policy due to a software error and only discovered the alleged fraud later.",
        petition: "Whether the Tribunal had jurisdiction to recall the award under Section 151 C.P.C. based on the insurance company's claim of fraud. Whether the claimants actually committed fraud, considering the insurance company's admission of coverage.",
        legalissues: "Can an award be recalled based on alleged fraud when the insurer initially admitted coverage and then later claimed a software error led to a belated discovery of fraud?",
        keylegalques: "Whether the Tribunal had jurisdiction to recall the award under Section 151 C.P.C. based on the insurance company's claim of fraud.",
        plaintiffarguments: "The claimants committed fraud by misrepresenting the insurance policy details. The Tribunal has inherent power under Section 151 C.P.C. to recall awards obtained through fraud. The software error prevented them from detecting the fraud earlier.",
        defendantarguments: "No fraud was committed, and the insurance company admitted coverage in their counter statement. The insurance company's claim of software error and belated discovery of fraud is a flimsy excuse. The insurance company should have verified the policy details before filing their counter statement.",
        courtsreasoning: "The court analyzed the evidence presented, including the claimants' documents, witnesses, and the insurance company's affidavit. The court found no evidence of fraud committed by the claimants. The insurance company's claim of software error was not credible, as there were established procedures for verifying insurance coverage. The court relied on previous judgments emphasizing the responsibility of insurance companies to verify policy details and avoid 'deny everything and await the award syndrome.' The court recognized the hardship faced by claimants who have to wait for compensation while insurers delay proceedings.",
        decision: "The court dismissed the revision petition, upholding the Tribunal's award. The insurance company was ordered to deposit the entire award amount within four weeks.",
        conclusion: "The Madras High Court found that the insurance company's claim of fraud was unfounded and based on a belated discovery that should have been investigated earlier. The court emphasized the importance of insurers verifying policy details and acting responsibly in motor accident claims.",
        casesummary: "The insurance company sought to recall an award granted to claimants after four years, alleging fraud. However, the court dismissed the claim, finding no evidence of fraud and concluding that the insurance company's belated discovery was not credible. The court stressed the importance of insurers verifying policy details and acting in good faith."
    

    },
    {

        id: 7,
        title: 'New India Assurance Co. Ltd. v. M/S. Sai Sagar Constructions ',
        description: 'The Kerala High Court dismissed a review petition filed by an insurance company against a claimant who was awarded compensation for property damage.The court found that the insurance company had failed to provide sufficient evidence to substantiate their allegations of fraud and upheld the original award in favor of the claimant.',
        date: '(2020)',
        caseno: 'C.R.P.(MD)No.974 of 2017',
        casename: 'National Insurance Company Limited vs A.Savariammal',
        court: 'Madras High Court',
        casestatus: 'Disposed off (Revision Petition dismissed)',
        judge: "Hon'ble Mr. Justice C. Kumarappan",
        sect: 'Article 227 of the Constitution of India, Section 151 C.P.C., Section 64 VB of the Insurance Act, 1938',
        facts: "The claimants (A.Savariammal, her children, and mother) filed a Motor Accident Claims Petition (M.C.O.P.) for the death of Aurlanandhu. The accident involved a Mahindra Van, bearing Registration No. TN-45-C-4500, insured by the National Insurance Company Limited. The Tribunal awarded Rs. 3,17,000/- to the claimants, finding that the insurance company admitted coverage. After four years, the insurance company sought to recall the award, alleging fraud by the claimants regarding the insurance policy. The insurance company claimed they initially believed the policy due to a software error and only discovered the alleged fraud later.",
        petition: "Whether the Tribunal had jurisdiction to recall the award under Section 151 C.P.C. based on the insurance company's claim of fraud. Whether the claimants actually committed fraud, considering the insurance company's admission of coverage.",
        legalissues: "Can an award be recalled based on alleged fraud when the insurer initially admitted coverage and then later claimed a software error led to a belated discovery of fraud?",
        keylegalques: "Whether the Tribunal had jurisdiction to recall the award under Section 151 C.P.C. based on the insurance company's claim of fraud.",
        plaintiffarguments: "The claimants committed fraud by misrepresenting the insurance policy details. The Tribunal has inherent power under Section 151 C.P.C. to recall awards obtained through fraud. The software error prevented them from detecting the fraud earlier.",
        defendantarguments: "No fraud was committed, and the insurance company admitted coverage in their counter statement. The insurance company's claim of software error and belated discovery of fraud is a flimsy excuse. The insurance company should have verified the policy details before filing their counter statement.",
        courtsreasoning: "The court analyzed the evidence presented, including the claimants' documents, witnesses, and the insurance company's affidavit. The court found no evidence of fraud committed by the claimants. The insurance company's claim of software error was not credible, as there were established procedures for verifying insurance coverage. The court relied on previous judgments emphasizing the responsibility of insurance companies to verify policy details and avoid 'deny everything and await the award syndrome.' The court recognized the hardship faced by claimants who have to wait for compensation while insurers delay proceedings.",
        decision: "The court dismissed the revision petition, upholding the Tribunal's award. The insurance company was ordered to deposit the entire award amount within four weeks.",
        conclusion: "The Madras High Court found that the insurance company's claim of fraud was unfounded and based on a belated discovery that should have been investigated earlier. The court emphasized the importance of insurers verifying policy details and acting responsibly in motor accident claims.",
        casesummary: "The insurance company sought to recall an award granted to claimants after four years, alleging fraud. However, the court dismissed the claim, finding no evidence of fraud and concluding that the insurance company's belated discovery was not credible. The court stressed the importance of insurers verifying policy details and acting in good faith."




        

    },
    {
        id: 8,
        title: 'United India Insurance Co. Ltd. v. A. Ramu ',
        description: 'The Madras High Court allowed a writ petition filed by an insurance agent against an insurance company, ordering them to pay commission on policies procured during his time as an agent.The court held that the insurance agents resignation and subsequent joining of a competing company did not automatically disqualify him from receiving commission.',
        date: '(2019)',
        caseno: 'C.R.P.(MD)No.974 of 2017',
        casename: 'National Insurance Company Limited vs A.Savariammal',
        court: 'Madras High Court',
        casestatus: 'Disposed off (Revision Petition dismissed)',
        judge: "Hon'ble Mr. Justice C. Kumarappan",
        sect: 'Article 227 of the Constitution of India, Section 151 C.P.C., Section 64 VB of the Insurance Act, 1938',
        facts: "The claimants (A.Savariammal, her children, and mother) filed a Motor Accident Claims Petition (M.C.O.P.) for the death of Aurlanandhu. The accident involved a Mahindra Van, bearing Registration No. TN-45-C-4500, insured by the National Insurance Company Limited. The Tribunal awarded Rs. 3,17,000/- to the claimants, finding that the insurance company admitted coverage. After four years, the insurance company sought to recall the award, alleging fraud by the claimants regarding the insurance policy. The insurance company claimed they initially believed the policy due to a software error and only discovered the alleged fraud later.",
        petition: "Whether the Tribunal had jurisdiction to recall the award under Section 151 C.P.C. based on the insurance company's claim of fraud. Whether the claimants actually committed fraud, considering the insurance company's admission of coverage.",
        legalissues: "Can an award be recalled based on alleged fraud when the insurer initially admitted coverage and then later claimed a software error led to a belated discovery of fraud?",
        keylegalques: "Whether the Tribunal had jurisdiction to recall the award under Section 151 C.P.C. based on the insurance company's claim of fraud.",
        plaintiffarguments: "The claimants committed fraud by misrepresenting the insurance policy details. The Tribunal has inherent power under Section 151 C.P.C. to recall awards obtained through fraud. The software error prevented them from detecting the fraud earlier.",
        defendantarguments: "No fraud was committed, and the insurance company admitted coverage in their counter statement. The insurance company's claim of software error and belated discovery of fraud is a flimsy excuse. The insurance company should have verified the policy details before filing their counter statement.",
        courtsreasoning: "The court analyzed the evidence presented, including the claimants' documents, witnesses, and the insurance company's affidavit. The court found no evidence of fraud committed by the claimants. The insurance company's claim of software error was not credible, as there were established procedures for verifying insurance coverage. The court relied on previous judgments emphasizing the responsibility of insurance companies to verify policy details and avoid 'deny everything and await the award syndrome.' The court recognized the hardship faced by claimants who have to wait for compensation while insurers delay proceedings.",
        decision: "The court dismissed the revision petition, upholding the Tribunal's award. The insurance company was ordered to deposit the entire award amount within four weeks.",
        conclusion: "The Madras High Court found that the insurance company's claim of fraud was unfounded and based on a belated discovery that should have been investigated earlier. The court emphasized the importance of insurers verifying policy details and acting responsibly in motor accident claims.",
        casesummary: "The insurance company sought to recall an award granted to claimants after four years, alleging fraud. However, the court dismissed the claim, finding no evidence of fraud and concluding that the insurance company's belated discovery was not credible. The court stressed the importance of insurers verifying policy details and acting in good faith."


    },
    // Add more card data objects as needed
];

function SearchResults() {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [apiResponse, setApiResponse] = useState(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    useEffect(() => {
        console.log('Location state:', location.state);
        if (location.state) {
            setSearchQuery(location.state.searchQuery || '');
            setApiResponse(location.state.apiResponse || null);
        }
    }, [location]);

    const [selectedOption, setSelectedOption] = useState("");
    const [viewMode, setViewMode] = useState("list");
    const [activeTab, setActiveTab] = useState("all");

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const handleBackToHome = () => {
        navigate('/');
    };

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    // New state and functions for added features
    const [sortedCardData, setSortedCardData] = useState([]);
    const [visibleCards, setVisibleCards] = useState(4);

    useEffect(() => {
        setSortedCardData(cardData);
    }, []);

    useEffect(() => {
        sortCards(selectedOption);
    }, [selectedOption]);

    const sortCards = (option) => {
        let sorted = [...cardData];
        switch (option) {
            case "Recent":
                sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case "Most popular":
                sorted.sort((a, b) => b.popularity - a.popularity);
                break;
            case "Alphabetical":
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            default:
                break;
        }
        setSortedCardData(sorted);
    };

    const loadMoreCards = () => {
        setVisibleCards(prevVisible => prevVisible + 4);
    };

    // Sample data for the chart
    const chartData = [
        { year: '2015', cases: 4 },
        { year: '2016', cases: 3 },
        { year: '2017', cases: 5 },
        { year: '2018', cases: 7 },
        { year: '2019', cases: 6 },
    ];

    return (
        <div className="relative min-h-screen bg-gray-100">
            {/* Mobile Filter Toggle Button */}
            <button
                onClick={toggleFilter}
                className="fixed top-4 left-4 z-20 md:hidden bg-[#302A2A] text-white p-2 rounded-full shadow-md"
            >
                <Menu size={24} />
            </button>

            {/* FilterBar - Hidden on mobile unless toggled, wider on desktop */}
            <aside className={`fixed z-10 w-80 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <FilterBar onLanguageChange={handleLanguageChange} />
            </aside>

            {/* Main Content - Adjusted margin for wider filter bar */}
            <div className="md:ml-80 p-4 md:p-8">
                {/* Back to AI Search Button */}
                <button 
                    onClick={handleBackToHome}
                    className="mb-4 px-4 py-2 bg-[#302A2A] text-white text-sm rounded-full shadow-md hover:bg-gray-700 transition duration-300 ease-in-out flex items-center"
                >
                    <ArrowLeft size={16} className="mr-2" />
                    Back to AI Search
                </button>

                {/* Research Summary */}
                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-8">
                    <h2 className="text-m md:text-2xl font-bold text-[#302A2A] mb-4">Research Summary on {searchQuery}</h2>
                    <div className='relative'>
                        <TextResultBox apiResponse={apiResponse} selectedLanguage={selectedLanguage} />
                    </div>
                    <button className="mt-4 text-[#302A2A] hover:text-brown-800 flex items-center">
                        <Info size={18} className="mr-1" /> View Full Analysis
                    </button>
                </div>

                {/* New Feature: Case Distribution Chart */}
                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-8">
                    <h2 className="text-xl font-bold text-[#302A2A] mb-4">Case Distribution by Year</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData}>
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="cases" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                
                {/* Results with Tabs */}
                <div className="bg-white rounded-lg shadow-md">
                    <div className="border-b border-gray-200 overflow-x-auto">
                        <nav className="flex">
                            {["all", "cases", "laws", "concepts"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 md:px-6 py-3 font-medium text-xs md:text-sm flex items-center whitespace-nowrap ${
                                        activeTab === tab
                                            ? "border-b-2 border-blue-500 text-[#302A2A]"
                                            : "text-gray-500 hover:text-[#302A2A]"
                                    }`}
                                >
                                    {tab === "cases" && <BookOpen size={16} className="mr-2" />}
                                    {tab === "laws" && <Scale size={16} className="mr-2" />}
                                    {tab === "concepts" && <Gavel size={16} className="mr-2" />}
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="p-4 md:p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6">
                            <h2 className="text-lg md:text-xl font-bold text-[#302A2A] mb-2 md:mb-0">Related {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                            <div className="flex items-center space-x-2 md:space-x-4">
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`p-2 rounded transition-colors ${viewMode === "list" ? "bg-blue-100 text-[#302A2A]" : "text-gray-400 hover:bg-gray-100"}`}
                                >
                                    <List size={20} />
                                </button>
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`p-2 rounded transition-colors ${viewMode === "grid" ? "bg-blue-100 text-[#302A2A]" : "text-gray-400 hover:bg-gray-100"}`}
                                >
                                    <Grid size={20} />
                                </button>
                                <div className="relative">
                                    <select
                                        value={selectedOption}
                                        onChange={handleChange}
                                        className="appearance-none bg-gray-100 border border-gray-300 text-[#302A2A] py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-sm"
                                    >
                                        <option value="" disabled hidden>Sort</option>
                                        <option value="Recent">Recent</option>
                                        <option value="Most popular">Most popular</option>
                                        <option value="Alphabetical">Alphabetical</option>
                                    </select>
                                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                </div>
                            </div>
                        </div>

                        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" : "space-y-4 md:space-y-6"}>
                            {sortedCardData.slice(0, visibleCards).map(card => (
                                <Card
                                    key={card.id}
                                    title={card.title}
                                    date={card.date}
                                    description={card.description}
                                    link={card.link}
                                    caseno={card.caseno}
                                    casename={card.casename}
                                    court={card.court}
                                    casestatus={card.casestatus}
                                    judge={card.judge}
                                    sect={card.sect}
                                    facts={card.facts}
                                    petition={card.petition}
                                    legalissues={card.legalissues}
                                    keylegalques={card.keylegalques}
                                    plaintiffarguments={card.plaintiffarguments}
                                    defendantarguments={card.defendantarguments}
                                    courtsreasoning={card.courtsreasoning}
                                    decision={card.decision}
                                    conclusion={card.conclusion}
                                    casesummary={card.casesummary}
                                />
                            ))}
                        </div>
                        {visibleCards < sortedCardData.length && (
                            <div className="text-center mt-6">
                                <button
                                    onClick={loadMoreCards}
                                    className="bg-[#302A2A] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* New Feature: Related Searches */}
                <div className="mt-8 bg-white rounded-lg shadow-md p-4 md:p-6">
                    <h2 className="text-xl font-bold text-[#302A2A] mb-4">Related Searches</h2>
                    <div className="flex flex-wrap gap-2">
                        {['Insurance Fraud', 'Motor Accident Claims', 'Arbitration in India', 'Contract Law'].map((term, index) => (
                            <button
                                key={index}
                                className="bg-gray-200 hover:bg-gray-300 text-[#302A2A] font-semibold py-2 px-4 rounded-full text-sm"
                                onClick={() => setSearchQuery(term)}
                            >
                                {term}
                            </button>
                        ))}
                    </div>
                </div>

                {/* New Feature: Search Tips */}
                <div className="mt-8 bg-blue-50 rounded-lg p-4 md:p-6">
                    <h2 className="text-xl font-bold text-[#302A2A] mb-4 flex items-center">
                        <AlertCircle size={24} className="mr-2" />
                        Search Tips
                    </h2>
                    <ul className="list-disc list-inside text-[#302A2A] space-y-2">
                        <li>Use quotation marks for exact phrases: "arbitration agreement"</li>
                        <li>Use AND, OR, NOT for complex queries: insurance AND fraud NOT life</li>
                        <li>Use wildcards (*) for partial matches: insur*</li>
                        <li>Refine your search using the filters on the left</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchResults;