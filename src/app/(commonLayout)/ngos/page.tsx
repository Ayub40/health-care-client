import React from "react";
import { Heart, Globe, Users } from "lucide-react";
import NGOList from "@/components/modules/Public/NGOList";
import { SparkleIcon } from "@/assets/icons/SparkleIcon";

export const metadata = {
    title: "NGOs | PH Doc Healthcare Support",
    description: "Find and connect with verified NGOs for healthcare and social support.",
};

export default function NGOPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* NGO Hero Section with Hero-style Gradient */}
            <section className="w-full relative overflow-hidden rounded-b-[40px]">
                {/* Radial Gradient Background matching the main Hero */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: "radial-gradient(125% 125% at 50% 90%, #fff 30%, #155DFC 100%)",
                    }}
                />

                <div className="relative z-10 container mx-auto px-4 py-20 md:px-8 lg:px-16">
                    <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-sm mb-6">
                            <SparkleIcon />
                            <span className="text-[11.9px] font-medium text-blue-700 uppercase tracking-wider">
                                Verified Social Support
                            </span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-2 mb-6">
                            <h1 className="text-[40px] md:text-[51px] font-bold leading-tight text-slate-900">
                                NGO Network &
                            </h1>
                            <h1 className="text-[40px] md:text-[51px] font-bold leading-tight text-slate-900">
                                Social Support
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="max-w-2xl text-[17px] leading-7 text-gray-600 mb-10">
                            Find verified NGOs near you through PH Doc. We bring together organizations
                            working in blood donation, free medical camps, and emergency relief
                            into one seamless platform.
                        </p>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-sm border border-blue-100">
                                <div className="bg-blue-600 p-2 rounded-lg">
                                    <Heart className="size-5 text-white" />
                                </div>
                                <span className="font-semibold text-slate-800">Blood Donation</span>
                            </div>

                            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-sm border border-blue-100">
                                <div className="bg-blue-600 p-2 rounded-lg">
                                    <Users className="size-5 text-white" />
                                </div>
                                <span className="font-semibold text-slate-800">Free Checkups</span>
                            </div>

                            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-sm border border-blue-100">
                                <div className="bg-blue-600 p-2 rounded-lg">
                                    <Globe className="size-5 text-white" />
                                </div>
                                <span className="font-semibold text-slate-800">Emergency Relief</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main NGO Listing Component */}
            <section className="py-12 bg-white">
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
                            Join our network and reach thousands of people who need your services.
                            Contact us today to start the registration process.
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all">
                            Register Your NGO
                        </button>
                    </div>
                    <div className="absolute -top-24 -right-24 size-64 bg-blue-600/20 rounded-full blur-3xl"></div>
                </div>
            </section>
        </main>
    );
}