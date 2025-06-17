export const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-md shadow ${className}`.trim()}>{children}</div>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`.trim()}>{children}</div>
);
