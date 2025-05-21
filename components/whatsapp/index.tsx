"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Whatsapp() {
  return (
    <div dir="rtl">
      <FloatingWhatsApp
        phoneNumber="+905368192660"
        accountName="جواهر"
        statusMessage="متصل"
        chatMessage="كل قطعة نُقدّمها تمزج بين بريق الذهب وسحر الألماس، لتُكمل إطلالتك بلمسة من التميّز."
        avatar="/photo/favicon.ico"
        chatboxHeight={380}
      />
    </div>
  );
}
