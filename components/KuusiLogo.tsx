import Logo from "/kuusi-logo.svg";

interface Size {
  x: number;
  y: number;
}

export const KuusiLogo = ({ x, y }: Size) => (
  <img
    width={x}
    height={y}
    src={Logo}
    alt="Kuusi Logo"
  />
);
