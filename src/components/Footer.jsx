import './Footer.css'

function Footer({ shown, total }) {
  return (
    <footer className="app-footer">
      <span className="footer-text">
        {shown} of {total} shown
      </span>
      <span className="powered-by">
        Powered by{' '}
        <a
          className="powered-by-link"
          href="https://github.com/smartloop-ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          Smartloop
        </a>
      </span>
    </footer>
  )
}

export default Footer
