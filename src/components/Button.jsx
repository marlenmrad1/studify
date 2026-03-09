export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
    >
      {children}
    </button>
  );
}