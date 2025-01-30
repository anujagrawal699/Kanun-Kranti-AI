import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, List, Grid, BookOpen, Scale, Gavel, Info, Download, Share2, ArrowLeft, Menu, Filter, AlertCircle, X, Search } from 'lucide-react';
import Card from './components/Card';
import LawCard from './components/LawCard';
import FilterBar from './components/FilterBar';
import TextResultBox from './components/TextResultBox';
import FullAnalysis from './components/FullAnalysis';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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
        "id": 5,
        "title": "Reliance Industries Ltd. v. Securities and Exchange Board of India",
        "description": "This case dealt with insider trading allegations and the powers of SEBI to investigate and penalize companies for market manipulation.",
        "date": "2020",
        "caseno": "Civil Appeal No. 3309 of 2019",
        "casename": "Reliance Industries Ltd. v. Securities and Exchange Board of India",
        "court": "Supreme Court of India",
        "casestatus": "Disposed off",
        "judge": "Justice Rohinton Fali Nariman and Justice S. Ravindra Bhat",
        "sect": "Securities and Exchange Board of India Act, 1992",
        "facts": "SEBI accused Reliance Industries of insider trading and market manipulation in the shares of Reliance Petroleum Ltd. in 2007.",
        "petition": "Reliance Industries challenged SEBI's jurisdiction and the validity of its investigation procedures.",
        "legalissues": "Whether SEBI has the power to investigate and penalize companies for alleged market manipulation occurring over a decade ago.",
        "keylegalques": "Does the passage of time affect SEBI's authority to investigate and penalize market manipulation?",
        "plaintiffarguments": "Reliance argued that SEBI's investigation was time-barred and violated principles of natural justice.",
        "defendantarguments": "SEBI contended that market integrity is paramount and there is no statutory time limit for such investigations.",
        "courtsreasoning": "The Court emphasized the importance of market integrity while also considering the rights of the investigated parties.",
        "decision": "The Supreme Court upheld SEBI's investigative powers but directed a fresh hearing on the merits of the case.",
        "conclusion": "This case reinforced SEBI's authority in regulating markets while also emphasizing the need for timely investigations.",
        "casesummary": "The ruling balanced the regulator's powers with the rights of companies, setting a precedent for future market manipulation cases."
      },
      {
        "id": 6,
        "title": "Tata Consultancy Services Ltd. v. Cyrus Investments Pvt. Ltd.",
        "description": "This case involved a high-profile corporate governance dispute within one of India's largest conglomerates.",
        "date": "2021",
        "caseno": "Civil Appeal Nos. 440-441 of 2020",
        "casename": "Tata Consultancy Services Ltd. v. Cyrus Investments Pvt. Ltd.",
        "court": "Supreme Court of India",
        "casestatus": "Disposed off",
        "judge": "Chief Justice S.A. Bobde, Justice A.S. Bopanna and Justice V. Ramasubramanian",
        "sect": "Companies Act, 2013",
        "facts": "The case arose from the removal of Cyrus Mistry as the Chairman of Tata Sons, leading to allegations of oppression and mismanagement.",
        "petition": "Cyrus Mistry's firms petitioned for relief against alleged oppression and mismanagement in Tata Group companies.",
        "legalissues": "Whether the removal of Cyrus Mistry and subsequent actions by Tata Group constituted oppression and mismanagement.",
        "keylegalques": "What is the scope of judicial intervention in the internal management decisions of companies?",
        "plaintiffarguments": "Mistry's firms argued that his removal was illegal and violated principles of corporate governance.",
        "defendantarguments": "Tata Group contended that the removal was within their rights and in the best interests of the company.",
        "courtsreasoning": "The Court examined the balance between protecting minority shareholders and respecting corporate autonomy.",
        "decision": "The Supreme Court ruled in favor of Tata Group, setting aside the NCLAT order that had reinstated Mistry.",
        "conclusion": "This case set a significant precedent in corporate governance and the rights of majority shareholders.",
        "casesummary": "The ruling emphasized the limited scope of judicial intervention in corporate affairs, affirming the rights of majority shareholders in decision-making."
      },
      {
        "id": 7,
        "title": "Amazon.com NV Investment Holdings LLC v. Future Retail Ltd. and Ors.",
        "description": "This case involved an international commercial arbitration dispute over a breach of contract in a high-stakes corporate deal.",
        "date": "2021",
        "caseno": "Civil Appeal Nos. 4492-4497 of 2021",
        "casename": "Amazon.com NV Investment Holdings LLC v. Future Retail Ltd. and Ors.",
        "court": "Supreme Court of India",
        "casestatus": "Disposed off",
        "judge": "Justice R.F. Nariman and Justice B.R. Gavai",
        "sect": "Arbitration and Conciliation Act, 1996",
        "facts": "Amazon sought to enforce an arbitration award preventing Future Group from selling its retail assets to Reliance Industries.",
        "petition": "Amazon petitioned to enforce the emergency arbitrator's award under Section 17(2) of the Arbitration and Conciliation Act.",
        "legalissues": "Whether an emergency arbitrator's award is enforceable under Indian law.",
        "keylegalques": "Is an emergency arbitrator's award equivalent to an order of a court for the purpose of enforcement?",
        "plaintiffarguments": "Amazon argued that the emergency arbitrator's award was binding and enforceable under Indian law.",
        "defendantarguments": "Future Group contended that Indian law does not recognize emergency arbitrators or their awards.",
        "courtsreasoning": "The Court examined the legislative intent behind the Arbitration Act and international commercial practices.",
        "decision": "The Supreme Court held that emergency arbitrator's awards are enforceable under Indian law.",
        "conclusion": "This case significantly impacted the landscape of international commercial arbitration in India.",
        "casesummary": "The ruling strengthened the enforceability of emergency arbitration awards in India, aligning with global arbitration practices."
      },
      {
        "id": 8,
        "title": "Vodafone International Holdings BV v. Union of India",
        "description": "This landmark case dealt with cross-border taxation and the interpretation of tax laws in international transactions.",
        "date": "2012",
        "caseno": "Civil Appeal No. 733 of 2012",
        "casename": "Vodafone International Holdings BV v. Union of India & Anr.",
        "court": "Supreme Court of India",
        "casestatus": "Disposed off",
        "judge": "Chief Justice S.H. Kapadia, Justice K.S. Radhakrishnan and Justice Swatanter Kumar",
        "sect": "Income Tax Act, 1961",
        "facts": "Vodafone acquired a controlling stake in Hutchison Essar Limited through an offshore transaction. The Indian tax authorities demanded capital gains tax on this transaction.",
        "petition": "Vodafone challenged the tax demand, arguing that Indian tax authorities had no jurisdiction over an offshore transaction.",
        "legalissues": "Whether India has the right to tax capital gains arising from the transfer of capital assets outside India between two non-resident entities.",
        "keylegalques": "Can the principle of 'look through' be applied to tax offshore transactions with an indirect transfer of Indian assets?",
        "plaintiffarguments": "Vodafone argued that the transaction took place outside India between two non-resident entities and was not taxable in India.",
        "defendantarguments": "The tax authorities contended that the transaction's underlying asset was in India, making it taxable under Indian law.",
        "courtsreasoning": "The Court examined the principles of corporate structure, tax avoidance, and the territorial nexus required for taxation.",
        "decision": "The Supreme Court ruled in favor of Vodafone, holding that the offshore transaction was not taxable in India.",
        "conclusion": "This case had significant implications for foreign investment and cross-border transactions in India.",
        "casesummary": "The ruling clarified the limits of India's tax jurisdiction in international transactions, influencing subsequent legislation and tax policies."
      },
      {
        "id": 9,
        "title": "Carlsberg Breweries A/S v. Som Distilleries and Breweries Ltd.",
        "description": "This case addressed issues of trademark infringement and passing off in the beverages industry.",
        "date": "2019",
        "caseno": "Commercial Appeal No. 21 of 2019",
        "casename": "Carlsberg Breweries A/S v. Som Distilleries and Breweries Ltd.",
        "court": "Delhi High Court",
        "casestatus": "Disposed off",
        "judge": "Justice S. Ravindra Bhat and Justice Prateek Jalan",
        "sect": "Trade Marks Act, 1999",
        "facts": "Carlsberg alleged that Som Distilleries' use of the mark 'Hunters' for beer infringed upon their trademark 'Tuborg'.",
        "petition": "Carlsberg sought an injunction against Som Distilleries to prevent the use of the 'Hunters' mark and bottle design.",
        "legalissues": "Whether the use of a similar color scheme and bottle design constitutes trademark infringement and passing off.",
        "keylegalques": "What is the extent of protection afforded to trade dress and packaging in the beverages industry?",
        "plaintiffarguments": "Carlsberg argued that Som's product was deceptively similar and would cause confusion among consumers.",
        "defendantarguments": "Som Distilleries contended that their product was distinct and there was no likelihood of confusion.",
        "courtsreasoning": "The Court considered the overall impression of the products and the likelihood of confusion among average consumers.",
        "decision": "The Court granted a partial injunction, restraining Som from using certain aspects of their packaging but allowing the use of the 'Hunters' name.",
        "conclusion": "This case highlighted the complexities in determining trademark infringement in product packaging and design.",
        "casesummary": "The ruling provided guidance on balancing trademark protection with fair competition in the beverages market."
      },
      {
        "id": 10,
        "title": "Monsanto Holdings Pvt. Ltd. v. Competition Commission of India",
        "description": "This case dealt with the intersection of intellectual property rights and competition law in the agricultural biotechnology sector.",
        "date": "2020",
        "caseno": "Civil Appeal No. 7779 of 2020",
        "casename": "Monsanto Holdings Pvt. Ltd. v. Competition Commission of India & Ors.",
        "court": "Supreme Court of India",
        "casestatus": "Disposed off",
        "judge": "Justice Rohinton Fali Nariman and Justice Navin Sinha",
        "sect": "Competition Act, 2002",
        "facts": "The CCI initiated an investigation into Monsanto's licensing practices for Bt cotton technology, alleging abuse of dominant position.",
        "petition": "Monsanto challenged the CCI's jurisdiction to investigate matters related to patent licensing.",
        "legalissues": "Whether the Competition Commission has the authority to investigate alleged anti-competitive practices in patent licensing agreements.",
        "keylegalques": "How to balance the rights of patent holders with the need to prevent anti-competitive practices?",
        "plaintiffarguments": "Monsanto argued that patent-related issues fall under the Patents Act and are outside the CCI's jurisdiction.",
        "defendantarguments": "The CCI contended that it has the power to investigate any anti-competitive practice, including those involving intellectual property rights.",
        "courtsreasoning": "The Court examined the interplay between competition law and intellectual property rights in India.",
        "decision": "The Supreme Court affirmed the CCI's jurisdiction to investigate anti-competitive practices in patent licensing.",
        "conclusion": "This case set a precedent for the application of competition law to intellectual property matters in India.",
        "casesummary": "The ruling established that competition law can apply to the exercise of patent rights, potentially impacting licensing practices in various industries."
      },
      {
        "id": 11,
        "title": "Cox and Kings Ltd. v. Reserve Bank of India",
        "description": "This case addressed the regulatory powers of the RBI in the context of debt resolution and insolvency proceedings.",
        "date": "2020",
        "caseno": "Writ Petition (Civil) No. 8868 of 2020",
        "casename": "Cox and Kings Ltd. v. Reserve Bank of India & Ors.",
        "court": "Bombay High Court",
        "casestatus": "Disposed off",
        "judge": "Justice K.K. Tated and Justice N.R. Borkar",
        "sect": "Reserve Bank of India Act, 1934 and Insolvency and Bankruptcy Code, 2016",
        "facts": "Cox and Kings faced financial difficulties and sought to challenge RBI's decision to initiate insolvency proceedings against it.",
        "petition": "The company petitioned against RBI's direction to banks to initiate insolvency proceedings, claiming it violated natural justice.",
        "legalissues": "Whether RBI has the power to direct banks to initiate insolvency proceedings against specific companies.",
        "keylegalques": "What is the extent of RBI's regulatory powers in matters of corporate debt resolution?",
        "plaintiffarguments": "Cox and Kings argued that RBI's direction was arbitrary and beyond its statutory powers.",
        "defendantarguments": "RBI contended that its actions were within its regulatory mandate to maintain financial stability.",
        "courtsreasoning": "The Court examined the scope of RBI's powers under banking regulations and their interaction with insolvency laws.",
        "decision": "The Court upheld RBI's authority to issue such directions to banks in the interest of the banking system and economy.",
        "conclusion": "This case affirmed the broad regulatory powers of RBI in matters of financial stability and corporate debt resolution.",
        "casesummary": "The ruling highlighted the significant role of RBI in addressing corporate financial distress and its impact on the banking sector."
      }    
    // Add more card data objects as needed
];

