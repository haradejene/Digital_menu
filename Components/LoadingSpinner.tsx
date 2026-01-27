export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="
          w-12 h-12
          rounded-full
          border-4
          border-yellow-400/30
          border-t-yellow-400
          animate-spin
        "
      />
    </div>
  );
}
