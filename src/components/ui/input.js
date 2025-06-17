export const Input = ({ className = '', ...props }) => (
  <input
    {...props}
    className={`border border-gray-300 rounded-md p-2 w-full ${className}`.trim()}
  />
);