const relatedLawsData = [
    {
        id: 1,
        title: "Commercial Courts Act, 2015",
        description: "An Act to provide for the constitution of Commercial Courts, Commercial Division and Commercial Appellate Division in the High Courts for adjudicating commercial disputes.",
        relevantSections: "Sections 3, 4, 7, 12",
        keyProvisions: "Establishment of Commercial Courts, Jurisdiction, Appeals"
    },
    {
        id: 2,
        title: "Arbitration and Conciliation Act, 1996",
        description: "An Act to consolidate and amend the law relating to domestic arbitration, international commercial arbitration and enforcement of foreign arbitral awards.",
        relevantSections: "Sections 2, 7, 34, 48",
        keyProvisions: "Arbitration Agreement, Setting Aside Arbitral Awards, Enforcement of Foreign Awards"
    },
    {
        id: 3,
        title: "Specific Relief Act, 1963",
        description: "An Act to define and amend the law relating to certain kinds of specific relief.",
        relevantSections: "Sections 10, 14, 16",
        keyProvisions: "Specific Performance of Contract, Rectification of Instruments, Declaratory Decrees"
    },
    {
        id: 4,
        title: "Companies Act, 2013",
        description: "An Act to consolidate and amend the law relating to companies.",
        relevantSections: "Sections 241, 242, 245",
        keyProvisions: "Oppression and Mismanagement, Class Action Suits"
    },
        {
          "id": 5,
          "title": "Insolvency and Bankruptcy Code, 2016",
          "description": "A comprehensive law that consolidates and amends the laws relating to reorganization and insolvency resolution of corporate persons, partnership firms and individuals.",
          "relevantSections": "Sections 7, 9, 10, 14, 31",
          "keyProvisions": "Corporate Insolvency Resolution Process, Moratorium, Resolution Plan Approval"
        },
        {
          "id": 6,
          "title": "Competition Act, 2002",
          "description": "An Act to prevent practices having adverse effect on competition, to promote and sustain competition in markets, to protect the interests of consumers and to ensure freedom of trade.",
          "relevantSections": "Sections 3, 4, 5, 6",
          "keyProvisions": "Anti-Competitive Agreements, Abuse of Dominant Position, Regulation of Combinations"
        },
        {
          "id": 7,
          "title": "Goods and Services Tax Act, 2017",
          "description": "A comprehensive, multi-stage, destination-based tax that is levied on every value addition in the supply of goods and services.",
          "relevantSections": "Sections 9, 10, 16, 17, 54",
          "keyProvisions": "Levy and Collection of Tax, Composition Levy, Input Tax Credit, Refunds"
        },
        {
          "id": 8,
          "title": "Foreign Exchange Management Act, 1999",
          "description": "An Act to consolidate and amend the law relating to foreign exchange with the objective of facilitating external trade and payments.",
          "relevantSections": "Sections 3, 4, 6, 7",
          "keyProvisions": "Dealing in Foreign Exchange, Current Account Transactions, Capital Account Transactions"
        },
        {
          "id": 9,
          "title": "Arbitration and Conciliation Act, 1996",
          "description": "An Act to consolidate and amend the law relating to domestic arbitration, international commercial arbitration and enforcement of foreign arbitral awards.",
          "relevantSections": "Sections 7, 11, 34, 48",
          "keyProvisions": "Arbitration Agreement, Appointment of Arbitrators, Setting Aside of Arbitral Award, Enforcement of Foreign Awards"
        },
        {
          "id": 10,
          "title": "Consumer Protection Act, 2019",
          "description": "An Act to provide for protection of the interests of consumers and for the said purpose, to establish authorities for timely and effective administration and settlement of consumers' disputes.",
          "relevantSections": "Sections 2(6), 35, 38, 58",
          "keyProvisions": "Definition of Consumer, Complaints, Mediation, Product Liability"
        },
        {
          "id": 11,
          "title": "Negotiable Instruments Act, 1881",
          "description": "An Act to define and amend the law relating to promissory notes, bills of exchange and cheques.",
          "relevantSections": "Sections 6, 13, 138",
          "keyProvisions": "Definition of Promissory Note, Negotiation, Dishonour of Cheque"
        },
        {
          "id": 12,
          "title": "Real Estate (Regulation and Development) Act, 2016",
          "description": "An Act to establish the Real Estate Regulatory Authority for regulation and promotion of the real estate sector and to ensure sale of plot, apartment or building in an efficient and transparent manner.",
          "relevantSections": "Sections 3, 11, 13, 18",
          "keyProvisions": "Registration of Real Estate Projects, Functions of Promoter, Return of Amount and Compensation"
        }
];

