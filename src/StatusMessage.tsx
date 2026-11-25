interface StatusMessageProps {
  message: string
  type: 'loading' | 'error' | 'success' | 'empty'
  onRetry?: () => void
}

function StatusMessage({
  message,
  type,
  onRetry,
}: StatusMessageProps) {
  return (
    <div
      className={`status-message status-${type}`}
      role={type === 'error' ? 'alert' : 'status'}
    >
      <p>{message}</p>

      {type === 'error' && onRetry && (
        <button
          type="button"
          className="secondary-button"
          onClick={onRetry}
        >
          Reintentar
        </button>
      )}
    </div>
  )
}

export default StatusMessage