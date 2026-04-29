import Logo from "@/assets/kuusi-logo.svg";

interface Size {
  x: number;
  y: number;
}

export function KuusiLogo({ x, y }: Size) {
  return (
    <img
      width={x}
      height={y}
      src={Logo}
      alt="React Logo"
    />
  );
}
