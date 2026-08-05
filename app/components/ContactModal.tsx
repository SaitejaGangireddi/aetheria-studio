"use client";

import React from "react";
import ProposalModal from "./ProposalModal";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return <ProposalModal isOpen={isOpen} onClose={onClose} />;
}
