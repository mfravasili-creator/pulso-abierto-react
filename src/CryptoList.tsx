import type { Crypto } from './types/crypto'
import CryptoCard from './CryptoCard'

interface CryptoListProps {
  cryptos: Crypto[]
  onSelect: (crypto: Crypto) => void
}

const EMPTY_LIST_MESSAGE = 'No se encontraron criptomonedas.'

function CryptoList({ cryptos, onSelect }: CryptoListProps) {
  return (
    <div className="crypto-grid" aria-live="polite" aria-busy="false">
      {cryptos.length === 0 ? (
        <p className="empty-message">{EMPTY_LIST_MESSAGE}</p>
      ) : (
        cryptos.map((crypto) => (
          <CryptoCard
            key={crypto.id}
            crypto={crypto}
            onSelect={onSelect}
          />
        ))
      )}
    </div>
  )
}

export default CryptoList