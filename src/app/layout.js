import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";

// Configure Figtree font
const figtree = Figtree({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-figtree", // CSS custom property for Tailwind
});

// Configure Urbanist for headings
const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"], // Adjust weights as needed
    variable: "--font-urbanist",
});

export const metadata = {
    title: "Fametonic",
    description: "A platform for new beginnings",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${figtree.variable} ${urbanist.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
