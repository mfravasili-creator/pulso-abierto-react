import './index.css'
import { useState } from 'react'
import type { Crypto } from './types/crypto'

import QueryControls from './QueryControls'
import StatusMessage from './StatusMessage'
import CryptoList from './CryptoList'

import './App.css'

const initialCryptos: Crypto[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'btc',
    price: 95000,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'eth',
    price: 3500,
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'sol',
    price: 180,
  },
]

function App() {
  const [cryptos] = useState<Crypto[]>(initialCryptos)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState('usd')
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null)

  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function handleSearch() {
    console.log('Búsqueda:', searchTerm)
    console.log('Moneda seleccionada:', selectedCurrency)
  }

  function handleSelectCrypto(crypto: Crypto) {
    setSelectedCrypto(crypto)
  }

  return (
    <>
      <header className="site-header">
        <div className="container header-content">
          <a href="/" className="brand" aria-label="Pulso Abierto, inicio">
            <span className="brand-icon" aria-hidden="true">PA</span>
            <span>Pulso Abierto</span>
          </a>

          <p className="header-label">
            Cotizaciones del mercado cripto
          </p>
        </div>
      </header>

      <main className="container main-content">
        <section className="intro" aria-labelledby="main-title">
          <p className="eyebrow">MERCADO CRIPTO</p>

          <h1 id="main-title">
            El mercado cripto,
            <br />
            en un solo lugar.
          </h1>

          <p className="intro-text">
            Consultá los precios de Bitcoin, Ethereum y Solana
            expresados en dólares estadounidenses.
          </p>
        </section>

        <QueryControls
          searchTerm={searchTerm}
          selectedCurrency={selectedCurrency}
          onSearchChange={setSearchTerm}
          onCurrencyChange={setSelectedCurrency}
          onSearch={handleSearch}
        />

        <section className="results-section" aria-labelledby="results-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MERCADO ACTUAL</p>
              <h2 id="results-title">Cotizaciones disponibles</h2>
            </div>

            <span className="currency-label">
              USD · Dólares
            </span>
          </div>
        </section>

        <StatusMessage
          message="Cotizaciones de demostración."
          type="success"
        />

        <CryptoList
          cryptos={filteredCryptos}
          onSelect={handleSelectCrypto}
        />

        {selectedCrypto && (
          <div className="query-panel" role="status">
            <h2>Criptomoneda seleccionada</h2>
            <p>{selectedCrypto.name}</p>
            <p>
              Precio: ${selectedCrypto.price.toLocaleString('en-US')}
            </p>

            <button
              type="button"
              className="secondary-button"
              onClick={() => setSelectedCrypto(null)}
            >
              Cerrar detalles
            </button>
          </div>
        )}
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Pulso Abierto.</p>
          <p>Datos proporcionados por CoinGecko.</p>
        </div>
      </footer>
    </>
  )
}
export default App
