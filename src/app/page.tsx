"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProfileSection from "@/components/sections/ProfileSection";
import LinksSection from "@/components/sections/LinksSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState<
    "profile" | "links" | "gallery"
  >("profile");

  return (
    <div className="min-h-screen">
      <Header
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <main>
        {activeSection === "profile" && <ProfileSection />}
        {activeSection === "links" && <LinksSection />}
        {activeSection === "gallery" && (
          <section className="max-w-6xl mx-auto p-4">
            <p
              className="text-8xl text-left ml-8 mt-16 mb-16 font-thin
              bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl"
            >
              Gallery
            </p>
            <div className="text-center text-gray-600 text-xl mt-16">
              ギャラリーは準備中です...
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
