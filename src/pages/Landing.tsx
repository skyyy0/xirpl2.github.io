/**
 * DEFACE — XI RPL 2 (SMKN 1 Rembang)
 * Halaman beranda diganti layar hitam polos + teks putih "HI, IAM SKY".
 * CTF resmi (penyelenggara Indonesia), organizer mengizinkan perubahan halaman.
 */
export default function Landing() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "#000000",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(2.75rem, 11vw, 9rem)",
          letterSpacing: "0.03em",
          lineHeight: 1.1,
          textAlign: "center",
          userSelect: "none",
        }}
      >
        HI, IAM SKY
      </h1>
    </div>
  );
}
