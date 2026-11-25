import type { Crypto } from './types/crypto'

interface CryptoCardProps {
  crypto: Crypto
  onSelect: (crypto: Crypto) => void
}

function CryptoCard({ crypto, onSelect }: CryptoCardProps) {
  return (
    <article className="crypto-card">
      <h3>{crypto.name}</h3>
      <p className="crypto-price">
        ${crypto.price.toLocaleString('en-US')} USD
      </p>
      <button
        type="button"
        className="primary-button"
        onClick={() => onSelect(crypto)}
        style={{ marginTop: '1rem', padding: '0.4rem 0.8rem', cursor: 'pointer' }}
      >
        Ver detalle
      </button>
    </article>
  )
}

export default CryptoCard