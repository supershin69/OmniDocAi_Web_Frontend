import { Link } from "react-router";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" to="/" aria-label="Voxora home">
      <span className="bg-white text-primary p-2 rounded-sm text-xl font-semibold mr-2">
        O
      </span>
      {!compact && <span className="text-xl font-semibold">OmniDocAi</span>}
    </Link>
  );
}
