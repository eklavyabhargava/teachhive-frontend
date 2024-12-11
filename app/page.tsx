"use client";

import { Modal } from "react-bootstrap";
import AuthModal from "@/components/AuthModal";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Features from "@/components/Features";
import HeroBlock from "@/components/HeroBlock";

export default function Home() {
  const { showAuthModal } = useSelector((state: RootState) => state.user);

  return (
    <div className="flex relative flex-col items-center justify-center w-full h-full">
      <div className="w-full absolute h-[100vh]">
        <HeroBlock />
      </div>
      <div className="relative top-[100vh] flex flex-col items-center mx-auto w-[90vw] h-full">
        <Features />
      </div>
      <Modal show={showAuthModal} backdrop="static" keyboard={false} centered>
        <AuthModal />
      </Modal>
    </div>
  );
}