function SearchResults() {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [apiResponse, setApiResponse] = useState(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [selectedOption, setSelectedOption] = useState("");
    const [viewMode, setViewMode] = useState("list");
    const [activeTab, setActiveTab] = useState("all");
    const [sortedCardData, setSortedCardData] = useState([]);
    const [visibleCards, setVisibleCards] = useState(4);

    useEffect(() => {
        if (location.state) {
            setSearchQuery(location.state.searchQuery || '');
            setApiResponse(location.state.apiResponse || null);
        }
    }, [location]);

    const [visibleCases, setVisibleCases] = useState(4);
    const [visibleLaws, setVisibleLaws] = useState(4);

    const loadMoreCases = () => {
        setVisibleCases(prevVisible => prevVisible + 4);
    };

    const loadMoreLaws = () => {
        setVisibleLaws(prevVisible => prevVisible + 4);
    };
    useEffect(() => {
        setSortedCardData(cardData);
    }, []);

    const renderContent = () => {
        let content;
        switch (activeTab) {
            case "cases":
                content = sortedCardData.slice(0, visibleCases).map(card => (
                    <Card key={card.id} {...card} />
                ));
                break;
            case "laws":
                content = relatedLawsData.slice(0, visibleLaws).map(law => (
                    <LawCard key={law.id} {...law} />
                ));
                break;
            default:
                content = [
                    ...sortedCardData.slice(0, visibleCases).map(card => (
                        <Card key={`case-${card.id}`} {...card} />
                    )),
                    ...relatedLawsData.slice(0, visibleLaws).map(law => (
                        <LawCard key={`law-${law.id}`} {...law} />
                    ))
                ];
        }
        return content;
    };
    
    const tabData = [
        { id: "all", label: "All", icon: Search },
        { id: "cases", label: "Cases", icon: BookOpen },
        { id: "laws", label: "Laws", icon: Scale },
    ];
    useEffect(() => {
        sortCards(selectedOption);
    }, [selectedOption]);

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const [isFullAnalysisOpen, setIsFullAnalysisOpen] = useState(false);
    const fullAnalysisRef = useRef(null);
    const toggleFullAnalysis = () => {
        setIsFullAnalysisOpen(!isFullAnalysisOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (fullAnalysisRef.current && !fullAnalysisRef.current.contains(event.target)) {
                setIsFullAnalysisOpen(false);
            }
        };

        if (isFullAnalysisOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isFullAnalysisOpen]);

    const handleBackToHome = () => {
        navigate('/');
    };

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

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

   

    // Sample data for charts
    const caseDistributionData = [
        { year: '2015', cases: 4 },
        { year: '2016', cases: 3 },
        { year: '2017', cases: 5 },
        { year: '2018', cases: 7 },
        { year: '2019', cases: 6 },
    ];

    const caseTypeData = [
        { name: 'Contract Disputes', value: 35 },
        { name: 'Intellectual Property', value: 25 },
        { name: 'Corporate Governance', value: 20 },
        { name: 'Bankruptcy', value: 15 },
        { name: 'Others', value: 5 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

    return (
        <div className="relative min-h-screen bg-gray-100">
            {/* Mobile Filter Toggle Button */}
            <button
                onClick={toggleFilter}
                className="fixed top-4 left-80 z-20 md:hidden bg-[#302A2A] text-white p-2 rounded-full shadow-md"
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
                    className="mb-4 px-4 py-2 bg-[#302A2A] text-white text-sm rounded-full shadow-md hover:bg-black-500 transition duration-300 ease-in-out flex items-center"
                >
                    <ArrowLeft size={16} className="mr-2" />
                    Back to AI Search
                </button>
                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-8">
                    <h2 className="text-m md:text-2xl font-bold text-[#302A2A] mb-4">Research Summary on {searchQuery}</h2>
                    <div className='relative'>
                        <TextResultBox apiResponse={apiResponse} selectedLanguage={selectedLanguage} />
                    </div>
                    <button 
    onClick={toggleFullAnalysis} 
    className="mt-4 text-[#302A2A] hover:text-brown-800 flex items-center"
>
    <Info size={18} className="mr-1" /> View Full Analysis
</button>
                </div>

                {/* Research Summary */}
                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-8">
                    <h2 className="text-xl font-bold text-[#302A2A] mb-4">Case Distribution by Year</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={caseDistributionData}>
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="cases" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Case Type Distribution Chart */}
                <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-8">
                    <h2 className="text-xl font-bold text-[#302A2A] mb-4">Case Type Distribution</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={caseTypeData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {caseTypeData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="mt-4 flex flex-wrap justify-center">
                        {caseTypeData.map((entry, index) => (
                            <div key={`legend-${index}`} className="flex items-center mr-4 mb-2">
                                <div className="w-4 h-4 mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                                <span>{entry.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Results with Tabs */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Top tabs */}
                    <div className="bg-gray-50 p-4">
                        <nav className="flex space-x-2">
                            {tabData.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        flex items-center px-4 py-2 rounded-lg font-medium text-sm
                                        transition-all duration-300 ease-in-out
                                        ${activeTab === tab.id
                                            ? "bg-white text-blue-600 shadow-md"
                                            : "text-gray-600 hover:bg-gray-200"
                                        }
                                    `}
                                >
                                    <tab.icon size={18} className={`mr-2 ${activeTab === tab.id ? "text-blue-600" : "text-gray-400"}`} />
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content area */}
                    <div className="p-4 md:p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">
                                {tabData.find(tab => tab.id === activeTab)?.label} Results
                            </h2>
                            <div className="flex items-center space-x-4">
                                {/* View mode toggle */}
                                <div className="flex bg-gray-100 rounded-lg p-1">
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`p-1 rounded ${viewMode === "list" ? "bg-white shadow-sm" : "text-gray-500"}`}
                                        aria-label="List view"
                                    >
                                        <List size={20} />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`p-1 rounded ${viewMode === "grid" ? "bg-white shadow-sm" : "text-gray-500"}`}
                                        aria-label="Grid view"
                                    >
                                        <Grid size={20} />
                                    </button>
                                </div>

                                {/* Sort dropdown */}
                                <div className="relative">
                                    <select
                                        value={selectedOption}
                                        onChange={handleChange}
                                        className="appearance-none bg-gray-100 border border-gray-300 text-gray-700 py-2 pl-3 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-sm"
                                    >
                                        <option value="" disabled hidden>Sort</option>
                                        <option value="Recent">Recent</option>
                                        <option value="Most popular">Most popular</option>
                                        <option value="Alphabetical">Alphabetical</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <ChevronDown size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" : "space-y-4 md:space-y-6"}>
                        {renderContent()}
                    </div>


                        {/* Load More button */}
                        <div className="text-center mt-6 space-y-4">
                        {(activeTab === "all" || activeTab === "cases") && visibleCases < sortedCardData.length && (
                            <button
                                onClick={loadMoreCases}
                                className="bg-[#302A2A] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                            >
                                Load More Cases
                            </button>
                        )}
                        {(activeTab === "all" || activeTab === "laws") && visibleLaws < relatedLawsData.length && (
                            <button
                                onClick={loadMoreLaws}
                                className="bg-[#302A2A] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded ml-4"
                            >
                                Load More Laws
                            </button>
                        )}
                    </div>
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
            {isFullAnalysisOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
                    <div 
                        ref={fullAnalysisRef} 
                        className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-4xl h-[80vh] sm:h-[85vh] md:h-[90vh] overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl sm:text-2xl font-bold text-[#302A2A]">Full Analysis</h2>
                            <button onClick={toggleFullAnalysis} className="text-gray-500 hover:text-gray-700">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="overflow-y-auto h-[calc(100%-3rem)]">
                            <FullAnalysis apiResponse={apiResponse} selectedLanguage={selectedLanguage} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchResults;