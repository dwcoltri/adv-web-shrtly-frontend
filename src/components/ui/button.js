export const Button = ({ children, className = '', ...props }) => (
  <button
    {...props}
    className={`bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition ${className}`.trim()}
  >
    {children}
  </button>
);