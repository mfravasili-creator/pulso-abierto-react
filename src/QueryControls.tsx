interface QueryControlsProps {
  searchTerm: string
  selectedCurrency: string
  onSearchChange: (value: string) => void
  onCurrencyChange: (value: string) => void
  onSearch: () => void
}

function QueryControls({
  searchTerm,
  selectedCurrency,
  onSearchChange,
  onCurrencyChange,
  onSearch,
}: QueryControlsProps) {
  return (
    <section className="query-panel" aria-labelledby="query-title">
      <h2 id="query-title">Consultar cotizaciones</h2>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          onSearch()
        }}
      >
        <div>
          <label htmlFor="crypto-search">
            Buscar criptomoneda
          </label>
        </div>

        <input
          id="crypto-search"
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Ejemplo: Bitcoin"
        />

        <div>
          <label htmlFor="currency-select">
            Moneda
          </label>
        </div>

        <select
          id="currency-select"
          value={selectedCurrency}
          onChange={(event) => onCurrencyChange(event.target.value)}
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="ars">ARS</option>
        </select>

        <button type="submit" className="primary-button">
          Consultar
        </button>
      </form>
    </section>
  )
}

export default QueryControls