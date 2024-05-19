import { z } from "zod";

import { useNewTransaction } from "@/features/transactions/hooks/use-new-transaction";
import { useCreateTransaction } from "@/features/transactions/api/use-create-transaction";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { insertTransactionSchema } from "@/db/schema";

const formSchema = insertTransactionSchema.omit({ id: true });

type FormValues = z.input<typeof formSchema>;

export default function NewTransactionSheet() {
  const { isOpen, onClose } = useNewTransaction();

  const mutation = useCreateTransaction();

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Transaction</SheetTitle>
          <SheetDescription>Add a new transaction.</SheetDescription>
        </SheetHeader>
        <p>TODO: Transaction Form</p>
      </SheetContent>
    </Sheet>
  );
}
