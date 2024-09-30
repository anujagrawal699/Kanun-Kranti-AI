import React, { useState } from 'react';
import ministryOfLaw from '../../assets/ministry_of_law.jpeg';
import { Menu, Search } from 'lucide-react';

const HistoryBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dummyData = {
        today: [
            { id: 458, title: 'Case 458' },
            { id: 69, title: 'Case 69' },
            { id: 778, title: 'Case 778' },
            { id: 32, title: 'Case 32' },
        ],
        yesterday: [
            { id: 'tutorial', title: 'Case Tutorial' },
        ],
        previous30Days: [
            { id: 9999, title: 'Case 99' },
        ],
        january: [
            { id: 'ongoing', title: 'Ongoing Case' },
        ],
    };

    return (
        <>
            {/* Mobile dropdown toggle */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#302A2A] text-white rounded-md"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Menu size={24} />
            </button>

            {/* HistoryBar content */}
            <div className={`
                bg-[#302A2A] text-white
                fixed top-0 left-0 h-screen w-64
                transform transition-transform duration-300 ease-in-out
                overflow-y-auto
                md:translate-x-0
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="p-4 mt-16 md:mt-4">
                    <img
                        src={ministryOfLaw}
                        alt="Ministry of Law"
                        className="h-20 w-70 rounded-lg mb-3 mx-auto"
                    />
                    <div className="mb-6">
                        <h2 className="flex items-center text-sm font-semibold mb-2">
                            <Search size={16} className="mr-2" />
                            Explore KanunKranti
                        </h2>
                    </div>
                    
                    <div className="space-y-5">
    <div>
        <h3 className="text-xs font-semibold mb-1 text-gray-500 uppercase">Today</h3>
        <ul className="space-y-1">
            {dummyData.today.map(item => (
                <li key={item.id} className="text-xs text-white-500 hover:text-white hover:bg-gray-700 px-2 py-1 rounded transition-colors duration-150 ease-in-out">{item.title}</li>
            ))}
        </ul>
    </div>
    <div>
        <h3 className="text-xs font-semibold mb-1 text-gray-500 uppercase">Yesterday</h3>
        <ul className="space-y-1">
            {dummyData.yesterday.map(item => (
                <li key={item.id} className="text-xs text-white-500 hover:text-white hover:bg-gray-700 px-2 py-1 rounded transition-colors duration-150 ease-in-out">{item.title}</li>
            ))}
        </ul>
    </div>
    <div>
        <h3 className="text-xs font-semibold mb-1 text-gray-500 uppercase">Previous 30 Days</h3>
        <ul className="space-y-1">
            {dummyData.previous30Days.map(item => (
                <li key={item.id} className="text-xs text-white-500 hover:text-white hover:bg-gray-700 px-2 py-1 rounded transition-colors duration-150 ease-in-out">{item.title}</li>
            ))}
        </ul>
    </div>
    <div>
        <h3 className="text-xs font-semibold mb-1 text-gray-500 uppercase">September</h3>
        <ul className="space-y-1">
            {dummyData.january.map(item => (
                <li key={item.id} className="text-xs text-white-500 hover:text-white hover:bg-gray-700 px-2 py-1 rounded transition-colors duration-150 ease-in-out">{item.title}</li>
            ))}
        </ul>
    </div>
</div>
                </div>
            </div>
        </>
    );
};

export default HistoryBar;