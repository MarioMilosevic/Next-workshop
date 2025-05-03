import { ReactNode } from "react";

type CommunityType = {
  children: ReactNode;
};

export default function CommunityLayout({ children }: CommunityType) {
  return (
    <div className="border border-white flex flex-col items-center justify-center min-h-screen">
      <p>Community layout</p>
      {children}
    </div>
  );
}
