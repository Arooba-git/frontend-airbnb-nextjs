'use client';

import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import {  useSearchParams } from "next/navigation";
import Properties from "./properties/page";
import PropertyModal from "./components/modals/PropertyModal";
import SearchModal from "./components/modals/SearchModal";
import { Suspense } from "react";

function Home() {
  let params = useSearchParams();
  const selectedForm = params.get('selectedForm');
 
  return (
      <main className="flex min-h-screen flex-col px-3">
        <Properties />
        {selectedForm === 'login' && <LoginModal />}
        {selectedForm === 'signup' && <SignupModal />}
        {selectedForm === 'property' && <PropertyModal />}
        {selectedForm === 'search' && <SearchModal />}
      </main>
  );
}

export default Home;
