'use client';
import { useId, useState } from 'react';
import { ArrowUpRight, Plus, Search, X } from 'lucide-react';
import { faqCategories, spanishFaqs } from './questions';

const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
export function SpanishFAQBrowser() {
  const [category, setCategory] = useState<string>('Todas las preguntas');
  const [search, setSearch] = useState('');
  const searchId = useId();
  const query = normalize(search.trim());
  const filtered = spanishFaqs.filter(
    (item) =>
      (category === 'Todas las preguntas' || item.category === category) &&
      normalize(`${item.q} ${item.a}`).includes(query),
  );
  function reset() {
    setCategory('Todas las preguntas');
    setSearch('');
  }
  return (
    <section id="respuestas" className="ef-browser">
      <div className="container ef-browser-grid">
        <aside className="ef-categories">
          <span className="es-kicker">ENCUENTRA TU RESPUESTA</span>
          <div role="group" aria-label="Categorías de preguntas">
            {faqCategories.map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={category === value}
                onClick={() => setCategory(value)}
              >
                {value}
                <span>
                  {value === 'Todas las preguntas'
                    ? spanishFaqs.length
                    : spanishFaqs.filter((item) => item.category === value).length}
                </span>
              </button>
            ))}
          </div>
          <p>Todo lo que necesitas saber sobre tus clases, en un solo lugar.</p>
        </aside>
        <div>
          <label className="ef-search-label" htmlFor={searchId}>
            ¿QUÉ TE GUSTARÍA SABER?
          </label>
          <div className="ef-search">
            <Search size={19} aria-hidden="true" />
            <input
              id={searchId}
              type="search"
              autoComplete="off"
              placeholder="Prueba con “horario”, “nivel” o “pago”"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            {search ? (
              <button type="button" aria-label="Borrar búsqueda" onClick={() => setSearch('')}>
                <X size={17} />
              </button>
            ) : null}
          </div>
          <div className="ef-results">
            <span role="status" aria-live="polite" aria-atomic="true">
              {filtered.length} {filtered.length === 1 ? 'respuesta para ti' : 'respuestas para ti'}
            </span>
            {category !== 'Todas las preguntas' || search ? (
              <button type="button" onClick={reset}>
                Ver todas <X size={13} />
              </button>
            ) : null}
          </div>
          {filtered.length ? (
            <div className="ef-answers">
              {filtered.map((item) => (
                <details key={item.id} id={`pregunta-${item.id}`}>
                  <summary>
                    <span className="ef-question-category">{item.category}</span>
                    <span className="ef-question-title">{item.q}</span>
                    <Plus size={21} />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          ) : (
            <div className="ef-empty">
              <h2>Busquemos de otra manera.</h2>
              <p>Prueba con otra palabra o vuelve a todas las preguntas.</p>
              <button type="button" className="button" onClick={reset}>
                Ver todas las respuestas <ArrowUpRight size={17} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
