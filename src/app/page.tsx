"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProfileSection from "@/components/sections/ProfileSection";
import LinksSection from "@/components/sections/LinksSection";
import Gallery from "@/components/sections/Gallery";

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
        {activeSection === "gallery" && <Gallery />}
      </main>
    </div>
  );
}
