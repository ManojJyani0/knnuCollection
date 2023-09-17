import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Wellcome to Knuu Collection",
  description:
    "An Online Store For राजस्थानी पोशाक कस्टम डिजाइन पंजाबी सूट बागड़ी पोशाक & ओढ़ना",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div
    className="bg-pink-200 h-screen flex flex-col justify-center items-center w-full"
  >   
    <div className="bg-pink-100 h-2/3 rounded-2xl mx-1 w-full">
    {children}
    </div>
    
    </div>;
}
