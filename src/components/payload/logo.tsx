import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        className="h-20 object-contain dark:hidden"
        src="/logo/logo-viyaga-bold-light.png"
        alt="Logo"
        width={330}
        height={100}
      />
      <Image
        className="h-20 object-contain hidden dark:block"
        src="/logo/logo-viyaga-bold-light.png"
        alt="Logo"
        width={162}
        height={50}
      />
    </div>
  );
}
