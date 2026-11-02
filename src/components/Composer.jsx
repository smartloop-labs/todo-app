import './Composer.css'

const PRIORITIES = [
  { key: 'low', label: 'Low' },
  { key: 'medium', label: 'Medium' },
  { key: 'high', label: 'High' },
]

function Composer({
  draft,
  setDraft,
  priority,
  setPriority,
  dueDate,
  setDueDate,
  fetching,
  fetchNotice,
  onAdd,
}) {
  // Enter (or Cmd/Ctrl+Enter) adds the task. Disabled while fetching.
  const handleKeyDown = (e) => {
    if (fetching) return
    if (e.key === 'Enter') {
      e.preventDefault()
      onAdd()
    }
  }

  return (
    <section className="composer">
      <div className={`composer-field ${fetching ? 'is-loading' : ''}`}>
        <input
          type="text"
          className="composer-input"
          placeholder="Paste a GitHub issue or pull request link to get started"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={fetching}
        />
        <button
          type="button"
          className="composer-add"
          onClick={onAdd}
          disabled={!draft.trim() || fetching}
          aria-label="Add task"
          title={fetching ? 'Fetching…' : 'Add task (⏎)'}
        >
          {fetching ? (
            <span className="composer-add-label">Fetching…</span>
          ) : (
            <svg
              className="composer-add-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 5v6a4 4 0 0 1-4 4H4" />
              <polyline points="9 10 4 15 9 20" />
            </svg>
          )}
        </button>
      </div>
      <div className="composer-options">
        <div className="priority-group" role="group" aria-label="Priority">
          {PRIORITIES.map((p) => (
            <button
              key={p.key}
              type="button"
              className={`priority-chip priority-${p.key} ${
                priority === p.key ? 'active' : ''
              }`}
              onClick={() => setPriority(p.key)}
              aria-pressed={priority === p.key}
            >
              <span className="priority-bars" aria-hidden="true">
                <span className="priority-bar" />
                <span className="priority-bar" />
                <span className="priority-bar" />
              </span>
              {p.label}
            </button>
          ))}
        </div>
        <input
          type="date"
          className="date-input"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          aria-label="Due date"
        />
      </div>
      {fetchNotice && (
        <p className="composer-notice" role="status">
          {fetchNotice}
        </p>
      )}
    </section>
  )
}

export default Composer
