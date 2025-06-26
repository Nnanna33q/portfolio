import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Contact from "../components/contact";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";


export default function ContactPage() {
    return (
        <main>
            <Navbar currentPage={'Contact'} />
            <div className="" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Contact />
                <Footer />
            </div>
        </main>
    );
}

const root = createRoot(document.querySelector('#root'));
root.render(
    <StrictMode>
        <ContactPage />
    </StrictMode>
)