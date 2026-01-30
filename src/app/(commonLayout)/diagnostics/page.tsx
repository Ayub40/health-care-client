import React from 'react';

const diagnosticCenters = [
    {
        id: 1,
        name: "LifeCare Diagnostic Center",
        location: "Dhanmondi, Dhaka",
        services: ["Blood Test", "X-Ray", "MRI"],
        contact: "+8801700000000",
        rating: 4.8
    },
    {
        id: 2,
        name: "Popular Medical Services",
        location: "Chittagong City",
        services: ["ECG", "Ultrasonography", "CT Scan"],
        contact: "+8801800000000",
        rating: 4.5
    },
    {
        id: 3,
        name: "City Health Lab",
        location: "Sylhet Sadar",
        services: ["Dental X-ray", "Health Checkup", "Biopsy"],
        contact: "+8801900000000",
        rating: 4.2
    }
];

export default function DiagnosticsPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
                    Available Diagnostics Services
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {diagnosticCenters.map((center) => (
                        <div key={center.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <h2 className="text-xl font-semibold text-gray-800">{center.name}</h2>
                                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded">
                                        ★ {center.rating}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1 mb-4">📍 {center.location}</p>

                                <div className="mb-4">
                                    <h3 className="text-sm font-medium text-gray-700 mb-2">Services:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {center.services.map((service, index) => (
                                            <span key={index} className="bg-gray-100 text-gray-600 text-[11px] px-2 py-1 rounded-full border border-gray-200">
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t pt-4 flex items-center justify-between">
                                    <span className="text-sm font-medium text-blue-600">{center.contact}</span>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-colors">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}