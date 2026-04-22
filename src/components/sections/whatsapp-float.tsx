import { TropIcon } from "@/components/trop-icon";
import { CONTACT } from "@/lib/content";

export function WhatsAppFloat() {
  return (
    <a
      href={CONTACT.whatsappReserva}
      target="_blank"
      rel="noreferrer"
      className="wa-float"
      aria-label="WhatsApp"
    >
      <TropIcon name="whatsapp" size={28} />
    </a>
  );
}
