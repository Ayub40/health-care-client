import { Heart, Globe, Users } from "lucide-react";
import NGOList from "@/components/modules/Public/NGOList";

export const metadata = {
    title: "NGOs | PH Doc Healthcare Support",
    description: "Find and connect with verified NGOs for healthcare and social support.",
};

export default function NGOPage() {
    return (
        <main className="min-h-screen bg-white mx-auto container">
            {/* Mini Hero Section for NGOs */}
            <section className="bg-blue-600 py-16 text-white rounded-xl mt-1">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            NGO Network & Social Support
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl">
                            Find verified NGOs near you through PH Doc. We bring together organizations working in blood donation, free medical camps, and emergency relief into one platform.
                        </p>

                        <div className="flex flex-wrap gap-6 mt-8">
                            <div className="flex items-center gap-2">
                                <div className="bg-blue-500 p-2 rounded-lg">
                                    <Heart className="size-5 text-white" />
                                </div>
                                <span>Blood Donation</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-blue-500 p-2 rounded-lg">
                                    <Users className="size-5 text-white" />
                                </div>
                                <span>Free Checkups</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="bg-blue-500 p-2 rounded-lg">
                                    <Globe className="size-5 text-white" />
                                </div>
                                <span>Emergency Relief</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main NGO Listing Component */}
            <section className="py-8">
                <NGOList />
            </section>

            {/* Trust Banner */}
            <section className="container mx-auto px-4 mb-20">
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Want to list your NGO on our platform?
                        </h2>
                        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                            Join our network and reach thousands of people who need your services. Contact us today to start the registration process.
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all">
                            Register Your NGO
                        </button>
                    </div>
                    {/* Decorative Background Circle */}
                    <div className="absolute -top-24 -right-24 size-64 bg-blue-600/20 rounded-full blur-3xl"></div>
                </div>
            </section>
        </main>
    );
}