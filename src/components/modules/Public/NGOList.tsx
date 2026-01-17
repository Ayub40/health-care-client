"use client";
import React, { useState } from "react";
import { Heart, MapPin, Phone, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const ALL_NGOS = [
    {
        id: 1,
        name: "LifeCare Foundation",
        category: "Health & Medical",
        location: "Dhaka, Bangladesh",
        phone: "+880 1234 567890",
        description: "Providing free medical checkups and medicines to underprivileged families.",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&h=250&fit=crop",
    },
    {
        id: 2,
        name: "Save The Future",
        category: "Education & Blood",
        location: "Chittagong, Bangladesh",
        phone: "+880 1987 654321",
        description: "Specialized in emergency blood donation and child education programs.",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=400&h=250&fit=crop",
    },
    {
        id: 3,
        name: "Green Earth Relief",
        category: "Disaster Relief",
        location: "Sylhet, Bangladesh",
        phone: "+880 1765 432109",
        description: "Helping families affected by floods with food, shelter, and basic needs.",
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=400&h=250&fit=crop",
    },
];

export default function NGOList() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredNGOs = ALL_NGOS.filter((ngo) =>
        ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ngo.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-slate-50 min-h-screen py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-[1200px] mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-blue-600 font-semibold">
                            <Heart className="size-5 fill-blue-600" />
                            <span>Verified NGO Partners</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Find NGO Support Near You
                        </h2>
                        <p className="text-gray-600 max-w-lg">
                            Search through our verified list of NGOs providing healthcare, blood, and emergency support.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-[350px]">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
                        <Input
                            type="text"
                            placeholder="Search by name or category..."
                            className="pl-10 h-12 rounded-xl border-gray-200 shadow-sm focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* NGO Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNGOs.length > 0 ? (
                        filteredNGOs.map((ngo) => (
                            <div
                                key={ngo.id}
                                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                            >
                                {/* Image */}
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={ngo.image}
                                        alt={ngo.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                                            {ngo.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-800">{ngo.name}</h3>
                                    <p className="text-gray-600 text-sm line-clamp-2">{ngo.description}</p>

                                    <div className="space-y-2 pt-2">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <MapPin className="size-4" />
                                            {ngo.location}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Phone className="size-4" />
                                            {ngo.phone}
                                        </div>
                                    </div>

                                    <Link href={`/ngos/${ngo.id}`} className="block pt-4">
                                        <Button className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 gap-2">
                                            View Details
                                            <ArrowRight className="size-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-gray-500 text-lg">No NGOs found matching your search.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}