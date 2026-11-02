import './TodoStats.css'

const WINDOW_DAYS = 14

function dayKey(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

// Build a count-per-day series for the last `days` days (oldest -> newest).
// Slots without a matching completion in `todos` stay at 0, so the line is
// continuous across the whole window.
function buildSeries(todos, days) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const series = []
  for (let i = 0; i < days; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() - (days - 1 - i))
    series.push({ date: d, key: dayKey(d), count: 0 })
  }
  const lookup = new Map(series.map((p) => [p.key, p]))
  for (const todo of todos) {
    if (!todo.completed || !todo.completedAt) continue
    const slot = lookup.get(todo.completedAt)
    if (slot) slot.count += 1
  }
  return series
}

function ProgressLineGraph({ series }) {
  const width = 320
  const height = 100
  const padding = { top: 10, right: 14, bottom: 22, left: 26 }
  const innerW = width - padding.left - padding.right
  const innerH = height - padding.top - padding.bottom
  const maxCount = Math.max(1, ...series.map((p) => p.count))
  const stepX = series.length > 1 ? innerW / (series.length - 1) : 0

  const points = series.map((p, i) => ({
    ...p,
    x: padding.left + i * stepX,
    y: padding.top + innerH - (p.count / maxCount) * innerH,
  }))

  const linePath = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(' ')

  const yTicks = [0, Math.ceil(maxCount / 2), maxCount]
  const xLabelIndices =
    series.length <= 4
      ? series.map((_, i) => i)
      : [0, Math.floor((series.length - 1) / 2), series.length - 1]

  return (
    <div className="progress-line-graph">
      <svg
        className="progress-line-svg"
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={`Tasks completed per day over the last ${WINDOW_DAYS} days`}
      >
        {yTicks.map((tick, i) => {
          const y = padding.top + innerH - (tick / maxCount) * innerH
          return (
            <g key={`y-${i}`}>
              <line
                x1={padding.left}
                x2={padding.left + innerW}
                y1={y}
                y2={y}
                className="grid-line"
              />
              <text
                x={padding.left - 6}
                y={y + 3}
                className="axis-label"
                textAnchor="end"
              >
                {tick}
              </text>
            </g>
          )
        })}

        {linePath && (
          <path
            d={linePath}
            className="line-stroke"
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ stroke: '#6366f1', strokeWidth: 2 }}
          />
        )}

        {xLabelIndices.map((i) => {
          const p = points[i]
          if (!p) return null
          const label = p.date.toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
          })
          return (
            <text
              key={`x-${i}`}
              x={p.x}
              y={height - 6}
              className="axis-label"
              textAnchor="middle"
            >
              {label}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

function TodoStats({ todos = [], total, completed, active }) {
  const series = buildSeries(todos, WINDOW_DAYS)
  const peak = series.reduce((max, p) => Math.max(max, p.count), 0)

  return (
    <div className="todo-stats">
      <div className="stats-graph">
        <div className="stats-graph-head">
          <span className="stats-graph-title">
            {`Completions · last ${WINDOW_DAYS} days`}
          </span>
          <span className="stats-graph-peak">{`Peak ${peak}/day`}</span>
        </div>
        <ProgressLineGraph series={series} />
      </div>

      <div className="stats-list">
        <div className="stat-row">
          <span className="stat-label">Total</span>
          <span className="stat-value">{total}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Active</span>
          <span className="stat-value">{active}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Completed</span>
          <span className="stat-value">{completed}</span>
        </div>
      </div>
    </div>
  )
}

export default TodoStats
