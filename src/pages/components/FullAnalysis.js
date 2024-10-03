import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import ReactMarkdown from 'react-markdown';

const FullAnalysis = ({ apiResponse, selectedLanguage }) => {
  // Extract the text content from the API response
  const getResponseText = () => {
    if (!apiResponse || !apiResponse.candidates || apiResponse.candidates.length === 0) {
      return "No analysis available.";
    }
    return apiResponse.candidates[0].content.parts[0].text || "No text content available.";
  };

  const responseText = getResponseText();

  // Sample data for charts (replace with actual data from API response when available)
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

  const courtDistributionData = [
    { name: 'Supreme Court', value: 30 },
    { name: 'High Courts', value: 45 },
    { name: 'District Courts', value: 25 },
  ];

  const legalTrendData = [
    { year: 2015, trend: 20 },
    { year: 2016, trend: 25 },
    { year: 2017, trend: 30 },
    { year: 2018, trend: 40 },
    { year: 2019, trend: 35 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-[#302A2A] mb-4">Detailed Analysis</h2>
        <p className="text-gray-600"> <ReactMarkdown>{responseText}</ReactMarkdown></p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#302A2A] mb-3">Case Distribution by Year</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={caseDistributionData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cases" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#302A2A] mb-3">Case Type Distribution</h3>
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
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#302A2A] mb-3">Court Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={courtDistributionData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {courtDistributionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#302A2A] mb-3">Legal Trend Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={legalTrendData}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="trend" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#302A2A] mb-3">Key Findings</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Increase in Commercial Disputes:</span> There has been a 15% increase in commercial disputes over the past five years, with contract-related issues being the most prevalent.
          </li>
          <li>
            <span className="font-semibold">Rise in Arbitration:</span> The use of arbitration as a dispute resolution mechanism has grown by 30% since 2018, indicating a shift towards alternative dispute resolution methods.
          </li>
          <li>
            <span className="font-semibold">Emerging Tech-related Cases:</span> Cases involving digital technologies, such as blockchain and artificial intelligence, have seen a 50% year-over-year increase, reflecting the growing importance of technology in commercial transactions.
          </li>
          <li>
            <span className="font-semibold">International Commercial Courts:</span> The establishment of international commercial courts in major cities has led to a 25% increase in cross-border dispute resolutions within the country.
          </li>
          <li>
            <span className="font-semibold">Expedited Case Disposal:</span> The implementation of fast-track procedures has resulted in a 20% reduction in the average time taken to resolve commercial disputes.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#302A2A] mb-3">Recommendations</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>
            <span className="font-semibold">Enhance ADR Mechanisms:</span> Strengthen alternative dispute resolution infrastructure, including online dispute resolution platforms, to cater to the growing preference for out-of-court settlements.
          </li>
          <li>
            <span className="font-semibold">Specialized Technology Courts:</span> Establish specialized courts or divisions to handle technology-related commercial disputes, ensuring judges have the necessary expertise in emerging tech fields.
          </li>
          <li>
            <span className="font-semibold">Continuous Legal Education:</span> Implement mandatory continuing legal education programs for lawyers and judges focusing on evolving commercial laws and technological advancements.
          </li>
          <li>
            <span className="font-semibold">Streamline Cross-border Procedures:</span> Develop standardized procedures and guidelines for handling international commercial disputes to attract more cross-border cases and establish the country as a preferred dispute resolution hub.
          </li>
          <li>
            <span className="font-semibold">Invest in Court Technology:</span> Allocate resources to modernize court systems with advanced case management software and virtual hearing capabilities to further reduce case disposal times.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FullAnalysis;