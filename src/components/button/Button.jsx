export default function Button({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-3 py-2 bg-[#9ACBD0] text-[#006A71]  border border-[#48A6A7] rounded-xl hover:bg-[#48A6A7]"
    >
      {children}
    </button>
  );
}
