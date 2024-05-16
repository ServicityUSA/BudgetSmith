"use client";

import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { Button } from "@/components/ui/button";

export default function Home() {
  const onOpen = useNewAccount((state) => state.onOpen);

  return (
    <div>
      <Button onClick={onOpen}>Add Account</Button>
    </div>
  );
}
