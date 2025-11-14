interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  text?: string;
  subtext?: string;
  aspectRatio?: string;
}

export default function ImagePlaceholder({
  width = '100%',
  height = '400px',
  text = 'Image Placeholder',
  subtext,
  aspectRatio
}: ImagePlaceholderProps) {
  const containerStyle: React.CSSProperties = {
    width,
    height: aspectRatio ? 'auto' : height,
    aspectRatio: aspectRatio,
    backgroundColor: '#e5e7eb',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed #9ca3af',
    position: 'relative',
    overflow: 'hidden'
  };

  return (
    <div style={containerStyle}>
      <svg
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6b7280"
        strokeWidth="2"
        style={{ marginBottom: '1rem' }}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
      <p style={{
        color: '#6b7280',
        fontSize: '1rem',
        fontWeight: '600',
        marginBottom: subtext ? '0.5rem' : 0,
        textAlign: 'center',
        padding: '0 1rem'
      }}>
        {text}
      </p>
      {subtext && (
        <p style={{
          color: '#9ca3af',
          fontSize: '0.875rem',
          textAlign: 'center',
          padding: '0 1rem'
        }}>
          {subtext}
        </p>
      )}
    </div>
  );
}
