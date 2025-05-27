import React from "react";
import Image from "next/image";

export default function Icon() {
  return (
    <div>
      <Image
        width={50}
        height={50}
        src="/logo/logo-v-600x600.png"
        alt=""
      />
    </div>
  );
}
