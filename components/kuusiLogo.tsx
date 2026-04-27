import Logo from "@/assets/kuusi-logo.svg";

interface Size { x: number; y: number }

export function KuusiLogo(size: Size) {
  return (
    <img
      width={size.x}
      height={size.y}
      src={Logo}
      alt="React Logo"
    />
  );
}
