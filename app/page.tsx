'use client';

import Categories from "./components/Categories";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import {  useSearchParams } from "next/navigation";
import Properties from "./properties/page";
import PropertyModal from "./components/modals/PropertyModal";
import { getUserId } from "./lib/actions";
import {  Suspense, useState } from "react";
import SearchModal from "./components/modals/SearchModal";

function Home() {
  let params = useSearchParams();
  const selectedForm = params.get('selectedForm');
  const [userId, setUserId] = useState<string | undefined>('');

  getUserId().then((id) => {
    setUserId(id);
  })
 
  return (
    <Suspense>
    <main className="flex min-h-screen flex-col px-3">
      <Properties />
      {selectedForm === 'login' && <LoginModal />}
      {selectedForm === 'signup' && <SignupModal />}
      {selectedForm === 'property' && <PropertyModal userId={userId} />}
      {selectedForm === 'search' && <SearchModal />}
    </main>
    </Suspense>
   
  );
}

export default Home;
