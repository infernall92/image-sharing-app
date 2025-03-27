export default function Button({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-3 py-2 bg-amber-400 text-black  border border-amber-600 rounded-xl hover:bg-amber-500"
    >
      {children}
    </button>
  );
}
