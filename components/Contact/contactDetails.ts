import { SvgType } from "@/lib/types";
import emailIcon from "@/public/icons/emailIcon.svg";
import phoneIcon from "@/public/icons/phoneOutlineIcon.svg";
import locationIcon from "@/public/icons/locationOutlineIcon.svg";

const EMAIL_ADDRESS = "dev@aidanlowson.com";
const PHONE_NUMBER = "+44 7460 302 161";
const LOCATION = "Oxfordshire, UK";

interface IContactDetail {
  icon: SvgType;
  label: string;
  value: string;
  href?: string;
}

export const contactDetails: Readonly<IContactDetail>[] = [
  {
    icon: emailIcon,
    label: "Email",
    value: EMAIL_ADDRESS,
    href: `mailto:${EMAIL_ADDRESS}`,
  },
  {
    icon: phoneIcon,
    label: "Phone",
    value: PHONE_NUMBER,
    href: "tel:+447460302161",
  },
  {
    icon: locationIcon,
    label: "Location",
    value: LOCATION,
  },
];
