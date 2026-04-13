import type { NextPageContext } from "next";

type ErrorProps = {
  statusCode?: number;
};

function ErrorPage({ statusCode }: ErrorProps) {
  return (
    <main className="resume-page">
      <div className="resume-shell">
        <header className="resume-header">
          <div>
            <h1>{statusCode ? `Error ${statusCode}` : "Application error"}</h1>
            <p className="resume-role">Something went wrong while loading this page.</p>
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

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 500;
  return { statusCode };
};

export default ErrorPage;
