export default function NotFound() {
  return (
    <main className="resume-page">
      <div className="resume-shell">
        <header className="resume-header">
          <div>
            <h1>Page not found</h1>
            <p className="resume-role">The page you requested does not exist.</p>
          </div>
          <div className="resume-actions">
            <a className="resume-action resume-action-primary" href="/">
              Back to home
            </a>
          </div>
        </header>
      </div>
    </main>
  );
}
