import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function NewAccountSheet() {
  const isOpen = useNewAccount((state) => state.isOpen);
  const onClose = useNewAccount((state) => state.onClose);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a new account to track your transactions.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
