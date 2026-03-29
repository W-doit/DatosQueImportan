import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("disclaimer_dismissed");
    if (!dismissed) setOpen(true);
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("disclaimer_dismissed", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border bg-card">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Aviso importante</DialogTitle>
          <DialogDescription className="text-sm leading-relaxed pt-2">
            Este panel agrega datos públicos procedentes de fuentes oficiales (INE, BOE, Poder Judicial).
            La información presentada tiene carácter meramente informativo y{" "}
            <strong>no constituye asesoramiento legal</strong>.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleAccept} className="w-full sm:w-auto">
            Entendido
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
